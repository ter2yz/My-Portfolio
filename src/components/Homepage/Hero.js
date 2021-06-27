import React, { useRef, useEffect, useState } from 'react'
import Header from '../Header'
import WalkingPeopleImage from '../../images/walking-people-white-outline.svg'
import DividerStraight from '../../images/divider-straight.svg'
import Button from '../Button'

export default function Hero() {
    const headerRef = useRef(null)
    const [headerHeight, setHeaderHeight] = useState(0)
    const [isFixed, setIsFixed] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= headerHeight) {
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    }

    useEffect(() => {
        if (headerRef) {
            setHeaderHeight(headerRef.current.offsetHeight)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFixed])

    return (
        <div className={`relative w-full lg:h-screen flex flex-col transition duration-500 z-40`}>
            <Header
                ref={headerRef}
                isFixed={isFixed}
            />
            <div className={`w-full ${isFixed ? 'block' : 'hidden'}`} style={{ height: `${headerHeight}px` }}>
                {/* Placeholder */}
            </div>
            <div className={`relative lg:absolute w-full lg:h-screen inset-0 flex justify-center z-10`}>
                <div className="absolute hidden lg:flex top-0 right-0 w-5/12 lg:h-full bg-black-primary justify-center items-center">
                    <img className="w-8/12" src={WalkingPeopleImage} alt="" />
                </div>
                <div className="container flex">
                    <div className={`w-full px-4 lg:px-0 py-10 lg:py-0 lg:w-6/12 lg:h-full flex flex-col items-center lg:items-start justify-center`}>
                        <h1 className="font-inter mb-4 text-center lg:text-left text-black-text">
                            <span className="text-4xl font-black">I&apos;m a</span>
                            <span className="block text-6xl font-black">Front End Developer</span>
                        </h1>
                        <img className="w-40 mb-6" src={DividerStraight} alt="" />
                        <p className="leading-loose text-black-text text-center lg:text-left mb-6">
                            With 6 years of experience, I leverage systemic design thinking to solve real-world problems by creating cohesive end-to -end user experiences and focusing on digital transformation. I am keen to deliver a meaningful design for social good and make the world a better place.
                        </p>
                        <Button>Discover more</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
