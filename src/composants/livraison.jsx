import React from "react";
import img1 from "../composants/images/rapide.png";
import img2 from "../composants/images/pays.png";
import img3 from "../composants/images/livraison-gratuite.png";

export default function Livraison() {
  return (
    <div className="">
      <h2 className="h1-locla" style={{ textAlign: "center", color: "#fff" }}>
        HOME DELIVERY
      </h2>
      <div className="deliv-element">
        <div className="fast">
          <img src={img1} alt="" width="170px" className="img-locla" />
          <h3 className="h3-locla">FAST</h3>
        </div>
        <div className="fast">
          <img src={img3} alt="" width="170px" className="img-locla" />
          <h3 className="h3-locla">Free</h3>
        </div>
        <div className="fast">
          <img src={img2} alt="" width="170px" className="img-locla" />
          <h3 className="h3-locla">MOROCCO</h3>
        </div>
      </div>
    </div>
  );
}
