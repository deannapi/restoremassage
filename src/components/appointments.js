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
          <div className="row">
            <div className="cancellation">
              <h5>Cancellation Policy</h5>
              <p>
                If you have an upcoming appointment, please notify your
                therapist 24 hours before your scheduled appointment for any
                cancellations. If you arrive more than 10 minutes late for your
                service, we may not be able to accommodate you and we will
                charge a cancellation fee of the full service.
                <br></br>
                Please respect your massage therapist and your scheduled time.
                Any missed appointments, no shows or cancellations (within the
                24 hours) are subject to 100% charge of the session. After three
                cancellations (within the 24 hour window) and/or no shows, we
                will no longer be able to service you. Thank you for your
                understanding.
              </p>
            </div>
            <div className="modal-content cancellation">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Restore Massage &amp; Bodywork Zero Tolerance Policy
                </h5>
              </div>

              <div className="modal-body">
                <p className="zt_header">
                  Restore Massage &amp; Bodywork is a professional therapeutic
                  practice. To ensure a safe, respectful, and ethical
                  environment for both clients and practitioner, the following
                  Zero Tolerance Policy is strictly upheld:
                </p>

                <ul className="zt-list">
                  <li className="zt-firstitem-sessions">
                    <h2>
                      Any form of sexual language, innuendo, solicitation, or
                      inappropriate behavior is not permitted.
                    </h2>
                    <ul className="zt-sublist">
                      <li>
                        This includes verbal comments, gestures, requests, or
                        actions that are sexual in nature or violate
                        professional boundaries.
                      </li>
                    </ul>
                  </li>

                  <li className="zt-firstitem-sessions">
                    <h2>
                      Bodywork and massage therapy are strictly non-sexual
                      services.
                    </h2>
                    <ul className="zt-sublist">
                      <li>
                        Any attempt to shift the session toward sexual intent
                        will result in the immediate termination of the
                        appointment.
                      </li>
                    </ul>
                  </li>

                  <li className="zt-firstitem-sessions">
                    <h2>
                      The session will end immediately if inappropriate behavior
                      occurs.
                    </h2>
                    <ul className="zt-sublist">
                      <li>
                        Payment for the full session will still be required, and
                        the client will be permanently dismissed from the
                        practice.
                      </li>
                    </ul>
                  </li>

                  <li className="zt-firstitem-sessions">
                    <h2>
                      Respect for personal and professional boundaries is
                      expected at all times.
                    </h2>
                    <ul className="zt-sublist">
                      <li>
                        Clients must communicate respectfully, follow draping
                        guidelines, and honor the therapeutic nature of the
                        work.
                      </li>
                    </ul>
                  </li>

                  <li className="zt-firstitem-sessions">
                    <h2>Safety is the top priority.</h2>
                    <ul className="zt-sublist">
                      <li>
                        This policy exists to protect the integrity of the
                        therapeutic relationship and ensure a safe, comfortable
                        environment for healing and recovery.
                      </li>
                    </ul>
                  </li>
                </ul>

                <p className="zt-footer">
                  By booking a session at Restore Massage &amp; Bodywork,
                  clients agree to uphold these standards and participate in a
                  professional, respectful therapeutic experience.
                </p>
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </>
    );
  }
}
