"use client";

import { useRef, useEffect, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import KakaoTalkSVG from '@/components/KakaoTalk_logo.svg';
import * as Imgur from '@/integrations/Imgur';

interface Props {
    isOpen: boolean;
}

export const NavPanel = ({ isOpen }: Props) => {
    return (
        <div className={`!fixed h-screen inset-0 bg-gray-100/95 transform transition-transform duration-500 ease-in-out origin-top ${isOpen ? 'scale-y-100' : 'scale-y-0'} backdrop-blur-md`}>
            <ul className="primary-menu m-auto w-96 pt-12 px-12">
                <li className={`text-2xl font-bold ${isOpen ? 'opacity-90' : 'opacity-0'}`} onClick={() => {
                    window.Kakao.Share.sendCustom({
                        templateId: 98561,
                        templateArgs: {
                            THU: Imgur.imageLink("44NZJXD", "h", ".jpg"),
                        }
                    })
                }}>
                    <Image className={`inline-block w-12 h-12`} src={KakaoTalkSVG} alt="KakaoTalk" width={80} height={80} /> 카카오톡 공유하기
                </li>
            </ul>
        </div>
    )
}
