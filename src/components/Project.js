import React from "react";

export default function Project(props) {
    const fadeRef = React.useRef(null);

    React.useEffect(() => {
        let delay = props.order * 0.5;
        fadeRef.current.style.animationDelay = `${delay}s`;
    });

    return (
        <a ref={fadeRef} href={props.item.link} className="project-link opacity-lg-50 fade-in-50">
            <img src={`./images/projects/${props.item.image}`} className="project-image mb-3" alt={props.item.name}/>
            <h2 className="project-name">{props.item.name}</h2>
        </a>
    )
}