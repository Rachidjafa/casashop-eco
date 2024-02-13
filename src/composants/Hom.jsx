import React from "react";
import { Link } from "react-router-dom";
import img1 from "../composants/images/nk.png";
import img3 from "../composants/images/facebook.png";
import img2 from "../composants/images/whatsapp.png";
import img4 from "../composants/images/logo-instagram.png";
import img5 from "../composants/images/youtube.png";
import img6 from "../composants/images/twitter.png";
import img7 from "../composants/images/can.avif";
import img8 from "../composants/images/Star_of_Morocco.svg.png";
import icon2 from "../composants/images/sac-de-courses.png";
import icon3 from "../composants/images/sac-de-courses.png";

import { useSelector } from "react-redux";
import Livraison from "./livraison";

export default function Hom() {
  const data = useSelector((state) => state.hom_products);
  const data2 = useSelector((state) => state.can_products);

  return (
    <>
      <div className="container mt-4">
        <section className="hom-section">
          <h1 className="hom-h1">
            CasaShop the world of sports.
            <br /> We have all types of original sports
            <br /> shoes from international brands
          </h1>
          <Link to="/product">
            <button className="btn btn-dark mt-4" id="Buy">
              Buy Now
              <img src={icon2} alt="" width="32px" style={{ padding: "5px" }} />
            </button>
          </Link>
          <div className="social-media">
            <img src={img2} alt="" width="30px" id="img2" />
            <img src={img3} alt="" width="30px" id="img3" />
            <img src={img4} alt="" width="30px" id="img4" />
            <img src={img5} alt="" width="30px" id="img5" />
            <img src={img6} alt="" width="30px" id="img6" />
          </div>
          <img src={img8} alt="" id="star" width="450px" />
          <img src={img1} alt="" width="400px" id="hom-img" />
        </section>

        <section className="hom-section-2">
          <h1 className="hom-h1">The world of sports</h1>
          <div className="buy-socila">
            <Link to="/product" id="link-buy">
              <button className="btn btn-dark mt-4" id="Buy">
                Buy Now
                <img
                  src={icon2}
                  alt=""
                  width="32px"
                  style={{ padding: "5px" }}
                />
              </button>
            </Link>
            <div className="social-media">
              <img src={img2} alt="" width="30px" id="img2" />
              <img src={img3} alt="" width="30px" id="img3" />
              <img src={img4} alt="" width="30px" id="img4" />
              <img src={img5} alt="" width="30px" id="img5" />
              <img src={img6} alt="" width="30px" id="img6" />
            </div>
          </div>
        </section>

        <section className="product-hom-section">
          {/* <div className="btns-marque">
            <button className="btn btn-outline-dark" id="btn-mark">
              <img src={logo1} alt="" width="25px" /> Nike
            </button>
            <button className="btn btn-outline-dark" id="btn-mark">
              <img src={logo2} alt="" width="25px" /> Adidas
            </button>
            <button className="btn btn-outline-dark" id="btn-mark">
              <img src={logo3} alt="" width="25px" /> puma
            </button>
          </div> */}
          <h1 className="h1-hom-product">Products</h1>
          <div className="container mt-3" id="container">
            {data.map((d) => {
              return (
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={d.img}
                    alt=""
                    height="250px"
                    id="product-images"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{d.title}</h5>
                    <p class="card-text">Price : {d.price} $</p>
                    <Link to={`/product_d/${d.id}`}>
                      <button class="btn btn-dark" id="ddd">
                        {/* <i class="fa-solid fa-basket-shopping"></i> */}
                        <img
                          src={icon3}
                          alt=""
                          width="35px"
                          style={{ padding: "5px" }}
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-mor">
            <Link to="/product">
              <button className="btn btn-dark " id="mor">
                SHOW MORE
                <img
                  src={icon2}
                  alt=""
                  width="32px"
                  style={{ padding: "5px" }}
                />
              </button>
            </Link>
          </div>
        </section>
      </div>
      <div className="can">
        <div className="can-pack">
          <img src={img7} alt="" width="99.98%" />
          <h1 className="h1-can">FOREVER. MOROCCO.</h1>
          <h5 className="h5-can">The African Cup of Nations Special Pack</h5>
        </div>
        <div className="h1-h5-can">
          <h1 className="h1-can-2">FOREVER. MOROCCO.</h1>
          <h5 className="h5-can-2">The African Cup of Nations Special Pack</h5>
        </div>
        <div id="scroll-container" className="container">
          {data2.map((d) => {
            return (
              <>
                <Link to={`/product_d/${d.id}`}>
                  <img
                    src={d.img}
                    alt=""
                    className="scroll-image"
                    id="product-images"
                  />
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <div className="liv-section">
        <Livraison />
      </div>
    </>
  );
}
