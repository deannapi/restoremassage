import React from "react";
import { Link } from "react-router-dom";
import logo_1 from "../images/Restore_Logo_Final trimmed.png";

export default function Nav(props) {
  return (
    <>
      <header>
        <nav className="row">
          <img src={logo_1} alt="logo" height="150px" className="header_logo" />
          <div className="btn-group dropright">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/appointments">Appointments</Link>
                </li>

                <li>
                  <Link to="/menu">Sessions & Prices</Link>
                </li>

                <li>
                  <Link to="/products">Products</Link>
                </li>

                <li>
                  <a
                    href="https://squareup.com/gift/RFMDW8TJJ8M7K/order?external_source=postoffice-email&external_token=ryEMlwN1ZO4mOH0n"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gift Cards
                  </a>
                </li>

                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
