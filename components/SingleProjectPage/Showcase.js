import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../Hook/CustomHook";
// import { BackgroundImage } from "react-image-and-background-image-fade"

export default function Showcase({ showcaseImage }) {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const showcaseDivRef = useRef(null);
    const [initPosition, setInitPosition] = useState(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [parallaxPercent, setParallaxPercent] = useState(0);
    const { height } = useWindowSize();

    const handleScroll = () => {
        let scrollY = window.scrollY;
        let offset = scrollY + height - initPosition;
        let percentage = (offset / (containerHeight + height)) * 80 + 20;
        setParallaxPercent(percentage);
    };

    useEffect(() => {
        if (inView) {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    useEffect(() => {
        if (showcaseDivRef.current) {
            setInitPosition(showcaseDivRef.current.offsetTop);
            setContainerHeight(
                showcaseDivRef.current.getBoundingClientRect().height
            );
        }
    }, []);

    return (
        <div ref={showcaseDivRef}>
            <div ref={ref} className="w-full h-auto lg:h-screen">
                <div
                    className="w-full h-full lg:bg-fixed bg-no-repeat"
                    style={{
                        backgroundImage: `url(${showcaseImage?.url})`,
                        backgroundPositionX: "0%",
                        backgroundPositionY: `${parallaxPercent}%`,
                    }}
                >
                    <div className="py-80 lg:py-0"> </div>
                </div>
            </div>
        </div>
    );
}
