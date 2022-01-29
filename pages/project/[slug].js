import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Hero from "../../components/SingleProjectPage/Hero";
import Mockup from "../../components/SingleProjectPage/Mockup";
import Overview from "../../components/SingleProjectPage/Overview";
import Showcase from "../../components/SingleProjectPage/Showcase";
import TextBlock from "../../components/SingleProjectPage/TextBlock";
import BackButton from "../../components/BackButton";
import sanityClient from "../../components/Sanity/SanityClient";
import {
    SA_GET_PROJECT_BY_SLUG,
    SA_GET_FEATURE_PROJECTS,
} from "../../components/Sanity/Queries";
import TransitionCanvas, {
    transition,
} from "../../components/TransitionCanvas";

const SingleProject = ({ entry }) => {
    const router = useRouter();
    const { slug } = router.query;

    const entryData = entry?.content;
    const [isLoading, setIsLoading] = useState(true);

    console.log("ENTRY data: ", entry);

    // useEffect(() => {
    //     if (slug) {
    //         SA_GET_PROJECT_BY_SLUG(slug)
    //             .then((data) => setEntryData(data[0].content))
    //             .catch(console.error);
    //     }
    // }, [slug]);

    useEffect(() => {
        if (entryData) {
            setIsLoading(false);
        }
    }, [entryData]);

    return (
        <div className="w-full">
            {isLoading && (
                <div className="w-screen h-screen fixed z-40 inset-0 bg-black-primary"></div>
            )}
            <TransitionCanvas />
            <Hero
                titleHtml={entryData?.titleHtml}
                description={entryData?.description}
                featureImage={entryData?.featureImage}
                logo={entryData?.logo}
            />
            <Mockup mockupImage={entryData?.mockupImage} />
            <Overview
                data={{
                    overview: entryData?.overview,
                    overviewInfo: entryData?.overviewInfo,
                }}
            />
            <Showcase showcaseImage={entryData?.showcaseImage} />
            <div className="w-full py-20">
                {entryData?.contentBlock &&
                    entryData?.contentBlock.map((singleContent, index) => (
                        <TextBlock
                            key={`${singleContent.title}-contentblock-${index}`}
                            data={singleContent}
                            isLast={
                                entryData?.contentBlock[index + 1]
                                    ? false
                                    : true
                            }
                        />
                    ))}
            </div>
            <BackButton />
        </div>
    );
};

export const getStaticPaths = async () => {
    const paths = await sanityClient.fetch(
        `*[_type == "project" && defined(tabs.slug.current)][].tabs.slug.current`
    );

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    const { slug = "" } = context.params;
    const entry = await SA_GET_PROJECT_BY_SLUG(slug);

    return {
        props: { entry },
    };
};

export default SingleProject;
