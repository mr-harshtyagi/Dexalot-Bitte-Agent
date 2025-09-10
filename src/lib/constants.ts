export const PORTFOLIO_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "actionName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "AddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "pair",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_param",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_oldValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "ParameterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum IPortfolio.Tx",
        name: "transaction",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "symbol",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeCharged",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "walletOther",
        type: "address",
      },
    ],
    name: "PortfolioUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "actionName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "updatedRole",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "updatedAddress",
        type: "address",
      },
    ],
    name: "RoleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PORTFOLIO_BRIDGE_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TENK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_tradePairId",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "baseSymbol",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "quoteSymbol",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "buyBookId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "sellBookId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "minTradeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTradeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "auctionPrice",
            type: "uint256",
          },
          {
            internalType: "enum ITradePairs.AuctionMode",
            name: "auctionMode",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "makerRate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "takerRate",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "baseDecimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "baseDisplayDecimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "quoteDecimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "quoteDisplayDecimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "allowedSlippagePercent",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "addOrderPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "pairPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "postOnly",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "minPostAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ITradePairs.TradePair",
        name: "_tradePair",
        type: "tuple",
      },
      {
        internalType: "enum ITradePairs.Side",
        name: "_makerSide",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_makerAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_takerAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_baseAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quoteAmount",
        type: "uint256",
      },
    ],
    name: "addExecution",
    outputs: [
      {
        internalType: "uint256",
        name: "makerFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takerFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_srcChainSymbol",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_srcChainId",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_l1Decimals",
        type: "uint8",
      },
      {
        internalType: "enum ITradePairs.AuctionMode",
        name: "_mode",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasSwapRatio",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_subnetSymbol",
        type: "bytes32",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPortfolio.Tx",
        name: "_transaction",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "adjustAvailable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "allowDeposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "assets",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
    ],
    name: "autoFill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "bridgeParams",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasSwapRatio",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "usedForGasSwap",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "checkAvailable",
    outputs: [
      {
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_from",
        type: "address",
      },
      {
        internalType: "enum IPortfolioBridge.BridgeProvider",
        name: "",
        type: "uint8",
      },
    ],
    name: "depositNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
      {
        internalType: "enum IPortfolioSub.AssetType",
        name: "assetType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pageNo",
        type: "uint256",
      },
    ],
    name: "getBalances",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "symbols",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "total",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "available",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPortfolioBridge.BridgeProvider",
        name: "_bridge",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "_dstChainListOrgChainId",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "bytes1",
        name: "_options",
        type: "bytes1",
      },
    ],
    name: "getBridgeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "bridgeFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGasStation",
    outputs: [
      {
        internalType: "contract IGasStation",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNative",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPortfolioMinter",
    outputs: [
      {
        internalType: "contract IPortfolioMinter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPortfolioSubHelper",
    outputs: [
      {
        internalType: "contract IPortfolioSubHelper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
    ],
    name: "getTokenDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "enum ITradePairs.AuctionMode",
            name: "auctionMode",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "srcChainId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "l1Decimals",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "symbolId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "sourceChainSymbol",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "isVirtual",
            type: "bool",
          },
        ],
        internalType: "struct IPortfolio.TokenDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_symbolId",
        type: "bytes32",
      },
    ],
    name: "getTokenDetailsById",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "enum ITradePairs.AuctionMode",
            name: "auctionMode",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "srcChainId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "l1Decimals",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "symbolId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "sourceChainSymbol",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "isVirtual",
            type: "bool",
          },
        ],
        internalType: "struct IPortfolio.TokenDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenList",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_native",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "_chainId",
        type: "uint32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "native",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_depositPause",
        type: "bool",
      },
    ],
    name: "pauseDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "portfolioBridge",
    outputs: [
      {
        internalType: "contract IPortfolioBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "enum IPortfolio.Tx",
            name: "transaction",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "trader",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes18",
            name: "customdata",
            type: "bytes18",
          },
        ],
        internalType: "struct IPortfolio.XFER",
        name: "_xfer",
        type: "tuple",
      },
    ],
    name: "processXFerPayload",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_srcChainSymbol",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "_srcChainId",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_subnetSymbol",
        type: "bytes32",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "_srcChainId",
        type: "uint32",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "enum ITradePairs.AuctionMode",
        name: "_mode",
        type: "uint8",
      },
    ],
    name: "setAuctionMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasSwapRatio",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_usedForGasSwap",
        type: "bool",
      },
    ],
    name: "setBridgeParam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeAddress",
        type: "address",
      },
    ],
    name: "setFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IGasStation",
        name: "_gasStation",
        type: "address",
      },
    ],
    name: "setGasStation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_l1Decimals",
        type: "uint8",
      },
    ],
    name: "setL1Decimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_portfolioBridge",
        type: "address",
      },
    ],
    name: "setPortfolioBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPortfolioMinter",
        name: "_portfolioMinter",
        type: "address",
      },
    ],
    name: "setPortfolioMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPortfolioSubHelper",
        name: "_portfolioSubHelper",
        type: "address",
      },
    ],
    name: "setPortfolioSubHelper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenDetailsMap",
    outputs: [
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "enum ITradePairs.AuctionMode",
        name: "auctionMode",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "srcChainId",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "l1Decimals",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "symbol",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "symbolId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sourceChainSymbol",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isVirtual",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenDetailsMapById",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenTotals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalNativeBurned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
    ],
    name: "transferToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
    ],
    name: "withdrawNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_to",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "enum IPortfolioBridge.BridgeProvider",
        name: "_bridge",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "_dstChainListOrgChainId",
        type: "uint32",
      },
      {
        internalType: "bytes1",
        name: "_options",
        type: "bytes1",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "enum IPortfolioBridge.BridgeProvider",
        name: "_bridge",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "_dstChainListOrgChainId",
        type: "uint32",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
