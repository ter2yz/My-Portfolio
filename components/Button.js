import React from "react";
import clsx from "clsx";

export default function Button({ children, isDark = true, className = "" }) {
    return (
        <button
            className={`w-auto py-3 px-5 rounded-lg focus:outline-none text-xs font-bold uppercase transition transform hover:scale-110 ${className} ${
                isDark ? "bg-black-text text-white" : "bg-white text-black-text"
            }`}
        >
            {children}
        </button>
    );
}

const ALink = ({ children, isDark = true, className, href, handleClick }) => {
    return (
        <a
            className={clsx(
                "w-auto py-3 px-5 rounded-lg focus:outline-none text-xs font-bold uppercase transition transform hover:scale-110",
                className,
                {
                    "bg-black-text text-white": isDark,
                    "bg-white text-black-text": !isDark,
                }
            )}
            href={href}
            onClick={(e) => {
                handleClick();
            }}
        >
            {children}
        </a>
    );
};

export const LinkButton = React.forwardRef((props, ref) => (
    <ALink innerRef={ref} {...props} />
));
