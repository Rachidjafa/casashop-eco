import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../composants/images/bouton-x.png";
import img2 from "../composants/images/shopping.png";
import { addProduct } from "../redux/store";
import { deleteLike } from "../redux/store";
export default function Likes() {
  const Like = useSelector((state) => state.Like);
  const dispatch = useDispatch();

  function remov(lik) {
    dispatch(deleteLike(lik));
  }

  function AddOrder(product) {
    dispatch(addProduct(product));
  }
  return (
    <div className="container mt-3" id="container-1">
      {Like.length > 0 ? (
        Like.map((d) => (
          <div
            class="card"
            style={{ width: "18rem" }}
            key={d.id}
            id="orders-card"
          >
            <button id="remov" onClick={() => remov(d.id)}>
              <img src={img1} id="img-back" alt="" />
            </button>
            <img src={d.img} alt="" height="250px" id="img-orders" />
            <div class="card-body">
              <h5 id="h5-order" class="card-title">
                {d.title}
              </h5>
              <h4 id="h4-orders-d">{d.type} for teenagers</h4>
              <h6 class="h6 card-text" id="product_price_orders">
                Price : {d.price} $
              </h6>
              <div className="Payment">
                <Link>
                  <button class="btn btn-dark" id="Payment" onClick={() => AddOrder(d.id)}>
                  Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="walo-img">
          <div>
            <img src={img2} alt="" width="360px" />
          </div>
        </div>
      )}
    </div>
  );
}
