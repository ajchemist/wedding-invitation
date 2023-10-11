declare module "types/app" {
    export type BankName = '광주은행' | '토스뱅크' | '농협';

    export interface Hero {
        name?: string;
        fullName: string;
        relationship?: string;
        profileImage?: string;
        realName: string;
        bankName: BankName;
        bankAccount: string;
    }

    export interface Heros {
        [key: string]: Hero;
    }

    export interface WindowSize {
        width: number | undefined;
        height: number | undefined;
    }

    export interface ImageType extends Record<string, any> {
        id: string;
        link: string;
        width: number;
        height: number;
    }
}

declare module "types/app/component" {
    export interface PlaceProps {
        title?: string;
        address?: string;
        contact?: string;
    }

    export interface NaviButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        name: string;
        coordinate: { lat: number, lng: number };        
    }
}

declare module "types/Kakao" {
    export type jsAppKey = string;
    export type onLoad = () => void;
    export type Coordinate = { lat: number, lng: number };
    export interface KakaoMapProps {
        center: Coordinate,
        options?: object,
        callback?: (map: object) => void
    };
    export type KakaoMapLibraries = ("services" | "clusterer" | "drawing")[]
    export interface KakaoMapSDKProps {
        jsAppKey: jsAppKey,
        libraries?: KakaoMapLibraries,
    }
}

interface SVGElement extends Element {
    beginElement(): SVGElement;
}
