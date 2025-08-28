import { NextResponse } from "next/server";

interface DexalotSwapPair {
  base_env: string;
  quote_env: string;
  base_chainid: number;
  quote_chainid: number;
  pair: string;
  subnetpair: string;
  base: string;
  quote: string;
  subnetbase: string;
  subnetquote: string;
  baseaddress: string;
  quoteaddress: string;
  base_evmdecimals: number;
  quote_evmdecimals: number;
  allowswap: boolean;
  is_crosschain: boolean;
  cross_pair_swap_path: any[] | null;
}

type DexalotSwapPairsResponse = DexalotSwapPair[];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        {
          error: "Token parameter is required",
        },
        {
          status: 400,
        }
      );
    }

    const response = await fetch("https://api.dexalot.com/api/rfq/swapPairs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch swap pairs from Dexalot API",
        },
        {
          status: response.status,
        }
      );
    }

    const data: DexalotSwapPairsResponse = await response.json();

    // Filter pairs that contain the requested token (loose comparison)
    const tokenLower = token.toLowerCase();
    const filteredPairs = data.filter((pair) => {
      const baseMatch = pair.base.toLowerCase().includes(tokenLower) || 
                       pair.subnetbase.toLowerCase().includes(tokenLower);
      const quoteMatch = pair.quote.toLowerCase().includes(tokenLower) || 
                        pair.subnetquote.toLowerCase().includes(tokenLower);
      const pairMatch = pair.pair.toLowerCase().includes(tokenLower) ||
                       pair.subnetpair.toLowerCase().includes(tokenLower);
      
      return baseMatch || quoteMatch || pairMatch;
    });

    if (filteredPairs.length === 0) {
      return NextResponse.json(
        {
          error: `No pairs found for token: ${token}`,
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(filteredPairs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get asset pair information" },
      { status: 500 }
    );
  }
}
