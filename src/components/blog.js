import React from "react";
import water_pitcher from "../images/water_pitcher.jpg";

export default class Blog extends React.Component {
  render() {
    return (
      <>
        <div className="blog">
          <h2>My Blog</h2>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card">
                  <img className="card-img" src={water_pitcher} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title">
                      Why you should drink more water after a massage
                    </h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal1"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="blogModal1"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Do you know WHY your massage therapist tells you to drink
                    water after your massage?
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
                <div className="modal-body">
                  <p>
                    More than HALF of our bodies are made up of water.
                    <br></br>
                    <br></br>Isn't that crazy? When you get a massage,
                    regardless of what type (deep tissue, sports, relaxation),
                    the fluids in your body drain and circulate even more.
                    Massage breaks up scar tissue and creates movement of
                    lymphatic fluid. In order to get those toxins and just plain
                    yucky stuff out of our body it needs to be flushed out. Some
                    may think they drink enough water daily, but we always
                    recommend you increase your daily intake by just a few
                    bottles of water to ensure drainage of all those excess
                    fluids. <br></br>
                    <br></br>So drink up, folks!
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
