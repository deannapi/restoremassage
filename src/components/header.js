import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="bg-img"></div>

        <nav class="navbar navbar-expand-lg navbar-links navbar-primary">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainNavbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible links */}
          <div class="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav header-nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SessionsPrices">
                  Sessions & Prices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
