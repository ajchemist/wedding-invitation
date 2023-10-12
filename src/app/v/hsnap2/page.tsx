import { Bebas_Neue, Monsieur_La_Doulaise, Nanum_Pen_Script, Lovers_Quarrel } from 'next/font/google';
import { DOCUMENT_DESCRIPTION_SHORT, DOCUMENT_TITLE, HEROS, INVITE_PARAGRAPH, KAKAO_JS_APP_KEY } from '@/app/fixtures';
import { KakaoMapSDKLoadingContextProvider, KakaoMapSDKScript } from '@/integrations/Kakao';
import KakaoSDKScript from '@/components/KakaoSDKScript';
import Place from '@/app/components/Place';
import { Calendar } from '@/components/Calendar';
import MainHeros from '@/components/MainHeros';
import InviteLetter from '@/components/InviteLetter';
import PageMenu from '@/components/PageMenu';
import HSnapGallery2 from '@/components/HSnapGallery2';
import Banks from '@/components/Banks';
import Footer from '@/components/Footer';
import * as Imgur from '@/integrations/Imgur';
import InviteLetterFooter from '@/app/components/InviteLetterFooter';
import NavPanelBottom from '@/app/components/NavPanelBottom';
import BlurImage from '@/components/BlurImage';

export const dynamic = 'force-dynamic';

const bebasneue = Bebas_Neue({
    subsets: ["latin"],
    weight: ['400']
})

const monsieur_la_doulaise = Monsieur_La_Doulaise({
    subsets: ["latin"],
    weight: ["400"]
});

const nanum_pen_script = Nanum_Pen_Script({
    subsets: ["latin"],
    weight: ["400"]
});

const lovers_quarrel = Lovers_Quarrel({
    subsets: ["latin"],
    weight: ["400"]
})

export default async function Home() {
    const images = await Imgur.fetchAlbumImages({}, 'wRqi9Mk');

    return (
        <>
            <KakaoMapSDKLoadingContextProvider>
                <KakaoSDKScript appkey={KAKAO_JS_APP_KEY} />
                <div id="intro-a" className={`h-screen relative landscape:hidden`}>
                    <div id="intro-a-mask" className={`-z-10 absolute portrait:pt-10 portrait:pb-20 inset-0 bg-gradient-to-b from-10% from-[rgba(255,0,0,0.03)] to-[rgba(255,0,0,0.17)] text-slate-800`}>
                        <div className={`fixed`}>
                            <h2 className={`w-full px-8 text-3xl text-right ${nanum_pen_script.className} tracking-tighter`}>석진 & 민하 결혼합니다.</h2>
                            <h3 className={`w-full pl-8 pr-6 mt-1.5 text- text-right font-mono tracking-tighter`}>11.11 11 a.m.</h3>
                            <div className={`w-full h-full pt-8 m-auto`}>
                                <BlurImage
                                    src={Imgur.imageLink("5bvjK6H")}
                                    alt={`인트로 웨딩포토(P)`}
                                    width={800}
                                    height={1066}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <h1 className={`px-5 mt-2.5 ${monsieur_la_doulaise.className} text-5xl`} style={{ textShadow: '#fafafaee 0.25rem 0.45rem' }}>Wedding Invitation.</h1>
                        </div>
                    </div>
                </div>
                <div id="intro-a-landscape" className={`relative hidden landscape:block landscape:h-screen`}>
                    <div id="intro-a-mask-landscape" className={`-z-10 absolute portrait:py-20 inset-0 bg-gradient-to-b from-10% from-zinc-50 to-zinc-100 text-slate-800`}>
                        <div className={'fixed w-full'}>
                            <div className={`py-9 px-16 w-9/12 h-screen`}>
                                {/* max-w-screen-xl no needs / Image.width do this  */}
                                <BlurImage
                                    src={Imgur.imageLink("xp4dE7e")}
                                    alt={`인트로 웨딩포토(L)`}
                                    style={{ objectFit: 'contain' }}
                                    width={1350}
                                    height={900}
                                />
                            </div>
                            <div className={`absolute top-12 right-0 px-16 text-right w-full`}>
                                <h2 className={`text-3xl ${nanum_pen_script.className} tracking-tighter`}>석진 & 민하 결혼합니다.</h2>
                                <h3 className={`mt-1.5 -mr-3 font-mono tracking-tighter`}>11.11 11 a.m.</h3>
                            </div>
                            <h1 className={`absolute bottom-12 right-6 ${monsieur_la_doulaise.className} text-5xl`} style={{ textShadow: '#fafafa9f 0.25rem 0.25rem' }}>Wedding Invitation.</h1>
                        </div>
                    </div>
                </div>

                <main className="flex min-h-screen flex-col items-center justify-between">
                    {/* <section className="flex landscape:hidden md:hidden bg-cover bg-center w-full min-h-screen items-start">
          <Image src={Imgur.imageLink("GWMYmxD")} alt="초대장 인트로 웨딩포토P" fill={true} sizes="123vw" style={{ objectFit: 'none', objectPosition: 'top' }} />
        </section>
        <section className="hidden portrait:hidden md:flex w-full min-h-screen items-start">
          <Image src={Imgur.imageLink("AiNvEJR")} alt="초대장 인트로 웨딩포토L" fill={true} style={{ objectFit: 'none', objectPosition: 'top' }}></Image>
        </section> */}
                    <PageMenu
                        audioPlayerProps={{
                            src: "https://wedding-11-11.s3.ap-northeast-2.amazonaws.com/Yestalgia+-+Invitation.wav",
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
                            bottomComponent: (<NavPanelBottom kakaoShareSendCustomParams={{
                                templateId: 99264,
                                templateArgs: {
                                    THU: Imgur.imageLink("69j4O5G", "h", ".jpg"),
                                    header: "Wedding Invitation #C2",
                                }
                            }} />)
                        }} />

                    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    </div>

                    <section id="heros" className={`container pt-20 pb-16 landscape:h-auto landscape:my-12 md:h-auto md:my-12 flex flex-col justify-center gap-10 bg-gradient-to-b from-gray-50 to-gray-100`}>
                        <MainHeros {...HEROS}></MainHeros>
                        <InviteLetter lines={INVITE_PARAGRAPH} heros={HEROS} />
                        <InviteLetterFooter />
                    </section>

                    <section id="gallery" className={`py-20 w-full p-2 md:p-3 lg:p-4 bg-gradient-to-b from-zinc-50 to-zinc-100`} >
                        <HSnapGallery2 images={images.data} />
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