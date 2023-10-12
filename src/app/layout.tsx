import '@/app/globals.css'
import { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { DOCUMENT_DESCRIPTION_SHORT, DOCUMENT_TITLE, GA_MEASUREMENT_ID } from '@/app/fixtures';
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
  description: `${DOCUMENT_DESCRIPTION_SHORT}`,
  metadataBase: new URL('https://wedding-1111.netlify.app'),
  openGraph: {
    title: `${DOCUMENT_TITLE}`,
    description: `${DOCUMENT_DESCRIPTION_SHORT}`,
    images: [
      { url: 'https://i.imgur.com/g7UZSL1l.jpg', width: 640, height: 335 }
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