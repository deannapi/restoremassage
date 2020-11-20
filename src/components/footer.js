import React from "react";
import logo_2 from "../images/Restore_Logo_Final_V2 trimmed.png";

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

        <div className="row developer">
          <p>
            This website was built by DeAnna Martinez
            <a
              href="https://www.linkedin.com/in/deanna-martinez-63539a137/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </p>
        </div>
        {/* <div>
          <ul>
            <li><a>Privacy Policy</a></li>
            <li><a>Terms and Conditions</a></li>
          </ul>
        </div> */}
      </footer>
    );
  }
}
