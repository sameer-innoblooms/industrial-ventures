import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Header from "./Headers";
import "./globls.css"
import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "IV",
  description: "Industrial Ventures",
};



//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body >
      <AppRouterCacheProvider>
        <Header/>
        {children}
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
