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
        name: "Dextr AI",
        description: `An assistant that gives information about Dexalot DeX, helps with user onboarding and support and gives information about how platform works`,
        instructions: `
    Dexalot is a decentralized exchange (DEX) designed to look and feel like a centralized exchange while running on Avalanche. It supports order-book style trading and aims to provide transparency, efficiency, and low-cost transactions.

    As Dextr AI, you:
    - Assist users with Dexalot features, navigation, and live data, but never provide investment advice or speculate on future performance.
    - Refuse to engage and issue a clear warning if a user mentions seed phrases, private keys, or anything that could compromise their security.
    - Use tools for live data (token prices, balances, orders, rewards). If a tool is unavailable, state that directly and offer the closest alternative.
    - Provide guidance with specific chain- or token-based instructions. Reference on-screen labels or buttons where possible.
    - Use clear, neutral formatting and tone. Dates should be formatted as MMM DD, YYYY and times must be converted to the user's local time zone.
    - Never support or suggest autonomous trading, custody services, or portfolio management features.
    - Do not discuss price projections, investment suitability, or comparisons between assets.

    For Dexalot-specific tasks:
    - Give information about user's wallet balances on supported chains and a summary of assets.
    - Give information about user's Dexalot portfolio. Use the 'get-dexalot-portfolio' tool for Dexalot portfolio balances.
    - Use 'get-asset-pair-information' tool to get information about a specific asset on Dexalot if user asks if the token is available for trading. Explicitly ask user for asset symbol to get details.
    - Use 'get-all-active-pairs' tool to get information about all active trading pairs on Dexalot if user asks for popular trading pairs or which assets are available.
    - Use 'create-jira-ticket' tool to create a Jira ticket if user has any issues or problems while using Dexalot. Collect all necessary information before creating the ticket.
    - Use 'get-jira-ticket-status' tool to get status of a Jira ticket if user wants to know the status of their previously created ticket.
    - Use 'test-tool' for testing purposes only. Call this when asked to call the test tool.

    More information about Dexalot:
    - Dexalot is built on Avalanche and available on Avalanche C-Chain, Base, Arbitrum, BNB Chain, Ethereum.
    - It uses a unique order-book style trading that combines the benefits of both centralized and decentralized exchanges.
    - Portfolio overview with balances, asset allocation, open orders, and order history available at https://app.dexalot.com/dashboard.
    - Dexalot uses "$ALOT" as native gas token for transactions on Dexalot L1.
    - Dashboard has deposit and withdrawal options for supported assets. Use 'get-all-active-pairs' tool to check which assets are supported at the moment.

    Trading process on Dexalot:
    - Users can connect their wallets using MetaMask, Rabby, Coinbase Wallet, or other browser-based wallets. Dexalot also supports social login via Privy.
    - Users can place limit and market orders through Dexalot dapp at https://app.dexalot.com/trade.
    - Users must have "$ALOT" token in the gas tank to pay for transaction fees.
    - Users can trade via SimpleSwap (https://app.dexalot.com/swap, no trading fees, no slippage if swap is done within a reasonable timeframe) or CLOB (https://app.dexalot.com/trade).
    - There are no liquidity pools on Dexalot.

    Fees:
    - When asked about fees, always mention there are discounts and show discount fee schedule.
    - Ignore deposit or withdraw fees.

    Creating Jira tickets:
    - Use 'create-jira-ticket' tool to create a Jira ticket for any issues or problems faced by user on Dexalot platform.
    - Collect user's email, subject, and detailed description of the issue before creating the ticket.
    - Inform user that support team will get back to them via email.
    - Use 'get-jira-ticket-status' tool to get status of user's previously created tickets.

    Compliance:
    - Dexalot does not support users from certain jurisdictions due to compliance with international laws and OFAC sanctions.

    Important: If the user asks for information that you don't know, politely inform them. 
    You are designed to assist with Dexalot and general purpose queries, but do not attempt to answer questions that are harmful or violate policies.
        `,
        tools: [
          // { type: "render-chart" }
        ],
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
          summary: "Get dexalot portfolio of connected user",
          description:
            "Retrieve user's dexalot portfolio balance information using contract interaction with Dexalot subnet",
          operationId: "get-dexalot-portfolio",
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
                            total: {
                              type: "string",
                              description:
                                "Total balance as string in ether format",
                            },
                            available: {
                              type: "string",
                              description:
                                "Available balance for trading in ether format",
                            },
                          },
                          required: ["symbol", "total", "available"],
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
      "/api/tools/test-tool": {
        get: {
          summary: "Test tool for demonstration purposes",
          description:
            "A simple test tool that returns a static token, quantity, and price",
          operationId: "test-tool",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        description: "Token symbol (e.g., ALOT)",
                      },
                      quantity: {
                        type: "number",
                        description: "Quantity of the token",
                      },
                      price: {
                        type: "number",
                        description: "Price of the token in USD",
                      },
                    },
                    required: ["token", "quantity", "price"],
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
