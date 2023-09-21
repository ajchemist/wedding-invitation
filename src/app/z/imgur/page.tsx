import * as Icon from '@alchemiakr/web-components/icon';
import { useRef, useEffect, useState, forwardRef } from "react";
import { ZBlockContainer, ZContainer } from '../layout';
import { fetchAlbumImages } from '@/integrations/Imgur';
import Image from 'next/image';
import * as Imgur from '@/integrations/Imgur';
import SampleBlurImage from '@/components/SampleBlurImage';

function Gallery({ images }: { images: Imgur.Image[] } ) {
    return (
        <div className={`mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8`}>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images.map((image) => ( 
                    <SampleBlurImage key={image.id} image={image} />
                ))}
            </div>
        </div>
    )
}

export default async function Page() {
    const images = await fetchAlbumImages({}, 'ZxwToMh');
    return (
        <>
            <ZBlockContainer>
                <Gallery images={images.data} />
            </ZBlockContainer>
        </>
    )
}