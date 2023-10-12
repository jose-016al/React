import { NavLink } from "react-router-dom"
import { Nav } from "./Nav"

export const Header = () => {
    return (
        <header className="layout__navbar">

            <div className="title">
                <NavLink to="/" className="navbar__title">REACT|SOCIAL</NavLink>
            </div>

            <Nav />

        </header>
    )
}
