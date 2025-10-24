"use client";

import { useContext } from "react";
import { BitteWidgetChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/styles.css";
import { TestToolResponse } from "@/lib/types";

const TestToolComponent = ({ data }: { data: TestToolResponse }) => {
  return (
    <div className="table-container">
      <table className="assets-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([pairSymbol, asset]) => {
            return (
              <tr key={pairSymbol}>
                <td className="token-cell">
                  <div className="token-icon">{asset.token.charAt(0)}</div>
                  <span className="token-name">{asset.token}</span>
                </td>
                <td className="quantity-cell">{asset.quantity.toFixed(6)}</td>
                <td className="price-cell">${asset.price.toFixed(4)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <style jsx>{`
        .table-container {
          overflow-x: auto;
          border-radius: 8px;
          background-color: #0f1621;
        }

        .assets-table {
          width: 100%;
          border-collapse: collapse;
          font-family: "Inter", sans-serif;
          background-color: #0f1621;
        }

        .assets-table thead {
          background: linear-gradient(135deg, #1a2332 0%, #0f1621 100%);
        }

        .assets-table th {
          padding: 14px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 13px;
          color: #9099a5;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #2a3441;
        }

        .assets-table th:nth-child(2),
        .assets-table th:nth-child(3) {
          text-align: right;
        }

        .assets-table tbody tr {
          border-bottom: 1px solid #1e2732;
          transition: background-color 0.2s ease;
        }

        .assets-table tbody tr:hover {
          background-color: #161e2c;
        }

        .assets-table tbody tr:last-child {
          border-bottom: none;
        }

        .assets-table td {
          padding: 14px 16px;
          color: #e5e8eb;
          font-size: 14px;
        }

        .token-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .token-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
          text-transform: uppercase;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .token-name {
          font-weight: 500;
          color: #ffffff;
        }

        .quantity-cell,
        .price-cell {
          text-align: right;
          font-variant-numeric: tabular-nums;
        }

        .price-cell {
          color: #4ade80;
          font-weight: 500;
        }
      `}</style>
    </div>
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
