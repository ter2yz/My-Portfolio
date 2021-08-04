import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Hero from '../components/SingleProjectPage/Hero'
import Mockup from '../components/SingleProjectPage/Mockup';
import Overview from '../components/SingleProjectPage/Overview';
import Showcase from '../components/SingleProjectPage/Showcase';
import TextBlock from '../components/SingleProjectPage/TextBlock';
import BackButton from '../components/BackButton';
import { SA_GET_PROJECT_BY_SLUG } from '../components/Sanity/Queries'
import TransitionCanvas, { transition } from '../components/TransitionCanvas';

export default function SingleProject() {
    let { slug } = useParams()

    const [entryData, setEntryData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (slug) {
            SA_GET_PROJECT_BY_SLUG(slug)
                .then((data) => setEntryData(data[0].content))
                .catch(console.error)
        }
    }, [slug])

    useEffect(() => {
        if (entryData) {
            setIsLoading(false)
        }
    }, [entryData])


    if (isLoading) {
        return (
            <div
                className="w-screen h-screen fixed z-40 inset-0 bg-black-primary"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                exit={{ x: 0 }}
                transition={transition}
            >

            </div>
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
                    data={{ overview: entryData.overview, overviewInfo: entryData.overviewInfo }}
                />
                <Showcase
                    showcaseImage={entryData.showcaseImage}
                />
                <div className="w-full py-20">
                    {
                        entryData.contentBlock && entryData.contentBlock.map((singleContent, index) =>
                            <TextBlock
                                data={singleContent}
                                isLast={entryData.contentBlock[index + 1] ? false : true}
                            />
                        )
                    }
                </div>
                <BackButton />
            </div>
        )
    }
}
