import React from "react";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import ZeroTolerance from "./ZeroTolerance";

// import fire from "../images/firecup_selfie.jpg";
import cupping from "../images/firecupping.png";
import stretch2 from "../images/backstretch.png";
import cover from "../images/stretchneck.png";
import dope from "../images/moonglow_logo.jpg";
import sargaback from "../images/Sarga_back.png";

const TEXTS_bodywork = [
  "Muscle pain and tension",
  "Postural imbalances",
  "Injury recovery",
  "Stress and anxiety",
  "Nervous system dysregulation",
  "Digestive discomfort",
  "Sleep disturbances",
];

const cupping_words = [
  "Myofascial Release",
  "lymphatic drainage",
  "orthopedic conditions",
  "neuromuscular conditions",
  "sports injuries",
  "stubborn conditions",
  "fibromyalgia",
  "arthritis",
  "trigger points",
  "traumatic injuries",
  "chronic pain",
  "detoxification",
  "TMJD (temporomandibular joint disorder)",
  "migraines/headaches",
  "low back pain",
  "digestive disorders",
  "post operative scar tissue",
  "inflammation",
];

const LeafIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.8 3.2C13.5 3.5 8.7 6 6.4 10.1c-1.5 2.8-.8 5.5.1 7.2" />
    <path d="M20.8 3.2c-.2 7.4-3 12.2-7.4 13.8-2.4.9-4.8.3-6.9.3" />
    <path d="M4 21c2.1-5.4 6.3-9.8 12.3-13.2" />
  </svg>
);

function WordSwap() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => i + 1);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span style={{ minWidth: 140 }}>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS_bodywork[index % TEXTS_bodywork.length]}
      </TextTransition>
    </span>
  );
}

function WordCupping() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => i + 1);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span style={{ minWidth: 140 }}>
      <TextTransition springConfig={presets.wobbly}>
        {cupping_words[index % cupping_words.length]}
      </TextTransition>
    </span>
  );
}

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <section className="bodywork-intro">
            <h1>Massage &amp; Barefoot Bodywork in San Antonio</h1>

            <div className="heading-accent" aria-hidden="true" />

            <p className="bodywork-description">
              Restore Massage &amp; Bodywork offers therapeutic massage,
              barefoot Sarga Bodywork, myofascial release, and stretch therapy
              in San Antonio. Every session blends fascia focused barefoot
              techniques with deep, fluid pressure to support mobility,
              recovery, and long term tension relief. Learn more about <Link to="/Sarga">barefoot
              massage</Link> on my Sarga Bodywork page, or explore stretch therapy
              options designed to support mobility and recovery.
            </p>

            <h2>What I offer:</h2>

            <div className="heading-accent" aria-hidden="true" />

            <ul className="services-grid">
              <li className="service-item">
                <LeafIcon />
                <span>Barefoot massage (Sarga bodywork)</span>
              </li>

              <li className="service-item">
                <LeafIcon />
                <span>Myofascial release</span>
              </li>

              <li className="service-item">
                <LeafIcon />
                <span>Deep tissue massage</span>
              </li>

              <li className="service-item">
                <LeafIcon />
                <span>Stretch therapy (fascial stretch therapy)</span>
              </li>

              <li className="service-item">
                <LeafIcon />
                <span>Sports &amp; Recovery focused bodywork</span>
              </li>

              <li className="service-item">
                <LeafIcon />
                <span>Cupping therapy</span>
              </li>
            </ul>
          </section>

          <div className="row">
            <div className="card">
              <img className="card-img-top" src={cover} alt="cover" />
              <div className="card-body">
                <h5 className="card-title">My Mission</h5>
                <p className="card-text">
                  My mission is to offer intentional, fascia focused bodywork
                  that helps people move with more ease, strength, and
                  confidence. I believe in work that is deep without force,
                  restorative without rushing, and centered on the nervous
                  system as much as the muscles. Every session is an invitation
                  to reconnect with your body’s natural resilience — through
                  slow, grounded barefoot techniques, therapeutic massage, and
                  stretch therapy designed to support long term mobility and
                  recovery.
                </p>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src={stretch2} alt="stretching" />
              <div className="card-body">
                <h5 className="card-title">Performance Stretch Therapy</h5>
                <p className="card-text">
                  Allysia is a Level Two Stretch Therapist and Instructor with
                  the Performance Stretch System. Stretch therapy sessions
                  follow a structured, floor‑based approach to assisted
                  stretching designed to enhance mobility, flexibility, and
                  overall physical performance. The movements draw inspiration
                  from disciplines such as Thai massage, judo, fascial stretch
                  therapy, and more, blending traditional techniques with
                  modern, evidence‑based practices to create a comprehensive
                  stretching experience.
                  <br></br>
                  <br></br>
                  This system focuses on improving range of motion, reducing
                  muscle tension, and enhancing functional movement. Each
                  session is client‑centered, prioritizing comfort, education,
                  and empowerment to foster a collaborative and supportive
                  experience between therapist and client.
                  <br></br>
                  <br></br>
                  If you're unsure if our performance stretch therapy is for
                  you, we encourage you to give it a try and{" "}
                  <Link to="/appointments">book</Link> a session. You won't be
                  disappointed! You may even fall asleep!
                </p>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src={sargaback} alt="bodywork" />
              <div className="card-body">
                <h5 className="card-title">Bodywork</h5>
                <p className="card-text">
                  Bodywork at Restore goes far beyond a traditional massage.
                  These sessions are holistic, integrative, and intentionally
                  designed to support the whole person. Every body carries its
                  own story — your patterns, habits, stressors, and strengths —
                  and your treatment should reflect that. No two people are the
                  same, and neither are the sessions.
                  <br></br>
                  <br></br>
                  What’s different about bodywork sessions at Restore is that
                  all of my work is deep and therapeutic without the pain,
                  force, or discomfort people often associate with traditional
                  deep tissue massage. The depth comes from grounded, sustained
                  pressure, fascial engagement, and modalities like Sarga
                  Bodywork — not from pushing harder.
                  <br></br>
                  <br></br>
                  Bodywork is about helping you build a deeper awareness of your
                  body: how it moves, where it holds tension, what it’s
                  protecting, and how it can return to ease. My role isn’t to
                  “fix” you — it’s to create a space where your body feels safe
                  enough to soften, release, and do the healing it’s naturally
                  capable of.
                  <br></br>
                  <br></br>
                  This work is active, conscious, and collaborative. We work
                  together to explore what your body is holding and why. Often,
                  patterns that once served a purpose — protection,
                  compensation, survival — linger long after they’re needed.
                  Through bodywork, we gently guide the body back toward
                  balance, integration, and a sense of wholeness.
                  <br></br>
                  <br></br>
                  Sessions may include a blend of therapeutic modalities such as
                  deep tissue work, myofascial release, sports massage, cupping
                  therapy, IASTM, and Sarga Bodywork, a barefoot, fascia‑focused
                  approach using long, sustained pressure and anchored tension
                  to melt through deep patterns without force. All sessions are
                  booked by time, allowing the work to unfold naturally based on
                  what your body needs that day.
                  <br></br>
                </p>
                <br></br>
                <div className="card-bodywork">
                  <h4>Bodywork can support:</h4>
                  <p>
                    <WordSwap />
                  </p>
                </div>
                <br></br>
                <p>
                  Bodywork at Restore is designed to help you feel more aligned,
                  more grounded, and more connected to your body — both on and
                  off the table.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card">
              <img className="card-img-top" src={cupping} alt="" />
              <div className="card-body">
                <h5 className="card-title">Cupping Therapy</h5>
                <p className="card-text">
                  Massage cupping is the combination of massage movements and
                  negative pressure with the use of a suction cup on the skin. A
                  vacuum is created with the cup to draw the skin and underlying
                  tissue into the cup. The produced vacuum creates a suction
                  effect that increases blood and lymphatic circulation
                  systemically and to the local area, relaxes muscle tissue and
                  connective tissue, draws stagnation, pathogenic factors and
                  toxins out of the body and releases a myriad of pain causing
                  factors.
                  <br></br>
                  <Link to="/appointments">
                    Schedule your appointment today!
                  </Link>
                </p>
                <div className="card-bodywork">
                  <h4>Benefits of Cupping</h4>
                  <p>
                    <WordCupping />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card" id="moonglow_card">
              <img
                className="card-img-top"
                src={dope}
                alt=""
                id="moonglow_logo"
              />
              <div className="card-body">
                <h5 className="card-title">Products</h5>
                <p className="card-text">
                  Restore Massage and Bodywork always wants you to feel your
                  best! Our products aid in recovery, relaxation, and extending
                  the benefits of massage.
                  <br></br>
                  <Link to="/products" id="shop-visit">
                    Visit our shop{" "}
                  </Link>
                  to get yours!
                </p>
              </div>
            </div>

            <ZeroTolerance />

            {/* GOOGLE REVIEWS */}
            <div className="reviews">
              <div className="elfsight-app-f38374e1-77e3-4401-b9d5-a268821ba110"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
