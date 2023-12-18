export default function CompetitionYear(props) {
    let competitions = props.item.competitions;
    const competitionsElems = competitions.map(comp => <li>
        <a className="link" href={comp.link}>{comp.description}</a>
    </li>);

    return (
        <>
            <p className="competition-year">{props.item.year}</p>
            <ul>
                {competitionsElems}
            </ul>
        </>
    )
}