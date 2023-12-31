"use client";

import { useState } from "react";
import Image from "next/image";
import * as Imgur from '@/integrations/Imgur';

export default function SampleBlurImage({ image }: { image: Imgur.Image }) {
    const [isLoading, setLoading] = useState<boolean>(true);

    return (
        <a href="#" className={`group`}>
            <div className={`aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200`}>
                <Image 
                    alt=""
                    src={image.link.replace(/\.jpg$/, '.webp')}
                    fill={true}
                    style={{objectFit: 'cover'}}
                    // layout="fill"
                    // objectFit="cover"
                    className={`group-hover:opacity-75 duration-700 ease-in-out ${isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}}`}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
            <h3 className={`mt-4 text-sm text-gray-700`}>{image.id}</h3>
            <p className={`mt-1 text-lg font-medium text-gray-900`}>{image.description}</p>
        </a>
    )
}