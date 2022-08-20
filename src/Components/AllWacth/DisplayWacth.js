import React from 'react';
import Review from '../../Hooks/Review';



const DisplayWacth = (props) => {
  const { name, price, img, review } = props.watch;
  return (
    <div>
      <div class="container mx-auto card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className='h-[390px]' src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <h2 class="card-title">
            <Review></Review>
            <div class="">({review})</div>
          </h2>
          <p>
            <span className="inline-block"></span>
          </p>
          <div class="card-actions justify-center">
            <button class="btn btn-outline">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayWacth;