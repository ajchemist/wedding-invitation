"use client"

import { KakaoSDK } from "@/integrations/Kakao"

export default function Page({ appkey }: { appkey: string }) {
    return (
        <KakaoSDK onLoad={() => { window.Kakao.init(appkey) }}/>
    );
}