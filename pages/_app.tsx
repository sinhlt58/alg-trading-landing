import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/components/locales";

import { Layout } from "@/components/layout";
import FacebookChat from "@/components/facebook-chat";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FacebookChat />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
