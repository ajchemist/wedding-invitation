import { Heros } from "types/app";
import { noto_serif_kr, yuji_boku } from "@/components/fonts";

type InviteLetterProps = {
    lines: string[];
    heros: Heros;
};

export default function InviteLetter({ lines, heros }: InviteLetterProps) {
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