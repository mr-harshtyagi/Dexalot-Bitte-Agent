## Dexalot Bitte AI agent

Dexalot is a dual-chain, non-custodial central limit order book DEX that uses an Avalanche subnet for trading and the Avalanche C-Chain for deposits and withdrawals. This proposal aims to build an AI agent on top of the Dexalot platform.

The Dexalot AI Agent is an OpenAPI-defined agent built within the Bitte Runtime to enable seamless, intelligent trading on the Dexalot decentralized exchange. It abstracts complex on-chain actions like order placement and portfolio management into simple API calls, allowing users to interact with Dexalot through a standardized and programmable interface which also supports MCP (Model Context Protocol) out of the box.
The purpose behind the Bitte chat adoption is to enable users to interact with Dexalot using natural language by abstracting trading operations into an OpenAPI-based AI agent.

## Agent Links

- [Server URL](https://dexalot-bitte-agent.vercel.app/)
- [AI Plugin](https://dexalot-bitte-agent.vercel.app/.well-known/ai-plugin.json)
- [Bitte Playground Agent Link](https://bitte.ai/agents/dexalot-bitte-agent.vercel.app)

## MVP Goals

- Onboarding: Enable users to deposit funds from any chain, discover a pair, and execute their first trade via chat
- Retention: Drive repeat usage with personalized market nudges and daily portfolio snapshots that lift WAU/MAU.
- Support: Solve user issues inside the agent by translating on-chain errors into plain language and auto-escalating unresolved cases.

## Scope

The scope of this agent includes a set of tools that are used to perform operations like enter and cancel orders, retrieving asset balances, track orders, and querying market data related to trading pairs on the Dexalot DEX. It will leverage Dexalot’s documentation including APIs, and synergistic tools from Bitte’s tool library.

The implementation will be divided in two phases. Phase 1 focuses on user onboarding through multichain deposits to Dexalot 1 and driving DeX usage through personalized agentic responses for all users.
Later Phase 2 will focus on agent based trading and order management.

- This agent is built using bitte-ai/agent-sdk to standardize agent behavior and communication. Phase 1 Implemented tools are as follows:

  - `get-wallet-balances`
  - `get-dexalot-portfolio`

- Each tool is registered in the AI plugin manifest at : `/api/ai-plugin`

## License

This project is licensed under the [MIT License](./LICENSE).

## 🤝 Contributing

We welcome community contributions! Please check the [CONTRIBUTING.md](./CONTRIBUTING.md) for more information on how to get involved.
