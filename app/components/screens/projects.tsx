import React, { useEffect, useRef } from 'react'
import ProjectData from '@/public/data/projects.json';
import ProjectCard from '../ui/projectCard/projectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface ProjectEntry {
    name: string,
    description: string,
    src: string,
    technologies: string[],
    repo: string
}

const ProjectEntries = ProjectData as ProjectEntry[];

export default function Projects() {
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const timeln = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                scrub: 0.6,
                start: "center center",
                end: "+=4000",
            }
        });

        for (let idx = 0; idx < ProjectEntries.length - 1; idx++) {
            timeln.to(`.card-${idx}`, {
                translateX: -1500,
            })
        }

        return () => {
            timeln.kill();
        }
    }, []);

    return (
        <div className='h-screen w-full relative' ref={triggerRef}>
            <p className="font-bold text-6xl sticky top-1/8">Projects</p> 
            {
                ProjectEntries.map((pe, idx) => (
                    <ProjectCard
                        key={idx}
                        imageSrc={`/images/projects/${pe.src}`}
                        name={pe.name}
                        description={pe.description}
                        technologies={pe.technologies}
                        className={`top-1/2 -translate-y-1/2 card-scroll absolute left-1/2 -translate-x-1/2 card-${idx}`}
                        position={idx}
                    />
                ))
            }

            {/*<div className='flex w-full h-full'>
            <div className='self-center w-full'>
                {
                    ProjectEntries.map((pe, idx) => (
                        <ProjectCard
                            key={idx}
                            imageSrc={`/images/projects/${pe.src}`}
                            name={pe.name}
                            description={pe.description}
                            technologies={pe.technologies}
                        />
                    ))
                }
            </div>
        </div>*/}
        </div>
    )
}