import React from "react";

export default function Language(props) {
    const fadeRef = React.useRef(null);

    React.useEffect(() => {
        let delay = props.order * 0.5;
        fadeRef.current.style.animationDelay = `${delay}s`;
    });

    return (
        <div ref={fadeRef} className="mb-5 fade-in">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="w-25">{props.item.name}</h2>
                <p className="my-0 fst-italic">Level: {props.item.level}</p>
                <img src={`./images/languages/${props.item.img}`} alt={props.item.name} className="w-25"/>
            </div>
        </div>
    );
};