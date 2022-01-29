import React, { useState } from "react";

export default function Mockup({ mockupImage }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className="w-full h-auto lg:h-screen bg-gray-100">
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <div className="relative px-4 py-20 lg:py-0">
                    <img
                        className={`relative w-full max-w-screen-md max-h-[calc(100vh-4rem)] z-10 transition ${
                            imgLoaded
                                ? "visible opacity-100"
                                : "invisible opacity-0"
                        }`}
                        src={mockupImage?.url}
                        onLoad={() => setImgLoaded(true)}
                        alt=""
                    />
                    <div className="absolute top-20 lg:top-0 -left-10 w-96 h-96 mix-blend-multiply filter blur-xl opacity-0 sm:opacity-50 animate-blob bg-purple-300 rounded-full"></div>
                    <div className="absolute top-20 lg:top-0 left-32 w-96 h-96 mix-blend-multiply filter blur-xl opacity-0 sm:opacity-50 animate-blob animation-delay-200 bg-yellow-300 rounded-full"></div>
                    <div className="absolute top-20 lg:top-10 left-10 w-96 h-96 mix-blend-multiply filter blur-xl opacity-0 sm:opacity-50 animate-blob bg-pink-300 animation-delay-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
