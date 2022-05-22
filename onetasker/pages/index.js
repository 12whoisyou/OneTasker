import Head from "next/head";
import Footer from "../components/Footer.js";
import Timer from "../components/Timer.js";
import Header from "../components/Header.js";
import React from "react";

export default function Home() {
  return (
    <div className="bg-amber-100 overscroll-none">
      <Head>
        <title>OneTask</title>
        <meta name="description" content="OneTasker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-10 py-2">
        <Header />
        <Timer />
      </main>

      <Footer />
    </div>
  );
}
