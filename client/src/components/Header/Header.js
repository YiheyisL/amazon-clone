import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon log"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>{<SlLocationPin />}</span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            {<BsSearch size={25} />}
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/800px-Flag_of_the_United_Arab_Emirates.svg.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>
            {/* three components */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              {<BiCart size={35} />}
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
