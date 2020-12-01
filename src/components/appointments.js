import React from "react";
import blading from "../images/blade2.jpg";
import backcup from "../images/backcup2.jpg";

export default class Appointments extends React.Component {
  render() {
    return (
      <>
        <div className="appt">
          <h2>Appointments</h2>
        </div>
        <div className="row">
          <div className="card">
            <img src={blading} alt="blading" />
            <div className="card-body">
              <h5>Existing Clients</h5>
              <a
                href="https://square.site/book/S3JQTRESFMDNN/restore-massage-bodywork-san-antonio-tx"
                target="_blank"
                rel="noreferrer"
              >
                Book an Appointment
              </a>
            </div>
          </div>

          <div className="card">
            <img src={backcup} alt="blading" />
            <div className="card-body">
              <h5>New Clients</h5>
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=-WVLKyRff0ubDsCCr8W6C9wJOPw3nfpCoe5N78DwuPJUMzJIVEIzTFVUWVNOOUNFSkdUNzExWVNKNi4u"
                target="_blank"
                rel="noreferrer"
              >
                Please complete the new client form before booking appointments.
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
