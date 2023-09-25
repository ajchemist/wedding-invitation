"use client";

import { Bebas_Neue } from 'next/font/google';
import { WindowSize } from 'types/app'
import { Coordinate } from 'types/Kakao';
import { PlaceProps } from 'types/app/component';
import { registerKakaoMapOnLoad, KakaoMap } from '@/integrations/Kakao';
import { noto_serif_kr } from '@/components/fonts';
import { useWindowSize } from '@/components/Responsive';
import { HOD_PLACE_TEXT_NAME, HOD_PLACE_ADDRESS, HOD_PLACE_COORD, HOD_KAKAO_MAP_OVERLAY_CONTENT, render_HOD_KAKAO_MAP_OVERLAY_CONTENT, HOD_PLACE_CONTACT } from '@/app/fixtures';

const bebasneue = Bebas_Neue({
    subsets: ["latin"],
    weight: ['400']
});

const KAKAO_MAP_CENTER = { lat: HOD_PLACE_COORD.lat + 0.00006, lng: HOD_PLACE_COORD.lng };

const HOD_KakaoMapCallback = (map: object) => {
    const closeOverlayName = "closeOverlay" + Date.now();
    const place = HOD_PLACE_COORD;
    const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.lat, place.lng)
    });

    const overlay = new window.kakao.maps.CustomOverlay({
        map: map,
        position: marker.getPosition(),
        content: render_HOD_KAKAO_MAP_OVERLAY_CONTENT(closeOverlayName)
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    window.kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    window[closeOverlayName] = () => {
        overlay.setMap(null);
    }
}

//

export default function Place() {
    return (
        <>
            <div className="md:hidden flex flex-col">
                <HallTextComponent title={HOD_PLACE_TEXT_NAME} address={HOD_PLACE_ADDRESS} contact={HOD_PLACE_CONTACT} />
                <section className="order-2"><div className="w-full h-96"><HOD_KakaoMap /></div>
                </section>

                <section className="place-section order-last">
                </section>
            </div>
            <div className="hidden md:flex space-x-3">
                <div className="flex flex-col">
                    <HallTextComponent title={HOD_PLACE_TEXT_NAME} address={HOD_PLACE_ADDRESS} contact={HOD_PLACE_CONTACT} />
                    <section className="place-section">
                    </section>
                </div>
                <section className="grow !ml-[4%] py-5 lg:p-5"><div className="w-full h-96"><HOD_KakaoMap /></div>
                </section>
            </div>
        </>
    );
}

export function HOD_KakaoMap() {
    return (
        <KakaoMap center={KAKAO_MAP_CENTER} callback={HOD_KakaoMapCallback} />
    )
}

function HallTextComponent({ title, address, contact }: PlaceProps) {
    return (
        <section className="place-section text-center md:text-left space-y-1">
            <div className={`${bebasneue.className} text-4xl`}>House of Demer</div>
            <h1 className={`${noto_serif_kr.className} text-2xl tracking-tighter`}>{title}</h1>
            <h2 className={`${noto_serif_kr.className} font-light text-xl tracking-tighter`}>{address}</h2>
            <h3 className={`tracking-tighter`}>
                <a href={`tel:${contact}`}>
                    <button className={`text-sm mt-1.5 py-2 px-3 rounded-2xl text-slate-50 bg-emerald-400 inline-flex items-center`}>
                        <span className={`material-symbols mr-1 text-xs`}>smartphone</span>{contact}
                    </button>
                </a>
            </h3>
        </section>
    )
}