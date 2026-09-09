import React from "react";
import selfie from "../images/Selfie w Logo.png";
import headshot from "../images/2026_Headshot.png";

export default class About extends React.Component {
  render() {
    return (
      <>
        <section className="about-section">
          <div className="about-layout">
            <div className="about-photo-column">
              <div className="about-photo-frame">
                <img
                  className="about-photo"
                  src={headshot}
                  alt="Allysia Payen, massage therapist and stretch therapy instructor"
                />
              </div>

              <svg
                className="about-botanical"
                viewBox="0 0 300 280"
                aria-hidden="true"
              >
                <path d="M18 270C78 212 113 142 135 30" />
                <path d="M67 220C39 195 32 164 42 132C72 155 82 186 67 220Z" />
                <path d="M94 171C72 142 74 110 91 82C115 112 115 142 94 171Z" />
                <path d="M116 111C102 82 112 53 136 31C151 64 143 91 116 111Z" />
                <path d="M62 226C94 199 126 196 158 211C129 235 98 242 62 226Z" />
                <path d="M91 175C121 149 154 147 185 162C156 185 124 190 91 175Z" />
                <path d="M117 116C143 91 174 88 204 100C178 124 149 131 117 116Z" />
                <path d="M135 55C158 32 185 27 214 37C190 61 163 68 135 55Z" />
              </svg>
            </div>

            <div className="about-copy">
              <header className="about-heading">
                <h1>About Me</h1>
                <div className="about-heading-accent" aria-hidden="true" />
              </header>

              <div className="about-body">
                <p>
                  I’m Allysia Payen, a licensed massage therapist and stretch
                  therapy instructor based in San Antonio. I grew up in West
                  Texas and moved to San Antonio in 2018, bringing with me a
                  deep love for movement, strength, and the way the body adapts
                  when it’s supported with intention.
                </p>

                <p>
                  Before becoming a full time therapist, I spent years training
                  and competing in Olympic weightlifting and CrossFit. Those
                  experiences shaped the way I understand the body — not just as
                  muscles and joints, but as a responsive, interconnected system
                  of fascia, breath, strength, and resilience. They taught me
                  how people move, how they compensate, how they recover, and
                  how much the nervous system influences everything.
                </p>

                <p>
                  My work is rooted in modalities that honor that system:
                  barefoot massage (Sarga Bodywork), myofascial release, deep
                  tissue massage, and fascial stretch therapy. I’m drawn to
                  techniques that create depth without force, clarity without
                  rushing, and change that lasts beyond the session.
                </p>

                <p>
                  In addition to hands on work, I teach stretch therapy and
                  movement based recovery, helping both clients and
                  professionals understand their bodies in a more grounded,
                  fascia forward way. Restore Massage &amp; Bodywork grew out of
                  a simple belief: people deserve care that meets them where
                  they are — whether they’re training hard, navigating pain,
                  rebuilding strength, or simply wanting to feel more at home in
                  their bodies.
                </p>
              </div>

              <blockquote className="about-goal">
                My goal is always the same: to help you move better, feel
                better, and reconnect with the strength already within your
                body.
              </blockquote>
            </div>
          </div>
        </section>
      </>
    );
  }
}
