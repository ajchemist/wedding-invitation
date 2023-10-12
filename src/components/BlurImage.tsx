"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface BlurImageProps extends ImageProps {
}

export default function BlurImage({ src, alt, className, ...props }: BlurImageProps) {
    const [isLoading, setLoading] = useState<boolean>(true);

    return (
        <Image
            src={src}
            alt={alt}
            className={`${className} group-hover:opacity-75 duration-700 ease-in-out ${isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}}`}
            onLoadingComplete={() => setLoading(false)}
            {...props}
        />
    )
}