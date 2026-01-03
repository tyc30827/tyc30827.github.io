import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Willie Huang's Personal Page",
  description: "Willie Huang's Personal Page",
  icons: {
    icon: [
      { url: '/images/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Willie Huang's Personal Page",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
