import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
