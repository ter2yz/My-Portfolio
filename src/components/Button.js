import React from 'react'

export default function Button({ children, isDark = true, className }) {
    return (
        <button className={`w-auto py-3 px-5 rounded-lg focus:outline-none text-xs font-bold uppercase ${className} ${isDark ? 'bg-black-text text-white' : 'bg-white text-black-text'}`}>
            {children}
        </button>
    )
}
