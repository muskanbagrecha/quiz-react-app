import { useNavigate, NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../../assets/logo.png";
import { User, Moon, Sun } from "../../../assets/icons/Icons";
import { useTheme } from "../../../context/";

export const Navigation = () => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();
  return (
    <nav className="navigation">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <form className="searchbar">
        <input type="text" placeholder="Search" />
        <button className="btn-icon" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>

      <ul className="no-list-style nav__list--static">
        {/* <li>
          <button
            className="btn btn-transparent-black-br"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </li>
        <li>
          <button className="theme-toggle btn btn-transparent-black-br">
            Theme
          </button>
        </li> */}
        <li className="btn-icon">
          <User />
        </li>
        <li className="btn-icon" onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </li>
      </ul>
    </nav>
  );
};
