"use client"

import Image from "next/image";
import KakaoTalkSVG from "@/components/KakaoTalk_logo.svg";
import * as Imgur from "@/integrations/Imgur";
import KakaoNaviButton from "@/integrations/Kakao/KakaoNaviButton";
import TmapNaviButton from "@/integrations/Tmap/TmapNaviButton";
import { HOD_PLACE_NAVI_TITLE, HOD_PLACE_COORD } from "@/app/fixtures";

export default function NavPanelBottom() {
    return (
        <div className={`flex gap-1`}>
            <Image
                className={`inline-block w-9 h-9`}
                onClick={() => {
                    window.Kakao.Share.sendCustom({
                        templateId: 98561,
                        templateArgs: {
                            THU: Imgur.imageLink("69j4O5G", "h", ".jpg"),
                        }
                    })
                }}
                src={KakaoTalkSVG}
                alt="KakaoTalk"
                width={80}
                height={80}
            />
            <KakaoNaviButton name={HOD_PLACE_NAVI_TITLE} coordinate={HOD_PLACE_COORD} className={`w-9 h-9`}/>
            <TmapNaviButton name={HOD_PLACE_NAVI_TITLE} coordinate={HOD_PLACE_COORD} className={`w-9 h-9`}/>
        </div>
    );
}