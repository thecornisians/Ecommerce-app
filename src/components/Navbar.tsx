import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.svg";
import avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import close from "../images/icon-close.svg";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(true);

  function showNav() {
    setMobileNav(!mobileNav);
  }

  function showCart() {}

  return (
    <header className="navigation">
      <div className="logo-section">
        <GiHamburgerMenu onClick={showNav} className="hamburger_menu" />
        <img src={logo} alt="" className="logo" />
      </div>
      <nav className={`nav__items ${mobileNav ? "hide__nav" : "show__nav"}`}>
        <ul>
          <img src={close} alt="" className="close__button" onClick={showNav} />
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="cart__avatar">
        <img src={cart} alt="" className="cart" onClick={showCart} />
        <img src={avatar} alt="" className="avatar" />
      </div>
    </header>
  );
}

// - Mobile: 375px
// - Desktop: 1440px
