"use client";

import { KakaoMapProps, KakaoSDKProps, jsAppKey, onLoad } from 'types/Kakao';
// import { registerKakaoMapOnLoad } from '@/utils/Kakao';
import { useRef, useState, useEffect, useLayoutEffect, createContext, useContext, ReactPropTypes } from 'react';
import Script from 'next/script';

type KakaoMapSDKLoadingContextProviderProps = {
    children: React.ReactNode;
};

type KakaoMapSDKLoadingContext = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const KakaoMapSDKLoadingContext = createContext<KakaoMapSDKLoadingContext | null>(null);

export const useKakaoMapSDKLoadingContext = (): KakaoMapSDKLoadingContext => {
    const ctx = useContext(KakaoMapSDKLoadingContext);
    if (!ctx) {
        throw new Error("useKakaoMapSDKLoadingContext must be used within a KakaoMapSDKLoadingContextProvider")
    };
    return ctx;
}

export const KakaoMapSDKLoadingContextProvider = ({ children }: KakaoMapSDKLoadingContextProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <KakaoMapSDKLoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </KakaoMapSDKLoadingContext.Provider>
    );
}

// 

let onLoadQueue: Array<onLoad> = [];

export const registerKakaoMapOnLoad = (onLoad: onLoad) => {
    onLoadQueue.push(onLoad);
};

const executeQueue = () => {
    while (onLoadQueue.length) {
        let f = onLoadQueue.shift();
        f && f();
    }
};

// 

export const KakaoSDK = ({ onLoad }: KakaoSDKProps) => {
    return (
        <>
            <Script id="kakao-sdk" src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js" integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH" crossOrigin="anonymous" onLoad={onLoad}></Script>
        </>
    )
}

type KakaoMapSDKScriptProps = {
    jsAppKey: jsAppKey;
}

export const KakaoMapSDKScript = ({ jsAppKey }: KakaoMapSDKScriptProps) => {
    const { isLoading, setIsLoading } = useKakaoMapSDKLoadingContext();
    const onload = () => { setIsLoading(false); }

    return (
        <Script
            async={true}
            id="kakao-map-sdk"
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${jsAppKey}&autoload=false`}
            onLoad={() => { window.kakao.maps.load(onload); }}>
        </Script>
    )
}

export const KakaoMap = ({ center, options, callback }: KakaoMapProps) => {
    const { isLoading } = useKakaoMapSDKLoadingContext();
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isLoading) return;
        if (!container.current) return;

        window.kakao.maps.load(() => {
            const map = new window.kakao.maps.Map(container.current, {
                level: 2,
                center: new window.kakao.maps.LatLng(center.lat, center.lng),
                ...options
            });
            callback && callback(map);
        });
    }, [isLoading, center, options, callback]);

    return (
        <div ref={container} className="w-full h-full"></div>
    )
}

// deprecated
export const installKakaoMapSDK = (jsAppKey: jsAppKey) => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${jsAppKey}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);
    const onLoadKakaoAPI = () => {
        window.kakao.maps.load(executeQueue);
    };
    script.addEventListener('load', onLoadKakaoAPI);
};