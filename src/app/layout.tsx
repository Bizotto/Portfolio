import { Titillium_Web } from 'next/font/google';
import './globals.css';

const titillium = Titillium_Web({
  weight: '400',
  subsets: ['latin-ext', 'latin'],
});

export const metadata = {
  title: 'Portfolio',
  description: 'Nicolas Ian Portfolio',
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
    </html>
  );
}
