import Head from "next/head";
import Footer from "../components/Footer.js";
import Timer from "../components/Timer.js";
import Header from "../components/Header.js";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OneTask</title>
        <meta name="description" content="Pomodoro App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Timer />
      </main>

      <Footer />
    </div>
  );
}
