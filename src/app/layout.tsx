'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AuthProvider} from "@/app/context/AuthContext";
import {TaskContextProvider} from "@/app/context/TaskContext";
import {Nav} from "@/app/components/Nav";
import {Footer} from "@/app/components/Footer";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {client} from "@/app/supabase/client";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <TaskContextProvider>
          <Nav/>
          <div className="container">
            {children}
          </div>
          <Footer/>
        </TaskContextProvider>
      </AuthProvider>
      </body>
    </html>
  );
}
