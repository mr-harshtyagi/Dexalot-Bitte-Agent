import { NextResponse } from "next/server";

interface DexalotPair {
  base: string;
  quote: string;
  liquidityUSD: string;
  baseAddress: string;
  quoteAddress: string;
  baseDecimals: number;
  quoteDecimals: number;
}

interface DexalotPairsResponse {
  [pairSymbol: string]: DexalotPair;
}

export async function GET() {
  try {
    const response = await fetch("https://api.dexalot.com/api/rfq/pairs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch pairs from Dexalot API",
        },
        {
          status: response.status,
        }
      );
    }

    const data: DexalotPairsResponse = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get all active pairs" },
      { status: 500 }
    );
  }
}
