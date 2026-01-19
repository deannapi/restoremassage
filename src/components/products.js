import React from "react";

import MgVanilla from "../shop-items/MgVanilla.jpg";
import MgLavendar from "../shop-items/MgLavendar.png"
import MgPeppermint from "../shop-items/MgPeppermint.png"
import MgUnscented from "../shop-items/MgUnscented.png"
import MgBathBomb from "../shop-items/MgBathBomb.jpg"
import MgDeodorant from "../shop-items/Deodorant.jpg"
import MgFaceOil from "../shop-items/MgFaceOil.png"

// const [filters, setFilters] = React.useState([]);

// const products = data
//   .filter((rocker) => {
//     return filters.every((mins) => rocker.minerals.includes(mins));
//   })
//   .map((rocker) => <MgCBDLav2oz />);

// const CBDCheckbox = useRef(null);
// const MgCheckbox = useRef(null);
// const SkincareCheckbox = useRef(null);
// const TherapyCheckbox = useRef(null);

// const updateFilters = (newFilter, checked) => {
//   if (!newFilter) {
//     return setFilters([]);
//   }
//   const newFilters = checked
//     ? [...newFilters, newFilter]
//     : newFilters.filter((f) => f !== newFilter);
//   setFilters(newFilters);
// };

// const removeFilters = () => {
//   updateFilters("");
//   CBDCheckbox.current.checked = false;
//   MgCheckbox.current.checked = false;
//   SkincareCheckbox.current.checked = false;
//   TherapyCheckbox.current.checked = false;
// };

export default class Products extends React.Component {
  render() {
    return (
      <>
        <div className="discode">
          <h5>
            Purchase in store at your next session <br/> or use code "<b>Restore10</b>" at{" "}
            <a
              href="https://moonglowminerals.com/"
              target="_blank"
              rel="noreferrer"
            >
              moonglow Minerals
            </a>
            .
          </h5>
          {/* <h6>Ask me about a product at your next appointment.</h6> */}
        </div>

        <div>
          {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <button className="" onClick={() => removeFilters()}>
            all {data.length}
          </button>
          <label className="btn">
            <input
              ref={CBDCheckbox}
              onClick={() => updateFilters("CBD", CBDCheckbox.current.checked)}
              type="checkbox"
              autoComplete="off"
              name="options"
              id="option2"
            >
              CBD
            </input>
          </label>
          <label className="btn">
            <input
              ref={MgCheckbox}
              onClick={() =>
                updateFilters("Magnesium", MgCheckbox.current.checked)
              }
              type="checkbox"
              autoComplete="off"
              name="options"
              id="option3"
            >
              Magnesium
            </input>
          </label>
          <label className="btn">
            <input
              ref={SkincareCheckbox}
              onClick={() =>
                updateFilters("Skincare", SkincareCheckbox.current.checked)
              }
              type="checkbox"
              autoComplete="off"
              name="options"
              id="option4"
            >
              Skincare
            </input>
          </label>
          <label className="btn">
            <input
              ref={TherapyCheckbox}
              onClick={() =>
                updateFilters("Therapy", TherapyCheckbox.current.checked)
              }
              type="checkbox"
              autoComplete="off"
              name="options"
              id="option5"
            >
              Therapy
            </input>
          </label> */}

          {/* <button
            className="bttn active"
            id="all"
            onClick={() => this.filterSelection("all")}
          >
            Show All
          </button>
          <button
            className="bttn"
            id="CBD"
            onClick={() => this.filterSelection("CBD")}
          >
            CBD
          </button>
          <button
            className="bttn"
            id="Magnesium"
            onClick={() => this.filterSelection("Magnesium")}
          >
            Magnesium
          </button>
          <button
            className="bttn"
            id="Skincare"
            onClick={() => this.filterSelection("Skincare")}
          >
            Skincare
          </button>
          <button
            className="bttn"
            id="Therapy"
            onClick={() => this.filterSelection("Therapy")}
          >
            Therapy
          </button> */}
        </div>

        <div className="row">
          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-vanilla/"
                target="_blank"
                rel="noreferrer">
                  Magnesium Cream Vanilla
              </a>
            </p>
            <img src={MgVanilla} alt="Magnesium Vanilla"/>
          </div>
          
           <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-lavender/"
                target="_blank"
                rel="noreferrer">
                  Magnesium Cream Lavender
              </a>
            </p>
            <img src={MgLavendar} alt="Magnesium Lavender"/>
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-peppermint/"
                target="_blank"
                rel="noreferrer">
                  Magnesium Cream Peppermint
              </a>
            </p>
            <img src={MgPeppermint} alt="Magnesium Peppermint"/>
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/9-oz-magnesium-cream-unscented/"
                target="_blank"
                rel="noreferrer">
                  Magnesium Cream Unscented
              </a>
            </p>
            <img src={MgUnscented} alt="Magnesium Unscented"/>
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/magnesium-bath-bombs/"
                target="_blank"
                rel="noreferrer">
                  Magnesium Bath Bombs
              </a>
            </p>
            <img src={MgBathBomb} alt="Magnesium Bath Bombs"/>
          </div>

          <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/magnesium-infused-deodorant/"
                target="_blank"
                rel="noreferrer">
                  Magnesium Infused Deodorant
              </a>
            </p>
            <img src={MgDeodorant} alt="Magnesium Infused Deodorant"/>
          </div>

            <div className="product-box">
            <p className="product-title">
              <a
                href="https://moonglowminerals.com/shop/magnesium-face-body-oil/"
                target="_blank"
                rel="noreferrer">
                  Magnesium Infused Face Oil
              </a>
            </p>
            <img src={MgFaceOil} alt="Magnesium Infused Face Oil"/>
          </div>

        </div>
      </>
    );
  }
}

// filterSelection("all");

// function filterSelection(c) {
//   console.log("Filter button: " + c.target.id)
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c === "all") c = "";
//   // add the "show" class (display:block) to the filtered elements
//   // and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
//   }
// }

// // show filtered elements
// function AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) === -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // hide elements that are not selected
// function RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // add active class to the current control button and highlight it
// var btnContainer = $('#myBtnContainer');
// var btns = btnContainer.document.getElementsByClassName("bttn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
