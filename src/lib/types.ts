export interface TestToolResponse {
  [pairSymbol: string]: {
    token: string;
    quantity: number;
    price: number;
  };
}
