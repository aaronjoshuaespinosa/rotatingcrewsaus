import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rotating Crew Aus</title>
        <meta
          name="Rotating Crew Aus"
          content="DefaultRotating Crew Aus delivers expert engineering solutions in oil and gas, mining, and construction with more than 16 years of experience. We specialize in innovative, efficient, and sustainable approaches across key industries. description for my Next.js app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
