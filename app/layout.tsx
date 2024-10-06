import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "...",
    description: "...",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript />
      <body
        // className={roboto.className}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
