"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export interface AudioPlayerProps {
    src: string | null;
    mediaMetadata: MediaMetadataInit;
}

export default function AudioPlayer({ src, mediaMetadata }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const play = () => {
        if (audioRef.current == null) return;
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        if (audioRef.current == null) return;
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const togglePlayback = () => {
        if (audioRef.current == null) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(prevState => !prevState);
    }

    useEffect(() => {
        // 'scroll', 'wheel', 'mousemove' 의도된 유저 인터랙션으로 간주하지 않음
        const handleFirstInteraction = () => {
            if (audioRef.current == null) return;

            audioRef.current.play().then(() => {
                setIsPlaying(true);
                // Remove event listeners after successful play
                window.removeEventListener('click', handleFirstInteraction);
                window.removeEventListener('keydown', handleFirstInteraction);
                window.removeEventListener('touchstart', handleFirstInteraction);
            }).catch((error) => {
                console.error("Audio play failed:", error);
            });
        };

        window.addEventListener('click', handleFirstInteraction);
        window.addEventListener('keydown', handleFirstInteraction);
        window.addEventListener('touchstart', handleFirstInteraction);

        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata(mediaMetadata);
            navigator.mediaSession.setActionHandler('play', play);
            navigator.mediaSession.setActionHandler('pause', pause)
        }

        return () => {
            // Cleanup event listeners
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
        };
    }, [mediaMetadata]);

    return (
        <>
            <audio ref={audioRef} loop={true} src={src ?? ''}></audio>
            <button onClick={togglePlayback}>
                <Image src={isPlaying ? "https://i.imgur.com/PDowdV0.gif" : "https://i.imgur.com/QEO9rZr.webp"} alt="play" width={65} height={65} />
            </button>
        </>
    )
}