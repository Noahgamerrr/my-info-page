import React from "react";
import internships from "../data/internships.json";
import competitions from "../data/competitions.json";
import CompetitionYear from "../components/CompetitionYear";

export default function Home() {
    const fadeRef = React.useRef([]);

    React.useEffect(() => {
        if (fadeRef.current.length > 0) {
            let delay = 0;
            for (let c in fadeRef.current) {
                delay = c * 0.5;
                fadeRef.current[c].style.animationDelay = `${delay}s`;
            }
            delay = 0.5 * (fadeRef.current.length + 1);
        }
    });

    const internshipElems = internships.map(job => {
        return <li>
            <p className="list-title">{job.timeSpan}</p>
            <p>{job.description}</p>
        </li>
    });

    const competitionElems = competitions.map(comp => <CompetitionYear key={comp.year} item={comp}/>)

    return (
        <>
            <h1>Home</h1>
            <div ref={r => fadeRef.current[0] = r} className="container-fluid fade-in">
                <div className="row">
                    <figure className="col-lg-3 col-md-4 me">
                        <img src="images/me.jpeg" alt="me" className="img-fluid me"/>
                    </figure>
                    <span className="col-lg-9 col-md-8 mb-4">
                        Hi, I'm Noah Arsi&#263;, currently 17 years old and studying computer science
                        at the HTL Villach in Austria. I have been attending this school for 2.5 years now
                        and I love what I learn there, as well as the things I teach myself at home. My burning
                        passion for this topic has helped me create my own projects over the last years and
                        has ispired me to never give up, no matter how difficult the topic is.
                    </span>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div ref={r => fadeRef.current[1] = r} className="col-md-4 mb-4 fade-in">
                        <h3>My hobbies include:</h3>
                        <ul>
                            <li>Programming</li>
                            <li>Biking</li>
                            <li>Reading</li>
                            <li>Languages & linguistics</li>
                            <li>Mathematics</li>
                            <li>Chess</li>
                            <li>Playing video games</li>
                        </ul>
                    </div>
                    <div ref={r => fadeRef.current[2] = r} className="col-md-4 mb-4 fade-in">
                        <h3>Internships/Jobs:</h3>
                        <ul>
                            {internshipElems}
                        </ul>
                    </div>
                    <div ref={r => fadeRef.current[3] = r} className="col-md-4 fade-in">
                        <h3>Competitions:</h3>
                        {competitionElems}
                    </div>
                </div>
            </div>
        </>
    )
}