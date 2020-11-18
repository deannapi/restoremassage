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
                      }}
                    >
                      {" "}
                      Contact Me
                    </span>
                  </a>
                </li>

                <li className={`${ContactSelected && `navActive`}`}>
                  <a href="https://squareup.com/gift/RFMDW8TJJ8M7K/order?external_source=postoffice-email&external_token=ryEMlwN1ZO4mOH0n" target="_blank">
                    <span
                      onClick={() => {
                        setContactSelected(true);
                        setAppointmentsSelected(false);
                        setHomeSelected(false);
                      }}
                    >
                      {" "}
                      Gift Cards
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
