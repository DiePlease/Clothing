import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.style.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-item"></div>
    <CustomButton>GO TO CHECK OUT</CustomButton>
  </div>
);

export default CartDropdown;
