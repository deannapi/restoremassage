import React from "react";
import selfie from "../images/Selfie w Logo.png"

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="row">
            <div className="card">
              <img className="card-img-top" src={selfie} alt="selfie"/>
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">
                  Restore Massage and Bodywork is a small business located in
                  Alamo Heights near downtown San Antonio. It is owned and
                  operated by Allysia Payen, LMT. Allysia made the move from
                  West Texas to San Antonio in 2018 to begin her journey of
                  opening her own business as a massage therapist.
                  <br></br>
                  <br></br>
                  Allysia is certified in multiple disciplines of massage
                  therapy that contribute her knowledge and expertise of the
                  field. Providing clientele with a unique therapeutic
                  experience of body restoration is the utmost goal.
                  <br></br>
                  <br></br>
                  She has competed in CrossFit and olympic weightlifting, all
                  the while maintaining an active lifestyle that contributes to
                  a deeper understanding of recovery and relief for clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
