import React from "react";
import face_hemp from "../store/mg_face_body_hemp.jpg";

export default class FaceCBDOil extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div>
          <p className="product-title">
            Magnesium + Full Spectrum Hemp Face & Body Oil
          </p>
          <img className="product-img" src={face_hemp} alt="" />
          <p>$29.99</p>
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#moredetails15"
          >
            More Details
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="moredetails15"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Magnesium + Full Spectrum Hemp Face & Body Oil
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
                  Dope Minerals Magnesium Face & Body Oil was created to deliver
                  magnesium directly to the cells through the skin.
                </p>
                <ul>
                  <li>Perfect for those with sensitive skin</li>
                  <li>
                    Highly restorative for those suffering from psoriasis,
                    eczema, and other skin conditions
                  </li>
                  <li>Ideal for use with spa treatments</li>
                </ul>
                <h5>Description</h5>
                <p>
                  Fight dry, tired skin with the perfect blend of all-natural
                  ingredients that smooth and soften skin, adding tone and
                  elasticity while reducing scars and acne. The ingredients in
                  this specialized formula have been carefully chosen to ensure
                  the most effective results. The non-greasy mixture is made up
                  of Hempseed Oil, which is easily absorbed and does not clog
                  pores. Neem deeply cleanses pores by removing impurities and
                  dirt, acting as an anti-bacterial agent. Potent Full Spectrum
                  CBD Oil (100 mg) is rich in omega-6 and omega-3 fatty acids
                  which help combat redness and plumps fine lines. Steam
                  distilled Geranium Oil regulates skin’s sebum production,
                  while Frankincense helps to heal skin and negate the signs of
                  aging. This powerful skin oil also contains Carrot Seed Oil
                  which has long been prized for it’s anti-aging effects.
                  Magnesium is an anti-aging, anti-wrinkle powerhouse that helps
                  reduce fine lines and wrinkles. It helps enhance hydration and
                  encourages the production of collagen. Magnesium can also
                  reduce acne, inflammation, scars, dark spots and redness.
                </p>
                <h5>Product Details</h5>
                <p>
                  1 ounce
                  <br></br>Ingredients: Neem Infused Hempseed Oil, Magnesium
                  Chloride, Full Spectrum Cannabidiol Extract, Frankincense,
                  Carrot Seed & Geranium Oils.
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
