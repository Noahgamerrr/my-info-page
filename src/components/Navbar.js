import { Outlet, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
    const [active, setActive] = React.useState("home");
    return (
        <> 
            <div className="col-lg-2 shadow nav-container">
                <nav className="position-lg-fixed nav-lg">
                    <div className="list-group list-group-flush">
                        <Link className="list-group-item" to="/" onClick={() => setActive("home")}>
                            <span className={active === "home" ? "link-active" : undefined}>Home</span>
                        </Link>
                        <Link className="list-group-item" to="/about-me" onClick={() => setActive("about")}>
                            <span className={active === "about" ? "link-active" : undefined}>About me</span>
                        </Link>
                        <Link className="list-group-item" to="/technologies" onClick={() => setActive("technologies")}>
                            <span className={active === "technologies" ? "link-active" : undefined}>Technologies</span>
                        </Link>
                        <Link className="list-group-item" to="/languages" onClick={() => setActive("languages")}>
                            <span className={active === "languages" ? "link-active" : undefined}>Languages</span>
                        </Link>
                        <Link className="list-group-item" to="/projects" onClick={() => setActive("projects")}>
                            <span className={active === "projects" ? "link-active" : undefined}>Projects</span>
                        </Link>
                    </div>
                </nav>
                <a href="https://github.com/Noahgamerrr" 
                   className="d-none d-lg-inline position-fixed bottom-1"
                   style={{"width": "3%"}}
                >
                    <img src="./images/github.svg" alt="github" style={{width: "100%"}}/>
                </a>
            </div>
            <Outlet />
        </>
    )
}