import React from "react";

export default class SessionsPrices extends React.Component {
  render() {
    return (
      <>
 <section className="sessions-intro">
  <svg
    className="sessions-branch sessions-branch-left"
    viewBox="0 0 260 190"
    aria-hidden="true"
  >
    <path d="M0 170C62 128 119 80 220 20" />
    <path d="M45 139C25 111 28 79 46 54C65 82 64 111 45 139Z" />
    <path d="M91 104C73 76 80 46 102 24C117 55 111 82 91 104Z" />
    <path d="M132 77C123 50 136 27 162 12C168 40 156 64 132 77Z" />
    <path d="M69 122C88 92 116 83 145 91C125 116 98 129 69 122Z" />
    <path d="M120 85C143 61 170 58 197 70C174 91 148 97 120 85Z" />
  </svg>

  <div className="sessions-intro-content">
    <header className="sessions-heading">
      <h1>Sessions &amp; Prices</h1>
      <div className="sessions-heading-accent" aria-hidden="true" />
    </header>

    <div className="sessions-copy">
      <p>
        Every session at Restore begins with the principles of{" "}
        <strong>Sarga Bodywork</strong> — fluid, barefoot, fascia-focused
        pressure that creates deep therapeutic change without pain or force.
        From that foundation, your session may blend in myofascial release,
        sports massage, cupping, IASTM, or assisted stretch therapy, depending
        on what your body needs.
      </p>

      <p>
        Whether you choose <strong>bodywork</strong>,{" "}
        <strong>stretch-only</strong>, or a <strong>hybrid session</strong>,
        the work is integrative, grounded, and fully customized. All sessions
        are booked by time, allowing the treatment to evolve naturally and
        support mobility, recovery, and whole-body balance.
      </p>
    </div>

    <aside className="cancellation-notice">
      <svg
        className="cancellation-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.5 3.5C13 3.7 8.2 6.3 6 10.5c-1.5 2.9-.7 5.6.3 7.2" />
        <path d="M20.5 3.5c-.3 7.3-3.1 12-7.6 13.6-2.4.9-4.6.4-6.6.6" />
        <path d="M3.5 21c2.2-5.5 6.4-9.9 12.5-13.3" />
      </svg>

      <p>All sessions within cancellation policy guidelines.</p>
    </aside>
  </div>

  <svg
    className="sessions-branch sessions-branch-right"
    viewBox="0 0 260 190"
    aria-hidden="true"
  >
    <path d="M0 170C62 128 119 80 220 20" />
    <path d="M45 139C25 111 28 79 46 54C65 82 64 111 45 139Z" />
    <path d="M91 104C73 76 80 46 102 24C117 55 111 82 91 104Z" />
    <path d="M132 77C123 50 136 27 162 12C168 40 156 64 132 77Z" />
    <path d="M69 122C88 92 116 83 145 91C125 116 98 129 69 122Z" />
    <path d="M120 85C143 61 170 58 197 70C174 91 148 97 120 85Z" />
  </svg>
</section>

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
