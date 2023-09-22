import '@/app/globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google'
import { GA_MEASUREMENT_ID } from '@/app/fixtures';
import { GTagScript } from '@/integrations/Google';

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: '석진 & 민하 결혼합니다',
  description: '🗓️날짜: 11월 11일 토요일 오전 11시 | 📍장소: 하우스 오브 드메르 1F 지젤홀',
}

declare global {
  interface Window {
    kakao: any;
    [key: string]: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <GTagScript gtagId={`${GA_MEASUREMENT_ID}`} />
      <body className={inter.className}>{children}</body>
    </html >
  )
}