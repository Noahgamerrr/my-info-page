import React from "react";

export default function Technology(props) {
    const [desc, setDesc] = React.useState("");
    const file = `./descriptions/technologies/${props.item.text}`;
    const fadeRef = React.useRef(null);
    React.useEffect(() => {
        fetch(file)
            .then(t => t.text())
            .then(text => setDesc(text));
        let delay = props.order * 0.5;
        fadeRef.current.style.animationDelay = `${delay}s`;
        }, [file, props.order]
    );
    const textStyle = {textAlign: "justify"};
    return (
        <div ref={fadeRef} className={`technology-grid-${props.item.id % 2 + 1} fade-in`}>
            <h2 className={`technology-title-${props.item.id % 2 + 1} text-lg-center`}>{props.item.name}</h2>
            <img src={`./images/technologies/${props.item.img}`} alt={props.item.name} className={`technology-image-${props.item.id % 2 + 1}`}></img>
            <p style={textStyle} className={`technology-description-${props.item.id % 2 + 1}`}>{desc}</p>
        </div>
    );
};