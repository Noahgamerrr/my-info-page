import React, { useEffect, useRef, useState } from 'react'
import { Badge, Card } from 'flowbite-react'
import Image from 'next/image'

interface ProjectCardProps {
    imageSrc: string,
    name: string,
    description: string,
    technologies: string[],
    className?: string,
    position: number,
    repo: string
}

export default function ProjectCard(
    { imageSrc, name, description, technologies, className, position, repo }: ProjectCardProps
) {
    const imgDivRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(imgDivRef.current?.clientWidth || 0)
    }, []);

    return (
        <Card
            className={`bg-gray-900 text-white xl:w-85 xl:h-130 lg:h-95 lg:w-60 mx-auto rounded-2xl ${className}`}
            style={{ 
                marginLeft: `calc(var(--spacing) * ${position})`,
                zIndex: 9999 - position
            }}
            href={repo}
        >
            <div className='flex flex-col h-full justify-between'>
                <div>
                    <div ref={imgDivRef} className='relative w-full rounded-2xl overflow-hidden' style={{ height }}>
                        <Image
                            className='pt-0'
                            src={imageSrc}
                            alt={name}
                            fill={true}
                        />
                    </div>
                    <h5 className='text-2xl font-bold pt-4'>{name}</h5>
                </div>
                <p>{description}</p>
                <div className='flex flex-row gap-2'>
                    {technologies.map((t, idx) => (
                        <Badge key={idx} className='rounded-full'>{t}</Badge>
                    ))}
                </div>
            </div>

        </Card>
    )
}
