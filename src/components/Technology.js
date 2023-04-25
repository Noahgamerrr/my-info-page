import React from "react";

export default function Technology(props) {
    const [desc, setDesc] = React.useState("");
    const file = `/descriptions/technologies/${props.item.text}`;
    React.useEffect(() => {
        fetch(file)
            .then(t => t.text())
            .then(text => setDesc(text));
        }, [file]
    );
    const textStyle = {textAlign: "justify"};
    return (
        <div className={`technology-grid-${props.item.id % 2 + 1}`}>
            <h2 className={`technology-title-${props.item.id % 2 + 1} text-lg-center`}>{props.item.name}</h2>
            <img src={`./images/technologies/${props.item.img}`} alt={props.item.name} className={`technology-image-${props.item.id % 2 + 1}`}></img>
            <p style={textStyle} className={`technology-description-${props.item.id % 2 + 1}`}>{desc}</p>
        </div>
    );
};