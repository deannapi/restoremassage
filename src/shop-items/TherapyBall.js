import React from "react";
import therapy_ball from "../store/therapy_ball.jpg";

export default class TherapyBall extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div>
          <p className="product-title">Therapy Ball Plus Pair in Tote</p>
          <img className="product-img" src={therapy_ball} alt="" />
          <p>$18.69</p>
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#moredetails19"
          >
            More Details
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="moredetails19"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Therapy Ball Plus Pair in Tote
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
                <h5>Description</h5>
                <p>
                  Slightly larger than the original Yoga Tune Up Therapy Balls,
                  the Therapy Ball PLUS pair of self-massage balls measure about
                  2 3/4" in diameter and were developed by popular demand. They
                  cover more surface area and add height to obtain a greater
                  depth of pressure. Use them in their custom designed snug-grip
                  mesh tote for spine rolls (top of the neck, down to the
                  sacrum), as well as IT band & thigh rolls and so much more!
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
    );
  }
}
