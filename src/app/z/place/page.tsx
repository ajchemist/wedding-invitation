"use client";

import * as Icon from '@alchemiakr/web-components/icon';
import { HOD_KAKAO_MAP_OVERLAY_CONTENT, HOD_PLACE_ADDRESS, HOD_PLACE_ADDRESS_LEGACY, HOD_PLACE_COORD, HOD_PLACE_TEXT_NAME, HOD_PLACE_ZIP_CODE, KAKAO_JS_APP_KEY } from "@/app/fixtures";
// import { installKakaoMapSDK } from "@/utils/Kakao";
import { KakaoMapSDKLoadingContextProvider, KakaoMapSDKScript } from '@/integrations/Kakao';
import { useEffect } from "react";
import { ZBlockContainer, ZContainer } from '../layout';
import { HOD_KakaoMap } from '@/components/Place';

export default function Page() {
    const center = { lat: HOD_PLACE_COORD.lat + 0.00006, lng: HOD_PLACE_COORD.lng };

    return (
        <KakaoMapSDKLoadingContextProvider>
            <KakaoMapSDKScript jsAppKey={`${KAKAO_JS_APP_KEY}`}></KakaoMapSDKScript>
            <ZBlockContainer>
                <div className="w-full h-96">
                    <HOD_KakaoMap />
                </div>
            </ZBlockContainer>
        </KakaoMapSDKLoadingContextProvider>
    )
}