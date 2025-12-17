import React from 'react'
import ProjectData from '@/public/data/projects.json';
import ProjectCard from '../ui/projectCard/projectCard';

interface ProjectEntry {
    name: string,
    description: string,
    src: string,
    technologies: string[],
    repo: string
}

const ProjectEntries = ProjectData as ProjectEntry[];

export default function Projects() {
  return (
    <div className='h-screen w-full relative'>
        <p className="font-bold text-6xl sticky top-1/8">Projects</p>
        {
            ProjectEntries.map((pe, idx) => (
                <ProjectCard
                    key={idx}
                    imageSrc={`/images/projects/${pe.src}`}
                    name={pe.name}
                    description={pe.description}
                    technologies={pe.technologies}
                    className='absolute left-1/2 -translate-x-1/2'
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