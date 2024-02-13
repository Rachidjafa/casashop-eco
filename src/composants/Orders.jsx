import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../composants/images/bouton-x.png";
import img2 from "../composants/images/shopping.png";
import { deleteProduct } from "../redux/store";
export default function Orders() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch()
  function remov(prod){
    const del = window.confirm("do you really want to delete this Product")
    if(del){
        dispatch(
          deleteProduct(prod)
        )
    }
}
  
  return (
    <div className="container mt-3" id="container-1">
      {orders.length > 0
        ? orders.map((d) => (
            <div
              class="card"
              style={{ width: "18rem" }}
              key={d.id}
              id="orders-card"
            >
              <button id="remov" onClick={()=>remov(d.id)}>
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
                    <button class="btn btn-dark" id="Payment">
                      Payment
                    </button>
                  </Link>
                  <Link>
                    <button class="btn btn-outline-dark" id="Payment-2">
                      <span style={{ color: "#003087" }}>Pay</span>
                      <span style={{ color: "#0070E0" }}>pal</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        : <div className="walo-img"><div><img src={img2}  alt="" width="360px" /></div></div> }
    </div>
  );
}
