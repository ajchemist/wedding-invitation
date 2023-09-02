'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { on } from 'events';


const KAKAO_JS_KEY = 'a74750f9bbd999d047d1e16479e4ac33';


export default function Home() {
  useEffect(() => {
    // fixtures to load kakao sdk & kakao integrated user app
    const kakaoAPIScript = document.createElement('script');
    kakaoAPIScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false`;
    kakaoAPIScript.async = false;
    document.head.appendChild(kakaoAPIScript);
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(onLoadKakaoMaps);
    };
    kakaoAPIScript.addEventListener('load', onLoadKakaoAPI);


    // kakao integrated user app
    const onLoadKakaoMaps = () => {
      const place = {
        lat: 35.20912425100239,
        lng: 126.82300601774065
      }
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(place.lat+0.00002, place.lng),
        level: 2
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.lat, place.lng)
      })


      const overlayContent = '<div class="wrap rounded-lg">' +
      '      <div class="info">' +
      '        <div class="font-bold text-lg px-2 py-1 shadow bg-gray-50">' +
      '하우스 오브 드메르 1층 지젤홀' +
      '          <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '          <div class="img">' +
      '            <img src="https://i.imgur.com/baZPZvos.jpg" alt="하우스오브드메르" width="73" height="70"></Image>' +
      '          </div>' +
      '          <div class="desc">' +
      '            <div class="ellipsis">광주광역시 광산구 임방울대로 551</div>' +
      '            <div class="jibun ellipsis">(우) 62244 (지번) 도천동 147-26</div>' +
      '            <div>' + 
      '              <a href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,459710,475773&rt1=&rt2=%ED%95%98%EC%9A%B0%EC%8A%A4%EC%98%A4%EB%B8%8C%EB%93%9C%EB%A9%94%EB%A5%B4&rtIds=,209289612" target="_blank" class="link">길찾기</a>' + 
      '              <span>|</span>' +
      '              <a href="https://map.kakao.com/?srcid=209289612&confirmid=209289612&q=%ED%95%98%EC%9A%B0%EC%8A%A4%EC%98%A4%EB%B8%8C%EB%93%9C%EB%A9%94%EB%A5%B4&rv=on" target="_blank" class="link">로드뷰</a>' +
      '            </div>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
      '    </div>'
      const overlay = new window.kakao.maps.CustomOverlay({
        map: map,
        position: marker.getPosition(),
        content: overlayContent
      });
      // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
      window.kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
      });
      // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
      window.closeOverlay = () => {
        overlay.setMap(null);     
      }
    };
  }, []);
  return (
    <React.Fragment>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex landscape:hidden lg:hidden bg-cover bg-center w-full min-h-screen items-start">
        <Image src="https://i.imgur.com/GWMYmxD.webp" alt="초대장 인트로 웨딩포토" fill={true} sizes="129vw" style={{objectFit: 'none', objectPosition: 'top'}}></Image>
      </section>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <div id="map" className="w-full h-96">
      </div>
    </main>
    </React.Fragment>
  )
}
