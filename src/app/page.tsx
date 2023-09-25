import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue, Dongle, Roboto_Condensed } from 'next/font/google';
import { motion } from 'framer-motion';
import * as Icon from '@alchemiakr/web-components/icon';
import { DATETIME_TITLE, HEROS, HOD_KAKAO_MAP_OVERLAY_CONTENT, HOD_PLACE_ADDRESS, HOD_PLACE_ADDRESS_LEGACY, HOD_PLACE_COORD, HOD_PLACE_TEXT_NAME, HOD_PLACE_ZIP_CODE, INVITE_PARAGRAPH, KAKAO_JS_APP_KEY } from '@/app/fixtures';
import { KakaoMap, KakaoMapSDKLoadingContextProvider, KakaoMapSDKScript } from '@/integrations/Kakao';
import KakaoSDKScript from '@/components/KakaoSDKScript';
import { useWindowSize } from '@/components/Responsive';
import { HOD_KakaoMap } from '@/components/Place';
import { Calendar } from '@/components/Calendar';
import { noto_serif_kr, cafe24_dangdanghae } from '@/components/fonts';
import MainHeros from '@/components/MainHeros';
import InviteLetter from '@/components/InviteLetter';
import EventInfo from '@/components/EventInfo';
import PageMenu from '@/components/PageMenu';
import { Gallery } from '@/components/Gallery';
import * as Imgur from '@/integrations/Imgur';

const bebasneue = Bebas_Neue({
  subsets: ["latin"],
  weight: ['400']
})

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300", "400"]
})

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400"]
});

interface PlaceProps {
  title?: string;
  address?: string;
  contact?: string;
}

export default async function Home() {
  const images = await Imgur.fetchAlbumImages({}, 'uLfnMDZ');

  return (
    <KakaoMapSDKLoadingContextProvider>
      <KakaoSDKScript />
      <PageMenu />
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* <section className="flex landscape:hidden md:hidden bg-cover bg-center w-full min-h-screen items-start">
          <Image src={Imgur.imageLink("GWMYmxD")} alt="초대장 인트로 웨딩포토P" fill={true} sizes="123vw" style={{ objectFit: 'none', objectPosition: 'top' }} />
        </section>
        <section className="hidden portrait:hidden md:flex w-full min-h-screen items-start">
          <Image src={Imgur.imageLink("AiNvEJR")} alt="초대장 인트로 웨딩포토L" fill={true} style={{ objectFit: 'none', objectPosition: 'top' }}></Image>
        </section> */}

        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        </div>

        <section id="heros" className={`container h-screen landscape:h-auto landscape:my-12 md:h-auto md:my-12 flex flex-col justify-center gap-4`}>
          <MainHeros {...HEROS}></MainHeros>
          <InviteLetter lines={INVITE_PARAGRAPH} heros={HEROS} />
        </section>

        <section className={`p-2 md:p-3 lg:p-4`} >
          <Gallery images={images.data} />
          <div className={`my-12`}></div>
        </section>

        <section className={`container flex justify-center`}>
          <Calendar dday={{ year: 2023, month: 11, day: 11 }} />
        </section>

        <section className="max-w-screen-xl w-11/12">
          <Place />
        </section>

        <div id="designer" className="designer">
          <p className={`${roboto_condensed.className} p-0.5 text-sm mx-auto`}>designed by alchemia in Gwangju, 2023</p>
          <p className={`${roboto_condensed.className} font-light text-xs mx-auto opacity-70`}>with immense love for the bride.</p>
        </div>
      </main>
      <KakaoMapSDKScript jsAppKey={`${KAKAO_JS_APP_KEY}`} />
    </KakaoMapSDKLoadingContextProvider>
  )
}

function Footer() {
}

function Place() {
  return (
    <>
      <div className="md:hidden flex flex-col">
        <HallTextComponent title={HOD_PLACE_TEXT_NAME} address={HOD_PLACE_ADDRESS} />

        <section className="order-2"><div className="w-full h-96"><HOD_KakaoMap /></div>
        </section>

        <section className="place-section order-last">
        </section>
      </div>
      <div className="hidden md:flex space-x-3">
        <div className="flex flex-col">
          <HallTextComponent title={HOD_PLACE_TEXT_NAME} address={HOD_PLACE_ADDRESS} />
          <section className="place-section">
          </section>
        </div>
        <section className="grow !ml-[4%] py-5 lg:p-5"><div className="w-full h-96"><HOD_KakaoMap /></div>
        </section>
      </div>
    </>
  );
}

function HallTextComponent({ title, address, contact }: PlaceProps) {
  return (
    <section className="place-section text-center md:text-left space-y-1">
      <div className={`${bebasneue.className} text-4xl`}>House of Demer</div>
      <h1 className={`${noto_serif_kr.className} text-2xl tracking-tighter`}>{title}</h1>
      <h2 className={`${noto_serif_kr.className} font-light text-xl tracking-tighter`}>{address}</h2>
      <h3>{contact}</h3>
    </section>
  )
}