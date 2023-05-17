import projects from "../data/projects.json"
import Project from "../components/Project"
import React from "react";

export default function Projects() {
    const [screenSize, setScreenSize] = React.useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	React.useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
    		}
    		window.addEventListener('resize', updateDimension);
    
		
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize]);

    let projectsColumnOne = [];
    let projectsColumnTwo = [];
    let projectsMobile = [];
    let onFirstColumn = true;
    let projCount = 0;
    projects.forEach(p => {
        let projectElem = <Project order={projCount} key={p.id} item={p}/>;
        onFirstColumn ? projectsColumnOne.push(projectElem) : projectsColumnTwo.push(projectElem);
        projectsMobile.push(projectElem);
        onFirstColumn = !onFirstColumn;
        projCount++;
    })
    return (
        <>
            <h1>Projects</h1>
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-6">
                        {screenSize.width > 768 ? projectsColumnOne : projectsMobile}
                    </div>
                    {   screenSize.width > 768 &&
                        <div className="col-md-6">
                            {projectsColumnTwo}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}