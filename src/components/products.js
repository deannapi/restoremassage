import React from "react";
import two_cbd_lav from "../store/2oz-cbd-lavender.jpg";
import two_cbd_ppmt from "../store/2oz-cbd-ppmt.jpg";
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

export default class Products extends React.Component {
  render() {
    return (
      <>
        <div>
          <h5>All merchandise sold in store.</h5>
          <h6>Ask me about a product at your next appointment.</h6>
        </div>

        <div className="row">
          <div className="product-box">
            <div>
              <p class="product-title">
                2 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Lavender
              </p>
              <img class="product-img" src={two_cbd_lav} alt="cbd_lav_2" />
              <p>$44.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails1"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails1"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      2 oz/200 mg
                      <br></br>Magnesium + Full Spectrum Hemp Cream - Lavender
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
                      synergy to provide support to body systems and impact
                      overall health. Both of these powerful ingredients have
                      incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      2 ounces <br></br> Contains 200 mg Full Spectrum Hemp
                      Extract (CBD)
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                2 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Peppermint
              </p>
              <img class="product-img" src={two_cbd_ppmt} alt="cbd_ppmt_2" />
              <p>$44.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails2"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      2 oz/200 mg
                      <br></br>Magnesium + Full Spectrum Hemp Cream - Peppermint
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
                      synergy to provide support to body systems and impact
                      overall health. Both of these powerful ingredients have
                      incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      2 ounces <br></br> Contains 200 mg Full Spectrum Hemp
                      Extract (CBD)
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Peppermint Essential
                      Oil, Menthol.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                2 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Unscented
              </p>
              <img
                class="card-img-top"
                src={two_cbd_unscent}
                alt="cbd_unscent_2"
              />
              <p>$44.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails3"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails3"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      2 oz/200 mg
                      <br></br>Magnesium + Full Spectrum Hemp Cream - Unscented
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
                      synergy to provide support to body systems and impact
                      overall health. Both of these powerful ingredients have
                      incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      2 ounces <br></br> Contains 200 mg Full Spectrum Hemp
                      Extract (CBD)
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                2 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Vanilla
              </p>
              <img class="product-img" src={two_cbd_van} alt="cbd_van_2" />
              <p>$44.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails4"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails4"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      2 oz/200 mg
                      <br></br>Magnesium + Full Spectrum Hemp Cream - Vanilla
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
                      synergy to provide support to body systems and impact
                      overall health. Both of these powerful ingredients have
                      incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      2 ounces <br></br> Contains 200 mg Full Spectrum Hemp
                      Extract (CBD)
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                4 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Lavender
              </p>
              <img class="product-img" src={four_cbd_lav} alt="cbd_lav_4" />
              <p>$64.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails5"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails5"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      4 oz/400 mg
                      <br></br>Magnesium + Full Spectrum Hemp Cream - Lavender
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
                      synergy to provide support to body systems and impact
                      overall health. Both of these powerful ingredients have
                      incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      4 ounces <br></br> Contains 400 mg Full Spectrum Hemp
                      Extract (CBD)
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Lavender Essential Oil.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                4 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Peppermint
              </p>
              <img class="product-img" src={four_cbd_ppmt} alt="cbd_lav_4" />
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
              class="modal fade"
              id="moredetails6"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      4 oz/400 mg
                      <br></br>Magnesium + Full Spectrum Hemp Cream - Peppermint
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
                      synergy to provide support to body systems and impact
                      overall health. Both of these powerful ingredients have
                      incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      4 ounces <br></br> Contains 400 mg Full Spectrum Hemp
                      Extract (CBD)
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Peppermint Essential
                      Oil.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                4 oz<br></br>Magnesium + Full Spectrum Hemp Cream - Vanilla
              </p>
              <img class="product-img" src={four_cbd_van} alt="cbd_van_4" />
              <p>$64.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails7"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails7"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      4 oz/400 mg
                      <br></br>Magnesium + Full Spectrum Hemp Cream - Vanilla
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
                      synergy to provide support to body systems and impact
                      overall health. Both of these powerful ingredients have
                      incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      4 ounces <br></br> Contains 400 mg Full Spectrum Hemp
                      Extract (CBD)
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                4 oz<br></br>Magnesium Cream - Vanilla
              </p>
              <img class="product-img" src={four_van} alt="van_4" />
              <p>$26.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails8"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails8"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      4 oz<br></br>Magnesium Cream - Vanilla
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
                      Magnesium is the 4th most abundant mineral in the body and
                      low levels can drastically impact your overall health.
                      That’s why we created a concentrated Magnesium cream that
                      has incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      4 ounces
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                4 oz<br></br>Magnesium Cream - Peppermint
              </p>
              <img class="product-img" src={four_ppmt} alt="ppmt_4" />
              <p>$26.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails9"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails9"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      4 oz<br></br>Magnesium Cream - Peppermint
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
                      Magnesium is the 4th most abundant mineral in the body and
                      low levels can drastically impact your overall health.
                      That’s why we created a concentrated Magnesium cream that
                      has incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      4 ounces
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                4 oz<br></br>Magnesium Cream - Unscented
              </p>
              <img class="product-img" src={four_unscent} alt="unscent_4" />
              <p>$26.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails10"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails10"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      4 oz<br></br>Magnesium Cream - Unscented
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
                      Magnesium is the 4th most abundant mineral in the body and
                      low levels can drastically impact your overall health.
                      That’s why we created a concentrated Magnesium cream that
                      has incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium + Hemp infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride and Full Spectrum Hemp
                      Extract is delicately infused into organic mango butter,
                      organic shea butter and organic coconut oil and blended
                      into a perfectly whipped cream that is gentle,
                      moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      4 ounces
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium + Hemp Cream is vegan,
                      paraben-free, GMO-free, gluten-free and made with organic
                      ingredients. This all-natural cream provides
                      therapeutically effective amounts of Hemp Extract and
                      Magnesium directly to the cells while nourishing skin.
                      Massage desired amount into the skin thoroughly. Repeat as
                      necessary to treat ailments, covering any areas needing
                      extra attention. Store in a cool, dry place. Do not apply
                      to cuts, wounds, open sores or freshly shaved areas of
                      skin, and always test a small amount on a patch of skin
                      first to ensure you are not allergic to any ingredient in
                      our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                9 oz<br></br>Magnesium Cream - Vanilla
              </p>
              <img class="product-img" src={nine_vanilla} alt="van_9" />
              <p>$41.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails11"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails11"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      9 oz<br></br>Magnesium Cream - Vanilla
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
                      Magnesium is the 4th most abundant mineral in the body and
                      low levels can drastically impact your overall health.
                      That’s why we created a concentrated Magnesium cream that
                      has incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride is delicately infused
                      into organic mango butter, organic shea butter and organic
                      coconut oil and blended into a perfectly whipped cream
                      that is gentle, moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      9 ounces
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium Cream is vegan, paraben-free,
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural cream provides therapeutically effective
                      amounts of magnesium directly to the cells while
                      nourishing skin. Massage desired amount into the skin
                      thoroughly. Repeat as necessary to treat ailments,
                      covering any areas needing extra attention. Store in a
                      cool, dry place. Do not apply to cuts, wounds, open sores
                      or freshly shaved areas of skin, and always test a small
                      amount on a patch of skin first to ensure you are not
                      allergic to any ingredient in our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                9 oz<br></br>Magnesium Cream - Lavender
              </p>
              <img class="product-img" src={nine_lav} alt="lav_9" />
              <p>$41.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails12"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails12"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      9 oz<br></br>Magnesium Cream - Lavender
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
                      Magnesium is the 4th most abundant mineral in the body and
                      low levels can drastically impact your overall health.
                      That’s why we created a concentrated Magnesium cream that
                      has incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride is delicately infused
                      into organic mango butter, organic shea butter and organic
                      coconut oil and blended into a perfectly whipped cream
                      that is gentle, moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      9 ounces
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium Cream is vegan, paraben-free,
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural cream provides therapeutically effective
                      amounts of magnesium directly to the cells while
                      nourishing skin. Massage desired amount into the skin
                      thoroughly. Repeat as necessary to treat ailments,
                      covering any areas needing extra attention. Store in a
                      cool, dry place. Do not apply to cuts, wounds, open sores
                      or freshly shaved areas of skin, and always test a small
                      amount on a patch of skin first to ensure you are not
                      allergic to any ingredient in our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                9 oz<br></br>Magnesium Cream - Peppermint
              </p>
              <img class="product-img" src={nine_ppmt} alt="ppmt_9" />
              <p>$41.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails13"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails13"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      9 oz<br></br>Magnesium Cream - Peppermint
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
                      Magnesium is the 4th most abundant mineral in the body and
                      low levels can drastically impact your overall health.
                      That’s why we created a concentrated Magnesium cream that
                      has incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride is delicately infused
                      into organic mango butter, organic shea butter and organic
                      coconut oil and blended into a perfectly whipped cream
                      that is gentle, moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      9 ounces
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium Cream is vegan, paraben-free,
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural cream provides therapeutically effective
                      amounts of magnesium directly to the cells while
                      nourishing skin. Massage desired amount into the skin
                      thoroughly. Repeat as necessary to treat ailments,
                      covering any areas needing extra attention. Store in a
                      cool, dry place. Do not apply to cuts, wounds, open sores
                      or freshly shaved areas of skin, and always test a small
                      amount on a patch of skin first to ensure you are not
                      allergic to any ingredient in our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                9 oz<br></br>Magnesium Cream - Unscented
              </p>
              <img class="product-img" src={nine_unscent} alt="unscent_9" />
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
              class="modal fade"
              id="moredetails14"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      9 oz<br></br>Magnesium Cream - Vanilla
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
                      Magnesium is the 4th most abundant mineral in the body and
                      low levels can drastically impact your overall health.
                      That’s why we created a concentrated Magnesium cream that
                      has incredible uses. Here are a few: Rub onto sore muscles
                      Massage onto temples & neck to ease head tension Use on
                      bottom of feet before bed to promote restful sleep Massage
                      onto chest & shoulders to alleviate anxious feelings Rub
                      onto legs to soothe muscle spasms Apply to inflamed joints
                      and tendons Which is why our customers rave about our
                      powerfully effective Magnesium infused body cream!
                      Combining both science and nature to guide our
                      formulations, magnesium chloride is delicately infused
                      into organic mango butter, organic shea butter and organic
                      coconut oil and blended into a perfectly whipped cream
                      that is gentle, moisturizing smooth and effective.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      9 ounces
                      <br></br>Ingredients: Organic Mango Butter, Organic Shea
                      Butter, Organic Coconut Oil, Magnesium Chloride, 200 mg
                      Full Spectrum Cannabidiol Extract, Vanilla Essential Oil
                      Blend.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Magnesium Cream is vegan, paraben-free,
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural cream provides therapeutically effective
                      amounts of magnesium directly to the cells while
                      nourishing skin. Massage desired amount into the skin
                      thoroughly. Repeat as necessary to treat ailments,
                      covering any areas needing extra attention. Store in a
                      cool, dry place. Do not apply to cuts, wounds, open sores
                      or freshly shaved areas of skin, and always test a small
                      amount on a patch of skin first to ensure you are not
                      allergic to any ingredient in our products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                Magnesium + Full Spectrum Hemp Face & Body Oil
              </p>
              <img class="product-img" src={face_hemp} alt="" />
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
              class="modal fade"
              id="moredetails15"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      Magnesium + Full Spectrum Hemp Face & Body Oil
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
                      Fight dry, tired skin with the perfect blend of
                      all-natural ingredients that smooth and soften skin,
                      adding tone and elasticity while reducing scars and acne.
                      The ingredients in this specialized formula have been
                      carefully chosen to ensure the most effective results. The
                      non-greasy mixture is made up of Hempseed Oil, which is
                      easily absorbed and does not clog pores. Neem deeply
                      cleanses pores by removing impurities and dirt, acting as
                      an anti-bacterial agent. Potent Full Spectrum CBD Oil (100
                      mg) is rich in omega-6 and omega-3 fatty acids which help
                      combat redness and plumps fine lines. Steam distilled
                      Geranium Oil regulates skin’s sebum production, while
                      Frankincense helps to heal skin and negate the signs of
                      aging. This powerful skin oil also contains Carrot Seed
                      Oil which has long been prized for it’s anti-aging
                      effects. Magnesium is an anti-aging, anti-wrinkle
                      powerhouse that helps reduce fine lines and wrinkles. It
                      helps enhance hydration and encourages the production of
                      collagen. Magnesium can also reduce acne, inflammation,
                      scars, dark spots and redness.
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
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural moisturizer provides therapeutically
                      effective amounts of magnesium and CBD directly to the
                      cells while nourishing skin. Massage a small amount into
                      dry skin. Store in a cool, dry place. Do not apply to
                      cuts, wounds, open sores or freshly shaved areas of skin,
                      and always test a small amount on a patch of skin first to
                      ensure you are not allergic to any ingredient in our
                      products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">Magnesium Face & Body Oil</p>
              <img class="product-img" src={face} alt="" />
              <p>$14.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails16"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails16"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      Magnesium Face & Body Oil
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
                      Fight dry, tired skin with the perfect blend of
                      all-natural ingredients that smooth and soften skin,
                      adding tone and elasticity while reducing scars and acne.
                      The ingredients in this specialized formula have been
                      carefully chosen to ensure the most effective results. The
                      non-greasy mixture is made up of Hempseed Oil, which is
                      easily absorbed and does not clog pores. Neem deeply
                      cleanses pores by removing impurities and dirt, acting as
                      an anti-bacterial agent. Magnesium is an anti-aging,
                      anti-wrinkle powerhouse that helps reduce fine lines and
                      wrinkles. It helps enhance hydration and encourages the
                      production of collagen. Magnesium can also reduce acne,
                      inflammation, scars, dark spots and redness. This is the
                      same oil that is found in our Magnesium Facial Scrub.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      1 ounce
                      <br></br>Ingredients: Neem Infused Hempseed Oil, Magnesium
                      Chloride
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Face & Body Oil is vegan, paraben-free,
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural moisturizer provides therapeutically
                      effective amounts of magnesium and CBD directly to the
                      cells while nourishing skin. Massage a small amount into
                      dry skin. Store in a cool, dry place. Do not apply to
                      cuts, wounds, open sores or freshly shaved areas of skin,
                      and always test a small amount on a patch of skin first to
                      ensure you are not allergic to any ingredient in our
                      products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">Magnesium Facial Scrub</p>
              <img class="product-img" src={scrub} alt="" />
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
              class="modal fade"
              id="moredetails17"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      Magnesium Facial Scrub
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
                      Fight dry, tired skin with the perfect blend of
                      all-natural ingredients that smooth and soften skin,
                      adding tone and elasticity while reducing scars and acne.
                      The ingredients in this specialized formula have been
                      carefully chosen to ensure the most effective results. The
                      non-greasy mixture is made up of Hempseed Oil, which is
                      easily absorbed and does not clog pores. Neem deeply
                      cleanses pores by removing impurities and dirt, acting as
                      an anti-bacterial agent. Magnesium is an anti-aging,
                      anti-wrinkle powerhouse that helps reduce fine lines and
                      wrinkles. It helps enhance hydration and encourages the
                      production of collagen. Magnesium can also reduce acne,
                      inflammation, scars, dark spots and redness.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      4 ounces
                      <br></br>Ingredients: Organic Sugar, Neem Infused Hempseed
                      Oil, Magnesium Chloride, Rose Petals, Lavender & Ylang
                      Ylang Essential Oils.
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Face & Body Oil is vegan, paraben-free,
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural moisturizer provides therapeutically
                      effective amounts of magnesium and CBD directly to the
                      cells while nourishing skin. Massage a small amount into
                      dry skin. Store in a cool, dry place. Do not apply to
                      cuts, wounds, open sores or freshly shaved areas of skin,
                      and always test a small amount on a patch of skin first to
                      ensure you are not allergic to any ingredient in our
                      products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">Magnesium Facial Scrub - 8 oz</p>
              <img class="product-img" src={scrub_eight} alt="" />
              <p>$39.99</p>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#moredetails18"
              >
                More Details
              </button>
            </div>

            {/* Modal */}
            <div
              class="modal fade"
              id="moredetails18"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      Magnesium Facial Scrub - 8 oz
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
                      Fight dry, tired skin with the perfect blend of
                      all-natural ingredients that smooth and soften skin,
                      adding tone and elasticity while reducing scars and acne.
                      The ingredients in this specialized formula have been
                      carefully chosen to ensure the most effective results. The
                      non-greasy mixture is made up of Hempseed Oil, which is
                      easily absorbed and does not clog pores. Neem deeply
                      cleanses pores by removing impurities and dirt, acting as
                      an anti-bacterial agent. Magnesium is an anti-aging,
                      anti-wrinkle powerhouse that helps reduce fine lines and
                      wrinkles. It helps enhance hydration and encourages the
                      production of collagen. Magnesium can also reduce acne,
                      inflammation, scars, dark spots and redness. This is the
                      same oil that is found in our Magnesium Facial Scrub.
                    </p>
                    <h5>Product Details</h5>
                    <p>
                      8 ounces
                      <br></br>Ingredients: Neem Infused Hempseed Oil, Magnesium
                      Chloride
                    </p>
                    <h5>Product Application & Use</h5>
                    <p>
                      Dope Minerals Face & Body Oil is vegan, paraben-free,
                      GMO-free, gluten-free and made with organic ingredients.
                      This all-natural moisturizer provides therapeutically
                      effective amounts of magnesium and CBD directly to the
                      cells while nourishing skin. Massage a small amount into
                      dry skin. Store in a cool, dry place. Do not apply to
                      cuts, wounds, open sores or freshly shaved areas of skin,
                      and always test a small amount on a patch of skin first to
                      ensure you are not allergic to any ingredient in our
                      products.
                      <br></br> Disclaimer: The information, advice, statements
                      and testimonials made about Dope Minerals products
                      mentioned on this website have not been evaluated by the
                      US Food and Drug Administrations (FDA). The information
                      contained on this website is not intended to diagnose,
                      treat, cure or prevent disease, nor are they intended to
                      replace proper medical help. It is always recommended to
                      consult with a healthcare professional before starting any
                      regimen. User submitted testimonials are based on
                      individual results and do not constitute a guarantee that
                      you will achieve the same results.
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">Therapy Ball Plus Pair in Tote</p>
              <img class="product-img" src={therapy_ball} alt="" />
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
              class="modal fade"
              id="moredetails19"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      Therapy Ball Plus Pair in Tote
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
                      Slightly larger than the original Yoga Tune Up Therapy
                      Balls, the Therapy Ball PLUS pair of self-massage balls
                      measure about 2 3/4" in diameter and were developed by
                      popular demand. They cover more surface area and add
                      height to obtain a greater depth of pressure. Use them in
                      their custom designed snug-grip mesh tote for spine rolls
                      (top of the neck, down to the sacrum), as well as IT band
                      & thigh rolls and so much more!
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
          </div>

          <div className="product-box">
            <div>
              <p class="product-title">
                Yoga Tune Up Therapy Ball Pair in Tote
              </p>
              <img class="product-img" src={yoga_ball} alt="" />
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
              class="modal fade"
              id="moredetails20"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      Yoga Tune Up Therapy Ball Pair in Tote
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
                      The Yoga Tune Up Therapy Balls (also known as the "OG's")
                      measure at about 2 1/2" in diameter each and are made of a
                      special rubber that grips at your skin, grabs at multiple
                      layers of muscles, and rubs out adhesions and tension,
                      providing a deep tissue massage (colors may vary). The
                      Yoga Tune Up® Therapy Balls with Tote set includes two
                      foot massage balls and a mesh drawstring snug-grip tote
                      bag. The ball that started it all!
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
          </div>
        </div>
      </>
    );
  }
}
