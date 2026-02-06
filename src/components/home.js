import React from "react";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import ZeroTolerance from "./ZeroTolerance";

import fire from "../images/firecup_selfie.jpg";
import bodywork from "../images/firecupping.png";
import stretch2 from "../images/backstretch.png";
import cover from "../images/stretchneck.png";
import dope from "../images/moonglow_logo.jpg";

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
          <div className="home-title">
            <h1>Bodywork &#8226; Massage &#8226; Stretch Therapy</h1>
            <h4>Move Better &#8226; Recover Smarter &#8226; Live Stronger</h4>
            {/* <h4>Recover smarter</h4> */}
            {/* <h4>Live stronger</h4> */}
          </div>

          <div className="row">
            <div className="card">
              <img className="card-img-top" src={cover} alt="cover" />
              <div className="card-body">
                <h5 className="card-title">My Mission</h5>
                <p className="card-text">
                  I’m Allysia Payen, a licensed massage therapist with nine
                  years of experience serving the San Antonio community. I
                  specialize in therapeutic bodywork and stretch therapy for
                  active, health‑minded individuals who want to move better,
                  recover faster, and feel stronger in their daily lives.
                  <br></br>
                  <br></br>
                  Restore Massage & Bodywork is built on the belief that
                  high‑quality, effective therapy should support both recovery
                  and long‑term well‑being. I’m dedicated to providing
                  therapeutic treatments and exceptional service that promote
                  healing, mobility, and self‑care. Every session is fully
                  customized to the needs of each client, drawing from a range
                  of modalities including Swedish Massage, Deep Tissue,
                  Myofascial Release, Sports Massage, Cupping Therapy, and
                  Instrument Assisted Soft Tissue Manipulation.
                  <br></br>
                  <br></br>
                  My background in CrossFit and competitive Olympic
                  weightlifting gives me a deep understanding of biomechanics
                  and functional movement, allowing me to create treatments that
                  truly support the demands of an active lifestyle. I have been
                  certified in the Performance Stretch System for 5 years, which
                  has transformed both my approach and my clients’
                  outcomes—enhancing mobility, improving recovery, and elevating
                  overall treatment effectiveness. In 2025, I became part of the
                  PSS team as an instructor, teaching workshops designed to
                  empower professionals with innovative floor‑based stretching
                  systems. This work reflects our shared mission to build a
                  globally connected community of knowledgeable, skilled
                  therapists.
                  <br></br>
                  <br></br>I hope the passion I bring to my work empowers others
                  to move with confidence and build a deeper understanding of
                  their bodies.
                  <br></br>
                  <Link to="/about">Read about me here.</Link>
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
              <img className="card-img-top" src={bodywork} alt="bodywork" />
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
              <img className="card-img-top" src={fire} alt="" />
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
                    {" "}
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
