import { useSelector } from "react-redux";
import icon2 from "../composants/images/sac-de-courses.png";
import logo1 from '../composants/images/nike.png'
import logo2 from '../composants/images/adidas.png'
import logo3 from '../composants/images/puma.png'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function Product() {
  const data = useSelector((state) => state.products);
  const btnRef = useRef();
  const [filter,setFilter] = useState()
  function FilterProduct(){
    setFilter(data.filter(d=>d.marque==="Nike").map(d=>d.marque))
  }
  /* function show_product(){
    document.getElementById('pro').style.display="block";
  }
  function remov_product(){
    document.getElementById('pro').style.display="none";
  } */
  return (
    <div className="container mt-3" id="nm">
      {/* <div id="pro" style={{display:"none"}}>
        <Product_d/>
      </div> */}
      <div className="btns-marque">
      <button className="btn btn-outline-dark" id="btn-mark-all" ref={btnRef} onClick={FilterProduct}> All </button>
        <button className="btn btn-outline-dark" id="btn-mark" ref={btnRef} onClick={FilterProduct}><img src={logo1} alt="" width="25px" /> Nike</button>
        <button className="btn btn-outline-dark" id="btn-mark" ref={btnRef} onClick={FilterProduct}><img src={logo2} alt="" width="25px" /> Adidas</button>
        <button className="btn btn-outline-dark" id="btn-mark" ref={btnRef} onClick={FilterProduct}><img src={logo3} alt="" width="25px" /> puma</button>
      </div>
      <h1 className="h1-hom-product mt-4">ALL Product</h1>
      <div className="container mt-3" id="container">
        {data.map((d) => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <img src={d.img} alt="" height="250px" id="product-images" />
              <div class="card-body">
                <h5 class="card-title">{d.title}</h5>
                <p class="card-text">Price : {d.price} $</p>
                <Link to={`/product_d/${d.id}`}>
                  <button /* onClick={show_product} */ class="btn btn-dark" id="ddd">
                    {/* <i class="fa-solid fa-basket-shopping"></i> */}
                    <img
                      src={icon2}
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
    </div>
  );
}
