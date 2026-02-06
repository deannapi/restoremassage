import React from "react";

export default class SessionsPrices extends React.Component {
  render() {
    return (
      <>
        <div className="session-title">
          <h2>Sessions & Prices</h2>
        </div>

        <div className="mbwk">
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

        <div className="card card-session mb-3">
          <div className="card-header">Massage & Bodywork</div>
          <div className="card-body">
            <h5 className="card-title">1 Hour Session - $125</h5>

            <h5 className="card-title">1.5 Hour Session - $165</h5>

            <h5 className="card-title">2 Hour Session - $195</h5>
            <p className="card-text">
              Sessions are tailored to your unique patterns, lifestyle, and
              goals, using a blend of therapeutic modalities such as myofascial
              release, soft tissue manipulation, instrument-assisted/Graston,
              lymphatic drainage etc. This integrative approach helps reduce
              tension, improve mobility, and support long‑term recovery. Every
              treatment is designed to help you feel more balanced, restored,
              and connected to your body.
            </p>
          </div>
        </div>

        <div className="card card-session mb-3">
          <div className="card-header">Performance Stretch Therapy</div>
          <div className="card-body">
            <h5 className="card-title">1 Hour Session - $125</h5>
            <h5 className="card-title">1.5 Hour Session - $165</h5>

            <h5 className="card-title">2 Hour Session - $195</h5>
            <p className="card-text">
              Fascia needs movement. The more we move, the more the body can
              repair and restore efficiently. Stretch sessions focus on the
              fascial lines throughout our body to improve mobility,
              restrictions and pain. Anyone from desk workers to weekend
              warriors to professional athletes can benefit from stretch
              therapy.
            </p>
          </div>
        </div>

        <div className="card card-session mb-3">
          <div className="card-header">
            Hybrid Sessions: Massage + Stretch Therapy
          </div>
          <div className="card-body">
            <h5 className="card-title">1.5 Hour Session - $165</h5>
            <h5 className="card-title">2 Hour Session - $195</h5>
            <h5 className="card-title">2.5 Hour Session - $245</h5>
            <h5 className="card-title">3 Hour Session - $295</h5>
          </div>
        </div>

        <div className="card card-session mb-3">
          <div className="card-header">Facial Cupping Rejuvenation</div>
          <div className="card-body">
            <h5 className="card-title">Half Hour - $50</h5>
            <p className="card-text">
              The best of both worlds! Hybrid sessions integrate massage and
              stretch therapy to improve movement, support recovery, and give
              you the best of both approaches in one session.
            </p>
          </div>
        </div>
      </>
    );
  }
}