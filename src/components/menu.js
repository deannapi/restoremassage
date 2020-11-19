import React from "react";

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <div>
          <h2>Sessions & Prices</h2>
        </div>

        <div>
          <h3>Massage & Bodywork</h3>
          <p>
            All sessions are customized to the needs of the individual client.
            The therapist uses their knowledge and experience in different
            modalities to provide relief and restoration of the body. Sessions
            can include but are not limited to modalities such as Swedish
            Massage, Deep Tissue, Myofascial Release, Sports Massage, Cupping
            Therapy and Instrument Assisted Soft Tissue Manipulation/Graston
            Technique.
          </p>
        </div>

        <div>
          <h5>30 Minutes</h5>
          <h6>$50</h6>
          <p>
            Available ONLY to pre-existing clients. This session is meant to be
            a maintenance session for ONE area treated and assessed in previous
            sessions by the therapist. Schedule by PHONE ONLY.
          </p>
        </div>
      </>
    );
  }
}
