"use client";

import { useContext } from "react";
import { BitteWidgetChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/styles.css";

export default function WidgetIframePage() {
  return (
    <div style={{ background: "transparent" }}>
      <BitteWidgetChat
        agentId="dexalot-bitte-agent.vercel.app"
        apiUrl="/api/chat"
        wallet={{}}
      />
    </div>
  );
}
