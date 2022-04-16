import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../../assets/logo.png";
export const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="index.html">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <form className="searchbar">
        <input type="text" placeholder="Search" />
        <button className="btn-icon" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>

      <ul className="no-list-style nav__list--static">
        <li>
          <NavLink to="/">
            <button className="btn btn-transparent-black-br">Login</button>
          </NavLink>
        </li>
        <li>
          <button className="theme-toggle btn btn-transparent-black-br">
            Theme
          </button>
        </li>
      </ul>
    </nav>
  );
};
