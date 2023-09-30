import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
    const userAgent = request.headers.get('User-Agent') || '';
    console.log(userAgent);
    if (userAgent.includes('kakaotalk')) {
      // 'kakaotalk' 문자열이 포함되어 있을 경우, 특정 스크립트를 포함한 HTML 응답
      return new Response('<script src="/inappbrowser.js"></script><script>openExternalBrowser(window.location.href)</script>', {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return NextResponse.next()
}