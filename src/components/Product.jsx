import React from "react";

const Product = (props) => {
  const { img, name, seller, quantity, price, ratings } = props.product;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl w-[300px] h-[508px]">
        <figure>
          <img
            className='w-[286px] h-[286px] aspect-video'
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p >Price : {price}</p>
          <p>Manufaturer : {seller}</p>
          <p>Ratings : {ratings} star</p>
          <div className="card-actions justify-end ">
            <button className="btn bg-orange-200 hover:bg-orange-400 w-[100%] ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
