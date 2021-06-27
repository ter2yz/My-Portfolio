import React from 'react'
import { Link } from 'react-router-dom'

import BackArrow from '../images/back-arrow.svg'

export default function BackButton() {
    return (
        <div className="w-full py-20 flex justify-center items-center">
            <Link to="/" className="flex justify-center items-center">
                <img className="w-16 mr-2" src={BackArrow} alt="" />
                <p className="font-semibold uppercase">Back</p>
            </Link>
        </div>
    )
}
