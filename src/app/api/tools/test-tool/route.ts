import { TestToolResponse } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Sample response matching TestToolResponse interface
    const response = {
      AVAX: { token: "AVAX", quantity: 1.5, price: 27.76 },
      ETH: { token: "ETH", quantity: 0.01, price: 4600 },
    };

    const data: TestToolResponse = response;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get all active pairs" },
      { status: 500 }
    );
  }
}
