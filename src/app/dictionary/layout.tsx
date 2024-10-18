import { Inter } from 'next/font/google';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto h-screen bg-white  text-black">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
