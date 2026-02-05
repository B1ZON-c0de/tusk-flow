import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: [ 'latin' ],
  style: [ "normal", "italic" ],
  variable: '--font-sans'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
});

export const metadata: Metadata = {
  title: {
    template: "%s – Tusk Flow",
    default: "Tusk Flow"
  },
  description: "Круто ту ду"
}

export default function RootLayout({ children }: Readonly<{
  children: ReactNode;
}>){
  return (
    <html
      lang="en"
      className={ jetbrainsMono.variable }
      suppressHydrationWarning
    >
    <body
      className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      { children }
    </ThemeProvider>
    </body>
    </html>
  );
}
