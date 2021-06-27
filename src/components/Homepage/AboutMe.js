import React from 'react'
import SunGlassesImage from '../../images/sun-glasses.svg'
import DividerCurve from '../../images/divider-curve.svg'
import Button from '../Button'

export default function AboutMe() {
    return (
        <div className="w-full lg:h-screen bg-gray-100 flex justify-center items-center">
            <div className="container">
                <div className="w-full py-10 lg:py-0 flex flex-col items-center">
                    <img className="w-24 mb-2" src={SunGlassesImage} alt="Sun Glasses" />
                    <div className="relative">
                        <h2 className="font-inter text-black-text text-center text-5xl font-black">
                            <span className="">Tell you a bit</span>
                            <span className="block ">more about me.</span>
                        </h2>
                        <img className="absolute w-24 top-full right-0" src={DividerCurve} alt="" />
                    </div>
                    <div className="w-7/12 mt-8">
                        <p className="text-center leading-loose text-black-text">
                            With 6 years of experience, I leverage systemic design thinking to solve real-world problems by creating cohesive end-to -end user experiences and focusing on digital transformation. I am keen to deliver a meaningful design for social good and make the world a better place.
                        </p>
                    </div>
                    <Button className="mt-8">View my showcase</Button>
                </div>
            </div>
        </div>
    )
}
