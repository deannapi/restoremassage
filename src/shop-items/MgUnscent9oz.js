import React from "react";
import nine_unscent from "../store/9oz-unscent.jpg";

export default class MgUnscent9oz extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div>
          <p className="product-title">
            9 oz<br></br>Magnesium Cream - Unscented
          </p>
          <img className="product-img" src={nine_unscent} alt="unscent_9" />
          <p>$41.99</p>
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#moredetails14"
          >
            More Details
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="moredetails14"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  9 oz<br></br>Magnesium Cream - Unscented
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
                  Dope Minerals Magnesium Cream was created to deliver the
                  soothing power of CBD and Magnesium directly to the cells
                  through the skin.
                </p>
                <ul>
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
                  Magnesium is the 4th most abundant mineral in the body and low
                  levels can drastically impact your overall health. That’s why
                  we created a concentrated Magnesium cream that has incredible
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
                  Magnesium infused body cream! Combining both science and
                  nature to guide our formulations, magnesium chloride is
                  delicately infused into organic mango butter, organic shea
                  butter and organic coconut oil and blended into a perfectly
                  whipped cream that is gentle, moisturizing smooth and
                  effective.
                </p>
                <h5>Product Details</h5>
                <p>
                  9 ounces
                  <br></br>Ingredients: Organic Mango Butter, Organic Shea
                  Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg Full
                  Spectrum Cannabidiol Extract
                </p>
                <h5>Product Application & Use</h5>
                <p>
                  Dope Minerals Magnesium Cream is vegan, paraben-free,
                  GMO-free, gluten-free and made with organic ingredients. This
                  all-natural cream provides therapeutically effective amounts
                  of magnesium directly to the cells while nourishing skin.
                  Massage desired amount into the skin thoroughly. Repeat as
                  necessary to treat ailments, covering any areas needing extra
                  attention. Store in a cool, dry place. Do not apply to cuts,
                  wounds, open sores or freshly shaved areas of skin, and always
                  test a small amount on a patch of skin first to ensure you are
                  not allergic to any ingredient in our products.
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
