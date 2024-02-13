import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon1 from "../composants/images/panier (2).png";
import logo1 from "../composants/images/nike.png";
import logo4 from "../composants/images/coeur.png";
import logo2 from "../composants/images/adidas.png";
import logo3 from "../composants/images/puma.png";
import { useState } from "react";
function Header() {
  /* const [number,setNumber] = useState() */
  const data = useSelector((state) => state.orders);
  const data2 = useSelector((state) => state.Like);
  /* if(data.length>0){
    setNumber(data.length)
  }
  else{
    setNumber(null)
  } */
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light-black mt-3 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4>
              <span id="brand">
                <span id="casa">Casa</span>
                <span id="shop">Shop</span>
              </span>
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "150px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Products
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      id="li-navlink"
                    >
                      <img src={logo1} alt="" width="25px" /> Nike
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      id="li-navlink"
                    >
                      <img src={logo2} alt="" width="25px" /> Adidas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      id="li-navlink"
                    >
                      <img src={logo3} alt="" width="25px" /> puma
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/About">
                  About-us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact-us
                </Link>
              </li>
            </ul>
            <div className="cart-like">
              <Link to="/Orders">
                <button className="btn btn-dark" id="Cart">
                  <img src={icon1} alt="" width="23px" />{" "}
                  {/* <i class="fa-solid fa-basket-shopping"></i> */}
                  <span id="number">{data.length}</span>
                </button>
              </Link>
              <Link to="/like">
                <button className="btn btn-dark" id="like">
                  <span id="number">{data2.length}</span> <img src={logo4} alt="" width="23px" />{" "}
                  {/* <i class="fa-solid fa-basket-shopping"></i> */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
