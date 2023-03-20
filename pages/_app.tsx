import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/components/locales";

import { Layout } from "@/components/layout";
import FacebookChat from "@/components/facebook-chat";
import Head from "next/head";
import GoogleAnalytics from "@/components/google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BunnyTB</title>
        <meta name="description" content="BunnyTB trading bot platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BunnyTB_logo.png" />
      </Head>
      <GoogleAnalytics />
      <FacebookChat />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
