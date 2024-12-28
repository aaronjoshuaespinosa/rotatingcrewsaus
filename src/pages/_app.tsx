import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rotating Crew Aus</title>
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Rotating Crew Aus" />
        <meta
          property="og:description"
          content="Rotating Crew Aus delivers expert engineering solutions in oil and gas, mining, and construction with more than 16 years of experience."
        />
        <meta
          property="og:url"
          content="https://rotatingcrewsaus.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/metadata-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rotating Crew Aus Preview" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rotating Crew Aus" />
        <meta
          name="twitter:description"
          content="Rotating Crew Aus delivers expert engineering solutions in oil and gas, mining, and construction with more than 16 years of experience."
        />
        <meta name="twitter:image" content="/metadata-image.png" />

        {/* Additional Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
