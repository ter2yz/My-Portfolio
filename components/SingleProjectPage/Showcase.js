import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useWindowSize } from '../Hook/CustomHook'
// import { BackgroundImage } from "react-image-and-background-image-fade"

export default function Showcase({ showcaseImage }) {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const showcaseDivRef = useRef(null)
    const [initPosition, setInitPosition] = useState(null)
    const [containerHeight, setContainerHeight] = useState(0)
    const [parallaxPercent, setParallaxPercent] = useState(0)
    const { height } = useWindowSize()

    const handleScroll = () => {
        let scrollY = window.scrollY
        let offset = (scrollY + height) - initPosition
        let percentage = ((offset / (containerHeight + height)) * 80) + 20
        setParallaxPercent(percentage)
    }

    useEffect(() => {
        if (inView) {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    useEffect(() => {
        if (showcaseDivRef.current) {
            setInitPosition(showcaseDivRef.current.getBoundingClientRect().top)
            setContainerHeight(showcaseDivRef.current.getBoundingClientRect().height)
        }
    }, [])

    return (
        <div ref={showcaseDivRef}>
            <div
                ref={ref}
                className="w-full h-auto lg:h-screen"
            >
                {/* <BackgroundImage
                    src={showcaseImage.url}
                    width="100%"
                    height="100%"
                    lazyLoad
                    className="lg:bg-fixed bg-cover bg-center bg-no-repeat"
                    style={{ backgroudPosition: `${parallaxPercent}%` }}
                >
                    <div className="py-80 lg:py-0">
                        <p className="text-white font-bold bg-black-primary">{`Header inside viewport ${inView}.`}</p>
                    </div>
                </BackgroundImage> */}
                <div
                    className="w-full h-full lg:bg-fixed bg-cover bg-no-repeat"
                    style={{ background: `url(${showcaseImage.url}) 0% ${parallaxPercent}%` }}
                >
                    <div className="py-80 lg:py-0"> </div>
                </div>
            </div>
        </div>
    )
}
