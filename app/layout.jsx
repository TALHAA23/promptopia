"use client";
import "@styles/globals.css";
import Nav from "@components/Nav";
import { useState, useEffect } from "react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
// export const metadata = {
//   title: "promptopia",
//   description: "Discover & Share AI Prompts",
// };
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
