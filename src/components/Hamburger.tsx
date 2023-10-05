"use client";

import { useRef, useEffect, useState, createContext, useContext } from "react";

interface Props {
    isOpen: boolean;
    toggle: () => void;
}

// 

type HamburgerContext = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerContext = createContext<HamburgerContext | null>(null);

export const useHamburgerContext = (): HamburgerContext => {
    const ctx = useContext(HamburgerContext);
    if (!ctx) {
        throw new Error("useHamburgerContext must be used within a HamburgurContextProvider")
    };
    return ctx;
};

export const HamgurgerContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <HamburgerContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </HamburgerContext.Provider>
    );
};

// 

export const UnbalancedTwoStackSVGHamgurger = ({ isOpen, toggle }: Props) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!svgRef.current) return;

        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const bottomOpen = svgRef.current.querySelector("#globalnav-anim-menutrigger-bread-bottom-open") as SVGAnimateElement | null;
        const bottomClose = svgRef.current.querySelector("#globalnav-anim-menutrigger-bread-bottom-close") as SVGAnimateElement | null;
        const topOpen = svgRef.current.querySelector("#globalnav-anim-menutrigger-bread-top-open") as SVGAnimateElement | null;
        const topClose = svgRef.current.querySelector("#globalnav-anim-menutrigger-bread-top-close") as SVGAnimateElement | null;

        if (isOpen) {
            bottomOpen?.beginElement();
            topOpen?.beginElement();
        } else {
            bottomClose?.beginElement();
            topClose?.beginElement();
        }
    }, [isOpen]);

    return (
        <div className={`flex items-center`}>
            <button aria-label="HamgurgerButton" onClick={toggle} className={`z-10 flex items-center text-black opacity-80 cursor-pointer`}>
                <svg ref={svgRef} width="18" height="18" viewBox="0 0 18 18">
                    <polyline className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom`} id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12">
                        <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
                        <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
                    </polyline>
                    <polyline className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-top`} id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="6 5, 16 5">
                        <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="6 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
                        <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 6 5, 16 5"></animate>
                    </polyline>
                </svg>
            </button>
        </div>
    )
}
