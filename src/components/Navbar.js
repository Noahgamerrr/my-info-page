import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/technologies">Technologies</Link></li>
                    <li><Link to="/languages">Languages</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}