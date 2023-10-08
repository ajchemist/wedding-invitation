"use client"

import { usePathname } from "next/navigation";
import Image from "next/image";
import KakaoTalkSVG from "@/components/KakaoTalk_logo.svg";
import * as Imgur from "@/integrations/Imgur";
import KakaoNaviButton from "@/integrations/Kakao/KakaoNaviButton";
import TmapNaviButton from "@/integrations/Tmap/TmapNaviButton";
import { HOD_PLACE_NAVI_TITLE, HOD_PLACE_COORD } from "@/app/fixtures";

const removeStartingSlash = (str: string) => {
    if (str.startsWith('/')) {
        return str.slice(1);
    }
    return str;
}

type kakaoShareSendCustomParams = {
    templateId: number;
    templateArgs?: Record<string, string>;
    serverCallbackArgs?: Record<string, string>;
}

interface NavPanelBottomProps {
    kakaoShareSendCustomParams: kakaoShareSendCustomParams;
}

export default function NavPanelBottom({ kakaoShareSendCustomParams }: NavPanelBottomProps) {
    const pathname = removeStartingSlash(usePathname());

    if (kakaoShareSendCustomParams.templateArgs === undefined) {
        kakaoShareSendCustomParams.templateArgs = { path: pathname };
    } else if (kakaoShareSendCustomParams.templateArgs.path === undefined) {
        kakaoShareSendCustomParams.templateArgs.path = pathname;
    }

    return (
        <div className={`flex gap-1`}>
            <button type="button" className={`inline-block w-9 h-9 cursor-pointer`}>
                <Image
                    onClick={() => {
                        window.Kakao.Share.sendCustom(kakaoShareSendCustomParams);
                    }}
                    src={KakaoTalkSVG}
                    alt="KakaoTalk"
                    width={80}
                    height={80}
                />
            </button>
            <KakaoNaviButton name={HOD_PLACE_NAVI_TITLE} coordinate={HOD_PLACE_COORD} className={`w-9 h-9`} />
            <TmapNaviButton name={HOD_PLACE_NAVI_TITLE} coordinate={HOD_PLACE_COORD} className={`w-9 h-9`} />
        </div>
    );
}