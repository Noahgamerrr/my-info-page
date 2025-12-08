import React, { useEffect, useState } from "react";
import  { Element, scroller } from "react-scroll";

interface LandingProps {
    gentiumFont: string,
}

export default function Landing({ gentiumFont } : LandingProps) {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <p 
                className={`italic h-32 ${gentiumFont} text-9xl`}
            >
                Noah Arsić
            </p>
            <p className={`text-3xl italic ${gentiumFont}`}>est. 2005</p>
            <p className="text-6xl mt-10">Passionate software developer</p>
        </div>
    )
}