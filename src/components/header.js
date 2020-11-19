import React from "react";
import logo_1 from "../images/Restore_Logo_Final trimmed.png";

export default function Nav(props) {
  const {
    ContactSelected,
    setContactSelected,
    HomeSelected,
    setHomeSelected,
    AppointmentsSelected,
    setAppointmentsSelected,
    MenuSelected,
    setMenuSelected,
    GiftSelected,
    setGiftSelected,
    BlogSelected,
    setBlogSelected,
    ProductsSelected,
    setProductsSelected
  } = props;

  return (
    <>
      <header>
        <nav className="row">
          <img src={logo_1} alt="logo" height="150px" className="header_logo" />
          <div className="dropdown">
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
                <li className={` ${HomeSelected && `navActive`}`}>
                  <a href="#home">
                    <span
                      onClick={() => {
                        setContactSelected(false);
                        setAppointmentsSelected(false);
                        setHomeSelected(true);
                        setMenuSelected(false);
                        setGiftSelected(false);
                        setBlogSelected(false);
                        setProductsSelected(false);
                      }}
                    >
                      Home
                    </span>
                  </a>
                </li>

                <li className={` ${AppointmentsSelected && `navActive`}`}>
                  <a href="#appointments">
                    <span
                      onClick={() => {
                        setContactSelected(false);
                        setAppointmentsSelected(true);
                        setHomeSelected(false);
                        setMenuSelected(false);
                        setGiftSelected(false);
                        setBlogSelected(false);
                        setProductsSelected(false);
                      }}
                    >
                      Appointments
                    </span>
                  </a>
                </li>

                <li className={`${ContactSelected && `navActive`}`}>
                  <a href="#contact">
                    <span
                      onClick={() => {
                        setContactSelected(true);
                        setAppointmentsSelected(false);
                        setHomeSelected(false);
                        setMenuSelected(false);
                        setGiftSelected(false);
                        setBlogSelected(false);
                        setProductsSelected(false);
                      }}
                    >
                      {" "}
                      Contact Me
                    </span>
                  </a>
                </li>

                <li className={`${GiftSelected && `navActive`}`}>
                  <a href="https://squareup.com/gift/RFMDW8TJJ8M7K/order?external_source=postoffice-email&external_token=ryEMlwN1ZO4mOH0n" target="_blank" rel="noreferrer">
                    <span
                      onClick={() => {
                        setContactSelected(false);
                        setAppointmentsSelected(false);
                        setHomeSelected(false);
                        setMenuSelected(false);
                        setGiftSelected(true);
                        setBlogSelected(false);
                        setProductsSelected(false);
                      }}
                    >
                      {" "}
                      Gift Cards
                    </span>
                  </a>
                </li>
                
                <li className={`${MenuSelected && `navActive`}`}>
                  <a href="#menu">
                    <span
                      onClick={() => {
                        setContactSelected(false);
                        setAppointmentsSelected(false);
                        setHomeSelected(false);
                        setMenuSelected(true);
                        setGiftSelected(false);
                        setBlogSelected(false);
                        setProductsSelected(false);
                      }}
                    >
                      {" "}
                      Sessions & Prices
                    </span>
                  </a>
                </li>

                <li className={`${BlogSelected && `navActive`}`}>
                  <a href="#blog">
                    <span
                      onClick={() => {
                        setContactSelected(false);
                        setAppointmentsSelected(false);
                        setHomeSelected(false);
                        setMenuSelected(false);
                        setGiftSelected(false);
                        setBlogSelected(true);
                        setProductsSelected(false);
                      }}
                    >
                      {" "}
                      My Blog
                    </span>
                  </a>
                </li>

                <li className={`${ProductsSelected && `navActive`}`}>
                  <a href="#products">
                    <span
                      onClick={() => {
                        setContactSelected(false);
                        setAppointmentsSelected(false);
                        setHomeSelected(false);
                        setMenuSelected(false);
                        setGiftSelected(false);
                        setBlogSelected(false);
                        setProductsSelected(true);
                      }}
                    >
                      {" "}
                      Products
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
