import React from "react";

export default function TextBlock({ data, isLast }) {
    const { heading, contentParagraph } = data;

    return (
        <div
            className={`w-full flex justify-center ${
                !isLast ? "mb-10 lg:mb-16" : "mb-0"
            }`}
        >
            <div className="container">
                <div className="w-full flex justify-center">
                    <div className="w-10/12 flex flex-col px-4 lg:px-0 items-center lg:items-start">
                        <h2 className="font-inter text-black-text text-center text-5xl font-black mb-4 capitalize">
                            {heading}
                        </h2>
                        <img
                            className="w-40 mb-10"
                            src="/images/divider-curve.svg"
                            alt=""
                        />
                        {contentParagraph &&
                            contentParagraph.map((singleContent, index) => (
                                <p
                                    key={index}
                                    className="leading-loose text-black-text font-light text-center lg:text-left mb-4"
                                >
                                    {singleContent}
                                </p>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
