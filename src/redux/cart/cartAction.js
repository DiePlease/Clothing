import CartActionTypes from "./cartActionTypes";

export const toggleCart = () => ({
  type: CartActionTypes.TOGLE_CART
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
