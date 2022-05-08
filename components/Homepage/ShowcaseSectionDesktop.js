import React from "react";
import FeatureProjectBlock from "./FeatureProjectBlock";

function ShowcaseSectionDesktop({
    projectListSectionRef,
    xPosition,
    projectsData,
    percentageBg,
}) {
    return (
        <div
            id="projectList"
            className="relative w-full h-[200vw]"
            ref={projectListSectionRef}
        >
            <div
                className="sticky top-16 flex justify-between items-center pt-8 pb-8 h-screen w-[200vw] will-change-transform"
                style={{
                    transformStyle: "preserve-3d",
                    transform: `translate3d(${xPosition}px, 0px, 0px)`,
                }}
            >
                {projectsData &&
                    projectsData.map((project, index) => (
                        <div key={project.content.slug} className="w-full">
                            <FeatureProjectBlock
                                project={project.content}
                                isOdd={index % 2 === 0}
                                percentage={percentageBg}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ShowcaseSectionDesktop;
