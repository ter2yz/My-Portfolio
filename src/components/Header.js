import React from 'react'
import { Link } from "react-router-dom";
import SiteLogo from '../images/site-logo.svg'

const Header = React.forwardRef((props, ref) => {

    const { isFixed, ...rest } = props;

    return (
        <div
            {...rest}
            ref={ref}
            className={`w-full flex flex-shrink-0 justify-center items-center transition-all duration-300 z-40 top-0 ${isFixed ? 'bg-black-glass fixed' : 'bg-black-primary/0 sticky'}`}
        >
            <div className={`container flex justify-center md:justify-start items-center transition-all ${isFixed ? 'py-2' : 'py-5'}`}>
                <div className={`${isFixed ? 'w-16' : 'w-20'} rounded-lg transition-all`}>
                    <img className={`w-full h-auto`} src={SiteLogo} alt="" />
                </div>
                <div className="hidden md:flex ml-20 justify-center items-center">
                    <Link to="/">
                        <button className={`text-gray-100 md:text-gray-800 font-normal hover:font-bold text-sm uppercase mr-4 transition-all duration-300`}>
                            <p>Home</p>
                        </button>
                    </Link>
                    {/* <Link to="/">
                        <button className={`text-gray-100 md:text-gray-800 font-normal hover:font-bold text-sm uppercase mr-4 transition-all duration-300`}>
                            <p>Blogs</p>
                        </button>
                    </Link>
                    <Link to="/">
                        <button className={`text-gray-100 md:text-gray-800 font-normal hover:font-bold text-sm uppercase mr-4 transition-all duration-300`}>
                            <p>Contact Me</p>
                        </button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
})

export default Header
