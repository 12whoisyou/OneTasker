import Head from "next/head";
import Footer from "../components/Footer.js";
import Timer from "../components/Timer.js";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <Head>
        <title>OneTask</title>
        <meta name="description" content="Pomodoro App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Timer /> 
      </main>

      <Footer />
    </div>
  );
}
