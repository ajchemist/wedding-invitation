"use client";

import Image from "next/image"
import TmapNaviSvg from "./Tmap_Navi.svg";
import { NaviButtonProps } from "types/app/component";
import { TmapNaviUrl } from "../Tmap";

export default function TmapNaviButton({ name, coordinate, ...props}: NaviButtonProps) {
    return (
        <button type="button" className={`w-14 h-14`} onClick={() => {
            window.open(TmapNaviUrl(name, coordinate), "_blank");
        }} {...props}>
            <Image src={TmapNaviSvg} alt="TmapNavi" width={120} height={120} />
        </button>
    )
}