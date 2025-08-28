import { headers } from "next/headers";
import { NextResponse } from "next/server";

type DepositTransactionPayload = {
  to: string;
  data: string;
  value: string;
  chainId: number;
};

type DepositRequest = {
  token: string;
  amount: string;
  bridge?: number;
};

const DEXALOT_PORTFOLIO_MAIN_CONTRACT =
  "0x1FD108cf42A59c635bD4703b8DbC8a741ff834Be";
const AVALANCHE_C_CHAIN_ID = 43114;

function encodeDepositTokenCall(
  from: string,
  symbol: string,
  quantity: string,
  bridge: number = 0
): string {
  const symbolBytes32 = symbol.padEnd(32, "\0");
  const symbolHex = Buffer.from(symbolBytes32, "utf8")
    .toString("hex")
    .padEnd(64, "0");

  const functionSelector = "0xab875026";

  const encodedParams = [
    from.slice(2).padStart(64, "0"),
    symbolHex,
    BigInt(quantity).toString(16).padStart(64, "0"),
    bridge.toString(16).padStart(64, "0"),
  ].join("");

  return functionSelector + encodedParams;
}

export async function GET(request: Request) {
  try {
    const mbMetadataHeader = (await headers()).get("mb-metadata");
    const mbMetadata: { evmAddress: string } =
      mbMetadataHeader && JSON.parse(mbMetadataHeader);

    const { evmAddress } = mbMetadata || {};

    if (!evmAddress) {
      return NextResponse.json(
        {
          error: "Unable to find user data in the request",
        },
        {
          status: 401,
        }
      );
    }

    const body: DepositRequest = await request.json();
    const { token, amount, bridge = 2 } = body;

    if (!token || !amount) {
      return NextResponse.json(
        {
          error: "Token and amount are required",
        },
        {
          status: 400,
        }
      );
    }

    if (BigInt(amount) <= 0) {
      return NextResponse.json(
        {
          error: "Amount must be greater than 0",
        },
        {
          status: 400,
        }
      );
    }

    const data = encodeDepositTokenCall(
      evmAddress,
      token.toUpperCase(),
      amount,
      bridge
    );

    const transactionPayload: DepositTransactionPayload = {
      to: DEXALOT_PORTFOLIO_MAIN_CONTRACT,
      data,
      value: "0",
      chainId: AVALANCHE_C_CHAIN_ID,
    };

    console.log("Created deposit transaction payload for:", {
      user: evmAddress,
      token: token.toUpperCase(),
      amount,
      bridge,
    });

    return NextResponse.json(transactionPayload, { status: 200 });
  } catch (error) {
    console.error("Error creating deposit transaction:", error);
    return NextResponse.json(
      { error: "Failed to create deposit transaction" },
      { status: 500 }
    );
  }
}
