import React from "react";
import logo_2 from "../images/Restore_Logo_Final_V2 trimmed.png";
// import deannapi from "../images/deannapi.jpg";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <img src={logo_2} height="45px" alt="logo" />
          <ul>
            <li className="instagram">
              <a href="https://www.instagram.com/restore_massageandbodywork?igshid=1aqi3wfvv97u5">
                <i
                  className="fa fa-instagram"
                  id="insta"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="facebook">
              <a href="https://www.facebook.com/AllysiaMartinezLMT/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="row copyright">
          <p>
            COPYRIGHT © 2018 RESTORE MASSAGE AND BODYWORK - ALL RIGHTS RESERVED
          </p>
        </div>

        {/* <div className="row developer">
          <p>
            Website by{" "}
            <a href="https://www.deannapi.com" target="_blank" rel="noreferrer" id="deannapi">
              {" "}
              <img src={deannapi} alt="deannapi" height="20px" id="deannapi"/> DeAnna Barker
            </a>
          </p>
        </div> */}
      </footer>
    );
  }
}
