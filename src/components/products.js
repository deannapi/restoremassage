import React from "react";
import MgCBDLav2oz from '../shop-items/MgCBDLav2oz';
import MgCBDPpmt2oz from '../shop-items/MgCBDPpmt2oz';
import MgCBDUns2oz from '../shop-items/MgCBDUns2oz';
import MgCBDVan2oz from '../shop-items/MgCBDVan2oz';
import MgCBDLav4oz from '../shop-items/MgCBDLav4oz';
import MgCBDPpmt4oz from '../shop-items/MgCBDPpmt4oz';
import MgCBDVan4oz from '../shop-items/MgCBDVan4oz';
import MgVan4oz from '../shop-items/MgVan4oz';
import MgPpmt4oz from '../shop-items/MgPpmt4oz';
import MgUnscent4oz from '../shop-items/MgUnscent4oz';
import MgVan9oz from '../shop-items/MgVan9oz';
import MgLav9oz from '../shop-items/MgLav9oz';
import MgPpmt9oz from '../shop-items/MgPpmt9oz';
import MgUnscent9oz from '../shop-items/MgUnscent9oz';
import FaceCBDOil from '../shop-items/FaceCBDOil';
import FaceOil from '../shop-items/FaceOil';
import FaceScrub from '../shop-items/MgScrub';
import FaceScrub8 from '../shop-items/MgScrub8';
import TherapyBall from '../shop-items/TherapyBall';
import YogaBall from '../shop-items/YogaBall';

export default class Products extends React.Component {
  render() {
    return (
      <>
        <div>
          <h5>All merchandise sold in store.</h5>
          <h6>Ask me about a product at your next appointment.</h6>
        </div>

        <div className="row">
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
