import { Link } from "react-router-dom";

export default function SiteHeader(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-header">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex align-items-center">
                    <img width="48" height="48" src="/Assets/logos/quacksounds-v5.svg"/>
                    <li className="nav-item active">
                        <div className="nav-link h6 mb-0 m-10px">Spotimy</div>
                    </li>
                    <li className="nav-item active m-50px">
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