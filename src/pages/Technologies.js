import Technology from "../components/Technology";
import technologies from "../data/technologies.json";

export default function Technologies() {
    const techElements = technologies.map(e => <Technology key={e.id} item={e}/>);

    return (
        <>
            <h1>Technologies</h1>
            {techElements}
        </>
    )
}