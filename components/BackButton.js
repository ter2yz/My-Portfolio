import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

export default function BackButton() {

    const router = useRouter();

    return (
        <div className="w-full py-20 flex justify-center items-center">
            <button className="flex justify-center items-center w-full" onClick={() => router.back()}>
                <img className="w-16 mr-2" src="/images/back-arrow.svg" alt="" />
                <p className="font-semibold uppercase">Back</p>
            </button>
            {/* <Link href="/" className="flex justify-center items-center">
                <a className="flex justify-center items-center w-full">
                    <img className="w-16 mr-2" src="/images/back-arrow.svg" alt="" />
                    <p className="font-semibold uppercase">Back</p>
                </a>
            </Link> */}
        </div>
    )
}
