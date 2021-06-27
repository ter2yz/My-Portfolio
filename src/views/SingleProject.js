import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";

import { GET_ENTRY_BY_SLUG } from '../components/GraphQL/Queries'
import Hero from '../components/SingleProjectPage/Hero'
import Mockup from '../components/SingleProjectPage/Mockup';
import Overview from '../components/SingleProjectPage/Overview';
import Showcase from '../components/SingleProjectPage/Showcase';
import TextBlock from '../components/SingleProjectPage/TextBlock';
import BackButton from '../components/BackButton';
import TransitionCanvas from '../components/TransitionCanvas';

export default function SingleProject() {
    let { slug } = useParams()

    const { data } = useQuery(GET_ENTRY_BY_SLUG(slug));
    const [entryData, setEntryData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        if (data) {
            setEntryData(data.projectsCollection.items[0])
            setIsLoading(false)
        }
    }, [data])


    if (isLoading) {
        return (
            <></>
        )
    } else {
        return (
            <div
                className="w-full"
            >
                <TransitionCanvas />
                <Hero
                    titleHtml={entryData.titleHtml}
                    description={entryData.description}
                    featureImage={entryData.featureImage}
                    logo={entryData.logo}
                />
                <Mockup
                    mockupImage={entryData.mockupImage}
                />
                <Overview
                    data={{ overview: entryData.contentData.overview, overviewInfo: entryData.contentData.overviewInfo }}
                />
                <Showcase
                    showcaseImage={entryData.perspectiveShowcaseImage}
                />
                <div className="w-full py-20">
                    {
                        entryData.contentData.contentBlock && entryData.contentData.contentBlock.map((singleContent, index) =>
                            <TextBlock
                                data={singleContent}
                                isLast={entryData.contentData.contentBlock[index + 1] ? false : true}
                            />
                        )
                    }
                </div>
                <BackButton />
            </div>
        )
    }
}
