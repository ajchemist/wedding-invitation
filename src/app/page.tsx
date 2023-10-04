import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue, Dongle, Roboto_Condensed, Rochester, Monsieur_La_Doulaise, Nanum_Pen_Script } from 'next/font/google';
import { motion } from 'framer-motion';
import * as Icon from '@alchemiakr/web-components/icon';
import { DATETIME_TITLE, DOCUMENT_DESCRIPTION_SHORT, DOCUMENT_TITLE, HEROS, HOD_PLACE_COORD, HOD_PLACE_TEXT_NAME, HOD_PLACE_TITLE, INVITE_PARAGRAPH, KAKAO_JS_APP_KEY } from '@/app/fixtures';
import { KakaoMap, KakaoMapSDKLoadingContextProvider, KakaoMapSDKScript } from '@/integrations/Kakao';
import KakaoSDKScript from '@/components/KakaoSDKScript';
import { useWindowSize } from '@/components/Responsive';
import Place from '@/app/components/Place';
import KakaoNaviButton from '@/integrations/Kakao/KakaoNaviButton';
import TmapNaviButton from '@/integrations/Tmap/TmapNaviButton';
import { Calendar } from '@/components/Calendar';
import { noto_serif_kr, cafe24_dangdanghae } from '@/components/fonts';
import MainHeros from '@/components/MainHeros';
import InviteLetter from '@/components/InviteLetter';
// import EventInfo from '@/components/EventInfo';
import PageMenu from '@/components/PageMenu';
import { Gallery } from '@/components/Gallery';
import Banks from '@/components/Banks';
import Footer from '@/components/Footer';
import * as Imgur from '@/integrations/Imgur';
import InviteLetterFooter from '@/app/components/InviteLetterFooter';
import NavPanelBottom from '@/app/components/NavPanelBottom';

export const dynamic = 'force-dynamic';

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

const rochester = Rochester({
  subsets: ["latin"],
  weight: ["400"]
});

const monsieur_la_doulaise = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: ["400"]
});

const nanum_pen_script = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"]
})

export default async function Home() {
  const images = await Imgur.fetchAlbumImages({}, 'wRqi9Mk');

  return (
    <>
      <KakaoMapSDKLoadingContextProvider>
        <KakaoSDKScript appkey={KAKAO_JS_APP_KEY} />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* <section className="flex landscape:hidden md:hidden bg-cover bg-center w-full min-h-screen items-start">
          <Image src={Imgur.imageLink("GWMYmxD")} alt="초대장 인트로 웨딩포토P" fill={true} sizes="123vw" style={{ objectFit: 'none', objectPosition: 'top' }} />
        </section>
        <section className="hidden portrait:hidden md:flex w-full min-h-screen items-start">
          <Image src={Imgur.imageLink("AiNvEJR")} alt="초대장 인트로 웨딩포토L" fill={true} style={{ objectFit: 'none', objectPosition: 'top' }}></Image>
        </section> */}
          <PageMenu
            audioPlayerProps={{
              mediaMetadata: {
                title: DOCUMENT_TITLE,
                artist: DOCUMENT_DESCRIPTION_SHORT,
                album: '결혼식 초대장',
                artwork: [
                  // { src: 'https://i.imgur.com/i0zWcM5.png', sizes: '96x96', type: 'image/png' },
                  // { src: 'https://i.imgur.com/0O9GDaD.png', sizes: '128x128', type: 'image/png' },
                  { src: 'https://i.imgur.com/HL7Iz1p.png', sizes: '384x384', type: 'image/png' },
                  // { src: '/artwork-384.jpg', sizes: '384x384', type: 'image/jpeg'},
                  // { src: '/apple-icon.jpg', sizes: '180x180', type: 'image/jpeg'},
                  // { src: '/artwork-60.jpg', sizes: '60x60', type: 'image/jpeg'},
                  // multi artwork break in ios
                ]
              }
            }}
            navPanelProps={{
              items: [
                {
                  children: "초대의 글",
                  href: "#heros"
                },
                {
                  children: "갤러리",
                  href: "#gallery"
                },
                {
                  children: "캘린더",
                  href: "#calendar"
                },
                {
                  children: "오시는 길"
                  , href: "#location"
                },
                {
                  children: "마음 전하실 곳"
                  , href: "#banks"
                }
              ],
              bottomComponent: (<NavPanelBottom />)
            }} />

          <div className={`h-screen -mb-8 relative landscape:hidden`}>
            <div className={`w-full py-12 px-8 m-auto`}>
              <Image
                src={Imgur.imageLink("5bvjK6H")}
                alt={`인트로 웨딩포토(P)`}
                width={800}
                height={1066}
              />
            </div>
            <h1 className={`px-4 mt-4 ${monsieur_la_doulaise.className} text-5xl`}>Wedding Invitation</h1>
            <h2 className={`px-8 mt-2.5 text-3xl text-right ${nanum_pen_script.className}`}>석진 & 민하 결혼합니다.</h2>
          </div>

          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          </div>

          <section id="heros" className={`container pt-20 pb-10 landscape:h-auto landscape:my-12 md:h-auto md:my-12 flex flex-col justify-center gap-10`}>
            <MainHeros {...HEROS}></MainHeros>
            <InviteLetter lines={INVITE_PARAGRAPH} heros={HEROS} />
            <InviteLetterFooter />
          </section>

          <section id="gallery" className={`pt-20 p-2 md:p-3 lg:p-4`} >
            <Gallery images={images.data} />
            <div className={`my-12`}></div>
          </section>

          <section id="calendar" className={`pt-20 container flex justify-center`}>
            <Calendar dday={{ year: 2023, month: 11, day: 11 }} />
          </section>

          <section id="banks" className={`w-full mt-12 pt-16 p-10 px-6 bg-gradient-to-b from-slate-50 to-slate-100`}>
            <Banks banks={[HEROS.groomFather, HEROS.groomMother, HEROS.groom, HEROS.brideFather, HEROS.brideMother, HEROS.bride]} />
          </section>

          <section id="location" className={`pt-20 landscape:pb-20 w-full bg-gradient-to-b from-slate-100/80 to-slate-50`}>
            <Place />
          </section>

          <section className={`w-full`}>
            <Footer />
          </section>
        </main>
        <KakaoMapSDKScript jsAppKey={`${KAKAO_JS_APP_KEY}`} />
      </KakaoMapSDKLoadingContextProvider>
    </>
  )
}