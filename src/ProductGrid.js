import React from "react";
import { RelatedProductImage } from "./RelatedProductImage";

export const ProductGrid = ({
  heading,
  cta1,
  p1Name,
  p1Img,
  p1Price,
  p2Name,
  p2Img,
  p2Price,
  p3Name,
  p3Img,
  p3Price,
  p4Name,
  p4Img,
  p4Price,
}) => (
  <section className="elc-related-product">
    <h2 className="elc-related-product__heading">{heading}</h2>
    <div className="elc-related-product__wrapper">
      <RelatedProductImage image={p1Img} />
    </div>
    <div>
      <h1 className="elc-related-product__name">{p1Name}</h1>
      <h4 className="elc-related-product__price">{p1Price}</h4>
      <button className="elc-related-product__btn">{cta1}</button>
    </div>
    <div className="elc-related-product__wrapper">
      <RelatedProductImage image={p2Img} />
    </div>
    <div>
      <h1 className="elc-related-product__name">{p2Name}</h1>
      <h4 className="elc-related-product__price">{p2Price}</h4>
      <button className="elc-related-product__btn">{cta1}</button>
    </div>
    <div className="elc-related-product__wrapper">
      <RelatedProductImage image={p3Img} />
    </div>
    <div>
      <h1 className="elc-related-product__name">{p3Name}</h1>
      <h4 className="elc-related-product__price">{p3Price}</h4>
      <button className="elc-related-product__btn">{cta1}</button>
    </div>
    <div className="elc-related-product__wrapper">
      <RelatedProductImage image={p4Img} />
    </div>
    <div>
      <h1 className="elc-related-product__name">{p4Name}</h1>
      <h4 className="elc-related-product__price">{p4Price}</h4>
      <button className="elc-related-product__btn">{cta1}</button>
    </div>
  </section>
);
