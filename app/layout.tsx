import type { Metadata } from "next";
import StoreProvider from "./context/storeContext";
import "./globals.scss";
import "modern-normalize";

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
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
