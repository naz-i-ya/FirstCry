import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";


import style_nba from "./Navbar.module.css";
import { IoIosSearch } from "react-icons/io";


import { CgShoppingCart } from "react-icons/cg";
import { useNavigate } from "react-router-dom";



export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
     <div className={style_nba.container}>
        <div className={style_nba.left}>
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />

          <span className={style_nba.searchcontainer}>
            <input
              type="text"
              placeholder="Search for a Category , Brand or Product"
            />
            <IoIosSearch className={style_nba.searchicon} />
          </span>
        </div>

        <div className={style_nba.right}>
          <div className={style_nba.loginOther}>
            <Link to='/products' className={style_nba.links}>Products</Link>
            <span className={style_nba.lati}>|</span>
           
             <span >
              <p>
                Hello Guest,
                </p>
              </span>
            <span className={style_nba.links}><Link to='/login'>LogIn</Link></span>
          </div>
          <span className={style_nba.lati}>|</span>

          <div className={style_nba.cart}>
            <div className={style_nba.childcartdiv}>
              <h3>{totalQuantity}</h3>
              <CgShoppingCart
                className={style_nba.carticon}
                onClick={() => navigate("/cart")}
              />
            </div>
            <span>Cart</span>
          </div>
        </div>

{/* */}
      </div>
    </>
  );
}

   