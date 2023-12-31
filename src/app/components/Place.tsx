"use client";

import { Bebas_Neue } from 'next/font/google';
import { WindowSize } from 'types/app'
import { Coordinate } from 'types/Kakao';
import { PlaceProps } from 'types/app/component';
import { registerKakaoMapOnLoad, KakaoMap } from '@/integrations/Kakao';
import { cafe24_simplehae, cafe24_ssurroundair, dongle, noto_sans_kr, noto_serif_kr } from '@/components/fonts';
import { useWindowSize } from '@/components/Responsive';
import { HOD_PLACE_TEXT_NAME, HOD_PLACE_ADDRESS, HOD_PLACE_COORD, HOD_KAKAO_MAP_OVERLAY_CONTENT, render_HOD_KAKAO_MAP_OVERLAY_CONTENT, HOD_PLACE_CONTACT, HOD_PLACE_TITLE } from '@/app/fixtures';
import KakaoNaviButton from '@/integrations/Kakao/KakaoNaviButton';
import TmapNaviButton from '@/integrations/Tmap/TmapNaviButton';

const bebasneue = Bebas_Neue({
    subsets: ["latin"],
    weight: ['400']
});

const KAKAO_MAP_CENTER = { lat: HOD_PLACE_COORD.lat + 0.0009, lng: HOD_PLACE_COORD.lng };

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
            <h1 className={`${noto_serif_kr.className} text-2xl m-auto text-center`}>오시는 길</h1>
            <div className={`my-10`}></div>
            <div className="md:hidden landscape:hidden flex flex-col">
                <section className={`order-first`}><div className="w-full h-80"><HOD_KakaoMap /></div>
                </section>
                <div className={`my-8`}>
                    <HallTextComponent title={HOD_PLACE_TEXT_NAME} address={HOD_PLACE_ADDRESS} contact={HOD_PLACE_CONTACT} />
                </div>
                <NavigationInfo name="하우스 오브 드메르" coordinate={HOD_PLACE_COORD} />
            </div>
            <div className="hidden md:flex landscape:flex space-x-8">
                <section className="grow lg:pl-6 xl:pl-12 ">
                    <div className="w-full h-80"><HOD_KakaoMap /></div>
                </section>
                <div className="flex flex-col gap-4 lg:pr-6 xl:pr-12">
                    <HallTextComponent title={HOD_PLACE_TEXT_NAME} address={HOD_PLACE_ADDRESS} contact={HOD_PLACE_CONTACT} />
                    <NavigationInfo name="하우스 오브 드메르" coordinate={HOD_PLACE_COORD} />
                </div>
            </div>
        </>
    );
}

export function HOD_KakaoMap() {
    return (
        <KakaoMap center={KAKAO_MAP_CENTER} options={{ level: 5 }} callback={HOD_KakaoMapCallback} />
    )
}

function HallTextComponent({ title, address, contact }: PlaceProps) {
    return (
        <section className="text-center md:text-left landscape:text-left md:pr-10 landscape:pr-10 space-y-1">
            <h1 className={`${bebasneue.className} text-3xl`}>House of Demer</h1>
            <h1 className={`${noto_serif_kr.className} text-xl tracking-tighter`}>{title}</h1>
            <h2 className={`${noto_serif_kr.className} font-light text-lg tracking-tighter`}>{address}</h2>
            <h2 className={`tracking-tighter`}>
                <a href={`tel:${contact}`}>
                    <button className={`text-sm mt-1.5 py-2 px-3 rounded-2xl text-slate-50 bg-emerald-400 inline-flex items-center`}>
                        <span className={`material-symbols mr-1 text-xs`}>smartphone</span>{contact}
                    </button>
                </a>
            </h2>
        </section>
    )
}

function NavigationInfo({ name, coordinate }: { name: string, coordinate: Coordinate }) {
    return (
        <section className={`w-full p-9 landscape:p-6 bg-emerald-100 tracking-tighter space-y-2 ${cafe24_ssurroundair.className}`}>
            <h1 className={`text-lg opacity-90 flex items-center justify-center text-slate-500 font-light`}>
                <span className={`material-symbols text-2xl -ml-3 mr-1`}>assistant_navigation</span>
                <span className={`min-w-0 whitespace-nowrap`}>내비게이션</span>
            </h1>
            <div className={`flex justify-center gap-2 text-zinc-400 ${noto_sans_kr.className}`}>
                <div className={`group`}>
                    <KakaoNaviButton name={HOD_PLACE_TITLE} coordinate={HOD_PLACE_COORD} />
                    <h2 className={`-mt-2 font-light text-xs text-center`}>카카오내비</h2>
                </div>
                <div className={`group`}>
                    <TmapNaviButton name={HOD_PLACE_TITLE} coordinate={HOD_PLACE_COORD} />
                    <h2 className={`-mt-2 font-light text-xs text-center`}>티맵</h2>
                </div>
            </div>
        </section>
    )
}