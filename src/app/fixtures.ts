import * as Icon from '@alchemiakr/web-components/icon';

export const KAKAO_JS_APP_KEY = 'a74750f9bbd999d047d1e16479e4ac33';
export const HOD_PLACE_TEXT_NAME = '하우스 오브 드메르 1F 지젤홀';
export const HOD_PLACE_ADDRESS = '광주 광산구 임방울대로 551';
export const HOD_PLACE_ADDRESS_LEGACY = '도천동 147-26';
export const HOD_PLACE_ZIP_CODE = '62244';
export const HOD_PLACE_CONTACT = '062-228-0000';
export const HOD_PLACE_COORD = {
    lat: 35.20912425100239,
    lng: 126.82300601774065
};

export const INVITE_PARAGRAPH = [
    '두 사람이 사랑으로 만나',
    '인생의 방정식을 마법과도 같은',
    '사랑으로 풀면서 완성해가려 합니다.',
    '아름다운 약속의 자리',
    '소중한 분들의 따뜻한 기도와',
    '축복을 구합니다.'
]

export const HEROS = {
    groom: { name: '석진', fullName: '서석진', relationship: '子', bank: '토스뱅크 1000-5157-5332', profileImage: 'https://i.imgur.com/plaJPTO.webp' },
    bride: { name: '민하', fullName: '송민하', relationship: '女', bank: '토스뱅크 1000-5161-1957', profileImage: 'https://i.imgur.com/JzzIVoJ.webp' },
    groomFather: { fullName: '서기문', bank: '' },
    groomMother: { fullName: '강문혜', bank: '' },
    brideFather: { fullName: '한승철', bank: '광주은행 720-121-401304' },
    brideMother: { fullName: '강순남', bank: '광주은행 125-121-471698' }
}

export const GA_MEASUREMENT_ID = 'G-WC7DK2FPE3';

export const HOD_KAKAO_MAP_OVERLAY_CONTENT = '<div class="wrap rounded-lg">' +
    '      <div class="info">' +
    '        <div class="flex items-center justify-between w-full font-bold text-lg px-2 py-1 shadow bg-gray-100">' +
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
        '        <div class="flex items-center justify-between w-full font-bold text-lg px-2 py-1 shadow bg-gray-100">' +
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