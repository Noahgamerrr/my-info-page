import projects from "../data/projects.json"
import Project from "../components/Project"

export default function Projects() {
    let projectsColumnOne = [];
    let projectsColumnTwo = [];
    let onFirstColumn = true;
    let projCount = 0;
    projects.forEach(p => {
        let projectElem = <Project order={projCount} key={p.id} item={p}/>;
        onFirstColumn ? projectsColumnOne.push(projectElem) : projectsColumnTwo.push(projectElem);
        onFirstColumn = !onFirstColumn;
        projCount++;
    })
    return (
        <>
            <h1>Projects</h1>
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-6">
                        {projectsColumnOne}
                    </div>
                    <div className="col-md-6">
                        {projectsColumnTwo}
                    </div>
                </div>
            </div>
        </>
    )
}