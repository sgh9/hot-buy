"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-tailwind/react";
import AppContextProvider from "./context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>

          <ThemeProvider>
              <NavBar/>
              {/* <SearchBar /> */}
              <main className="container mx-auto bg-slate-100 py-5">
                {children}
              </main>
              <Footer/>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
