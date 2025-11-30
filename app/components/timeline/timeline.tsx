interface TimelineProps {
    titles: string[]
}

interface TimelineElementProps {
    title: string
}

export const Timeline = ({titles}: TimelineProps) => {
    return (
        <div className="h-full">
            {titles.map((title, idx) => <TimelineElement title={title} key={idx}/>)}
        </div>
    )
}

const TimelineElement = ({title}: TimelineElementProps) => {
    return (
        <div className="flex flex-col mb-20">
            <div className="after:absolute after:box-content after:h-5 after:w-5 after:bg-unfocused after:rounded-full after:translate-x-1/2"></div>
            <div className="ms-10 font-bold text-unfocused">{title}</div>
        </div>
        
    )
}