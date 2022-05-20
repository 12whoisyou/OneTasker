import Head from "next/head";
import Footer from "../components/footer.js";
import React, { useState, useEffect } from "react";

let myCounter = 0;
let timeout = null;
export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => clearInterval(timeout);
  }, []);

  myCounter = counter;
  const startInterval = () => {
    timeout = setInterval(() => {
      setCounter((counter) => counter + 1);
      console.log("counter: ", myCounter); // counter always return 0 but myCounter the updated value
      if (myCounter === 10) clearInterval(timeout);
    }, 1000);
  };

  return (
    <div>
      <Head>
        <title>OneTask</title>
        <meta name="description" content="Pomodoro App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button onClick={startInterval}>{counter}</button>
      </main>

      <Footer />
    </div>
  );
}
