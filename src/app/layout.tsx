import '@/app/globals.css'
import { Metadata } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { DOCUMENT_DESCRIPTION, DOCUMENT_TITLE, GA_MEASUREMENT_ID } from '@/app/fixtures';
import { GTagScript } from '@/integrations/Google';

const inter = Inter({ subsets: ['latin'] });

const materialSymbols = localFont({
  variable: '--font-material-symbols', // Variable name (to reference after in CSS/styles)
  style: 'normal',
  src: '../../node_modules/material-symbols/material-symbols-outlined.woff2', // This is a reference to woff2 file from NPM package "material-symbols"
  display: 'block',
  weight: '100 400 700',
});

export const metadata: Metadata = {
  title: `${DOCUMENT_TITLE}`,
  description: `${DOCUMENT_DESCRIPTION}`,
  openGraph: {
    title: `${DOCUMENT_TITLE}`,
    description: `${DOCUMENT_DESCRIPTION}`,
    images: [
      { url: 'https://i.imgur.com/5ZDx9nD.jpg', width: 630, height: 330 }
    ]
  }
};

declare global {
  interface Window {
    kakao: any;
    [key: string]: any;
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <GTagScript gtagId={`${GA_MEASUREMENT_ID}`} />
      <body className={`${inter.className} ${materialSymbols.variable}`}>{children}</body>
    </html >
  )
}