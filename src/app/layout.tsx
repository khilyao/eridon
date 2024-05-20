import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "@context/storeContext";
import "./globals.scss";
import "modern-normalize";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eridon",
  description: "eridon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
