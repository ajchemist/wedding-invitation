"use client";

import { Metadata } from 'next';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const metadata: Metadata = {
    title: 'Z',
    description: 'test components'
}

export default function ZLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='z-layout'>
            <nav></nav>
            <main className="container">
                {children}
            </main>
        </div>
    );
}

const useSize = () => {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateSize = () => {
            if (ref.current) {
                setSize({
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight
                });
            }
        }

        // 초기 사이즈 업데이트
        updateSize();

        // 크기가 변경될 때마다 업데이트 (예: 창 크기 조절)
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);    

    return { size, ref };
}

export function ZContainer({ children }: { children: React.ReactNode }) {
    const { size, ref } = useSize();

    return (
        <div className='z-container'>
            <div ref={ref} className="inline-block border border-red-400">
                {children}
            </div>
            <div className="mt-10">
                W: {size.width} H: {size.height}
            </div>
        </div>
    )
}

export function ZBlockContainer({ children }: { children: React.ReactNode }) {
    const { size, ref } = useSize();

    return (
        <div className='z-block-container'>
            <h1>&lt;ZBlockContainer&gt;</h1>
            <div ref={ref} className="block p-10 border border-red-400">
                {children}
            </div>
            <div className="">
                W: {size.width} H: {size.height}
            </div>
        </div>
    )
}