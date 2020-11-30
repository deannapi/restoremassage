import React from "react";
import yoga_ball from "../store/yoga_ball.jpg";

export default class YogaBall extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div>
          <p className="product-title">
            Yoga Tune Up Therapy Ball Pair in Tote
          </p>
          <img className="product-img" src={yoga_ball} alt="" />
          <p>$16.99</p>
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#moredetails20"
          >
            More Details
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="moredetails20"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Yoga Tune Up Therapy Ball Pair in Tote
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
                  The Yoga Tune Up Therapy Balls (also known as the "OG's")
                  measure at about 2 1/2" in diameter each and are made of a
                  special rubber that grips at your skin, grabs at multiple
                  layers of muscles, and rubs out adhesions and tension,
                  providing a deep tissue massage (colors may vary). The Yoga
                  Tune Up® Therapy Balls with Tote set includes two foot massage
                  balls and a mesh drawstring snug-grip tote bag. The ball that
                  started it all!
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
