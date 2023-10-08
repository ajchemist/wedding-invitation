"use client";

import Image from "next/image"
import KakaoNaviSvg from "./Kakao_Navi.svg";
import { NaviButtonProps } from "types/app/component";

export default function KakaoNaviButton({ name, coordinate, ...props }: NaviButtonProps) {
    const { lat, lng } = coordinate;

    return (
        <button type="button" className={`w-14 h-14`} onClick={() => {
            window.Kakao.Navi.share({
                name,
                x: lng,
                y: lat,
                coordType: 'wgs84',
            });
        }} {...props}>
            <Image src={KakaoNaviSvg} alt="KakaoNavi" width={120} height={120} />
        </button>
    )
}