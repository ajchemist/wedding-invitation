"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
        const handleFirstInteraction = () => {
            if (audioRef.current == null) return;

            audioRef.current.play().then(() => {
                setIsPlaying(true);
                // Remove event listeners after successful play
                window.removeEventListener('click', handleFirstInteraction);
                window.removeEventListener('keydown', handleFirstInteraction);
                window.removeEventListener('mousemove', handleFirstInteraction);
                window.removeEventListener('touchstart', handleFirstInteraction);
            }).catch((error) => {
                console.error("Audio play failed:", error);
            });
        };

        window.addEventListener('click', handleFirstInteraction);
        window.addEventListener('keydown', handleFirstInteraction);
        window.addEventListener('mousemove', handleFirstInteraction);
        window.addEventListener('touchstart', handleFirstInteraction);

        return () => {
            // Cleanup event listeners
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('mousemove', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} loop={true} src="https://wedding-11-11.s3.ap-northeast-2.amazonaws.com/Yestalgia+-+Invitation.wav"></audio>
            <button onClick={togglePlayback}>
                <Image src={isPlaying ? "https://i.imgur.com/PDowdV0.gif" : "https://i.imgur.com/QEO9rZr.webp"} alt="play" width={65} height={65} />
            </button>
        </>
    )
}