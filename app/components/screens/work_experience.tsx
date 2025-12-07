import workExperienceData from "@/public/data/work_experience.json"
import { Element } from "react-scroll"

interface WorkExperienceEntry {
    title: string,
    when: string,
    technologies: string
}

const workExperienceEntries = workExperienceData as WorkExperienceEntry[]


export default function WorkExperience() {
    return (
        <div className='lg:w-[calc(100%-300px)] h-screen ml-auto flex flex-col justify-center'>
            <Element name="work_experience">
                <p className="font-bold text-6xl mb-10">Work experience</p>
            </Element>
            {
                workExperienceEntries.map((w, idx) => (
                        <div className="mb-5" key={idx}>
                            <p className="text-3xl underline">{w.title}</p>
                            <p className="text-xl">{w.when}</p>
                            <p className="text-xl">{w.technologies}</p>
                        </div>
                    )
                )
            }
            
        </div>
    )
}