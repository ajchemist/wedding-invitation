
"use client";

import { HTMLAttributes, useState } from "react";
import Image, { ImageProps } from "next/image";
import * as Imgur from '@/integrations/Imgur';

interface BlurImageProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
    image: Imgur.Image;
}

export const BlurImage = ({ image, ...props }: BlurImageProps) => {
    const [isLoading, setLoading] = useState<boolean>(true);

    return (
        <Image
            alt=""
            src={image.link.replace(/\.(jpg|jpeg|png)$/, '.webp')}
            width={image.width}
            height={image.height}
            className={`group-hover:opacity-75 duration-700 ease-in-out ${isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}}`}
            onLoadingComplete={() => setLoading(false)}
            {...props}
        />
    )
}