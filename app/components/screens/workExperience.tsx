import workExperienceData from "@/public/data/work_experience.json"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

interface WorkExperienceProps {
    onProgress: (progress: number) => void;
}

interface WorkExperienceEntry {
    title: string,
    when: string,
    technologies: string,
    description: string
}

const workExperienceEntries = workExperienceData as WorkExperienceEntry[]


export default function WorkExperience({onProgress}: WorkExperienceProps) {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0,
        }, {
            translateX: "-325vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: `+=${window.innerWidth * 3}`,
                scrub: 0.6,
                pin: true,
                onUpdate: (self) => onProgress(self.progress)
            }
        })

        return () => {
            pin.kill()
        }
    }, [])

    return (
        <div className='flex flex-col justify-center'>
            <p className="font-bold text-3xl lg:text-6xl sticky top-1/8">Work experience</p>
            <section className="overflow-hidden">
                <div ref={triggerRef}>
                    <div
                        ref={sectionRef}
                        className="flex flex-row relative h-screen w-[400vw]"
                    >
                        {
                            workExperienceEntries.map((w, idx) => (
                                <div
                                    className="mb-5 h-screen w-[50vw] max-lg:mx-auto lg:w-[calc(100vw-400px)] flex flex-col justify-center items-center"
                                    key={idx}
                                >
                                    <div>
                                        <p className="text-xl lg:text-3xl underline">{w.title}</p>
                                        <p className="text-sm lg:text-xl">{w.when}</p>
                                        <p className="text-sm lg:text-xl">{w.technologies}</p>
                                        <p className="text-sm lg:text-xl whitespace-pre-line mt-5">{w.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}