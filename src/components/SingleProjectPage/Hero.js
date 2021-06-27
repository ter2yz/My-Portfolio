import React from 'react'
import DividerLight from '../../images/divider-straight-white.svg'

export default function Hero({ titleHtml, description, featureImage, logo }) {
    return (
        <div className="relative w-full h-auto lg:h-screen flex justify-center items-center bg-black-primary">
            <div className="relative container z-20">
                <div className="w-full lg:w-5/12 px-4 lg:px-0 py-20 lg:py-0 max-w-screen-md flex flex-col items-center lg:items-start lg:pr-5 mb-6 lg:mb-0">
                    <h2
                        className={`font-inter text-white text-center lg:text-left text-5xl font-black mb-6`}
                        dangerouslySetInnerHTML={{ __html: titleHtml }}
                    />
                    <img className="w-24 mb-6" src={DividerLight} alt="" />
                    <p className={`leading-loose text-white text-center lg:text-left mb-6`}>
                        {description}
                    </p>
                </div>
            </div>
            <div
                className="absolute w-full lg:w-1/2 h-full top-0 right-0 bg-cover bg-no-repeat bg-center flex justify-center items-center z-0 filter brightness-50 lg:brightness-100"
                style={{ backgroundImage: `url(${featureImage.url})` }}
            >
                <img src={logo.url} alt="" className="absolute hidden lg:block max-w-xs max-h-28 motion-safe:animate-bounce-light" />
            </div>
        </div>
    )
}
