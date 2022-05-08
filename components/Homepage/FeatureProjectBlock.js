import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { LinkButton } from "../Button";
import { useGlobalStatus } from "../../lib/contexts/GlobalContext";

export default function FeatureProjectBlock({ project, isOdd, percentage }) {
    const { titleHtml, slug, logo, description, featureImage } = project;
    const { handleIsLandingPage } = useGlobalStatus();

    console.log(`${titleHtml} - isOdd: `, isOdd);
    console.log(`PERCENTAGE: `, percentage);

    return (
        <div
            className={`relative w-full lg:h-screen bg-${
                isOdd ? "black-primary" : "white"
            } flex justify-center items-center`}
        >
            <div
                className={clsx(
                    "absolute w-full h-full z-0",
                    isOdd && "bg-white",
                    !isOdd && "bg-black-primary"
                )}
                style={{
                    opacity: percentage ?? 0,
                }}
            />
            <div className="container z-20">
                <div
                    className={`w-full py-10 lg:py-0 flex items-center justify-center lg:justify-between flex-col ${
                        isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `translate3d(0px, ${
                            percentage * -100
                        }px, 0px)`,
                    }}
                >
                    <div className="relative w-full lg:w-5/12 px-4 lg:px-0 max-w-screen-md flex flex-col items-center lg:items-start lg:pr-5 mb-6 lg:mb-0">
                        {percentage}
                        <motion.h2
                            className={`font-inter text-${
                                isOdd ? "white" : "black-text"
                            } text-center lg:text-left text-5xl font-black mb-6`}
                            dangerouslySetInnerHTML={{ __html: titleHtml }}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        />
                        <motion.img
                            className="w-32 mb-6"
                            src={
                                isOdd
                                    ? "/images/divider-straight-white.svg"
                                    : "/images/divider-straight.svg"
                            }
                            alt=""
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        />
                        <motion.p
                            className={`leading-loose text-${
                                isOdd ? "white" : "black-text"
                            } text-center lg:text-left mb-6`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/project/${slug}`} passHref>
                                <LinkButton
                                    isDark={!isOdd}
                                    handleClick={() =>
                                        handleIsLandingPage(true)
                                    }
                                >
                                    More about the project
                                </LinkButton>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-6/12 p-4 lg:p-0">
                        <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                            {featureImage && (
                                <motion.img
                                    className="w-full lg:max-h-96 object-cover object-center"
                                    src={featureImage.url}
                                    alt=""
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                />
                            )}
                            <div className="absolute w-full h-full inset-0 flex justify-center items-center">
                                {logo && (
                                    <motion.img
                                        src={logo.url}
                                        alt=""
                                        className="absolute max-w-xs max-h-28 motion-safe:animate-bounce-light"
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.4,
                                            duration: 0.5,
                                        }}
                                        viewport={{ once: true }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
