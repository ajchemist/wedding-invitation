"use client";

import * as Icon from '@alchemiakr/web-components/icon';
import { useRef, useEffect, useState, forwardRef } from "react";
import { UnbalancedTwoStackSVGHamgurger } from '@/components/Hamburger';
import { NavPanel } from '@/components/NavPanel';

export default function Page() {
    const [ hamburgerState, setHamburgerState ] = useState(false);
    const toggleHamburger = () => { setHamburgerState(prevState => !prevState) };

    return (
        <nav aria-label="Global" className={`h-12 flex items-center`}>
            <div className={`grow`}></div>
            <UnbalancedTwoStackSVGHamgurger isOpen={hamburgerState} toggle={toggleHamburger}  />
            <NavPanel isOpen={hamburgerState} />
        </nav>
    )
}