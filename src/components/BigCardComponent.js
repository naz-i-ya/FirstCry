import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import style_c from "./BigCardComponent.module.css";

const BigCardComponent = () => {
  const [categoryData, setCategoryData] = useState([]);
  // const navigate = useNavigate();

  return (
    <>
      <div className={style_c.container}>
        <div>
          <h1 className={style_c.premimu}>PREMIUM BOUTIQUES</h1>
        </div>
        <div className={style_c.CardContainer}>
          {categoryData.map((ele, index) => {
            return (
              <div
                className={style_c.Bigcard}
                key={index}
              >
                <img src={ele.img} className={style_c.img} alt="" />

                <div className={style_c.titldiv}>
                  <p className={style_c.title}>{ele.title}</p>
                  <p className={style_c.ctegory_type}>{ele.ctegory_type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BigCardComponent;
