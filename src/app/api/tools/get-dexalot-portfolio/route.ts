import { NextResponse } from "next/server";

interface DexalotPortfolioRequest {
  signature: string; // x-signature header value from user's wallet signature
  symbol?: string; // token symbol to filter, optional
}

interface DexalotPortfolioBalance {
  symbol: string;
  balance: string;
  available: string;
  locked: string;
}

interface DexalotPortfolioResponse {
  balances: DexalotPortfolioBalance[];
}

export async function POST(request: Request) {
  try {
    const body: DexalotPortfolioRequest = await request.json();
    const { signature, symbol } = body;

    if (!signature) {
      return NextResponse.json(
        { error: "Signature is required" },
        { status: 400 }
      );
    }

    const url = new URL("https://api.dexalot-test.com/privapi/signed/portfoliobalance");
    if (symbol) {
      url.searchParams.append("symbol", symbol);
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "x-signature": signature,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: `Failed to fetch portfolio from Dexalot API: ${response.status} ${response.statusText}`,
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data: DexalotPortfolioResponse = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching Dexalot portfolio:", error);
    return NextResponse.json(
      { error: "Failed to get portfolio balance" },
      { status: 500 }
    );
  }
}
