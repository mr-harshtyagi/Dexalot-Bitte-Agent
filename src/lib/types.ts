interface DexalotPair {
  base: string;
  quote: string;
  liquidityUSD: string;
  baseAddress: string;
  quoteAddress: string;
  baseDecimals: number;
  quoteDecimals: number;
}

export interface DexalotPairsResponse {
  [pairSymbol: string]: DexalotPair;
}

export interface TestToolResponse {
  [pairSymbol: string]: {
    token: string;
    quantity: number;
    price: number;
  };
}
