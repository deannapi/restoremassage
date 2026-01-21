import React from "react";
import selfie from "../images/Selfie w Logo.png"

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="row">
            <div className="card">
              <img className="card-img-top" src={selfie} alt="selfie" id="aboutme" />
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">
                  Allysia Payen is the owner and therapist behind Restore Massage 
                  & Bodywork in San Antonio, Texas. She moved to San Antonio in 2018 
                  from West Texas to pursue her vision of building a practice rooted 
                  in high‑quality, therapeutic care.
                  <br></br>
                  <br></br>
                  Allysia is certified in multiple modalities of bodywork, allowing 
                  her to create a unique and effective therapeutic experience for 
                  every client. Her commitment to ongoing education and her own 
                  active lifestyle deepen her understanding of movement, recovery, 
                  and the body’s natural ability to heal. This dedication ensures 
                  that each session supports meaningful relief, restoration, 
                  and long‑term well‑being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
