import { Link } from "react-router-dom";

export default function SiteHeader(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" to="/">
                            {props.page == "home" ? <b>Home</b> : 'Home'}{" "}
                            <span className="sr-only"></span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" to="/About">
                            {props.page == "about" ? <b>About</b> : 'About'}{" "}
                            <span className="sr-only"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}