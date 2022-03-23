import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Button, { LinkButton } from "../Button";
import DividerDark from "../../public/images/divider-straight.svg";
import DividerLight from "../../public/images/divider-straight-white.svg";
import { useGlobalStatus } from "../../lib/contexts/GlobalContext";

export default function FeatureProjectBlock({ project, isOdd }) {
    const { titleHtml, slug, logo, description, featureImage } = project;
    const { handleIsLandingPage } = useGlobalStatus();

    return (
        <div
            className={`w-full lg:h-screen bg-${
                isOdd ? "black-primary" : "white"
            } flex justify-center items-center`}
        >
            <div className="container">
                <div
                    className={`w-full py-10 lg:py-0 flex items-center justify-center lg:justify-between flex-col ${
                        isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                    <div className="w-full lg:w-5/12 px-4 lg:px-0 max-w-screen-md flex flex-col items-center lg:items-start lg:pr-5 mb-6 lg:mb-0">
                        <h2
                            className={`font-inter text-${
                                isOdd ? "white" : "black-text"
                            } text-center lg:text-left text-5xl font-black mb-6`}
                            dangerouslySetInnerHTML={{ __html: titleHtml }}
                        />
                        <img
                            className="w-32 mb-6"
                            src={
                                isOdd
                                    ? "/images/divider-straight-white.svg"
                                    : "/images/divider-straight.svg"
                            }
                            alt=""
                        />
                        <p
                            className={`leading-loose text-${
                                isOdd ? "white" : "black-text"
                            } text-center lg:text-left mb-6`}
                        >
                            {description}
                        </p>
                        <Link href={`/project/${slug}`} passHref>
                            <LinkButton
                                isDark={!isOdd}
                                handleClick={() => handleIsLandingPage(true)}
                            >
                                More about the project
                            </LinkButton>
                        </Link>
                    </div>
                    <div className="w-full lg:w-6/12 p-4 lg:p-0">
                        <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                            {featureImage && (
                                <img
                                    className="w-full lg:max-h-96 object-cover object-center"
                                    src={featureImage.url}
                                    alt=""
                                />
                            )}
                            <div className="absolute w-full h-full inset-0 flex justify-center items-center">
                                {logo && (
                                    <img
                                        src={logo.url}
                                        alt=""
                                        className="absolute max-w-xs max-h-28 motion-safe:animate-bounce-light"
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
