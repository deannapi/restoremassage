import React from "react";
// import PriceNotice from "../images/NewPriceNotice.png";

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
            <br></br>
            <b>ALL SESSIONS WITHIN CANCELLATION POLICY GUIDELINES.</b>
          </p>
        </div>

        <div className="row ">
          <div className="card card-session mb-3">
            <div className="card-header">1 Hour Session</div>
            <div className="card-body">
              <h5 className="card-title">$120</h5>
              <p className="card-text">
                Enough time for a full body session with one, possibly two areas
                of focus OR the full hour to focus on just those couple problem
                areas.
              </p>
            </div>
          </div>

          <div className="card card-session mb-3">
            <div className="card-header">1.5 Hour Session</div>
            <div className="card-body">
              <h5 className="card-title">$155</h5>
              <p className="card-text">
                Ideal for a full body session with 2-3 areas of focus OR focus
                ONLY on 2-3 problem areas. Incorporated fascial stretching to
                effectively release connective tissues and deep tension.
              </p>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="card card-session mb-3">
            <div className="card-header">2 Hour Session</div>
            <div className="card-body">
              <h5 className="card-title">$185</h5>
              <p className="card-text">
                Ample time for a full body session and even more time to relax
                and feel refreshed! This is our therapist's favorite as it
                allows for them to work efficiently and effectively without
                being rushed to get to other areas.
              </p>
            </div>
          </div>

          <div className="card card-session mb-3">
            <div className="card-header">Performance Stretch Therapy</div>
            <div className="card-body">
              <h5 className="card-title">1 Hour Session - $120</h5>
              <p>
                Focus on <b>ONE</b> area of stretching, such as only shoulders,
                only hips, etc...
              </p>
              <h5 className="card-title">1.5 Hour Session - $155</h5>
              <p>
                Possible full body stretch with <b>ONE</b> or <b>TWO</b> areas
                of focus.
              </p>
              <h5 className="card-title">2 Hour Session - $185</h5>
              <p className="card-text">
                Ample time for a full body stretching session and multiple areas
                of focus. This session length allows your therapist to work
                efficiently and effectively through each stretch.
              </p>
            </div>
          </div>

          <div className="card card-session mb-3">
            <div className="card-header">Facial Cupping Rejuvenation</div>
            <div className="card-body">
              <h5 className="card-title">Half Hour - $45</h5>
              <p className="card-text">
                Manual method for the face by use of small cups to vacuum and
                lift the facial tissue, mimicking the pumping movements of
                lymphatic drainage. The benefits include increased local
                circulation of the skin, increased nutrients brought to the
                epidermis, and enhanced absorption of facial topicals. The
                drainage of stagnant fluids from reservoir areas will reduce
                edema and chronic puffiness. Lines and wrinkles will plump while
                the scar tissue will soften from the negative pressure.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
