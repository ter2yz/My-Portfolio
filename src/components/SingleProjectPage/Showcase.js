import React from 'react'
// import { BackgroundImage } from "react-image-and-background-image-fade"

export default function Showcase({ showcaseImage }) {
    return (
        <div
            className="w-full h-auto lg:h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${showcaseImage.url})` }}
        >
            {/* <BackgroundImage
                src={showcaseImage.url}
                width="100%"
                height="100%"
                lazyLoad
                className="bg-fixed bg-cover bg-center bg-no-repeat"
            > */}
            <div className="py-80 lg:py-0"></div>
            {/* </BackgroundImage> */}
        </div>
    )
}
