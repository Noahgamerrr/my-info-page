import React from "react";

export default function Language(props) {
    const [desc, setDesc] = React.useState("");
    const file = `/descriptions/${props.item.text}`;
    console.log(file);
    React.useEffect(() => {
        fetch(file)
            .then(t => t.text())
            .then(text => setDesc(text));
        }, [file]
    );
    const textStyle = {textAlign: "justify"};
    return (
        <div className={`language-grid-${props.item.id % 2 + 1}`}>
            <h2 className={`language-title-${props.item.id % 2 + 1} text-lg-center`}>{props.item.name}</h2>
            <img src={`./images/${props.item.img}`} alt="c" className={`language-image-${props.item.id % 2 + 1}`}></img>
            <p style={textStyle} className={`language-description-${props.item.id % 2 + 1}`}>{desc}</p>
        </div>
    );
};