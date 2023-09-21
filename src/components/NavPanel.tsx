"use client";

import { useRef, useEffect, useState, use } from "react";

interface Props {
    isOpen: boolean;
}

export const NavPanel = ({ isOpen }: Props) => {
    return (
        <div className={`z-50 fixed w-full h-screen ${isOpen ? 'flex' : 'hidden'} inset-0 bg-white bg-opacity-80 backdrop-blur flex items-center justify-center transition-all duration-300`}>
<ul className="primary-menu m-auto w-96 px-18"><li><a href="/">홈페이지</a></li><li><a href="/about/">소개</a></li><li><a href="/contact/">연락처</a></li></ul>            
        </div>
    )
}
