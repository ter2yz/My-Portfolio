import React, { useState, useEffect } from "react";

import HeroSection from "../components/Homepage/Hero";
import AboutMeSection from "../components/Homepage/AboutMe";
import FeatureProjectBlock from "../components/Homepage/FeatureProjectBlock";
import TransitionCanvas from "../components/TransitionCanvas";
import { SA_GET_FEATURE_PROJECTS } from "../components/Sanity/Queries";

export default function Home() {
    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {
        SA_GET_FEATURE_PROJECTS.then((data) => setProjectsData(data)).catch(
            console.error
        );
    }, []);

    return (
        <div>
            <TransitionCanvas />
            <HeroSection />
            <AboutMeSection />
            <div id="projectList" className="w-full">
                {projectsData &&
                    projectsData.map((project, index) => (
                        <FeatureProjectBlock
                            key={project.content.slug}
                            project={project.content}
                            isOdd={index % 2 != 0}
                        />
                    ))}
            </div>
        </div>
    );
}
