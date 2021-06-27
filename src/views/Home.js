import React, { useState, useEffect } from 'react'
import { useQuery } from "@apollo/client";

import HeroSection from '../components/Homepage/Hero'
import AboutMeSection from '../components/Homepage/AboutMe'
import { GET_FEATURE_PROJECTS } from '../components/GraphQL/Queries'
import FeatureProjectBlock from '../components/Homepage/FeatureProjectBlock';

export default function Home() {

    const { data } = useQuery(GET_FEATURE_PROJECTS);
    const [projectsData, setProjectsData] = useState(null)


    useEffect(() => {
        if (data) {
            setProjectsData(data.projectsCollection.items)
        }
    }, [data])

    return (
        <div>
            <HeroSection />
            <AboutMeSection />
            {
                projectsData && projectsData.map((project, index) =>
                    <FeatureProjectBlock
                        key={project.sys.id}
                        project={project}
                        isOdd={index % 2 === 0}
                    />
                )
            }
        </div>
    )
}
