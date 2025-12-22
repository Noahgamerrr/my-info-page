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
        <div className="fixed px-16 w-75 h-3/4 flex flex-col justify-between top-1/2 -translate-y-1/2 bg-background z-10">
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
    const TimeLineDiv = styled.div`
        &:before{
        background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${progress * 100}%, var(--unfocused) ${progress * 100}%, var(--unfocused) 100%);
        }
    `

    return (
        <div>
            <TimeLineDiv 
                className={`after:absolute after:h-5 after:w-5 ${isActive ? "after:bg-black" : "after:bg-unfocused"} after:rounded-full after:translate-x-1/2 before:w-1 before:h-1/3 before:absolute before:left-21 before:-translate-x-1/2 before:translate-y-2 ${isLast && "before:hidden"}`}
            />
            <div className={`ms-10 font-bold ${isActive ? "text-black" : "text-unfocused"} transition-[color] duration-250`}>{title}</div>
        </div>
        
    )
}