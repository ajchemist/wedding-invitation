import { noto_serif_kr, yuji_boku } from "@/app/fonts";
import { Yuji_Boku } from "next/font/google";
import Image from "next/image";
import { Heros } from "types/app";

export const MainHeros = ({ groom, bride }: Heros) => {
    return (
        <div className="main-heros-profile-container">
            <div className={`heros-profile`}>
                <div className={`hero-profile groom`}>
                    <div className={`next-image-container`}><Image src="https://i.imgur.com/plaJPTO.webp" alt="신랑 프로필 이미지" fill={true} style={{ objectFit: 'cover' }} /></div>
                    <h3 className={`${noto_serif_kr.className}`}>{groom.fullName}</h3>
                    <h4>신랑</h4>
                </div>
                <div className={`hero-profile bride`}>
                    <div className={`next-image-container`}><Image src="https://i.imgur.com/JzzIVoJ.webp" alt="신부 프로필 이미지" fill={true} style={{ objectFit: 'cover' }} /></div>
                    <h3 className={`${noto_serif_kr.className}`}>{bride.fullName}</h3>
                    <h4>신부</h4>
                </div>
            </div>
        </div>
    )
}

export const InviteLetter = ({ lines, heros }: {lines: string[], heros: Heros}) => {
    const { groomFather, groomMother, groom, brideFather, brideMother, bride } = heros;
    return (
        <div className={`invite-letter ${noto_serif_kr.className}`}>
            <h1>초대의 글</h1>
            <p>
                {
                    lines.map((line, index) => (
                        <span key={index}>{line}</span>
                    ))
                }
            </p>
            <h2><span className={`hero-parent-name`}>{groomFather.fullName} · {groomMother.fullName}</span>의<span className={`${yuji_boku.className} hero-relationship`}>{groom.relationship}</span><span className={`main-hero-name`}>{groom.name}</span></h2>
            <h2><span className={`hero-parent-name`}>{brideFather.fullName} · {brideMother.fullName}</span>의<span className={`${yuji_boku.className} hero-relationship`}>{bride.relationship}</span><span className={`main-hero-name`}>{bride.name}</span></h2>
        </div>
    )
}