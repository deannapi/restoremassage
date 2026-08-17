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
            Every session at Restore begins with the principles of
            <b> Sarga Bodywork</b> — fluid, barefoot, fascia‑focused pressure
            that creates deep therapeutic change without pain or force. From
            that foundation, your session may blend in myofascial release,
            sports massage, cupping, IASTM, or assisted stretch therapy,
            depending on what your body needs.
            <br></br>
            <br></br>
            Whether you choose <b>bodywork</b>, <b>stretch‑only</b>, or a <b>hybrid session</b>, the
            work is integrative, grounded, and fully customized. All sessions
            are booked by time, allowing the treatment to evolve naturally and
            support mobility, recovery, and whole‑body balance.
            <br></br>
            <b>ALL SESSIONS WITHIN CANCELLATION POLICY GUIDELINES.</b>
          </p>
        </div>

        <div className="row">
          <div className="card card-session mb-3">
            <div className="card-header">Massage & Bodywork</div>
            <div className="card-body">
              <h5 className="card-title">1 Hour Session - $125</h5>

              <h5 className="card-title">1.5 Hour Session - $170</h5>

              <h5 className="card-title">2 Hour Session - $205</h5>
              <h5 className="card-title">2.5 Hour Session - $250</h5>
              <h5 className="card-title">3 Hour Session - $300</h5>
              <p className="card-text">
                Sessions are tailored to your unique patterns, lifestyle, and
                goals, using a blend of therapeutic modalities such as
                myofascial release, soft tissue manipulation,
                instrument-assisted/Graston, lymphatic drainage etc. This
                integrative approach helps reduce tension, improve mobility, and
                support long‑term recovery. Every treatment is designed to help
                you feel more balanced, restored, and connected to your body.
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
              <p className="card-text">
                The best of both worlds! Hybrid sessions integrate massage and
                stretch therapy to improve movement, support recovery, and give
                you the best of both approaches in one session.
              </p>
            </div>
          </div>

          <div className="card card-session mb-3">
            <div className="card-header">Facial Cupping Rejuvenation</div>
            <div className="card-body">
              <h5 className="card-title">Half Hour - $50</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}
