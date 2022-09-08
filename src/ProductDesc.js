import React from 'react';

import caret from './images/caret.svg';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section className="elc-product-desc">
    <h2 className="elc-product-desc__title">{name}</h2>
    <p className="elc-product-desc__subtitle">{description}</p>
    <figure className='elc-product-images'>
      <img src={rating} alt="Product Rating" />
      <img src={caret} alt="View All Ratings" />
    </figure>
    <section className="elc-features">
      <div>
        <h4 className='elc-features__label'>Benefits</h4>
        <p className='elc-features__desc'>{features.benefits}</p>
      </div>
      <div>
        <h4 className='elc-features__label'>Finish</h4>
        <p className='elc-features__desc'>{features.finish}</p>
      </div>
      <div>
        <h4 className='elc-features__label'>Coverage</h4>
        <p className='elc-features__desc'>{features.coverage}</p>
      </div>
      <div>
        <h4 className='elc-features__label'>Key Ingredients</h4>
        <p className='elc-features__desc'>
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className='elc-shade'>
      <span className='elc-shade__name'>{shade.name}</span>
      <div className='elc-shade__color'></div>
    </section>
  </section>
);
