import React from "react";

import style_f from "./FooterPage.module.css";
import bigstorlittleones from "../imges/bigstorlittleones.jpg";
import staricon from "../imges/staricon.jpg";
import hourse from "../imges/hourse.jpg";
import laugh from "../imges/laugh.jpg";
import recycle from "../imges/recycle.jpg";
import shiping from "../imges/shiping.jpg";
import frenchisestore from "../imges/frenchisestore.jpg";

import { AiFillFacebook } from "react-icons/ai";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const FooterPage = () => {
  return (
    <>
      <div className={style_f.mainContainer}>
        {/* <div className={style_f.top_whitediv}>
                
               </div> */}

        <div className={style_f.topF}>
          {/* icon div text */}
          <div className={style_f.icondiv}>
            <div className={style_f.icon_title}>
              <img src={staricon} alt="not found" />
              <span>
                2 Lakhs +
                <br />
                Unique Products
              </span>
            </div>
            <div className={style_f.icon_title}>
              <img src={hourse} alt="not found" />
              <span>5800 Brands</span>
            </div>
            <div className={style_f.icon_title}>
              <img src={laugh} alt="not found" />
              <span>
                7.5 Million
                <br />
                Registered Users
              </span>
            </div>
            <div className={style_f.icon_title}>
              <img src={recycle} alt="not found" />
              <span>
                Easy Return, Replacement
                <br />& Exchange Policy
              </span>
            </div>
            <div className={style_f.icon_title}>
              <img src={shiping} alt="not found" />
              <span>
                Free Shipping Available
                <br />
                above ₹ 699*
              </span>
            </div>
          </div>

          <div className={style_f.leftRightdivContainer}>
            <div className={style_f.left}>
              <div className={style_f.category1}>
                <span>CATEGORIES</span>
                <hr />
                <p>Clothing & Fashion</p>
                <p>Toys</p>
                <p>Books & CDs</p>
                <p>School Supplies</p>
                <p>Birthday Party Supplies</p>
                <p>Baby Diapering</p>
                <p>Feeding & Nursing</p>
                <p>Bath & Skin Care</p>
                <p>Health & Safety</p>
                <p>Baby Gear</p>
                <p>Nursery</p>
                <p>Moms & Maternity</p>
                <p>Gifts</p>
                <p>Preschool Admissions</p>

                <span>COMPANY INFO</span>
                <hr />

                <p>About Us</p>
                <p>Contact Us</p>
                <p>Brands</p>
                <p>F.A.Q.s</p>
                <p>FirstCry Stores & Playschool</p>
              </div>
              <div className={style_f.category2}>
                <span>FIRSTCRY PARENTING</span>
                <hr />

                <p>Getting Pregnant</p>
                <p>Pregnancy</p>
                <p>Baby</p>
                <p>Toddler</p>
                <p>Preschooler</p>
                <p>Big Kid</p>
                <p>Vaccination</p>
                <p>Growth Tracker</p>
                <p>Baby Names</p>
                <p>FirstCry Parenting YouTube</p>
                <p>Coloring Pages</p>
                <span>REGIONAL PARENTING</span>
                <hr />

                <p>FirstCry Hindi Parenting</p>
                <p>FirstCry Marathi Parenting</p>
                <p>FirstCry Bangla Parenting</p>
                <p>FirstCry Arabia Parenting</p>
                <p>FirstCry UAE Parenting</p>
              </div>
              <div className={style_f.category3}>
                <span>SHIPPING & POLICIES</span>
                <hr />
                <p>Payments</p>
                <p>Shipping Policy</p>
                <p>Return & Replacement Policy</p>
                <p>Cancellation Policy</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Next day & Same day delivery</p>
                <p>Responsible Disclosure</p>

                <span> PAYMENT METHOD</span>
                <hr />
                <p>Credit Cards</p>
                <p>Net Banking</p>
                <p>ATM & Debit Cards</p>
                <p>COD(Cash on Delivery)</p>
                <p>Easy EMI</p>

                <span> CONNECT WITH US</span>
                <hr />
                <div className={style_f.socialmediadiv}>
                  <AiFillFacebook />
                  <AiFillInstagram />
                  <AiFillTwitterSquare />
                  <BsYoutube />
                  <AiFillLinkedin />
                </div>
                <p>Testimonials</p>
                <p>SITEMAP</p>
                <p>LOYALTY CASH</p>
              </div>
              <div className={style_f.category4}>
                <span>OUR APPS</span>
                <hr />
                <p>FirstCry India: Shopping & Parenting</p>
                <p>FirstCry India: Shopping & Parenting iOS</p>

                <span>SHOP INTERNATIONAL</span>
                <hr />
                <p>FirstCry UAE</p>
                <p>FirstCry UAE: Shopping & Parenting</p>
                <p>FirstCry UAE: Shopping & Parenting iOS</p>
                <span>KIDS LEARNING & EDUCATIONAL APPS</span>
                <hr />
                <p>PlayBees: Kids Learning & Education App</p>
                <p>PlayBees: 123 Kids Numbers App</p>
                <p>PlayBees: ABC for Kids</p>
                <span>CAREER AT FIRSTCRY.COM</span>
                <hr />
                <p>Current Openings at FirstCry.com</p>
              </div>
            </div>
            <div className={style_f.right}>
              <img src={frenchisestore} alt="" />

              <img
                src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
