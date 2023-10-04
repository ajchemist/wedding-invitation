import { Heros } from 'types/app';
import * as Icon from '@alchemiakr/web-components/icon';
import * as Imgur from '@/integrations/Imgur';

export const DOCUMENT_TITLE = '석진 & 민하 결혼합니다';
export const DOCUMENT_DESCRIPTION = '🗓️날짜: 11월 11일 토요일 오전 11시 | 📍장소: 하우스 오브 드메르 1F 지젤홀';
export const DOCUMENT_DESCRIPTION_SHORT = '11월11일11시 하우스오브드메르 1F 지젤홀';
export const KAKAO_JS_APP_KEY = process.env.KAKAO_JS_APP_KEY || '';
export const DATETIME_TITLE = '11월 11일 토요일 오전 11시';
export const HOD_PLACE_TITLE = '하우스오브드메르';
export const HOD_PLACE_NAVI_TITLE = '하우스오브드메르';
export const HOD_PLACE_TEXT_NAME = '하우스오브드메르 1F 지젤홀';
export const HOD_PLACE_ADDRESS = '광주 광산구 임방울대로 551';
export const HOD_PLACE_ADDRESS_LEGACY = '도천동 147-26';
export const HOD_PLACE_ZIP_CODE = '62244';
export const HOD_PLACE_CONTACT = '062-228-0000';
export const HOD_PLACE_COORD = {
    lat: 35.20912425, // 100239
    lng: 126.82300601, // 774065
};

export const INVITE_PARAGRAPH = [
    '두 사람이 사랑으로 만나',
    '인생의 방정식을 마법과도 같은',
    '사랑으로 풀면서 완성해가려 합니다.',
    '아름다운 약속의 자리',
    '소중한 분들의 따뜻한 기도와',
    '축복을 구합니다.'
]

export const HEROS: Heros  = {
    groom: { name: '석진', fullName: '서석진', realName: '서석진', relationship: '子', bankName: '토스뱅크', bankAccount: '1000-5157-5332', profileImage: Imgur.imageLink("plaJPTO") },
    bride: { name: '민하', fullName: '송민하', realName: '송민하', relationship: '女', bankName: '토스뱅크', bankAccount: '1000-5161-1957', profileImage: Imgur.imageLink("JzzIVoJ") },
    groomFather: { fullName: '서기문', realName: '서기문', bankName: '농협', bankAccount: '601188-52-057761' },
    groomMother: { fullName: '강문혜', realName: '강순금', bankName: '농협', bankAccount: '601188-52-083767' },
    brideFather: { fullName: '한승철', realName: '한승철', bankName: '광주은행', bankAccount: '720-121-401304' },
    brideMother: { fullName: '강순남', realName: '강순남', bankName: '광주은행', bankAccount: '125-121-471698' }
}

export const GA_MEASUREMENT_ID = 'G-WC7DK2FPE3';

export const HOD_KAKAO_MAP_OVERLAY_CONTENT = '<div class="wrap rounded-lg">' +
    '      <div class="info">' +
    '        <div class="flex items-center justify-between w-full text-lg px-2 py-1 shadow bg-gray-100">' +
    `          <span class="ml-0.5">${HOD_PLACE_TEXT_NAME}</span>` +
    `          <div class="w-[21px] h-[21px] cursor-pointer" onclick="closeOverlay()" title="닫기">${Icon.DANGER_SVG_RAW}</div>` +
    '        </div>' +
    '        <div class="body">' +
    '          <div class="img">' +
    '            <img src="https://i.imgur.com/baZPZvos.jpg" alt="하우스오브드메르" width="73" height="70" />' +
    '          </div>' +
    '          <div class="desc">' +
    `            <div class="ellipsis">${HOD_PLACE_ADDRESS}</div>` +
    `            <div class="jibun ellipsis">(우) ${HOD_PLACE_ZIP_CODE} (지번) ${HOD_PLACE_ADDRESS_LEGACY}</div>` +
    '            <div>' +
    '              <a href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,459710,475773&rt1=&rt2=%ED%95%98%EC%9A%B0%EC%8A%A4%EC%98%A4%EB%B8%8C%EB%93%9C%EB%A9%94%EB%A5%B4&rtIds=,209289612" target="_blank" class="link">길찾기</a>' +
    '              <span>|</span>' +
    '              <a href="https://map.kakao.com/?srcid=209289612&confirmid=209289612&q=%ED%95%98%EC%9A%B0%EC%8A%A4%EC%98%A4%EB%B8%8C%EB%93%9C%EB%A9%94%EB%A5%B4&rv=on" target="_blank" class="link">로드뷰</a>' +
    '            </div>' +
    '          </div>' +
    '        </div>' +
    '      </div>' +
    '    </div>'

export const render_HOD_KAKAO_MAP_OVERLAY_CONTENT = (onclick: string) => {
    return '<div class="wrap rounded-lg">' +
        '      <div class="info">' +
        '        <div class="flex items-center justify-between w-full text-lg px-2 py-1 shadow bg-gray-100">' +
        `          <span class="ml-0.5">${HOD_PLACE_TEXT_NAME}</span>` +
        `          <div class="w-[21px] h-[21px] cursor-pointer" onclick="${onclick}()" title="닫기">${Icon.DANGER_SVG_RAW}</div>` +
        '        </div>' +
        '        <div class="body">' +
        '          <div class="img">' +
        '            <img src="https://i.imgur.com/baZPZvos.jpg" alt="하우스오브드메르" width="73" height="70" />' +
        '          </div>' +
        '          <div class="desc">' +
        `            <div class="ellipsis">${HOD_PLACE_ADDRESS}</div>` +
        `            <div class="jibun ellipsis">(우) ${HOD_PLACE_ZIP_CODE} (지번) ${HOD_PLACE_ADDRESS_LEGACY}</div>` +
        '            <div>' +
        '              <a href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,459710,475773&rt1=&rt2=%ED%95%98%EC%9A%B0%EC%8A%A4%EC%98%A4%EB%B8%8C%EB%93%9C%EB%A9%94%EB%A5%B4&rtIds=,209289612" target="_blank" class="link">길찾기</a>' +
        '              <span>|</span>' +
        '              <a href="https://map.kakao.com/?srcid=209289612&confirmid=209289612&q=%ED%95%98%EC%9A%B0%EC%8A%A4%EC%98%A4%EB%B8%8C%EB%93%9C%EB%A9%94%EB%A5%B4&rv=on" target="_blank" class="link">로드뷰</a>' +
        '            </div>' +
        '          </div>' +
        '        </div>' +
        '      </div>' +
        '    </div>'
}