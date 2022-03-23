import React from "react";
import Link from "next/link";

const Header = React.forwardRef((props, ref) => {
    const { isFixed, ...rest } = props;

    return (
        <div
            {...rest}
            ref={ref}
            className={`w-full flex flex-shrink-0 justify-center items-center transition-all z-40 top-0 border border-b-[1px] ${
                isFixed
                    ? "bg-white fixed border-zinc-200 shadow-lg"
                    : "bg-white/0 sticky border-transparent"
            }`}
        >
            <div
                className={`container flex justify-center md:justify-start items-center transition-all ${
                    isFixed ? "py-2" : "py-5"
                }`}
            >
                <div
                    className={`${
                        isFixed ? "w-16" : "w-20"
                    } rounded-lg transition-all`}
                >
                    <img
                        className={`w-full h-auto`}
                        src="/images/site-logo.svg"
                        alt=""
                    />
                </div>
                <div className="hidden md:flex ml-20 justify-center items-center">
                    <Link href="/">
                        <a
                            className={`text-gray-100 md:text-gray-800 font-normal hover:font-bold text-sm uppercase mr-4 transition-all duration-150`}
                        >
                            <p>Home</p>
                        </a>
                    </Link>
                    {/* <Link href="/">
                        <button className={`text-gray-100 md:text-gray-800 font-normal hover:font-bold text-sm uppercase mr-4 transition-all duration-300`}>
                            <p>Blogs</p>
                        </button>
                    </Link>
                    <Link href="/">
                        <button className={`text-gray-100 md:text-gray-800 font-normal hover:font-bold text-sm uppercase mr-4 transition-all duration-300`}>
                            <p>Contact Me</p>
                        </button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
});

export default Header;
