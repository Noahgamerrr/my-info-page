import { Outlet, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
    const [active, setActive] = React.useState("home");
    return (
        <>
            <nav className="sidebar col-md-2 shadow">
                <div className="list-group list-group-flush">
                    <Link className="list-group-item" to="/" onClick={() => setActive("home")}>
                        <span className={active === "home" && "link-active"}>Home</span>
                    </Link>
                    <Link className="list-group-item" to="/about-me" onClick={() => setActive("about")}>
                        <span className={active === "about" && "link-active"}>About me</span>
                    </Link>
                    <Link className="list-group-item" to="/technologies" onClick={() => setActive("technologies")}>
                        <span className={active === "technologies" && "link-active"}>Technologies</span>
                    </Link>
                    <Link className="list-group-item" to="/languages" onClick={() => setActive("languages")}>
                        <span className={active === "languages" && "link-active"}>Languages</span>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}