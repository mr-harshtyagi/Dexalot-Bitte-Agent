"use client";

import { useContext } from "react";
import { BitteWidgetChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/styles.css";
import { DexalotPairsResponse, TestToolResponse } from "@/lib/types";

const TestToolComponent = ({ data }: { data: TestToolResponse }) => {
  return (
    <>
      {Object.entries(data).map(([pairSymbol, asset]) => {
        const portfolioValue = (asset.quantity * asset.price).toFixed(2);

        return (
          <div className="asset-row" key={pairSymbol}>
            <div className="asset">{asset.token}</div>
            <div className="wallet-qty">{asset.quantity.toFixed(6)}</div>
            <div className="portfolio-qty">{asset.quantity.toFixed(6)}</div>
            <div className="available-qty">{asset.quantity.toFixed(6)}</div>
            <div className="price">${asset.price.toFixed(4)}</div>
            <div className="portfolio-value">${portfolioValue}</div>
            <div className="action">⋮</div>

            <style jsx>{`
              .asset-row {
                display: grid;
                grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 0.3fr;
                align-items: center;
                background-color: #0f1621;
                color: #e5e8eb;
                padding: 10px 16px;
                border-bottom: 1px solid #1e2732;
                font-family: "Inter", sans-serif;
                font-size: 14px;
              }

              .asset-row:hover {
                background-color: #161e2c;
              }

              .asset {
                display: flex;
                align-items: center;
                gap: 8px;
                font-weight: 500;
              }

              .wallet-qty,
              .portfolio-qty,
              .available-qty,
              .price,
              .portfolio-value {
                text-align: right;
              }

              .action {
                text-align: center;
                cursor: pointer;
                font-size: 18px;
                color: #9099a5;
              }

              .action:hover {
                color: #ffffff;
              }
            `}</style>
          </div>
        );
      })}
    </>
  );
};

const customComponents = [
  {
    name: "test-tool",
    component: (props: any) => <TestToolComponent data={props.data} />,
  },
];

export default function WidgetIframePage() {
  return (
    <div style={{ background: "transparent" }}>
      <BitteWidgetChat
        historyApiUrl="/api/history"
        agentId="dexalot-bitte-agent.vercel.app"
        apiUrl="/api/chat"
        wallet={{}}
        customToolComponents={customComponents}
      />
    </div>
  );
}
