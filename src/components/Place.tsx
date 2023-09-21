import { Bebas_Neue, Dongle, Roboto_Condensed } from 'next/font/google';
import * as Icon from '@alchemiakr/web-components/icon';
import { HOD_KAKAO_MAP_OVERLAY_CONTENT, HOD_PLACE_ADDRESS, HOD_PLACE_ADDRESS_LEGACY, HOD_PLACE_COORD, HOD_PLACE_TEXT_NAME, HOD_PLACE_ZIP_CODE, KAKAO_JS_APP_KEY, render_HOD_KAKAO_MAP_OVERLAY_CONTENT } from '@/app/fixtures';
import { registerKakaoMapOnLoad, KakaoMap } from '@/integrations/Kakao';
import { WindowSize } from 'types/app';
import { useWindowSize } from '@/components/Responsive';
import { PlaceProps } from 'types/app/component';

const KakaoMapCenter = { lat: HOD_PLACE_COORD.lat + 0.00006, lng: HOD_PLACE_COORD.lng };

const bebasneue = Bebas_Neue({
    subsets: ["latin"],
    weight: ['400']
})

const dongle = Dongle({
    subsets: ["latin"],
    weight: ["300", "400"]
})

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

export function HOD_KakaoMap() {
    return (
        <KakaoMap center={KakaoMapCenter} callback={HOD_KakaoMapCallback} />
    )
}

function HallTextComponent({ title, address, contact }: PlaceProps) {
    return (
        <section className="place-section text-center md:text-left space-y-2">
            <div className={`${bebasneue.className} text-4xl`}>House of Demer</div>
            <h1 className={`${dongle.className} text-3xl`}>{title}</h1>
            <h2 className={`${dongle.className} font-light text-2xl`}>{address}</h2>
            <h3>{contact}</h3>
        </section>
    )
}