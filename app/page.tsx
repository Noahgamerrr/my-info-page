"use client"
import localFont from 'next/font/local';
import { Timeline } from './components/timeline/timeline';
import Landing from './components/screens/landing';
import { Element } from 'react-scroll';
import WorkExperience from './components/screens/work_experience';
import Technologies from './components/screens/technologies';
// import { RefObject, useEffect, useRef, useState } from 'react';


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
    return (
        <main 
            className={`min-h-screen w-full sm:items-start ${interFont.className}`}
        >
            <Timeline titles={titles}/>
            <div className='lg:w-[calc(100%-400px)] ml-auto'>
                <Landing 
                gentiumFont={gentiumFont.className}
                />
                <WorkExperience/>
                <Technologies/>
            </div>
            {
            /*
            <Element name="test">
                <p>a</p>
            </Element>
                */
            }
        </main>
  );
}
