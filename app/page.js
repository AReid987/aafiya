"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NotebookScene from './src/NotebookScene';
import { Canvas } from '@react-three/fiber';
import { SparklesCore } from "./components/ui/sparkles";


const quotesData = {
    "quotes": [
        {
            "quote": "Love is the ability and willingness to allow those that you care for to be what they choose for themselves without any insistence that they satisfy you.",
            "author": "Wayne Dyer"
        },
        {
            "quote": "Love is written by the soul.",
            "author": "A.D. Posey"
        },
        {
            "quote": "Love is a flower that should never cease to grow. Nurture it, and it will outlive you. Neglect it, and it will wilt away and die.",
            "author": "Suzy Kassem"
        },
        {
            "quote": "Love is the poetry of the senses!",
            "author": "Honoré de Balzac"
        },
        {
            "quote": "Love is the beauty of the soul.",
            "author": "Saint Augustine"
        },
        {
            "quote": "Love is the energy of life.",
            "author": "Robert Browning"
        },
        {
            "quote": "Love is space and time measured by the heart.",
            "author": "Marcel Proust"
        },
        {
            "quote": "Choose to be in love!",
            "author": "Debasish Mridha"
        },
        {
            "quote": "To love is to recognize yourself in another.",
            "author": "Eckhart Tolle"
        },
        {
            "quote": "Love is alive when there's music in your heart.",
            "author": "A.D. Posey"
        },
        {
            "quote": "Love is when the other person's happiness is more important than your own.",
            "author": "H. Jackson Brown, Jr."
        },
        {
            "quote": "In love, one and one are one.",
            "author": "Jean-Paul Sartre"
        }
    ]
};

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentIndex((currentIndex + 1) % quotesData.quotes.length);
                setOpacity(1);
            }, 1000); // Match the transition duration
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-zinc-900 p-8">
            <div className="h-full w-full bg-bg flex flex-col items-center justify-center overflow-hidden rounded-md">
                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={0.3}
                    particleDensity={300}
                    className="w-full h-full absolute inset-0"
                    particleColor="#FFFFFF"
                />
                <h1 className="text-6xl font-bold bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent animate-text mb-4 relative">
                    Aafiya
                </h1>
                <div className="w-[40rem] h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />
                </div>

                <p className="text-lg mb-4 text-zinc-400 font-family-poem-text relative">
                    Vigor. Vitality. <br />
                    Health. Freedom from illness. <br />
                    To forgive. To cure.
                </p>
                {/* <Link href="/anthology/poem1" className="glass-card">
                    Anthology One
                </Link> */}
                <div
                    id="quote-container"
                    className="glass-card opacity-50 mt-8 p-5 rounded-lg text-center text-zinc-200 transition-opacity duration-1000 text-xl relative"
                >
                    <p id="quote-text" className="mb-2">{quotesData.quotes[currentIndex].quote}</p>
                    <p id="quote-author" className="text-right italic text-sm text-zinc-200">{quotesData.quotes[currentIndex].author}</p>
                </div>
                <div className="glass-card bg-gradient-to-r from-pink-500 to-purple-500 mt-8 p-5 rounded-lg text-center text-zinc-200 relative">
                    <Link href="/anthology/poem1">
                        Number One: "True"
                    </Link>
                </div>
            </div>
        </div>
    );
}
