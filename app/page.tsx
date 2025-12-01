"use client"
import localFont from 'next/font/local';
import { Timeline } from './components/timeline/timeline';
import { RefObject, useEffect, useRef, useState } from 'react';
import  { Element, scroller } from "react-scroll";

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
})

const titles = ["Work experience", "Technologies", "Projects", "About me"]

export default function Home() {
    const [scrollTop, setScrollTop] = useState(0);
    const scrollToRef : RefObject<HTMLElement | null> = useRef(null);

    const fontSize = scrollTop <= 68 ? 128 - scrollTop : 60 

    

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTop < window.scrollY) scroller.scrollTo('test', {
                duration: 40,
                delay: 0,
                smooth: true
            })
            setScrollTop(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollTop]);

    return (
        <main 
            className={`min-h-screen w-full py-32 px-16 sm:items-start ${interFont.className}`}
        >
            <Timeline titles={titles}/>
            <div className='mt-30 w-7/8 ml-auto flex flex-col justify-center'>
                <p 
                    className={`italic sticky top-5 h-32 ${gentiumFont.className}`}
                    style={{fontSize: fontSize, lineHeight: 1}}
                >
                    Noah Arsić
                </p>
                <p className={`text-3xl italic ${gentiumFont.className}`}>est. 2005</p>
                <p className="text-6xl mt-10">Passionate software developer</p>
                {/*
                <Element name="test">
                    <p>a</p>
                </Element>
                 */}
            </div>
        </main>
  );
}
