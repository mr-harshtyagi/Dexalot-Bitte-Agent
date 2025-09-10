# Dexalot Portfolio Data Integration Report

## 1. Existing Tools

- **get-portfolio (Bitte primitive tool)**

  - Fetches all EVM token balances for a wallet.
  - Mirrors "Wallet Balance" in Dexalot Dashboard.

- **get-dexalot-portfolio (custom tool in development)**
  - Goal: Align with Dexalot's own portfolio data display.
  - Current test: Signed endpoint (not suitable for prod):
    ```bash
    curl --location 'https://api.dexalot-test.com/privapi/signed/portfoliobalance?symbol=ALOT' \
    --header 'x-signature: [ADDRESS:SIGNATURE]'
    ```
  - Limitations:
    - Requires signed string "dexalot"
    - Asset must be queried one-by-one
    - Docs explicitly warn against using for trading or real portfolio queries

## 2. Target Data Structure

Desired unified portfolio response:

```json
{
  "traderaddress": "0xce96e120420dc73394491ab941d3bc6168d6c93e",
  "symbol": "ALOT",
  "currentbal": "970"
}
```
