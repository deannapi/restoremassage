import React from "react";
import { Link } from "react-router-dom";
import ReactWordcloud from "react-wordcloud";

import fire from "../images/firecup_selfie.jpg";
// import stretch from "../images/stretch1.png";
import stretch2 from "../images/stretch2.png";
// import stretch3 from "../images/stretch3.png";
import cover from "../images/stretchneck.png";
import dope from "../images/dopeminerals.jpg";
import dope2 from "../images/dope.jpg";
import selfie from "../images/selfie.jpeg";
import fsa_hsa from "../images/fsa.jpg";
import naps from "../images/naps.jpg";
import public_work from "../images/public.jpg";
import referrals from "../images/referrals.png";
import knees from "../images/knees.png";
import feet from "../images/feet.jpg";

// word cloud
const words = [
  { text: "Myofascial Release", value: 68 },
  { text: "lymphatic drainage", value: 70 },
  { text: "orthopedic conditions", value: 64 },
  { text: "neuromuscular conditions", value: 58 },
  { text: "sports injuries", value: 63 },
  { text: "stubborn conditions", value: 60 },
  { text: "fibromyalgia", value: 57 },
  { text: "arthritis", value: 68 },
  { text: "trigger points", value: 55 },
  { text: "traumatic injuries", value: 62 },
  { text: "chronic pain", value: 58 },
  { text: "detoxification", value: 66 },
  { text: "TMJD (temporomandibular joint disorder)", value: 64 },
  { text: "migraines/headaches", value: 70 },
  { text: "low back pain", value: 63 },
  { text: "digestive disorders", value: 62 },
  { text: "post operative scar tissue", value: 57 },
  { text: "inflammation", value: 66 },
];

export default class Home extends React.Component {
  WordCloud() {
    return <ReactWordcloud words={words} />;
  }
  render() {
    return (
      <>
        <div className="home">
          <div className="home-title">
            <h1>San Antonio Sports Massage Therapy</h1>
            <h4>Licensed Massage Therapist</h4>
            <h4>Cupping Therapy</h4>
          </div>

          <div className="row">
            <div className="card">
              <img className="card-img-top" src={cover} alt="cover" />
              <div className="card-body">
                <h5 className="card-title">My Mission</h5>
                <p className="card-text">
                  Restore Massage & Bodywork is a resource for high-quality,
                  effective therapy in San Antonio, Texas. I offer therapeutic
                  massage and bodywork for the enhancement of health and well
                  being to health minded individuals. I am dedicated to
                  providing my clients with therapeutic treatments and
                  exceptional service to promote recovery and self-healing. All
                  sessions are customized to the needs of the individual client.
                  I use my knowledge and experience in different modalities to
                  provide relief and restoration of the body. Sessions can
                  include but are not limited to modalities such as Swedish
                  Massage, Deep Tissue, Myofascial Release, Sports Massage,
                  Cupping Therapy and Instrument Assisted Soft Tissue
                  Manipulation/Graston Technique.
                  <br></br>
                  <Link to="/about">Read about me here.</Link>
                </p>
              </div>
            </div>

            <div className="card">
              {/* <div
                id="carouselExampleSlidesOnly"
                className="carousel slide card-img-top"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="card-img-top"
                      src={stretch}
                      alt="stretching"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      className="card-img-top"
                      src={stretch2}
                      alt="stretching"
                    />
                  </div>

                  <div className="carousel-item"> */}
                    <img
                      className="card-img-top"
                      src={stretch2}
                      alt="stretching"
                    />
                  {/* </div>
                </div>
              </div> */}

              <div className="card-body">
                <h5 className="card-title">Performance Stretch Therapy</h5>
                <p className="card-text">
                  Allysia is a level 1 certified Performance Stretch Therapist.
                  The program uses static, dynamic and pre-contraction
                  stretching to help improve posture and provide relief from
                  pain, discomfort and improve range of motion. Many clients
                  deal with immobility and inflexibility issues which can lead
                  to imbalances and eventually cause pain. This service is
                  especially beneficial to our client population of desk
                  workers, athletes and weekend warriors, and those experiencing
                  the everyday stress of life (which is most of us)! If you're
                  unsure if our performance stretch therapy is for you, we
                  encourage you to give it a try and{" "}
                  <Link to="/appointments">book</Link> a session. You won't be
                  disappointed! You may even fall asleep!
                </p>
              </div>
            </div>

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
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#benefits"
                >
                  Click here to view other benefits massage therapy can offer!
                </button>
                <div
                  className="modal fade"
                  id="benefits"
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
                        <h5
                          className="modal-title"
                          id="exampleModalCenterTitle"
                        >
                          Benefits of Massage Therapy
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
                      <div className="modal-body benefits">
                        <p>{this.WordCloud()}</p>
                        <br></br>
                        For pricing details, <Link to="/menu">click here.</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card">
              <img className="card-img-top" src={dope} alt="" />
              <div className="card-body">
                <h5 className="card-title">Products</h5>
                <p className="card-text">
                  RMBW always wants you to feel your best! Our products aid in
                  recovery, relaxation, and extending the benefits of massage.
                  <br></br>
                  <Link to="/products" id="shop-visit">
                    Visit our shop{" "}
                  </Link>
                  to get yours!
                </p>
              </div>
            </div>
          </div>

          {/* GOOGLE REVIEWS */}
          <div className="reviews">
            <div className="elfsight-app-f38374e1-77e3-4401-b9d5-a268821ba110"></div>
          </div>
          <br></br>

          {/* CAROUSEL */}
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide home-carousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="home-carousel-img" src={dope2} alt="dope" />
              </div>
              <div className="carousel-item">
                <img className="home-carousel-img" src={fsa_hsa} alt="fsa" />
              </div>
              <div className="carousel-item">
                <img className="home-carousel-img" src={feet} alt="feet" />
              </div>
              <div className="carousel-item">
                <img className="home-carousel-img" src={selfie} alt="selfie" />
              </div>
              <div className="carousel-item">
                <img className="home-carousel-img" src={naps} alt="naps" />
              </div>
              <div className="carousel-item">
                <img
                  className="home-carousel-img"
                  src={public_work}
                  alt="work"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="home-carousel-img"
                  src={referrals}
                  alt="refer"
                />
              </div>
              <div className="carousel-item">
                <img className="home-carousel-img" src={knees} alt="knees" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
