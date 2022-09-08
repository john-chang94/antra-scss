import React from "react";

import caret from "./images/caret.png";
import minus from "./images/minus.png";
import plus from "./images/plus.png";

export const ProductPurchase = ({ price }) => (
  <section className="elc-product-purchase">
    <div className="elc-product-purchase__container">
      <div className="elc-product-purchase__wrapper">
        <p>Quantity</p>
        <img src={minus} alt="Decrease Quantity" />
        <p>1</p>
        <img src={plus} alt="Increase Quantity" />
      </div>
      <div className="elc-product-purchase__wrapper">
        <p>One Time Purchase</p>
        <img src={caret} alt="Select Frequency" />
      </div>
    </div>
    <div className="elc-product-purchase__price">{price}</div>
    <button className="elc-product-purchase__btn" name="AddToBag">
      Add To Bag
    </button>
  </section>
);
