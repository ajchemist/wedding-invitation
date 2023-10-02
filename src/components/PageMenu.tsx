"use client";

import * as Icon from '@alchemiakr/web-components/icon';
import { useRef, useEffect, useState, forwardRef } from "react";
import { UnbalancedTwoStackSVGHamgurger } from '@/components/Hamburger';
import NavPanel, { NavPanelProps } from '@/components/NavPanel';

export default function Page({ navPanelProps }: { navPanelProps: Omit<NavPanelProps, 'isOpen' | 'setIsOpen'> }) {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [isSticky, setSticky] = useState<boolean>(false);
    const [hamburgerState, setHamburgerState] = useState<boolean>(false);
    const toggleHamburger = () => { setHamburgerState(prevState => !prevState) };

    useEffect(() => {
        if (!sentinelRef.current) return

        const navHeight = sentinelRef.current.getBoundingClientRect().height;

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
    }, [sentinelRef])

    return (
        <>
            <div ref={sentinelRef}></div>
            <nav aria-label="Global" className={`${isSticky ? 'sticky top-0 bg-gray-100 bg-opacity-80 border-b border-gray-300 backdrop-blur-md' : ''} w-full h-12 flex items-center z-10`}>
                <div className={`grow`}></div>
                <UnbalancedTwoStackSVGHamgurger isOpen={hamburgerState} toggle={toggleHamburger} />
                <NavPanel isOpen={hamburgerState} setIsOpen={setHamburgerState} {...navPanelProps} />
            </nav>
        </>
    )
}