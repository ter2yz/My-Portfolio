import React, { useState, useEffect } from 'react'

import HeroSection from '../components/Homepage/Hero'
import AboutMeSection from '../components/Homepage/AboutMe'
import FeatureProjectBlock from '../components/Homepage/FeatureProjectBlock'
import TransitionCanvas from '../components/TransitionCanvas'
import { SA_GET_FEATURE_PROJECTS } from '../components/Sanity/Queries'

export default function Home() {

    const [projectsData, setProjectsData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // SA_GET_FEATURE_PROJECTS
        //     .then((data) => setProjectsData(data))
        //     .then(() => setIsLoading(false))
        //     .catch(console.error);
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return (
            <div className="w-screen h-screen fixed z-40 inset-0 bg-black-primary"></div>
        )
    }

    return (
        <div>
            <TransitionCanvas />
            <HeroSection />
            <AboutMeSection />
            <div id="projectList" className="w-full">
                {
                    projectsData && projectsData.map((project, index) =>
                        <FeatureProjectBlock
                            key={project.content.slug}
                            project={project.content}
                            isOdd={index % 2 === 0}
                        />
                    )
                }
            </div>
        </div>
    )
}
