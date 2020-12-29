import React from "react";
// import Maps from "./map";
import review from "../images/review_share.png";

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="contact">
          <h2>Get In Touch!</h2>
          <label>Email:</label>
          <a href="mailto:restoremassageandbodywork@gmail.com">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-envelope-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
            restoremassageandbodywork@gmail.com
          </a>
          <br />
          <label>Phone:</label>
          <a href="tel:12108332331">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-telephone-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
              />
            </svg>
            (m) 210.833.2331
          </a>
          <br></br>
          <label>Address: </label>
          <a
            href="https://g.page/RestoreMassageBodywork?share"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-directions"></i>
            4940 Broadway Suite #134 <br></br> San Antonio, TX 78203
          </a>

          {/* <div className="row"> */}
            <div className="card-review">
              <div className="card-body">
                <a
                  href="https://g.page/RestoreMassageBodywork/review?gm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={review} alt="reviews" />
                  <br></br>
                  Leave a review
                </a>
              </div>
            </div>

            {/* <div className="reviews">
              <p>Google reviews will go here.</p>
            </div> */}
          {/* </div> */}
          <div className="google-map">
            {/* <Maps></Maps> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13894.125559261538!2d-98.462513!3d29.4716912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x865ea5a00f2bd9bb!2sRestore%20Massage%20and%20Bodywork!5e0!3m2!1sen!2sus!4v1606754081252!5m2!1sen!2sus"
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Restore Massage & Bodywork"
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}
