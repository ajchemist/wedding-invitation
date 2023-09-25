import Image from "next/image";
import { Heros } from "types/app";
import { noto_serif_kr } from "@/components/fonts";

export default function MainHeros({ groom, bride }: Heros) {
    return (
        <div className="main-heros-profile-container">
            <div className={`heros-profile ${noto_serif_kr.className}`}>
                <div className={`hero-profile groom`}>
                    <div className={`next-image-container`}><Image src={`${groom.profileImage}`} alt="신랑 프로필 이미지" fill={true} style={{ objectFit: 'cover' }} /></div>
                    <h3 className={``}>{groom.fullName}</h3>
                    <h4>신랑</h4>
                </div>
                <div className={`hero-profile bride`}>
                    <div className={`next-image-container`}><Image src={`${bride.profileImage}`} alt="신부 프로필 이미지" fill={true} style={{ objectFit: 'cover' }} /></div>
                    <h3 className={``}>{bride.fullName}</h3>
                    <h4>신부</h4>
                </div>
            </div>
        </div>
    )
}