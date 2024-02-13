import React from "react";
import img1 from "../composants/images/n.jpg";

export default function About() {
  return (
    <div className="container" id="cont-about">
      <div>
        <h1 className="h1-about">Welcome to Casashop</h1>
      </div>
      <div>
        <img
          src={img1}
          className="img-about"
          alt=""
          width="400px"
          height="210px"
        />
      </div>
      <div>
        <h5 className="h5-about">
          your premier destination for authentic sports footwear from top
          international brands. At Casashop, we take pride in curating a diverse
          collection of original sports shoes that cater to various activities
          and styles. Our commitment to quality ensures that every pair of shoes
          in our inventory is genuine and from renowned brands like Nike,
          Adidas, Puma, and more. Whether you're a seasoned athlete or a casual
          enthusiast, Casashop offers a seamless online shopping experience,
          providing you with the latest releases and classic designs. Elevate
          your performance and style with the assurance of authenticity when you
          choose Casashop for all your sports shoe needs.
        </h5>
      </div>
    </div>
  );
}
