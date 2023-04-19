import Language from "../components/Language";
import technologies from "../data/technologies.json";

export default function Technologies() {
    const techElements = technologies.map(e => <Language key={e.id} item={e}/>);

    return (
        <>
            <h1>Technologies</h1>
            {techElements}
        </>
    )
}