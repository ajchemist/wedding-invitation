"use client"

import { KAKAO_JS_APP_KEY } from "@/app/fixtures"
import { KakaoSDK } from "@/integrations/Kakao"

export default function Page() {
    return (
        <KakaoSDK onLoad={() => { window.Kakao.init(KAKAO_JS_APP_KEY) }}/>
    );
}