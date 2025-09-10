import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { ethers } from "ethers";
import { PORTFOLIO_ABI } from "@/lib/constants";

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
  chartData?: {
    title: string;
    description: string;
    chartType: "bar";
    dataFormat: "currency";
    metricLabels: string[];
    dataPoints: Array<[string, number]>;
  };
}

const DEXALOT_CONTRACT_ADDRESS = "0xa5C079C1986E2335d83fA2d7282e162958e515D5";
const DEXALOT_RPC_ENDPOINT = "https://subnets.avax.network/dexalot/mainnet/rpc";

function bytes32ToString(bytes32Value: string): string {
  return ethers.utils.parseBytes32String(bytes32Value);
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
        { error: "Owner address is required. Make sure wallet is connected" },
        { status: 400 }
      );
    }

    if (!ethers.utils.isAddress(evmAddress)) {
      return NextResponse.json(
        { error: "Invalid owner address format" },
        { status: 400 }
      );
    }

    const provider = new ethers.providers.StaticJsonRpcProvider(
      "https://subnets.avax.network/dexalot/mainnet/rpc",
      {
        chainId: 432204,
        name: "dexalot-mainnet",
      }
    );

    const contract = new ethers.Contract(
      DEXALOT_CONTRACT_ADDRESS,
      PORTFOLIO_ABI,
      provider
    );

    // const version = await contract.VERSION();
    // console.log("Dexalot contract version:", version);

    // const [symbols, totals, availables] = await contract.getBalances(
    //   evmAddress,
    //   0 // page 0 to get all asset balances
    // );

    // const balances: DexalotPortfolioBalance[] = [];
    // const chartDataPoints: Array<[string, number]> = [];

    // for (let i = 0; i < symbols.length; i++) {
    //   if (
    //     symbols[i] ===
    //       "0x0000000000000000000000000000000000000000000000000000000000000000" ||
    //     totals[i].isZero()
    //   ) {
    //     break;
    //   }

    //   const symbolStr = bytes32ToString(symbols[i]);
    //   const totalFormatted = ethers.utils.formatEther(totals[i]);
    //   const availableFormatted = ethers.utils.formatEther(availables[i]);

    //   balances.push({
    //     symbol: symbolStr,
    //     total: totalFormatted,
    //     available: availableFormatted,
    //   });

    //   if (parseFloat(totalFormatted) > 0) {
    //     chartDataPoints.push([symbolStr, parseFloat(totalFormatted)]);
    //   }
    // }

    // const response: DexalotPortfolioResponse = {
    //   balances,
    //   chartData: {
    //     title: "Portfolio Holdings",
    //     description: "Token balances in your Dexalot portfolio",
    //     chartType: "bar",
    //     dataFormat: "currency",
    //     metricLabels: ["Token", "Balance"],
    //     dataPoints: chartDataPoints,
    //   },
    // };

    const response: DexalotPortfolioResponse = {
      balances: [
        {
          symbol: "AVAX",
          total: "10.5",
          available: "8.0",
        },
        {
          symbol: "ETH",
          total: "2.0",
          available: "1.5",
        },
      ],
      chartData: {
        title: "Portfolio Holdings",
        description: "Token balances in your Dexalot portfolio",
        chartType: "bar",
        dataFormat: "currency",
        metricLabels: ["Token", "Balance"],
        dataPoints: [
          ["AVAX", 10.5],
          ["ETH", 2.0],
        ],
      },
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
