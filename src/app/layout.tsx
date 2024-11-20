import "./globals.css";
import { constructMetadata } from "@/lib/metadata";

import { Syne } from 'next/font/google'
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Syne({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-YS5KNVNWL4" />
    </html>
  );
}
