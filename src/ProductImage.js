import React from "react";

export const ProductImage = ({ image }) => (
  <figure>
    <img className="elc-main-product__img" src={image} alt="Product" />
  </figure>
);
