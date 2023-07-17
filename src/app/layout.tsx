import { Analytics } from '@vercel/analytics/react';
import { Titillium_Web } from 'next/font/google';

import './globals.css';

const titillium = Titillium_Web({
  weight: '400',
  subsets: ['latin-ext', 'latin'],
});

export const metadata = {
  title: 'Nicolas Bizotto',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${titillium.className} bg-[#1e1e1e] mt-6`}>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
