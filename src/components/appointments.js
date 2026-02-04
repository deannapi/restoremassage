import React from "react";
import blading from "../images/blade2.jpg";
import backcup from "../images/backcup2.jpg";

export default class Appointments extends React.Component {
  render() {
    return (
      <>
        <div className="appt">
          <h2>Appointments</h2>
          <h5>
            NEW Clients Must Complete the Form Before Booking Appointments
          </h5>
          <div className="cancellation">
            <h5>Cancellation Policy</h5>
            <p>
              If you have an upcoming appointment, please notify your therapist
              24 hours before your scheduled appointment for any cancellations.
              If you arrive more than 10 minutes late for your service, we may
              not be able to accommodate you and we will charge a cancellation
              fee of the full service.
              <br></br>
              Please respect your massage therapist and your scheduled time. Any
              missed appointments, no shows or cancellations (within the 24
              hours) are subject to 100% charge of the session. After three
              cancellations (within the 24 hour window) and/or no shows, we will
              no longer be able to service you. Thank you for your
              understanding.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <img src={blading} alt="blading" />
            <div className="card-body">
              <h5>Existing Clients</h5>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#appointment"
              >
                Book an Appointment
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="appointment"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">
                        Booking an Appointment
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body"></div>
                    <p>
                      Is this your first time visiting? <br />
                      Are you a <b>NEW</b> client?
                    </p>
                    <div className="modal-footer">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        id="appt-modal"
                      >
                        <a
                          href="https://forms.office.com/Pages/ResponsePage.aspx?id=HLL39TyF4kOpSQMQssnEsRgU7hBnhSBKgQZZx1w59_lURU9BRUtHS09GVDlLOUdZSUpIUVpEUVZNQyQlQCN0PWcu"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Yes, I am a NEW client.
                        </a>
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        id="appt-modal"
                      >
                        <a
                          href="https://square.site/book/S3JQTRESFMDNN/restore-massage-bodywork-san-antonio-tx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          I am not new, I'm ready to book an appointment.
                        </a>
                      </button>

                
                    </div>
                  </div>
                </div>
              </div>

     
            </div>
          </div>

          <div className="card">
            <img src={backcup} alt="blading" />
            <div className="card-body">
              <h5>New Clients</h5>
              <button
                type="button"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://forms.office.com/Pages/ResponsePage.aspx?id=HLL39TyF4kOpSQMQssnEsRgU7hBnhSBKgQZZx1w59_lURU9BRUtHS09GVDlLOUdZSUpIUVpEUVZNQyQlQCN0PWcu";
                }}
              >
                Please complete the new client form before booking appointments.
              </button>
              {/* <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=HLL39TyF4kOpSQMQssnEsRgU7hBnhSBKgQZZx1w59_lURU9BRUtHS09GVDlLOUdZSUpIUVpEUVZNQyQlQCN0PWcu"
                target="_blank"
                rel="noreferrer"
              >
                Please complete the new client form before booking appointments.
              </a> */}
            </div>
          </div>
        </div>

        {/* CANCELLATION MODAL */}
        {/* <div className="cancellation">
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#blogModal1"
          >
            Cancellation Policy
          </button>
        </div>

        <div
          className="modal fade"
          id="blogModal1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Cancellation Policy
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  If you have an upcoming appointment, please notify your
                  therapist 48 hours before your scheduled appointment for any
                  cancellations. If you arrive more than 10 minutes late for
                  your service, we may not be able to accommodate you and we
                  will charge a cancellation fee of the full service.
                  <br></br>
                  Please respect your massage therapist and your scheduled time.
                  Any missed appointments, no shows or cancellations (within the
                  48 hours) are subject to 100% charge of the session. After
                  three cancellations (within the 48 hour window) and/or no
                  shows, we will no longer be able to service you. Thank you for
                  your understanding.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}
