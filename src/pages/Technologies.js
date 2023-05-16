import Technology from "../components/Technology";
import technologies from "../data/technologies.json";
import React from "react";

export default function Technologies() {
    let techCount = -1;
    const techElements = technologies.map(e => {
        techCount++;
        return <Technology order={techCount} key={e.id} item={e}/>
    });

    return (
        <>
            <h1>Technologies</h1>
            {techElements}
        </>
    )
}