import React from "react";
import scrub from "../store/mg_facial_scrub.jpg";

export default class FaceScrub extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div>
          <p className="product-title">Magnesium Facial Scrub</p>
          <img className="product-img" src={scrub} alt="" />
          <p>$25.99</p>
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#moredetails17"
          >
            More Details
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="moredetails17"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Magnesium Facial Scrub
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
                  Fight dry, tired skin with the perfect blend of all-natural
                  ingredients that smooth and soften skin, adding tone and
                  elasticity while reducing scars and acne. The ingredients in
                  this specialized formula have been carefully chosen to ensure
                  the most effective results. The non-greasy mixture is made up
                  of Hempseed Oil, which is easily absorbed and does not clog
                  pores. Neem deeply cleanses pores by removing impurities and
                  dirt, acting as an anti-bacterial agent. Magnesium is an
                  anti-aging, anti-wrinkle powerhouse that helps reduce fine
                  lines and wrinkles. It helps enhance hydration and encourages
                  the production of collagen. Magnesium can also reduce acne,
                  inflammation, scars, dark spots and redness.
                </p>
                <h5>Product Details</h5>
                <p>
                  4 ounces
                  <br></br>Ingredients: Organic Sugar, Neem Infused Hempseed
                  Oil, Magnesium Chloride, Rose Petals, Lavender & Ylang Ylang
                  Essential Oils.
                </p>
                <h5>Product Application & Use</h5>
                <p>
                  Dope Minerals Face & Body Oil is vegan, paraben-free,
                  GMO-free, gluten-free and made with organic ingredients. This
                  all-natural moisturizer provides therapeutically effective
                  amounts of magnesium and CBD directly to the cells while
                  nourishing skin. Massage a small amount into dry skin. Store
                  in a cool, dry place. Do not apply to cuts, wounds, open sores
                  or freshly shaved areas of skin, and always test a small
                  amount on a patch of skin first to ensure you are not allergic
                  to any ingredient in our products.
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
