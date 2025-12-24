"use client"
import localFont from 'next/font/local';
import { Timeline } from './components/ui/timeline/timeline';
import Landing from './components/screens/landing';
import WorkExperience from './components/screens/workExperience';
import Technologies from './components/screens/technologies';
import Projects from './components/screens/projects';
import AboutMe from './components/screens/aboutMe';
import { useState } from 'react';

const interFont = localFont({
    src: [
        {
            path: './fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
            style: 'normal'
        },
        {
            path: './fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf',
            style: 'italic'
        }
    ]
});

const gentiumFont = localFont({
    src: [
        {
            path: './fonts/GentiumPlus/GentiumPlus-Regular.ttf',
            style: 'normal'
        },
        {
            path: './fonts/GentiumPlus/GentiumPlus-Italic.ttf',
            style: 'italic'
        }
    ]
});

const titles = ["Work experience", "Technologies", "Projects", "About me"]

export default function Home() {
    const [progress, setProgress] = useState([0, 0, 0])

    const handleProgress = (idx: number, p: number) => {
        const newProgress = progress.map((v, i) => {
            if (i === idx) return p;
            if (i < idx) return 1;
            return 0;
        });
        setProgress(newProgress);
    }

    return (
        <main 
            className={`min-h-screen w-full sm:items-start ${interFont.className}`}
        >
            <Timeline 
                titles={titles}
                progress={progress}
            />
            <div className='lg:w-[calc(100vw-300px)] ml-auto p-4'>
                <Landing 
                gentiumFont={gentiumFont.className}
                />
                <WorkExperience
                    onProgress={(progress) => handleProgress(0, progress)}
                />
                <Technologies
                    onProgress={(progress) => handleProgress(1, progress)}
                />
                <Projects
                    onProgress={(progress) => handleProgress(2, progress)}
                />
                <AboutMe/>
            </div>
        </main>
  );
}
