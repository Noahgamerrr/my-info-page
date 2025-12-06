interface TimelineProps {
    titles: string[]
}

interface TimelineElementProps {
    title: string,
    isLast: boolean
}

export const Timeline = ({titles}: TimelineProps) => {
    return (
        <div className="fixed w-43 h-3/4 flex flex-col justify-between top-1/2 -translate-y-1/2">
            {titles.map((title, idx) => 
                <TimelineElement 
                    title={title} 
                    isLast={idx == titles.length - 1} 
                    key={idx}
                />
            )}
        </div>
    )
}

const TimelineElement = ({title, isLast}: TimelineElementProps) => {
    return (
        <div>
            <div className={`after:absolute after:h-5 after:w-5 after:bg-unfocused after:rounded-full after:translate-x-1/2 before:w-1 before:h-1/3 before:bg-unfocused before:absolute before:left-5 before:-translate-x-1/2 before:translate-y-2 ${isLast && "before:hidden"}`}/>
            <div className="ms-10 font-bold text-unfocused">{title}</div>
        </div>
        
    )
}