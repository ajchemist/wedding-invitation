import { Inter, Noto_Serif_KR, Yuji_Boku } from "next/font/google";
import localFont from "next/font/local"

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export const noto_serif_kr = Noto_Serif_KR({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-noto-serif-kr"
});

export const yuji_boku = Yuji_Boku({
    subsets: ["latin"],
    weight: ["400"],
});

export const cafe24_dangdanghae = localFont({
    src: './fonts/Cafe24Dangdanghae-v2.0.woff2',
    display: 'swap'
});

export const cafe24_danjunghae = localFont({
    src: './fonts/Cafe24Danjunghae-v2.0.woff2',
    display: 'swap'
});

export const cafe24_simplehae = localFont({
    src: './fonts/Cafe24Simplehae-v2.0.woff2',
    display: 'swap'
});

export const cafe24_ssurroundair = localFont({
    src: './fonts/Cafe24SsurroundAir-v1.1.woff2',
    display: 'swap'
});
