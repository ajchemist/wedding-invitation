"use client";

import * as Icon from '@alchemiakr/web-components/icon';
import { HOD_KAKAO_MAP_OVERLAY_CONTENT, HOD_PLACE_ADDRESS, HOD_PLACE_ADDRESS_LEGACY, HOD_PLACE_COORD, HOD_PLACE_TEXT_NAME, HOD_PLACE_ZIP_CODE, KAKAO_JS_APP_KEY } from "@/app/fixtures";
import { KakaoMap, KakaoSDK } from "@/integrations/Kakao";
import { useEffect } from "react";
import { ZBlockContainer, ZContainer } from '../layout';

const calendarEvent = {
    objectType: 'calendar',
    idType: 'event',
    id: '98561',
    content: {
        title: '석진 & 민하 결혼합니다',
        description: '11월 11일 토요일 오전 11시 / 하우스 오브 드메르 1F',
        imageUrl:
            'http://k.kakaocdn.net/dn/dFUqwp/bl3SUTqb2VV/VFSqyPpKUzZVVMcmotN9A0/kakaolink40_original.png',
        link: {
            webUrl: 'https://wedding-11-11.netlify.app',
            mobileWebUrl: 'https://wedding-11-11.netlify.app',
        },
    },
    // social: {
    //     sharedCount: 1000,
    // },
    buttons: [
        {
            title: '모임 주제 보기',
            link: {
                webUrl: 'https://wedding-11-11.netlify.app',
                mobileWebUrl: 'https://wedding-11-11.netlify.app',
            },
        },
    ],
};


export default function Page() {
    useEffect(() => {
    }, [])

    return (
        <>
            <KakaoSDK onLoad={() => { 
                window.Kakao.init(KAKAO_JS_APP_KEY);
            }} />
            <ZBlockContainer>
                <a onClick={() => { 
                    window.Kakao.Share.sendCustom({
                        templateId: 98561,
                        templateArgs: {
                            THU: "https://i.imgur.com/44NZJXDh.jpg",
                        }
                    }) 
                }}>anchor</a>
            </ZBlockContainer>
            <ZBlockContainer>
                <a onClick={() => { 
                    window.Kakao.Share.sendCustom({
                        templateId: 98561,
                        templateArgs: {
                            THU: "https://i.imgur.com/44NZJXDh.jpg",
                        }
                    }) 
                }}>anchor</a>
            </ZBlockContainer>
            <ZBlockContainer>
                <a onClick={() => { 
                    window.Kakao.Share.sendCustom({
                        templateId: 98561,
                        templateArgs: {
                            THU: "https://i.imgur.com/44NZJXDh.jpg",
                        }
                    }) 
                }}>anchor</a>
            </ZBlockContainer>
        </>
    )
}