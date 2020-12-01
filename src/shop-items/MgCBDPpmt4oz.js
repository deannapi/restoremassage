import React from "react";
import four_cbd_ppmt from "../store/4oz-cbd-ppmt.jpg";

export default class MgCBDPpmt4oz extends React.Component {
  render() {
    return (
      <div className="product-box filterDiv CBD">
        <div>
          <p className="product-title">
            4 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Peppermint
          </p>
          <img className="product-img" src={four_cbd_ppmt} alt="cbd_lav_4" />
          <p>$64.99</p>
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#moredetails6"
          >
            More Details
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="moredetails6"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  4 oz/400 mg
                  <br></br>Magnesium + Full Spectrum Hemp Cream - Peppermint
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
                  Dope Minerals Magnesium + CBD Cream was created to deliver the
                  soothing power of CBD and Magnesium directly to the cells
                  through the skin.
                </p>
                <ul>
                  <li>
                    Completely THC-Free (non-psychoactive – won’t get you
                    “high”)
                  </li>
                  <li>Innovative blend of two powerful anti-inflammatories</li>
                  <li>Made with Non GMO, USA sourced, Full Spectrum CBD</li>
                  <li>
                    Perfect for the elderly, children and those with sensitive
                    skin
                  </li>
                  <li>
                    Highly restorative for those suffering from psoriasis,
                    eczema, and other skin conditions
                  </li>
                  <li>Ideal for use with therapeutic massage</li>
                </ul>

                <h5>Description</h5>
                <p>
                  Magnesium and Full Spectrum Hemp Extract work in perfect
                  synergy to provide support to body systems and impact overall
                  health. Both of these powerful ingredients have incredible
                  uses. Here are a few:
                </p>
                <ul>
                  <li>Rub onto sore muscles</li>
                  <li>Massage onto temples & neck to ease head tension</li>
                  <li>
                    Use on bottom of feet before bed to promote restful sleep
                  </li>
                  <li>
                    Massage onto chest & shoulders to alleviate anxious feelings
                  </li>
                  <li>Rub onto legs to soothe muscle spasms</li>
                  <li>Apply to inflamed joints and tendons</li>
                </ul>
                <p>
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
                  4 ounces <br></br> Contains 400 mg Full Spectrum Hemp Extract
                  (CBD)
                  <br></br>Ingredients: Organic Mango Butter, Organic Shea
                  Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg Full
                  Spectrum Cannabidiol Extract, Peppermint Essential Oil.
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
                  <br></br>
                  <br></br>
                  <i>
                    Disclaimer: The information, advice, statements and
                    testimonials made about Dope Minerals products mentioned on
                    this website have not been evaluated by the US Food and Drug
                    Administrations (FDA). The information contained on this
                    website is not intended to diagnose, treat, cure or prevent
                    disease, nor are they intended to replace proper medical
                    help. It is always recommended to consult with a healthcare
                    professional before starting any regimen. User submitted
                    testimonials are based on individual results and do not
                    constitute a guarantee that you will achieve the same
                    results.
                  </i>
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
