"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Imgur from '@/integrations/Imgur';
import * as ImgurComponent from '@/integrations/Imgur/Component';
import Lightbox, { LightboxExternalProps, SlideImage } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useWindowSize } from "@/components/Responsive"

const slideImages = (images: Imgur.Image[]): SlideImage[] => images.map((image) => ({
    src: image.link.replace(/\.(jpg|jpeg|png)$/, '.webp'),
    width: image.width,
    height: image.height,
    alt: ''
}));

export const Gallery = ({ images }: { images: Imgur.Image[] }) => {
    const [index, setIndex] = useState(-1);
    const size = useWindowSize();

    let lightboxProps: LightboxExternalProps = {
        index: index,
        slides: slideImages(images),
        render: { buttonNext: () => null, buttonPrev: () => null },
        open: index >= 0,
        close: () => setIndex(-1)
    };
    if (size.width !== undefined && size.width > 768) {
        lightboxProps.render = {};
    }
    if (size.width !== undefined && size.height !== undefined && size.height / size.width > 1.5) {
        lightboxProps.plugins = [Thumbnails];
        lightboxProps.thumbnails = { width: 96, height: 64, gap: 4 };
    }

    function getColumn(columnIndex: number, totalColumnCount: number): Imgur.Image[] {
        return images.filter((_image, idx) => idx % totalColumnCount === columnIndex);
    }

    function allColumns(totalColumnCount: number) {
        let i = 0;
        const arr: Imgur.Image[][] = [];
        while (i < totalColumnCount) {
            arr.push(getColumn(i, totalColumnCount));
            i++;
        }
        return arr;
    }

    return (
        <>
            <Lightbox
                {...lightboxProps}
            />
            <div className={`md:hidden grid grid-cols-2 gap-2`}>
                {allColumns(2).map((column, columnIndex) => (
                    <div key={columnIndex} className={`flex flex-col gap-2`}>
                        {column.map((image, idx) => (
                            <div key={idx} className={`group shadow-md bg-gray-100 rounded overflow-hidden cursor-pointer`}>
                                <ImgurComponent.BlurImage onClick={() => setIndex(columnIndex + idx * 2)} image={image} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className={`hidden md:grid lg:hidden grid-cols-3 gap-3`}>
                {allColumns(3).map((column, columnIndex) => (
                    <div key={columnIndex} className={`flex flex-col gap-3`}>
                        {column.map((image, idx) => (
                            <div key={idx} className={`group shadow-md bg-gray-100 rounded overflow-hidden cursor-pointer`}>
                                <ImgurComponent.BlurImage image={image} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className={`hidden lg:grid grid-cols-4 gap-4`}>
                {allColumns(4).map((column, columnIndex) => (
                    <div key={columnIndex} className={`flex flex-col gap-4`}>
                        {column.map((image, idx) => (
                            <div key={idx} className={`group shadow-md bg-gray-100 rounded overflow-hidden cursor-pointer`}>
                                <ImgurComponent.BlurImage image={image} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
};