import localFont from "next/font/local";
import React, { useEffect, useState } from "react";
import  { Element, scroller } from "react-scroll";

interface LandingProps {
    gentiumFont: string,
}

export default function Landing({ gentiumFont } : LandingProps) {
    const [scrollTop, setScrollTop] = useState(0);
    const [showDescription, setShowDescription] = useState(true);

    const fontSize = scrollTop <= 68 ? 128 - scrollTop : 60

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTop < window.scrollY && scrollTop < 100) {
                scroller.scrollTo('work_experience', {
                    duration: 700,
                    delay: 0,
                    smooth: true
                });
                //setShowDescription(false);
            }
            setScrollTop(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollTop]);

    return (
        <div className='lg:w-[calc(100%-300px)] sticky top-[calc(-100vh+150px)] h-screen ml-auto flex flex-col justify-center'>
            <p 
                className={`italic sticky top-5 h-32 ${gentiumFont}`}
                style={{fontSize: fontSize, lineHeight: 1}}
            >
                Noah Arsić
            </p>
            {
                showDescription && (
                    <React.Fragment>
                        <p className={`text-3xl italic ${gentiumFont}`}>est. 2005</p>
                        <p className="text-6xl mt-10">Passionate software developer</p>
                    </React.Fragment>
                )
            }
        </div>
    )
}