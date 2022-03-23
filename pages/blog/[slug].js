import React, { useState, useEffect } from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import BackButton from "../../components/BackButton";
import {
    SA_GET_BLOG_BY_SLUG,
    SA_GET_BLOGS,
} from "../../components/Sanity/Queries";
import TransitionCanvas from "../../components/TransitionCanvas";

const SingleBlog = ({ entry }) => {
    // const entryData = entry?.content;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (entry) {
            setIsLoading(false);
        }
    }, [entry]);

    return (
        <>
            <Head>
                <title>{entry?.title} | TerryZ Studio</title>
                <meta name="description" content="@TODO blog's description" />
                <meta itemprop="name" content={entry?.title} />
            </Head>
            <div className="w-full">
                {isLoading && (
                    <div className="w-screen h-screen fixed z-40 inset-0 bg-black-primary"></div>
                )}
                <TransitionCanvas />
                <img src={entry?.featureImage?.url} alt="" />
                <div className="w-full flex justify-center items-center">
                    <div className="container flex justify-center items-center">
                        <ReactMarkdown
                            children={entry?.bio}
                            className="blog-markdown__container w-full px-5 max-w-7xl"
                            components={{
                                code({
                                    node,
                                    inline,
                                    className,
                                    children,
                                    ...props
                                }) {
                                    const match = /language-(\w+)/.exec(
                                        className || ""
                                    );
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            children={String(children).replace(
                                                /\n$/,
                                                ""
                                            )}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        />
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        />
                    </div>
                </div>
                <BackButton />
            </div>
        </>
    );
};

export const getStaticPaths = async () => {
    const paths = await SA_GET_BLOGS;

    return {
        paths: paths.map((blog) => ({ params: { slug: blog.slug } })),
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    const { slug = "" } = context.params;
    const entry = await SA_GET_BLOG_BY_SLUG(slug);

    return {
        props: { entry },
        revalidate: 10,
    };
};

export default SingleBlog;
