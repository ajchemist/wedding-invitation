"use client";

import { useRef, useEffect, useState, use, HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Imgur from '@/integrations/Imgur';
import KakaoTalkSVG from '@/components/KakaoTalk_logo.svg';
import { noto_sans_kr } from "@/components/fonts";

export interface NavPanelProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    items: Omit<ListItemProps, 'isOpen' | 'setIsOpen'>[];
}

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    href: string;
}

const ListItem = ({ isOpen, setIsOpen, href, children, ...props }: ListItemProps) => {
    return (
        <li className={`group text-2xl font-bold ${isOpen ? 'opacity-90' : 'opacity-0'}`} {...props}>
            <a href={href} onClick={() => { setIsOpen(false) }}>
                {children}
            </a>
        </li>
    );
}

export const NavPanel = ({ isOpen, setIsOpen, items, ...props }: NavPanelProps) => {
    return (
        <div className={`!fixed h-screen inset-0 bg-gray-100/95 transform transition-transform duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100' : 'scale-y-0'} backdrop-blur-md`} {...props}>
            <ul className={`${noto_sans_kr.className} tracking-tighter w-full pt-16 px-12 space-y-1.5`}>
                {items.map((item: Omit<ListItemProps, 'isOpen' | 'setIsOpen'>, idx) => (
                    <ListItem key={idx} isOpen={isOpen} setIsOpen={setIsOpen} {...item}>
                        {item.children}
                    </ListItem>
                ))}
                <div className={`absolute bottom-32 left-12 flex`}>
                    <Image
                        className={`inline-block w-9 h-9`}
                        onClick={() => {
                            window.Kakao.Share.sendCustom({
                                templateId: 98561,
                                templateArgs: {
                                    THU: Imgur.imageLink("44NZJXD", "h", ".jpg"),
                                }
                            })
                        }}
                        src={KakaoTalkSVG}
                        alt="KakaoTalk"
                        width={80}
                        height={80}
                    />
                </div>
            </ul>
        </div>
    )
}
