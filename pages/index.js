import React, { useState, useEffect } from "react";
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
    const { isLandingPage } = useGlobalStatus();

    useEffect(() => {
        SA_GET_FEATURE_PROJECTS.then((data) => setProjectsData(data))
            .then(() => setIsLoading(false))
            .catch(console.error);
        setIsLoading(false);
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
                <AboutMeSection />
                <div id="projectList" className="w-full">
                    {projectsData &&
                        projectsData.map((project, index) => (
                            <div key={project.content.slug}>
                                <FeatureProjectBlock
                                    project={project.content}
                                    isOdd={index % 2 === 0}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
