import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Header from "./Headers";
import "./globls.css"
import Footer from "./Footer";
import ClientWrapper from "@/app/components/ClientWrapper";
// import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "IV",
  description: "Industrial Ventures",
};



//👇 Configure our font object
// const openSans = Open_Sans({
//   subsets: ['latin'],
//   display: 'swap',
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body >
      <AppRouterCacheProvider>
             
    <ClientWrapper>
    <Header/>
        {children}
        <Footer/>

    </ClientWrapper>
              
        
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
