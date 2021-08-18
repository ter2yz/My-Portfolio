import React from 'react'
import ToolLogoHandler from '../../lib/toolLogo'

export default function Overview({ data }) {

    const { overview, overviewInfo } = data

    return (
        <div className="w-full flex justify-center">
            <div className="container">
                <div className="w-full flex flex-col py-10 lg:py-20 lg:flex-row justify-center lg:justify-between items-center lg:items-start">
                    <div className="w-full lg:w-1/2 flex flex-col px-4 lg:px-0 max-w-screen-md items-center lg:items-start">
                        <h2 className="font-inter text-black-text text-center text-5xl font-black mb-6">
                            Overview
                        </h2>
                        <p
                            className="leading-loose text-black-text font-light text-center lg:text-left mb-6 lg:mb-0"
                            dangerouslySetInnerHTML={{ __html: overview }}
                        />
                    </div>
                    <div className="w-full lg:w-5/12 px-8 lg:px-0 max-w-screen-md flex flex-col">
                        <span className="w-full h-0.5 bg-black-primary"></span>
                        {
                            overviewInfo && overviewInfo.map((item, index) =>
                                <div className={`w-full flex flex-col py-5 ${overviewInfo[index + 1] ? 'border-b' : ''} border-opacity-20 border-black-primary`}>
                                    <p className="text-xs font-light uppercase mb-1">{item.heading}</p>
                                    {
                                        item?.content && <p className="font-semibold">{item.content}</p>
                                    }
                                    {
                                        item?.tools && <div className="font-semibold flex">{item.tools.map(tool => ToolLogoHandler(tool))}</div>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
