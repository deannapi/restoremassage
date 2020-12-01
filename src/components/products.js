import React from "react";
import $ from 'jquery';
import MgCBDLav2oz from "../shop-items/MgCBDLav2oz";
import MgCBDPpmt2oz from "../shop-items/MgCBDPpmt2oz";
import MgCBDUns2oz from "../shop-items/MgCBDUns2oz";
import MgCBDVan2oz from "../shop-items/MgCBDVan2oz";
import MgCBDLav4oz from "../shop-items/MgCBDLav4oz";
import MgCBDPpmt4oz from "../shop-items/MgCBDPpmt4oz";
import MgCBDVan4oz from "../shop-items/MgCBDVan4oz";
import MgVan4oz from "../shop-items/MgVan4oz";
import MgPpmt4oz from "../shop-items/MgPpmt4oz";
import MgUnscent4oz from "../shop-items/MgUnscent4oz";
import MgVan9oz from "../shop-items/MgVan9oz";
import MgLav9oz from "../shop-items/MgLav9oz";
import MgPpmt9oz from "../shop-items/MgPpmt9oz";
import MgUnscent9oz from "../shop-items/MgUnscent9oz";
import FaceCBDOil from "../shop-items/FaceCBDOil";
import FaceOil from "../shop-items/FaceOil";
import FaceScrub from "../shop-items/MgScrub";
import FaceScrub8 from "../shop-items/MgScrub8";
import TherapyBall from "../shop-items/TherapyBall";
import YogaBall from "../shop-items/YogaBall";

export default class Products extends React.Component {
  render() {
    return (
      <>
        <div>
          <h5>All merchandise sold in store.</h5>
          <h6>Ask me about a product at your next appointment.</h6>
        </div>

        <div id="myBtnContainer">
          <button className="bttn active" id="all" onClick={() => this.filterSelection('all')}>
            Show All
          </button>
          <button className="bttn" id="CBD" onClick={() => this.filterSelection('CBD')}>
            CBD
          </button>
          <button className="bttn" id="Magnesium" onClick={() => this.filterSelection('Magnesium')}>
            Magnesium
          </button>
          <button className="bttn" id="Skincare" onClick={() => this.filterSelection('Skincare')}>
            Skincare
          </button>
          <button className="bttn" id="Therapy" onClick={() => this.filterSelection('Therapy')}>
            Therapy
          </button>
        </div>

        <div className="row container">
          <MgCBDLav2oz></MgCBDLav2oz>
          <MgCBDPpmt2oz></MgCBDPpmt2oz>
          <MgCBDUns2oz></MgCBDUns2oz>
          <MgCBDVan2oz></MgCBDVan2oz>
          <MgCBDLav4oz></MgCBDLav4oz>
          <MgCBDPpmt4oz></MgCBDPpmt4oz>
          <MgCBDVan4oz></MgCBDVan4oz>
          <MgVan4oz></MgVan4oz>
          <MgPpmt4oz></MgPpmt4oz>
          <MgUnscent4oz></MgUnscent4oz>
          <MgVan9oz></MgVan9oz>
          <MgLav9oz></MgLav9oz>
          <MgPpmt9oz></MgPpmt9oz>
          <MgUnscent9oz></MgUnscent9oz>
          <FaceCBDOil></FaceCBDOil>
          <FaceOil></FaceOil>
          <FaceScrub></FaceScrub>
          <FaceScrub8></FaceScrub8>
          <TherapyBall></TherapyBall>
          <YogaBall></YogaBall>
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