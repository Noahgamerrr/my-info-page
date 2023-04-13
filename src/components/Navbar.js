import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav className="sidebar col-md-2 shadow">
                <div className="list-group list-group-flush">
                    <Link className="list-group-item" to="/">Home</Link>
                    <Link className="list-group-item" to="/technologies">Technologies</Link>
                    <Link className="list-group-item" to="/languages">Languages</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}