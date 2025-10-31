import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ViewTransition } from 'react';
import './globals.css';

const playFair = localFont({
  src: [
    {
      path: '../public/fonts/playfair-display-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/playfair-display-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/playfair-display-latin-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Stoic',
  description: 'Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ViewTransition>
        <body
          className={`${playFair.className} flex min-h-screen flex-col antialiased`}
        >
          <Header />
          <main className='mx-10 my-8 flex-1'>{children}</main>
          <Footer />
        </body>
      </ViewTransition>
    </html>
  );
}
