import React from "react";
import logo_2 from "../images/Restore_Logo_Final_V2 trimmed.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <img src={logo_2} height="50px" alt="logo" />
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
      </footer>
    );
  }
}
