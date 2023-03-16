import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "./components/home-page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bunny Bot</title>
        <meta name="description" content="Bunny Bot landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
