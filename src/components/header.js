import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="bg-img" />

      <nav className="navbar navbar-expand-lg navbar-links navbar-primary">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "show" : ""
          }`}
          id="mainNavbar"
        >
          <ul className="navbar-nav header-nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact Me
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/appointments"
                onClick={closeMenu}
              >
                Appointments
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Sarga" onClick={closeMenu}>
                What is Sarga?
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/SessionsPrices"
                onClick={closeMenu}
              >
                Sessions &amp; Prices
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={closeMenu}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}