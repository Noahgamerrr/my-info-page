export default function Project(props) {
    return (
        <a href={props.item.link} className="project-link">
            <img src={`./images/projects/${props.item.image}`} className="project-image mb-3" alt={props.item.name}/>
            <h2 className="project-name">{props.item.name}</h2>
        </a>
    )
}