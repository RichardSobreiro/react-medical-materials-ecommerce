/** @format */
import classes from "./Header.module.css";
import telephone from "../../images/telephone-symbol-button.png";
import facebook from "../../images/fb.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";

const Header = (props) => {
  return (
    <header className={classes["header-section"]}>
      <div className={classes.container}>
        <div className={classes["top-contact-container"]}>
          <div className={classes["tel-container"]}>
            <a href="true">
              <img src={telephone} alt="Telephone symbol."></img>
              Call +01 987 654 321
            </a>
          </div>
          <div className={classes["social-container"]}>
            <a href="true">
              <img src={facebook} alt="Facebook icon."></img>
              <img src={twitter} alt="Twitter icon."></img>
              <img src={instagram} alt="Instagram icon."></img>
            </a>
          </div>
        </div>
      </div>
      <div className={classes["container-fluid"]}>
        <nav className={classes.navbar}>
          <a href="true" className={classes["navbar-brand"]}>
            <img src={logo} alt="Company logo"></img>
            <span>MedDist</span>
          </a>
          <ul className={classes["navbar-nav"]}>
            <li>Home</li>
            <li>Orders</li>
            <li>About</li>
          </ul>
          <button
            type="button"
            aria-label="Expand menu"
            className={classes["navbar-toggler"]}
          >
            <img src={menu} alt="Menu button expander"></img>
          </button>
          <div className={classes["mobile-menu"]}>
            <ul className={classes["mobile-menu-list"]}>
              <li>Home</li>
              <li>Orders</li>
              <li>About</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
