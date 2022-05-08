import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import HeroSection from "../components/Homepage/Hero";
import AboutMeSection from "../components/Homepage/AboutMe";
import FeatureProjectBlock from "../components/Homepage/FeatureProjectBlock";
import TransitionCanvas from "../components/TransitionCanvas";
import { SA_GET_FEATURE_PROJECTS } from "../components/Sanity/Queries";
import { useGlobalStatus } from "../lib/contexts/GlobalContext";
import Head from "next/head";

export default function Home() {
    const [projectsData, setProjectsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [xPosition, setXPosition] = useState(0);
    const [percentageBg, setPercentageBg] = useState();
    const xValue = useRef(0);
    const { isLandingPage } = useGlobalStatus();
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
                {isLoading && (
                    <div className="w-screen h-screen fixed z-40 inset-0 bg-black-primary"></div>
                )}
                <div
                    className={clsx(
                        "h-screen fixed z-40 inset-0 bg-black-primary transition-all duration-200",
                        isLandingPage && "w-screen opacity-100",
                        !isLandingPage && "w-0 opacity-0"
                    )}
                ></div>
                <TransitionCanvas />
                <HeroSection />
                <div ref={aboutSectionRef}>
                    <AboutMeSection />
                </div>
                <div
                    id="projectList"
                    className="relative w-full h-[200vw]"
                    ref={projectListSectionRef}
                >
                    <div
                        className="sticky top-16 flex justify-between items-center pt-8 pb-8 h-screen w-[200vw] will-change-transform"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `translate3d(${xPosition}px, 0px, 0px)`,
                        }}
                    >
                        {projectsData &&
                            projectsData.map((project, index) => (
                                <div
                                    key={project.content.slug}
                                    className="w-full"
                                >
                                    <FeatureProjectBlock
                                        project={project.content}
                                        isOdd={index % 2 === 0}
                                        percentage={percentageBg}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <AboutMeSection />
            </div>
        </>
    );
}
