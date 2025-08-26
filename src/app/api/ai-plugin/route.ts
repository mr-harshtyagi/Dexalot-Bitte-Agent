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
        description: `An assistant that gives information about Dexalot DeX and helps with user onboarding and gives information about how platform works.`,
        instructions: `You give information about user's dexalot portfolio. Use the 'get-dexalot-portfolio' tool to get information about user's dexalot portfolio. 
        You give information about user's wallet balances on other chains and a summary of assets on supported chains.
        Use 'get-market-data' tool to get information about a specific asset on Dexalot.
        You accept deposits on various chains and then bridge them to Dexalot on Avalanche-C chain using NEAR Intents and withdraw the USDC on Avalanche-C chain to user's wallet.
        After this use 'generate-evm-tx' tool create a transaction to deposit USDC using intents to user's dexalot portfolio on Avalanche-C mainnet. Make sure selected network in wallet when using this tool is Avalanche-C chain.`,
        tools: [{ type: "generate-evm-tx" }, { type: "sign-message" }],
        image:
          "https://pbs.twimg.com/profile_images/1905272093492572160/3ilOLKT8_400x400.png",
        categories: ["DeX", "Trading", "Portfolio"],
        chainIds: [43114], // Avalanche-C Chain, Dexalot L1 subnet - 432204 [LATER For trading operations]
        version: "0.0.1",
      },
    },
    paths: {
      "/api/tools/get-dexalot-portfolio": {
        get: {
          summary: "get dexalot portfolio of connected user",
          description: "Respond with user's dexalot portfolio information",
          operationId: "get-dexalot-portfolio",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      assets: {
                        type: "array",
                        description:
                          "List of assets in the user's Dexalot portfolio with symbol and balance",
                      },
                      dexalotGasTank: {
                        type: "string",
                        description:
                          "The user's Dexalot gas tank balance in ALOT",
                      },
                    },
                  },
                },
              },
            },
            "400": {
              description: "Bad request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        description: "Error message",
                      },
                    },
                  },
                },
              },
            },
            "500": {
              description: "Error response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        description: "Error message",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/tools/get-market-data": {
        get: {
          operationId: "get-market-data",
          summary: "Get market data for a specific asset",
          description: "Respond with market data for the given asset symbol",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      btcBalance: {
                        type: "string",
                        description: "The current BTC balance of the user",
                      },
                      btcAddress: {
                        type: "string",
                        description: "The user's BTC address",
                      },
                    },
                  },
                },
              },
            },
            "400": {
              description: "Bad request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        description: "Error message",
                      },
                    },
                  },
                },
              },
            },
            "500": {
              description: "Error response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        description: "Error message",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  return NextResponse.json(pluginData);
}
