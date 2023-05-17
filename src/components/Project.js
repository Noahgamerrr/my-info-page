import React from "react";

export default function Project(props) {
    const fadeRef = React.useRef(null);

    React.useEffect(() => {
        let delay = props.order * 0.5;
        fadeRef.current.style.animationDelay = `${delay}s`;
    });

    return (
        <div ref={fadeRef} className="fade-in">
            <a href={props.item.link} className="opacity-lg-50 project-link">
                <img src={`./images/projects/${props.item.image}`} className="project-image mb-3" alt={props.item.name}/>
                <h2 className="project-name">{props.item.name}</h2>
            </a>
        </div>
    )
}