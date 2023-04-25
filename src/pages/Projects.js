import projects from "../data/projects.json"
import Project from "../components/Project"

export default function Projects() {
    let projectsColumnOne = [];
    let projectsColumnTwo = [];
    let onFirstColumn = true;
    projects.forEach(p => {
        let projectElem = <Project key={p.id} item={p}/>;
        onFirstColumn ? projectsColumnOne.push(projectElem) : projectsColumnTwo.push(projectElem);
        onFirstColumn = !onFirstColumn;
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