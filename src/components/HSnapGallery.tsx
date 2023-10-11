"use client";

import { useState } from "react";
import { ImageType } from "types/app";
import Image from "next/image";
import Lightbox, { LightboxExternalProps } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useWindowSize } from "@/components/Responsive"
import { makeLightboxProps } from "@/components/Lightbox";
import BlurImage from "@/components/BlurImage";

type HSnapGalleryProps = {
    images: ImageType[];
}

export default function HSnapGallery({ images }: HSnapGalleryProps) {
    const [index, setIndex] = useState(-1);
    const size = useWindowSize();

    let lightboxProps: LightboxExternalProps = makeLightboxProps({
        images,
        index,
        render: { buttonNext: () => null, buttonPrev: () => null },
        on: { view: ({ index }) => setIndex(index) },
        open: index >= 0,
        close: () => setIndex(-1)
    });
    if (size.width !== undefined && size.height !== undefined && size.width > 640) {
        lightboxProps.render = {};
    }
    if (size.width !== undefined && size.height !== undefined && size.height / size.width > 1.414) {
        lightboxProps.plugins = [Thumbnails];
        lightboxProps.thumbnails = { width: 96, height: 64, gap: 4 };
    }

    return (
        <>
            <Lightbox
                {...lightboxProps}
            />
            <div className={`w-full h-snap-gallery`}>
                <ul className={`p-4 md:px-8 lg:px-12 flex overflow-x-scroll gap-x-4`}>
                    {images.map((image, idx) => (
                        <li
                            key={idx}
                            className={`max-w-sm w-7/12 md:w-5/12 lg:w-1/4 shrink-0`}
                            onClick={() => setIndex(idx)}
                        >
                            <BlurImage
                                className={`rounded-lg`}
                                src={image.link}
                                alt={``}
                                width={image.width}
                                height={image.height}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
