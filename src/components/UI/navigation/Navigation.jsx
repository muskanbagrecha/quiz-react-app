import { useNavigate, NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../../assets/logo.png";
import { User, Moon, Sun } from "../../../assets/icons/Icons";
import { useTheme, useAuth } from "../../../hooks/";

export const Navigation = () => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();

  const {
    authState: { isAuthenticated, user },
    logoutHandler,
  } = useAuth();

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
        <li className="btn-icon user-icon">
          {!isAuthenticated ? (
            <span onClick={() => navigate("/login")}>
              <User />
            </span>
          ) : (
            <span className="avatar avatar-xs avatar-text">
              {user?.firstName[0] + user?.lastName[0]}
            </span>
          )}
          <nav className="user--hover">
            {isAuthenticated ? (
              <div>
                <Link to="/user">Welcome, {user?.firstName}</Link>
                <hr />
                <Link to="/cart">Cart</Link>
                <br />
                <Link to="/wishlist">Wishlist</Link>
                <hr />
                <button className="btn-link-text" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <p>Welcome,</p>
                <small>To access account</small>
                <Link to="/login" className="btn-link-text">
                  Login/Signup
                </Link>
              </div>
            )}
          </nav>
        </li>
        <li className="btn-icon" onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </li>
      </ul>
    </nav>
  );
};
