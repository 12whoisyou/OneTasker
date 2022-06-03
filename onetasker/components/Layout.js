import Head from "next/head";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-amber-100 px-3">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
