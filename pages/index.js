import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import HeroSection from "../components/Homepage/Hero";
import AboutMeSection from "../components/Homepage/AboutMe";
import ShowcaseSectionDesktop from "../components/Homepage/ShowcaseSectionDesktop";
import FeatureProjectBlock from "../components/Homepage/FeatureProjectBlock";
import TransitionCanvas from "../components/TransitionCanvas";
import { SA_GET_FEATURE_PROJECTS } from "../components/Sanity/Queries";
import Head from "next/head";

export default function Home() {
    const [projectsData, setProjectsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [xPosition, setXPosition] = useState(0);
    const [percentageBg, setPercentageBg] = useState();
    const xValue = useRef(0);
    const aboutSectionRef = useRef();
    const projectListSectionRef = useRef();

    useEffect(() => {
        SA_GET_FEATURE_PROJECTS.then((data) => setProjectsData(data))
            .then(() => setIsLoading(false))
            .catch(console.error);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.scrollY >=
                aboutSectionRef?.current?.offsetHeight +
                    aboutSectionRef?.current?.offsetTop
            ) {
                console.log(
                    "Case 1: ",
                    -(
                        window.scrollY -
                        (aboutSectionRef?.current?.offsetHeight +
                            aboutSectionRef?.current?.offsetTop)
                    )
                );
                xValue.current = -(
                    window.scrollY -
                    (aboutSectionRef?.current?.offsetHeight +
                        aboutSectionRef?.current?.offsetTop)
                );
                setXPosition(
                    -(
                        window.scrollY -
                        (aboutSectionRef?.current?.offsetHeight +
                            aboutSectionRef?.current?.offsetTop)
                    )
                );
            }
            if (
                xValue.current <=
                -(
                    projectListSectionRef?.current?.offsetHeight -
                    window.innerWidth
                )
            ) {
                console.log(
                    "Case 2: ",
                    -(
                        projectListSectionRef?.current?.offsetHeight -
                        window.innerWidth
                    )
                );
                xValue.current =
                    window.scrollY -
                    (projectListSectionRef?.current?.offsetTop +
                        (projectListSectionRef?.current?.offsetHeight -
                            window.innerWidth));
                setPercentageBg(
                    (window.scrollY -
                        (projectListSectionRef?.current?.offsetTop +
                            (projectListSectionRef?.current?.offsetHeight -
                                window.innerWidth))) /
                        innerWidth
                );
                setXPosition(
                    -(
                        projectListSectionRef?.current?.offsetHeight -
                        window.innerWidth
                    )
                );
            }
            if (window.scrollY < aboutSectionRef?.current?.offsetHeight) {
                xValue.current = 0;
                setXPosition(0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>
                    TerryZ Studio | A Pro Front End Developer in Melbourne
                </title>
                <meta
                    name="description"
                    content="Australia's Leading ROI-Driven Digital Agency. Grow Your Business With SEO ✔ Social Media Marketing ✔ PPC Management ✔ Call 1300-858-250 ☎"
                />
                <meta
                    name="description"
                    content="A Melbourne-based Pro Front-End Developer who enjoy bridging the gap between business and tech while linking beautiful design with functionality."
                />
                <meta content="TerryZ Studio | A Pro Front End Developer in Melbourne" />
            </Head>
            <div className="fixed top-0 left-0 bg-red-600 z-50">
                {xValue.current} / {percentageBg * 100}%
            </div>
            <div className="relative">
                <HeroSection />
                <div ref={aboutSectionRef}>
                    <AboutMeSection />
                </div>
                <ShowcaseSectionDesktop
                    projectListSectionRef={projectListSectionRef}
                    xPosition={xPosition}
                    projectsData={projectsData}
                    percentageBg={percentageBg}
                />
                <AboutMeSection />
            </div>
        </>
    );
}
