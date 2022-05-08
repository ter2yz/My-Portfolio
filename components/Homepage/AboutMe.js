import React from "react";
import { Link } from "react-scroll";
import Button from "../Button";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <div
            id="aboutMe"
            className="w-full lg:h-screen bg-gray-100 flex justify-center items-center"
        >
            <div className="container">
                <motion.div
                    className="w-full py-10 lg:py-0 flex flex-col items-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img
                        className="w-24 mb-2"
                        src="/images/sun-glasses.svg"
                        alt="Sun Glasses"
                    />
                    <div className="relative">
                        <h2 className="font-inter text-black-text text-center text-5xl font-black">
                            <span className="">Tell you a bit&nbsp;</span>
                            <span className="block ">more about me.</span>
                        </h2>
                        <img
                            className="absolute w-24 top-full right-0"
                            src="/images/divider-curve.svg"
                            alt=""
                        />
                    </div>
                    <div className="w-7/12 mt-8">
                        <p className="text-center leading-loose text-black-text">
                            I am not only a highly motivated digital
                            professional with a passion for front-end
                            development, but also a basketball lover who is
                            always passing the ball and assisting my team in
                            winning games, an amateur design who is always
                            trying to bring fantasy into reality, a human who
                            always is listening and smiling.
                        </p>
                    </div>
                    <Link
                        to="projectList"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Button className="mt-8">View my showcase</Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
