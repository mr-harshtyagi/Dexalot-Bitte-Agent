import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Dexalot Bitte Agent",
  description:
    "An AI agent build for Dexalot DeX using Bitte AI agent framework.",
  metadataBase: new URL("https://bitte.ai/"),
  openGraph: {
    title: "Dexalot Bitte Agent",
    description:
      "An AI agent build for Dexalot DeX using Bitte AI agent framework.",
    url: "https:/bitte.ai/",
    siteName: "Dexalot Bitte Agent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Dexalot Bitte Agent</title>
        <meta
          name="description"
          content="An AI agent build for Dexalot DeX using Bitte AI agent framework."
        />
        <meta property="og:title" content="Dexalot Bitte Agent" />
        <meta
          property="og:description"
          content="An AI agent build for Dexalot DeX using Bitte AI agent framework."
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
