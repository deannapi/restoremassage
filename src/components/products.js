import React, { useState } from "react";
import two_cbd_lav from "../store/2oz-cbd-lavender.jpg";
import two_cbd_ppmg from "../store/2oz-cbd-ppmt.jpg";
import two_cbd_unscent from "../store/2oz-cbd-unscent.jpg";
import two_cbd_van from "../store/2oz-cbd-vanilla.jpg";
import four_cbd_lav from "../store/4oz-cbd-lavender.jpg";
import four_cbd_ppmt from "../store/4oz-cbd-ppmt.jpg";
import four_cbd_van from "../store/4oz-cbd-vanilla.jpg";
import four_ppmt from "../store/4oz-ppmt.jpg";
import four_unscent from "../store/4oz-unscent.jpg";
import four_van from "../store/4oz-vanilla.jpg";
import nine_lav from "../store/9oz-lavender.jpg";
import nine_ppmt from "../store/9oz-ppmt.jpg";
import nine_unscent from "../store/9oz-unscent.jpg";
import nine_vanilla from "../store/9oz-vanilla.jpg";
import face_hemp from "../store/mg_face_body_hemp.jpg";
import face from "../store/mg_face_body.jpg";
import scrub from "../store/mg_facial_scrub.jpg";
import scrub_eight from "../store/mg_facial_scrub_8.jpg";
import therapy_ball from "../store/therapy_ball.jpg";
import yoga_ball from "../store/yoga_ball.jpg";
import Modal from "react-bootstrap/Modal";

export default class Products extends React.Component {
  render() {
    return (
      <>
        <div>
          {/* <h2>Products</h2> */}
          <h5>All merchandise sold in store.</h5>
          <h6>Ask me about a product at your next appointment.</h6>
          <div className="row">
            <div class="card">
              <p class="card-text">
                2 oz/200 mg
                <br></br>Magnesium + Full Spectrum Hemp Cream Vanilla
              </p>
              <img class="card-img-top" src={two_cbd_lav} alt="cbd_lav_2" />
              <div class="card-body">
                <p>$44.99</p>
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#moredetails"
                >
                  More Details
                </button>
              </div>
            </div>
          </div>

          {/* <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav> */}
        </div>

        {/* Modal */}
        <div
          class="modal fade"
          id="moredetails"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  2 oz/200 mg
                  <br></br>Magnesium + Full Spectrum Hemp Cream Vanilla
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5>Description</h5>
                <p>
                  Magnesium and Full Spectrum Hemp Extract work in perfect
                  synergy to provide support to body systems and impact overall
                  health. Both of these powerful ingredients have incredible
                  uses. Here are a few: Rub onto sore muscles Massage onto
                  temples & neck to ease head tension Use on bottom of feet
                  before bed to promote restful sleep Massage onto chest &
                  shoulders to alleviate anxious feelings Rub onto legs to
                  soothe muscle spasms Apply to inflamed joints and tendons
                  Which is why our customers rave about our powerfully effective
                  Magnesium + Hemp infused body cream! Combining both science
                  and nature to guide our formulations, magnesium chloride and
                  Full Spectrum Hemp Extract is delicately infused into organic
                  mango butter, organic shea butter and organic coconut oil and
                  blended into a perfectly whipped cream that is gentle,
                  moisturizing smooth and effective.
                </p>
                <h5>Product Details</h5>
                <p>
                  2 ounces <br></br> Contains 200 mg Full Spectrum Hemp Extract
                  (CBD)
                  <br></br>Ingredients: Organic Mango Butter, Organic Shea
                  Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg Full
                  Spectrum Cannabidiol Extract, Vanilla Essential Oil.
                </p>
                <h5>Product Application & Use</h5>
                <p>
                  Dope Minerals Magnesium + Hemp Cream is vegan, paraben-free,
                  GMO-free, gluten-free and made with organic ingredients. This
                  all-natural cream provides therapeutically effective amounts
                  of Hemp Extract and Magnesium directly to the cells while
                  nourishing skin. Massage desired amount into the skin
                  thoroughly. Repeat as necessary to treat ailments, covering
                  any areas needing extra attention. Store in a cool, dry place.
                  Do not apply to cuts, wounds, open sores or freshly shaved
                  areas of skin, and always test a small amount on a patch of
                  skin first to ensure you are not allergic to any ingredient in
                  our products.
                  <br></br> Disclaimer: The information, advice, statements
                  and testimonials made about Dope Minerals products mentioned
                  on this website have not been evaluated by the US Food and
                  Drug Administrations (FDA). The information contained on this
                  website is not intended to diagnose, treat, cure or prevent
                  disease, nor are they intended to replace proper medical help.
                  It is always recommended to consult with a healthcare
                  professional before starting any regimen. User submitted
                  testimonials are based on individual results and do not
                  constitute a guarantee that you will achieve the same results.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
