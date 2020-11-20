import React from "react";

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="session-title">
          <h2>Sessions & Prices</h2>
        </div>

        <div className="mbwk">
          {/* <h3>Massage & Bodywork</h3> */}
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

        <div className="row ">
          <div class="card card-session mb-3">
            <div class="card-header">30 Minutes</div>
            <div class="card-body">
              <h5 class="card-title">$50</h5>
              <p class="card-text">
                Available ONLY to pre-existing clients. This session is meant to
                be a maintenance session for ONE area treated and assessed in
                previous sessions by the therapist. Schedule by PHONE ONLY.
              </p>
            </div>
          </div>

          <div class="card card-session mb-3">
            <div class="card-header">60 Minutes</div>
            <div class="card-body">
              <h5 class="card-title">$80</h5>
              <p class="card-text">
                Enough time for a full body session with one, possibly two areas
                of focus OR the full hour to focus on just those couple problem
                areas.
              </p>
            </div>
          </div>

          <div class="card card-session mb-3">
            <div class="card-header">90 Minutes</div>
            <div class="card-body">
              <h5 class="card-title">$110</h5>
              <p class="card-text">
                Ideal for a full body session with 2-3 areas of focus OR focus
                ONLY on 2-3 problem areas. Incorporated fascial stretching to
                effectively release connective tissues and deep tension.
              </p>
            </div>
          </div>
        </div>

        <div className="row ">
          <div class="card card-session mb-3">
            <div class="card-header">120 Minutes</div>
            <div class="card-body">
              <h5 class="card-title">$140</h5>
              <p class="card-text">
                Ample time for a full body session and even more time to relax
                and feel refreshed! This is our therapist's favorite as it
                allows for them to work efficiently and effectively without
                being rushed to get to other areas.
              </p>
            </div>
          </div>

          <div class="card card-session mb-3">
            <div class="card-header">
              120+ Minute Session (2 hours or longer)
            </div>
            <div class="card-body">
              <h5 class="card-title">$140+</h5>
              <p class="card-text">
                This session is to be discussed and decided with your therapist
                PRIOR to scheduling. Meant for clients with multiple (3+) areas
                needing focus. We like to provide the opportunity to get a
                longer session allowing the therapist to address all issues
                without a time limit. With agreement from the client the
                therapist continues to work past the two hours until each area
                of focus has been treated and price is decided at the end of the
                session (within means of hourly rates). Schedule by PHONE ONLY.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
