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
        url: PLUGIN_URL,
      },
    ],
    "x-mb": {
      // "account-id": ACCOUNT_ID,
      assistant: {
        name: "Dexalot AI Agent",
        description: `An assistant that gives information about Dexalot DeX and helps with user onboarding and gives information about how platform works.`,
        instructions: `
         Dexalot is a decentralized exchange (DEX) designed to look and feel like a centralized exchange while running on Avalanche. 
         It supports order-book style trading and aims to provide transparency, efficiency, and low-cost transactions.
        Here is what you can do as Dexalot AI Agent:
        - You give information about user's wallet balances on other chains and a summary of assets on supported chains.
        - You give information about user's dexalot portfolio. Use the 'get-dexalot-portfolio' tool to get information about user's dexalot portfolio balance. Then use 'render-chart' primitive tool to display portfolio chart.
        - Use 'get-all-active-pairs' tool to get information about all active trading pairs on Dexalot.
        - Use 'get-asset-pair-information' tool to get information about a specific asset on Dexalot if user asks if the token is available on platform for trading. Explicitly ask user for asset symbol to get details about the asset.
        `,
        tools: [{ type: "render-chart" }],
        image:
          "https://pbs.twimg.com/profile_images/1905272093492572160/3ilOLKT8_400x400.png",
        categories: ["DeX", "Trading", "Portfolio"],
        chainIds: [43114], // Avalanche-C Chain, Dexalot L1 subnet - 432204 [LATER For trading operations]
        version: "0.0.1",
      },
    },
    paths: {
      "/api/tools/get-dexalot-portfolio": {
        post: {
          summary: "Get dexalot portfolio of connected user",
          description:
            "Retrieve user's dexalot portfolio balance information using wallet signature authentication",
          operationId: "get-dexalot-portfolio",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    signature: {
                      type: "string",
                      description:
                        "Wallet signature in format [ADDRESS:SIGNATURE] from signing 'dexalot'",
                    },
                    symbol: {
                      type: "string",
                      description:
                        "Optional token symbol to filter results (e.g., ALOT, USDC)",
                    },
                  },
                  required: ["signature"],
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      balances: {
                        type: "array",
                        description:
                          "List of portfolio balances for each asset",
                        items: {
                          type: "object",
                          properties: {
                            symbol: {
                              type: "string",
                              description: "Asset symbol (e.g., ALOT, USDC)",
                            },
                            balance: {
                              type: "string",
                              description: "Total balance as string",
                            },
                            available: {
                              type: "string",
                              description: "Available balance for trading",
                            },
                            locked: {
                              type: "string",
                              description: "Locked balance in orders",
                            },
                          },
                          required: [
                            "symbol",
                            "balance",
                            "available",
                            "locked",
                          ],
                        },
                      },
                    },
                    required: ["balances"],
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
      "/api/tools/get-all-active-pairs": {
        get: {
          operationId: "get-all-active-pairs",
          summary: "Get all active trading pairs on Dexalot",
          description:
            "Respond with a list of all active trading pairs on Dexalot",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    description:
                      "Object containing all active trading pairs on Dexalot",
                    additionalProperties: {
                      type: "object",
                      properties: {
                        base: {
                          type: "string",
                          description: "Base asset symbol",
                        },
                        quote: {
                          type: "string",
                          description: "Quote asset symbol",
                        },
                        liquidityUSD: {
                          type: "string",
                          description: "Liquidity in USD as string",
                        },
                        baseAddress: {
                          type: "string",
                          description: "Ethereum address of base token",
                        },
                        quoteAddress: {
                          type: "string",
                          description: "Ethereum address of quote token",
                        },
                        baseDecimals: {
                          type: "integer",
                          description: "Decimal places for base token",
                        },
                        quoteDecimals: {
                          type: "integer",
                          description: "Decimal places for quote token",
                        },
                      },
                      required: [
                        "base",
                        "quote",
                        "liquidityUSD",
                        "baseAddress",
                        "quoteAddress",
                        "baseDecimals",
                        "quoteDecimals",
                      ],
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
      "/api/tools/get-asset-pair-information": {
        get: {
          operationId: "get-asset-pair-information",
          summary: "Get trading pairs for a specific asset",
          description:
            "Get all trading pairs that contain the specified token as base or quote asset",
          parameters: [
            {
              name: "token",
              in: "query",
              required: true,
              schema: {
                type: "string",
              },
              description: "The token symbol to search for (e.g., AVAX, USDC)",
            },
          ],
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    description:
                      "Array of swap pairs containing the specified token",
                    items: {
                      type: "object",
                      properties: {
                        base_env: {
                          type: "string",
                          description: "Base token environment/blockchain",
                        },
                        quote_env: {
                          type: "string",
                          description: "Quote token environment/blockchain",
                        },
                        base_chainid: {
                          type: "integer",
                          description: "Base token chain ID",
                        },
                        quote_chainid: {
                          type: "integer",
                          description: "Quote token chain ID",
                        },
                        pair: {
                          type: "string",
                          description: "Trading pair symbol",
                        },
                        subnetpair: {
                          type: "string",
                          description: "Subnet trading pair symbol",
                        },
                        base: {
                          type: "string",
                          description: "Base asset symbol",
                        },
                        quote: {
                          type: "string",
                          description: "Quote asset symbol",
                        },
                        subnetbase: {
                          type: "string",
                          description: "Subnet base asset symbol",
                        },
                        subnetquote: {
                          type: "string",
                          description: "Subnet quote asset symbol",
                        },
                        baseaddress: {
                          type: "string",
                          description: "Base token contract address",
                        },
                        quoteaddress: {
                          type: "string",
                          description: "Quote token contract address",
                        },
                        base_evmdecimals: {
                          type: "integer",
                          description: "Base token decimal places",
                        },
                        quote_evmdecimals: {
                          type: "integer",
                          description: "Quote token decimal places",
                        },
                        allowswap: {
                          type: "boolean",
                          description:
                            "Whether swapping is allowed for this pair",
                        },
                        is_crosschain: {
                          type: "boolean",
                          description: "Whether this is a cross-chain pair",
                        },
                        cross_pair_swap_path: {
                          type: "array",
                          description: "Cross-chain swap path if applicable",
                          items: {
                            type: "object",
                          },
                        },
                      },
                      required: [
                        "base_env",
                        "quote_env",
                        "base_chainid",
                        "quote_chainid",
                        "pair",
                        "subnetpair",
                        "base",
                        "quote",
                        "subnetbase",
                        "subnetquote",
                        "baseaddress",
                        "quoteaddress",
                        "base_evmdecimals",
                        "quote_evmdecimals",
                        "allowswap",
                        "is_crosschain",
                        "cross_pair_swap_path",
                      ],
                    },
                  },
                },
              },
            },
            "400": {
              description: "Bad request - missing token parameter",
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
            "404": {
              description: "No pairs found for the specified token",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        description:
                          "Error message indicating no pairs found for the token",
                      },
                    },
                  },
                },
              },
            },
            "500": {
              description: "Internal server error",
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
