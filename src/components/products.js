import React from "react";

import MgVanilla from "../shop-items/MgVanilla.jpg";
import MgLavendar from "../shop-items/MgLavendar.png";
import MgPeppermint from "../shop-items/MgPeppermint.png";
import MgUnscented from "../shop-items/MgUnscented.png";
import MgBathBomb from "../shop-items/MgBathBomb.jpg";
import MgDeodorant from "../shop-items/Deodorant.jpg";
import MgFaceOil from "../shop-items/MgFaceOil.png";

export default class Products extends React.Component {
  render() {
    return (
      <>
        <div className="discode">
          <h5>
            Purchase in store at your next session <br /> or use code "
            <b>Restore10</b>" at{" "}
            <a
              href="https://moonglowminerals.com/"
              target="_blank"
              rel="noreferrer"
            >
              moonglow Minerals
            </a>
            .
          </h5>
        </div>

        <div className="row">
          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-vanilla/"
                target="_blank"
                rel="noreferrer"
              >
                Magnesium Cream Vanilla
              </a>
            </p>
            <img src={MgVanilla} alt="Magnesium Vanilla" />
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-lavender/"
                target="_blank"
                rel="noreferrer"
              >
                Magnesium Cream Lavender
              </a>
            </p>
            <img src={MgLavendar} alt="Magnesium Lavender" />
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-peppermint/"
                target="_blank"
                rel="noreferrer"
              >
                Magnesium Cream Peppermint
              </a>
            </p>
            <img src={MgPeppermint} alt="Magnesium Peppermint" />
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-unscented/"
                target="_blank"
                rel="noreferrer"
              >
                Magnesium Cream Unscented
              </a>
            </p>
            <img src={MgUnscented} alt="Magnesium Unscented" />
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/magnesium-bath-bombs/"
                target="_blank"
                rel="noreferrer"
              >
                Magnesium Bath Bombs
              </a>
            </p>
            <img src={MgBathBomb} alt="Magnesium Bath Bombs" />
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/magnesium-infused-deodorant/"
                target="_blank"
                rel="noreferrer"
              >
                Magnesium Infused Deodorant
              </a>
            </p>
            <img src={MgDeodorant} alt="Magnesium Infused Deodorant" />
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/magnesium-face-body-oil/"
                target="_blank"
                rel="noreferrer"
              >
                Magnesium Infused Face Oil
              </a>
            </p>
            <img src={MgFaceOil} alt="Magnesium Infused Face Oil" />
          </div>
        </div>
      </>
    );
  }
}
