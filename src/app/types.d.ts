declare module "types/app" {
    export interface WindowSize {
        width: number | undefined;
        height: number | undefined;
    }
}

declare module "types/app/component" {
    export interface PlaceProps {
        title?: string;
        address?: string;
        contact?: string;
    }
}

declare module "types/Kakao" {
    export type jsAppKey = string;
    export type onLoad = () => void;
    export type Coordinate = { lat: number, lng: number };
    export interface KakaoSDKProps {
        onLoad: onLoad
    };
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
