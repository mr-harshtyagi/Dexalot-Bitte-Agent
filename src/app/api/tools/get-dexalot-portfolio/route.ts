import { headers } from "next/headers";
import { NextResponse } from "next/server";

type DexalotAssets = {
  assets: [
    {
      assetSymbol: string;
      balance: string; // serialized bigint
    }
  ];
  dexalotGasTank: string; // serialized bigint
};

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
          status: 500,
        }
      );
    }

    console.log("Fetching Dexalot portfolio for:", evmAddress);

    return NextResponse.json(
      {
        assets: [{ assetSymbol: "USDC", balance: "10" }],
        dexalotGasTank: "100",
      } as DexalotAssets,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get balance" },
      { status: 500 }
    );
  }
}
