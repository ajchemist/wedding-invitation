"use client";

import { useState, useEffect, useRef } from "react";
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
    const ref = useRef<HTMLUListElement>(null);
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

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.gtag('event', 'view', {
                        "event_category": "Image Impression",
                        "event_label": entry.target.getAttribute('data-image-link')
                    })
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        });

        ref.current.querySelectorAll('img').forEach(img => {
            observer.observe(img);
        });

        return () => {
            observer.disconnect();
        }
    }, [ref]);

    return (
        <>
            <Lightbox
                {...lightboxProps}
            />
            <div className={`w-full h-snap-gallery`}>
                <ul ref={ref} className={`p-4 md:px-8 lg:px-12 flex overflow-x-scroll gap-x-4 h-80 sm:h-128 max-h-screen`}>
                    {images.map((image, idx) => (
                        <li
                            key={idx}
                            className={`max-w-sm landscape:w-5/12 w-7/12 md:w-5/12 lg:w-1/4 shrink-0 relative`}
                            onClick={() => {
                                setIndex(idx)
                                window.gtag('event', 'click', {
                                    'event_category': 'Image Interaction',
                                    'event_label': image.link
                                })
                            }}
                        >
                            <BlurImage
                                className={`rounded-lg`}
                                src={image.link}
                                alt={``}
                                fill={true}
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                            // width={image.width}
                            // height={image.height}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
