'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Bebas_Neue, Dongle, Roboto_Condensed } from 'next/font/google';
import { motion } from 'framer-motion';
import * as Icon from '@alchemiakr/web-components/icon';
import { HOD_KAKAO_MAP_OVERLAY_CONTENT, HOD_PLACE_ADDRESS, HOD_PLACE_ADDRESS_LEGACY, HOD_PLACE_COORD, HOD_PLACE_TEXT_NAME, HOD_PLACE_ZIP_CODE, KAKAO_JS_APP_KEY } from '@/app/fixtures';
import { KakaoMap, KakaoMapSDKLoadingContextProvider, KakaoMapSDKScript } from '@/integrations/Kakao';
import { WindowSize } from 'types/app';
import { useWindowSize } from '@/components/Responsive';
import { HOD_KakaoMap } from '@/components/Place';
import { cafe24_dangdanghae } from '@/app/fonts';

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

export default function Home() {
  return (
    <KakaoMapSDKLoadingContextProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="flex landscape:hidden md:hidden bg-cover bg-center w-full min-h-screen items-start">
          <Image src="https://i.imgur.com/GWMYmxD.webp" alt="초대장 인트로 웨딩포토P" fill={true} sizes="129vw" style={{ objectFit: 'none', objectPosition: 'top' }}></Image>
        </section>
        <section className="hidden portrait:hidden md:flex w-full min-h-screen items-start">
          <Image src="https://i.imgur.com/AiNvEJR.webp" alt="초대장 인트로 웨딩포토L" fill={true} style={{ objectFit: 'none', objectPosition: 'top' }}></Image>
        </section>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        </div>

        <div className="invite-container">
          <section>
          </section>

          <section>
          </section>

          <section>
          </section>
        </div>
        <div className="heros-profile-container">
          <div className="heros-profile">
            <div className={`${cafe24_dangdanghae.className} hero-profile groom`}>
              석진
            </div>
            <div className="hero-profile bride">
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl w-11/12">
          <Place></Place>
        </div>
        <div className="designer">
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
  const size = useWindowSize();

  if (size.width === undefined) {
    return (
      <div>Loading...</div>
    )
  }

  if (size.width <= 768) // tailwindcss md breakpoint
  {
    return (
      <>
        <div className="flex flex-col">
          <HallTextComponent title={HOD_PLACE_TEXT_NAME} address={HOD_PLACE_ADDRESS} />

          <section className="order-2"><div className="w-full h-96"><HOD_KakaoMap /></div>
          </section>

          <section className="place-section order-last">
          </section>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className="flex space-x-3">
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
}


function HallTextComponent({ title, address, contact }: PlaceProps) {
  return (
    <section className="place-section text-center md:text-left space-y-2">
      <div className={`${bebasneue.className} text-4xl`}>House of Demer</div>
      <h1 className={`${dongle.className} text-3xl`}>{title}</h1>
      <h2 className={`${dongle.className} font-light text-2xl`)}>{address}</h2>
      <h3>{contact}</h3>
    </section>
  )
}