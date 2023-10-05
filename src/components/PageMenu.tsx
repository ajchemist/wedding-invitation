"use client";

import * as Icon from '@alchemiakr/web-components/icon';
import { useRef, useEffect, useState, forwardRef } from "react";
import { UnbalancedTwoStackSVGHamgurger } from '@/components/Hamburger';
import NavPanel, { NavPanelProps } from '@/components/NavPanel';
import AudioPlayer, { AudioPlayerProps } from '@/components/AudioPlayer';

interface PageMenuProps {
    navPanelProps: Omit<NavPanelProps, 'isOpen' | 'setIsOpen'>;
    audioPlayerProps: AudioPlayerProps;
}

export default function Page({ navPanelProps, audioPlayerProps }: PageMenuProps) {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const [isSticky, setSticky] = useState<boolean>(false);
    const [hamburgerState, setHamburgerState] = useState<boolean>(false);
    const toggleHamburger = () => { setHamburgerState(prevState => !prevState) };

    useEffect(() => {
        if (!navRef.current) return;
        if (!sentinelRef.current) return

        const navHeight = navRef.current.getBoundingClientRect().height;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.debug(entry)
                if (!entry.isIntersecting) {
                    setSticky(!entry.isIntersecting)
                } else {
                    setSticky(false)
                }
            },
            {
                root: null,
                rootMargin: `${navHeight}px`,
                threshold: 1,
            }
        )

        observer.observe(sentinelRef.current);

        return () => {
            observer.disconnect()
        }
    }, [navRef, sentinelRef])

    return (
        <>
            <div ref={sentinelRef}></div>
            <nav ref={navRef} aria-label="Global" className={`${isSticky ? 'sticky top-0 bg-gray-100 bg-opacity-80 border-b border-gray-300 backdrop-blur-md' : ''} w-full h-12 flex items-center z-10`}>
                <div className={`grow`}></div>
                <div className={`w-[44px] h-[44px] flex items-center`}>
                    <AudioPlayer {...audioPlayerProps} />
                </div>
                <div className={`flex items-center mt-1 pl-2.5 pr-5`}>
                    <UnbalancedTwoStackSVGHamgurger isOpen={hamburgerState} toggle={toggleHamburger} />
                </div>
                <NavPanel isOpen={hamburgerState} setIsOpen={setHamburgerState} {...navPanelProps} />
            </nav>
        </>
    )
}