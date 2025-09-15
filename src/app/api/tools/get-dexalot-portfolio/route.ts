import { NextResponse } from "next/server";
import { headers } from "next/headers";
import {
  JsonRpcProvider,
  Contract,
  getBytes,
  toUtf8String,
  isAddress,
} from "ethers";
import { PORTFOLIO_ABI, TOKEN_DETAILS } from "@/lib/constants";

interface DexalotPortfolioRequest {
  owner: string; // wallet address to check portfolio for
  pageNo?: number; // page number for pagination, defaults to 0
}

interface DexalotPortfolioBalance {
  symbol: string;
  total: string;
  available: string;
}

interface DexalotPortfolioResponse {
  balances: DexalotPortfolioBalance[];
}

const RPC_URL = "https://subnets.avax.network/dexalot/mainnet/rpc";
const CHAIN_ID = 432204; // Dexalot Subnet
const NETWORK_NAME = "Dexalot Subnet";
const PORTFOLIO_SUB = "0xa5C079C1986E2335d83fA2d7282e162958e515D5";

// Decode bytes32 (trim trailing zeros)
function bytes32ToString(hex: string) {
  const bytes = getBytes(hex);
  const zeroIndex = bytes.findIndex((b) => b === 0);
  const view = zeroIndex === -1 ? bytes : bytes.slice(0, zeroIndex);
  return toUtf8String(view);
}

export async function GET() {
  try {
    const mbMetadataHeader = (await headers()).get("mb-metadata");
    const mbMetadata: { evmAddress: string } =
      mbMetadataHeader && JSON.parse(mbMetadataHeader);

    const { evmAddress } = mbMetadata || {};

    console.log("Dexalot portfolio request for address:", evmAddress);

    if (!evmAddress) {
      return NextResponse.json(
        { error: "Wallet address is required. Make sure wallet is connected" },
        { status: 400 }
      );
    }

    const provider = new JsonRpcProvider(RPC_URL, {
      name: NETWORK_NAME,
      chainId: CHAIN_ID,
    });
    const contract = new Contract(PORTFOLIO_SUB, PORTFOLIO_ABI, provider);

    const pageNo = 0; // 0 scans all tokens
    const [symbols, total, available] = await contract.getBalances(
      evmAddress,
      pageNo
    );

    const rows = symbols
      .map((s: string, i: number) => {
        const symbolString = bytes32ToString(s);
        const tokenDetail = TOKEN_DETAILS.find(token => token.symbol === symbolString);

        if (!tokenDetail) {
          return {
            symbol: symbolString,
            total: total[i].toString(),
            available: available[i].toString(),
            symbolHex: s,
          };
        }

        const divisor = BigInt(10 ** tokenDetail.decimals);
        const totalBigInt = BigInt(total[i].toString());
        const availableBigInt = BigInt(available[i].toString());

        return {
          symbol: symbolString,
          total: (Number(totalBigInt) / Number(divisor)).toString(),
          available: (Number(availableBigInt) / Number(divisor)).toString(),
          symbolHex: s,
        };
      })
      // drop placeholder/empty rows
      .filter((r: any) => r.symbolHex !== "0x0000000000000000000000000000000000000000000000000000000000000000" && r.total !== "0");

    console.log(rows);

    const response: DexalotPortfolioResponse = {
      balances: [...rows],
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching Dexalot portfolio:", error);
    return NextResponse.json(
      { error: "Failed to get portfolio balance from contract" },
      { status: 500 }
    );
  }
}
