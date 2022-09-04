import { Link } from "react-router-dom";
import svg from '../Assets/logos/quacksounds-v5.svg'

export default function SiteHeader(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <img width="48" height="48" src={svg}/>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            {props.page == "home" ? <b>Home</b> : 'Home'}{" "}
                            <span className="sr-only"></span>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/About">
                            {props.page == "about" ? <b>About</b> : 'About'}{" "}
                            <span className="sr-only"></span>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/SongLiked">
                        {props.page == "likedSongs" ? <b>LikesSongs</b> : "Liked Songs"}{" "}
                        <span className="sr-only"></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}