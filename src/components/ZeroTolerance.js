import React from "react";
import zerotolerance from "../images/zerotolerance.jpg";

export default class ZeroTolerance extends React.Component {
  render() {
    return (
      <>
        <div className="card" id="zerotolerance_card">
          <img
            className="card-img-top"
            src={zerotolerance}
            id="zerotolerance_img"
          />
          <div className="card-body">
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#zeroToleranceModal"
            >
              Read the Zero Tolerance Policy
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="zeroToleranceModal"
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
                      Restore Massage &amp; Bodywork Zero Tolerance Policy
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
                    <p className="zt_header">
                      Restore Massage &amp; Bodywork is a professional
                      therapeutic practice. To ensure a safe, respectful, and
                      ethical environment for both clients and practitioner, the
                      following Zero Tolerance Policy is strictly upheld:
                    </p>

                    <ul className="zt-list">
                      <li className="zt-firstitem">
                        {" "}
                        <h2>
                          Any form of sexual language, innuendo, solicitation,
                          or inappropriate behavior is not permitted.
                        </h2>
                        <ul className="zt-sublist">
                          <li>
                            This includes verbal comments, gestures, requests,
                            or actions that are sexual in nature or violate
                            professional boundaries.
                          </li>
                        </ul>
                      </li>

                      <li className="zt-firstitem">
                        <h2>
                          Bodywork and massage therapy are strictly non-sexual
                          services.
                        </h2>
                        <ul className="zt-sublist">
                          <li>
                            Any attempt to shift the session toward sexual
                            intent will result in the immediate termination of
                            the appointment.
                          </li>
                        </ul>
                      </li>

                      <li className="zt-firstitem">
                        <h2>
                          The session will end immediately if inappropriate
                          behavior occurs.
                        </h2>
                        <ul className="zt-sublist">
                          <li>
                            Payment for the full session will still be required,
                            and the client will be permanently dismissed from
                            the practice.
                          </li>
                        </ul>
                      </li>

                      <li className="zt-firstitem">
                        <h2>
                          Respect for personal and professional boundaries is
                          expected at all times.
                        </h2>
                        <ul className="zt-sublist">
                          <li>
                            Clients must communicate respectfully, follow
                            draping guidelines, and honor the therapeutic nature
                            of the work.
                          </li>
                        </ul>
                      </li>

                      <li className="zt-firstitem">
                        <h2>Safety is the top priority.</h2>
                        <ul className="zt-sublist">
                          <li>
                            This policy exists to protect the integrity of the
                            therapeutic relationship and ensure a safe,
                            comfortable environment for healing and recovery.
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <p className="zt-footer">
                      By booking a session at Restore Massage &amp; Bodywork,
                      clients agree to uphold these standards and participate in
                      a professional, respectful therapeutic experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
