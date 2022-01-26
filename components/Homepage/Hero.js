import React, { useRef, useEffect, useState } from 'react'
import { Link } from "react-scroll";
import { motion } from 'framer-motion'

import Header from '../Header'
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
        <div
            className="relative w-full lg:h-screen flex flex-col transition duration-500 z-30"
        >
            <Header
                ref={headerRef}
                isFixed={isFixed}
            />
            <div className={`w-full ${isFixed ? 'block' : 'hidden'}`} style={{ height: `${headerHeight}px` }}>
                {/* Placeholder */}
            </div>
            <div className={`relative lg:absolute w-full lg:h-screen inset-0 flex justify-center z-10`}>
                <div className="absolute hidden lg:flex top-0 right-0 w-5/12 lg:h-full bg-black-primary justify-center items-center">
                    <motion.img
                        className="w-8/12" src="/images/walking-people-white-outline.svg" alt=""
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                    />
                </div>
                <div className="container flex">
                    <div className="w-full px-4 lg:px-0 py-10 lg:py-0 lg:w-6/12 lg:h-full flex flex-col items-center lg:items-start justify-center">
                        <motion.h1
                            className="font-inter mb-4 text-center lg:text-left text-black-text"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                        >
                            <span className="text-4xl font-black">I&apos;m a</span>
                            <span className="block text-6xl font-black">Front End Developer</span>
                        </motion.h1>
                        <motion.img
                            className="w-40 mb-6" src="/images/divider-straight.svg" alt=""
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.2 }}
                        />
                        <motion.p
                            className="leading-loose text-black-text text-center lg:text-left mb-6"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                        >
                            With more than 4 years of experience, I have a very good sense of user experience and my experienced coding skills always help me provide the best products and deliver great value.
                        </motion.p>
                        <Link
                            to="aboutMe"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <Button>Discover more</Button>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
