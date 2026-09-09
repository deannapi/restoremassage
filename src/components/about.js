import React from "react";
import selfie from "../images/Selfie w Logo.png";
import headshot from "../images/2026_Headshot.png";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="row">
            <div className="card">
              <img
                className="card-img-top"
                src={headshot}
                alt="headshot"
                id="aboutme"
              />
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">
                  I’m Allysia Payen, a licensed massage therapist and stretch
                  therapy instructor based in San Antonio. I grew up in West
                  Texas and moved to San Antonio in 2018, bringing with me a
                  deep love for movement, strength, and the way the body adapts
                  when it’s supported with intention.
                  <br></br>
                  <br></br>Before becoming a full time therapist, I spent years
                  training and competing in Olympic weightlifting and CrossFit.
                  Those experiences shaped the way I understand the body — not
                  just as muscles and joints, but as a responsive,
                  interconnected system of fascia, breath, strength, and
                  resilience. They taught me how people move, how they
                  compensate, how they recover, and how much the nervous system
                  influences everything.
                  <br></br>
                  <br></br>My work is rooted in modalities that honor that
                  system: barefoot massage (Sarga Bodywork), myofascial release,
                  deep tissue massage, and fascial stretch therapy. I’m drawn to
                  techniques that create depth without force, clarity without
                  rushing, and change that lasts beyond the session.
                  <br></br>
                  <br></br>In addition to hands on work, I teach stretch therapy
                  and movement based recovery, helping both clients and
                  professionals understand their bodies in a more grounded,
                  fascia forward way. Restore Massage & Bodywork grew out of a
                  simple belief: people deserve care that meets them where they
                  are — whether they’re training hard, navigating pain,
                  rebuilding strength, or simply wanting to feel more at home in
                  their bodies.
                  <br></br>
                  <br></br>My goal is always the same: to help you move better,
                  feel better, and reconnect with the strength already within
                  your body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
