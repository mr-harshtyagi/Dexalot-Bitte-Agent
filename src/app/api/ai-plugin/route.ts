import { ACCOUNT_ID, PLUGIN_URL } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
  const pluginData = {
    openapi: "3.0.0",
    info: {
      title: "Dexalot Assistant",
      description: "API for the Dexalot Agent",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    "x-mb": {
      "account-id": ACCOUNT_ID,
      assistant: {
        name: "Dexalot AI Agent",
        description: `An assistant that gives information about Dexalot DeX and helps with user onboarding.`,
        instructions: `You give information about user's dexalot portfolio.
        You accept deposits on various chains and then bridge them to Dexalot on Avalanche-C chain using NEAR Intents `,
        tools: [{ type: "generate-evm-tx" }, { type: "sign-message" }],
        image:
          "https://pbs.twimg.com/profile_images/1905272093492572160/3ilOLKT8_400x400.png",
        categories: ["DeX", "Trading", "Portfolio"],
        chainIds: [43114], // Avalanche-C Chain, Dexalot L1 subnet - 432204 [LATER For trading operations]
        version: "0.0.1",
      },
    },
    paths: {
      "/api/tools/get-wallet-balances": {
        get: {
          summary: "get asset balances not in dexalot portfolio",
          description:
            "Respond with portfolio balance and list of all tokens on dexalot supported network for deposits and withdrawal",
          operationId: "get-wallet-balances",
          responses: {
            "200": {},
            "400": {},
            "500": {},
          },
        },
      },
      "/api/tools/get-dexalot-portfolio": {
        get: {
          summary: "get dexalot dashboard information",
          description:
            "Respond with portfolio balance and list of all tokens in user’s dexalot portfolio",
          operationId: "get-dexalot-portfolio",
          responses: {
            "200": {},
            "400": {},
            "500": {},
          },
        },
      },
    },
  };

  return NextResponse.json(pluginData);
}
