export default function AboutMe() {
    return (
        <>
            <h1>About Me</h1>
            <div className="container-fluid">
                <div className="row">
                    <figure className="col-lg-3 col-md-4 me">
                        <img src="images/me.jpeg" alt="me" className="img-fluid me"/>
                        <figcaption>That's me, Noah Arsi&#263;</figcaption>
                    </figure>
                    <span className="col-lg-9 col-md-8 mb-4">
                        Hi, I'm Noah Arsi&#263;, currently 17 years old and learning computer science
                        at the HTL Villach in Austria. I have been attending this school for 2.5 years now
                        and I love what I learn there, as well as the things I teach myself at home. My burning
                        interest in this topic has helped me create my own projects over the last years and
                        has taught me to never give up, no matter how difficult the topic is.
                    </span>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h3>My hobbies include:</h3>
                        <ul>
                            <li>Programming</li>
                            <li>Playing video games</li>
                            <li>Riding my bike</li>
                            <li>Reading</li>
                            <li>Languages & linguistics</li>
                            <li>Mathematics</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h3>Internships:</h3>
                        <ul>
                            <li>
                                <p className="list-title">Summer 2023</p>
                                <p>SQL-developper at Infineon Technologies</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Competitions:</h3>
                        <ul>
                            <li>
                                <p className="list-title">2019</p>
                                <a className="link" href="https://oemo.at/OeMO/Ergebnisse/LWA/kst/2019">3rd Price at the Junior Mathematical Olympiad in Carinthia & Styria</a>
                            </li>
                            <li>
                                <p className="list-title">2020</p>
                                <a className="link" href="https://oemo.at/OeMO/Ergebnisse/LWA/kst/2020">2nd Price at the Junior Mathematical Olympiad in Carinthia & Styria</a>
                            </li>
                            <li>
                                <p className="list-title">2023</p>
                                <a className="link" href="https://www.coding-contest.at/wp-content/uploads/2023/03/KCC11_Ergebnis_fuer_Homepage.pdf">19th place at the KNAPP Coding Contest</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}