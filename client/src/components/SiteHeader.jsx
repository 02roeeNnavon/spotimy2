import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { loadFromStorage } from "../Services/LocalService";
import { useState } from "react";
const user = (props) => {
  if (loadFromStorage("user")?.status === "admin") {
    return (
      <li className="nav-item active">
        <Link className="nav-link text-defult" to="/addSong">
          {props.page == "addSong" ? <b>create page</b> : "add Song"}{" "}
          <span className="sr-only"></span>
        </Link>
      </li>
    );
  }
};
export default function SiteHeader(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-header gap">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav d-flex align-items-center">
          <Link className="nav-link text-defult" to="/">
            <img
              width="48"
              height="48"
              src="/Assets/logos/quacksounds-v5.svg"
            />
          </Link>
          <Link className="nav-link text-defult" to="/">
            <li className="nav-item active ml-2">
              <h4>
                {props.page == "home" ? <b>Spotimy</b> : "Spotimy"}{" "}
                <span className="sr-only"></span>
              </h4>
            </li>
          </Link>

          <li className="nav-item active">
            <Link className="nav-link text-defult" to="/About">
              {props.page == "about" ? <b>About</b> : "About"}{" "}
              <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link text-defult" to="/SongLiked">
              {props.page == "likedSongs" ? <b>LikesSongs</b> : "Liked Songs"}{" "}
              <span className="sr-only"></span>
            </Link>
          </li>
          {user(props)}
        </ul>
      </div>
      <LoginModal ></LoginModal>
    </nav>
  );
}
