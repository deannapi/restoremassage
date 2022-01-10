import React from "react";
import { Link } from "react-router-dom";
import fire from "../images/firecup_selfie.jpg";
import greenlight from "../images/greenlight_logo.jpg";
import cover from "../images/cover.jpg";
import dope from "../images/dopeminerals.jpg";
import dope2 from "../images/dope.jpg";
import selfie from "../images/selfie.jpeg";
import fsa_hsa from "../images/fsa.jpg";
import naps from "../images/naps.jpg";
import public_work from "../images/public.jpg";
import referrals from "../images/referrals.png";
import knees from "../images/knees.png";
import feet from "../images/feet.jpg";

export default class Home extends React.Component {
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
              <img className="card-img-top" src={greenlight} alt="coffee" />
              <div className="card-body">
                <h5 className="card-title">Offers</h5>
                <p className="card-text">
                  At Restore Massage and Bodywork I take pride in providing the
                  best cupping therapy service to the San Antonio, TX Area. My
                  specialties include pain relief massage, wellness massage,
                  sports massage, deep tissue massage, myofascial release,
                  swedish massage, sports recovery, sports recovery massage.
                  Other services provided are relaxation massage and relaxation
                  for chronic pain. For pricing details,
                  <Link to="/menu"> click here.</Link>
                </p>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src={cover} alt="" />
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
                </p>
              </div>
            </div>

            <div className="card">
              <img className="card-img-top" src={fire} alt="" />
              <div className="card-body">
                <h5 className="card-title">Cupping Therapy</h5>
                <p className="card-text">
                  Cupping therapy is used to treat headaches, neck pain, TMJ,
                  promote relaxation and wellness, sports massage and injuries.
                  <Link to="/appointments">
                    {" "}
                    Schedule your appointment today!
                  </Link>
                </p>
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
                  recovery, relaxation, and extending the benefits of massage.{" "}
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
            <div class="elfsight-app-f38374e1-77e3-4401-b9d5-a268821ba110"></div>
          </div>

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
