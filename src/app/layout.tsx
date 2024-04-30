'use client'
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "./lib/store";
import { inter } from "./ui/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
