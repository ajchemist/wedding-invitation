"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Imgur from '@/integrations/Imgur';
import * as ImgurComponent from '@/integrations/Imgur/Component';
import Lightbox, { LightboxExternalProps } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useWindowSize } from "@/components/Responsive"
import { makeLightboxProps } from "@/components/Lightbox";

export const Gallery = ({ images }: { images: Imgur.Image[] }) => {
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

    useEffect(() => {
        if (document.querySelectorAll('[data-image-link]').length <= 0) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.gtag('event', 'view', {
                        "event_category": "Image Impression",
                        "event_label": entry.target.getAttribute('data-image-link')
                    })
                    observer.unobserve(entry.target);
                }
                console.log(entry, entry.target.getAttribute('data-image-link'))
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        });

        document.querySelectorAll('[data-image-link]').forEach(img => {
            observer.observe(img)
        })

        return () => {
            observer.disconnect();
        }
    }, [])

    return (
        <>
            <Lightbox
                {...lightboxProps}
            />
            <div className={`md:hidden landscape:hidden grid grid-cols-2 gap-2`}>
                {allColumns(2).map((column, columnIndex) => (
                    <div key={columnIndex} className={`flex flex-col gap-2`}>
                        {column.map((image, idx) => (
                            <div key={idx} className={`group shadow-md bg-gray-100 rounded overflow-hidden cursor-pointer`}>
                                <ImgurComponent.BlurImage image={image} onClick={() => {
                                    setIndex(columnIndex + idx * 2)
                                    window.gtag('event', 'click', {
                                        'event_category': 'Image Interaction',
                                        'event_label': image.link
                                    })
                                }} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className={`hidden md:grid landscape:grid lg:hidden lg:landscape:hidden grid-cols-3 gap-3`}>
                {allColumns(3).map((column, columnIndex) => (
                    <div key={columnIndex} className={`flex flex-col gap-3`}>
                        {column.map((image, idx) => (
                            <div key={idx} className={`group shadow-md bg-gray-100 rounded overflow-hidden cursor-pointer`}>
                                <ImgurComponent.BlurImage image={image} onClick={() => {
                                    setIndex(columnIndex + idx * 3)
                                    window.gtag('event', 'click', {
                                        'event_category': 'Image Interaction',
                                        'event_label': image.link
                                    })
                                }} />
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
                                <ImgurComponent.BlurImage image={image} onClick={() => {
                                    setIndex(columnIndex + idx * 4)
                                    window.gtag('event', 'click', {
                                        'event_category': 'Image Interaction',
                                        'event_label': image.link
                                    })
                                }} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
};