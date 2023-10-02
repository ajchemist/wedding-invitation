"use client";

import { noto_serif_kr } from "@/components/fonts";
import { DATETIME_TITLE, HOD_PLACE_COORD, HOD_PLACE_NAVI_TITLE, HOD_PLACE_TEXT_NAME } from "@/app/fixtures";
import KakaoNaviButton from "@/integrations/Kakao/KakaoNaviButton";
import TmapNaviButton from "@/integrations/Tmap/TmapNaviButton";

export const InviteLetterFooter: React.FC<any> = ({ }) => {
    return (
        <div className={`${noto_serif_kr.className} tracking-tight text-indigo-950 font-medium mx-auto space-y-2`}>
            <h2 className={``}>{DATETIME_TITLE}</h2>
            <h2 className={`mt-1 flex items-center`}>
                {HOD_PLACE_TEXT_NAME}
                    <KakaoNaviButton name={HOD_PLACE_NAVI_TITLE} coordinate={HOD_PLACE_COORD} className={`w-7 h-7 ml-1`} />
                    <TmapNaviButton name={HOD_PLACE_NAVI_TITLE} coordinate={HOD_PLACE_COORD} className={`w-7 h-7`} />
            </h2>
        </div>
    );
}

export default InviteLetterFooter;