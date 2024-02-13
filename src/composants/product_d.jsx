import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import logo4 from "../composants/images/coeur.png";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/store";
import icon1 from "../composants/images/panier (2).png";
import img1 from "../composants/images/manque.png";
import { Likproduct } from "../redux/store";

export default function Product_d() {
  const { id } = useParams();
  /* console.log(id) */
  const data = useSelector((state) => state.products);
  const product_info = data.find((pr) => pr.id === parseInt(id));
  const dispatch = useDispatch();

  function AddOrder(product) {
    dispatch(addProduct(product));
  }

  function Add_to_lik(product) {
    dispatch(Likproduct(product));
  }
  return (
    <div className="container">
      <div className="card mt-4" style={{ width: "18rem" }} id="cart-product-d">
        <Link to="/product" id="link-back">
          <button id="back">
            <img src={img1} id="img-back" alt="" />
          </button>
        </Link>
        <img
          src={product_info.img}
          alt=""
          width="400px"
          height="400px"
          id="prduct-d-img"
        />
        <div class="card-body" id="card-body">
          <div>
            <h5 class="card-title" id="product_title">
              {product_info.title}
            </h5>
            <h4 id="h4-product-d">{product_info.type} for teenagers</h4>
            <h6 class="h6 card-text" id="product_price">
              Price : {product_info.price} $
            </h6>
            <h3 class="h3 card-text">Size</h3>
            <div className="size-btns-container">
              <button className="btn btn-outline-dark" id="size-btn1">
                XS
              </button>
              <button className="btn btn-outline-dark" id="size-btn">
                S
              </button>
              <button className="btn btn-outline-dark" id="size-btn">
                M
              </button>
              <button className="btn btn-outline-dark" id="size-btn">
                L
              </button>
              <button className="btn btn-outline-dark" id="size-btn">
                XL
              </button>
              <button className="btn btn-outline-dark" id="size-btn8">
                XXL
              </button>
            </div>
            <div className="add-jaime">
              <div className="add-jaime-element">
                <Link>
                  <button
                    onClick={() => AddOrder(product_info)}
                    class="btn btn-dark"
                    id="Add_to_cart"
                  >
                    {/* <i class="fa-solid fa-basket-shopping"></i> */}
                    <img
                      src={icon1}
                      alt=""
                      width="25px"
                      style={{ marginRight: "1px" }}
                    />
                    Add to Cart
                  </button>
                </Link>
                <Link>
                  <button
                    onClick={() => Add_to_lik(product_info)}
                    class="btn btn-dark"
                    id="Add_to_like"
                  >
                    {/* <i class="fa-solid fa-basket-shopping"></i> */}
                    <img
                      src={logo4}
                      alt=""
                      width="25px"
                      style={{ marginRight: "1px" }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
