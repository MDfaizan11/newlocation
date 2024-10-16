import "./Header.css";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const [toggle, settoggle] = useState(false);

  function handleClick() {
    settoggle(!toggle);
  }
  return (
    <>
      <header>
        <div>
          <h1>Faizan</h1>
        </div>

        <nav className={toggle ? "nav_menu" : "nav_menuu"}>
          <NavLink
            to="/practice"
            style={{ textDecoration: "none" }}
            className="nav_item"
            activeClassName="active"
            onClick={() => settoggle(!toggle)}
          >
            home
          </NavLink>

          <NavLink
            to="/one"
            style={{ textDecoration: "none" }}
            activeClassName="active"
            className="nav_item"
            onClick={() => settoggle(!toggle)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/two"
            style={{ textDecoration: "none" }}
            activeClassName="active"
            className="nav_item"
            onClick={() => settoggle(!toggle)}
          >
            Service
          </NavLink>

          <NavLink
            to="/three"
            style={{ textDecoration: "none" }}
            activeClassName="active"
            className="nav_item"
            onClick={() => settoggle(!toggle)}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="icon" onClick={handleClick}>
          {!toggle ? <GiHamburgerMenu /> : <ImCross />}
        </div>
      </header>
    </>
  );
}

export default Header;
