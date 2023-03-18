import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "@/components/home-page";

export default function Home() {
  return (
    <>
      <Head>
        <title>BunnyTB</title>
        <meta name="description" content="BunnyTB trading bot platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BunnyTB_logo.png" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
