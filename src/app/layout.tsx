import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '서석진 & 송민하 결혼합니다',
  description: '11월 11일 토요일 오전 11시 / 하우스 오브 드메르 1층',
}

declare global {
  interface Window {
    kakao: any;
    closeOverlay: () => void;
  }
}

const KAKAO_JS_KEY = 'a74750f9bbd999d047d1e16479e4ac33';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
