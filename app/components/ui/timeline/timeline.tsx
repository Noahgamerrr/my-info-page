import { useEffect, useState } from "react"
import styled from "styled-components"

interface TimelineProps {
    titles: string[],
    progress: number[]
}

interface TimelineElementProps {
    title: string,
    isLast: boolean,
    progress: number,
    isActive: boolean
}

export const Timeline = ({titles, progress}: TimelineProps) => {
    return (
        <div className="fixed lg:px-16 lg:w-75 lg:h-3/4 flex lg:flex-col justify-between lg:top-1/2 lg:-translate-y-1/2 lg:bg-background z-10 bottom-5 w-full lg:left-0 lg:translate-x-0">
            {titles.map((title, idx) => 
                <TimelineElement 
                    title={title}
                    progress={progress[idx]}
                    isLast={idx == titles.length - 1} 
                    key={idx}
                    isActive={progress[idx] > 0 || progress[idx - 1] === 1}
                />
            )}
        </div>
    )
}

const TimelineElement = ({title, isLast, progress, isActive}: TimelineElementProps) => {
    const [isSmMd, setIsSmMd] = useState(false);

    useEffect(() => {
        setIsSmMd(window.innerWidth < 1024);
    }, []);

    const TimeLineDiv = styled.div`
        &:before{
        background: linear-gradient(${isSmMd ? 90 : 180}deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${progress * 100}%, var(--unfocused) ${progress * 100}%, var(--unfocused) 100%);
        }
    `

    return (
        <div className="max-lg:relative max-lg:w-full max-lg:translate-x-1/2">
            <TimeLineDiv 
                className={`after:absolute after:h-5 after:w-5 ${isActive ? "after:bg-black" : "after:bg-unfocused"} after:rounded-full after:-translate-x-1/2 lg:after:translate-x-1/2 after:-translate-y-1/2 lg:after:translate-y-0 before:w-full before:h-1 lg:before:w-1 lg:before:h-1/3 before:absolute lg:before:left-21 lg:before:-translate-x-1/2 before:-translate-y-1/2 lg:before:translate-y-2 ${isLast && "before:hidden"}`}
            />
            <div className={`lg:ms-10 max-lg:mt-5 font-bold ${isActive ? "text-black" : "text-unfocused"} transition-[color] duration-250 max-lg:-translate-x-1/2 max-lg:w-fit text-center max-sm:text-xs`}>{title}</div>
        </div>
        
    )
}