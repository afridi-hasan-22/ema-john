import React, { useEffect, useState } from "react";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    fetch('../../public/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className="shop-container w-full grid grid-cols-4 ">
      <div className="products-container col-span-3 mx-auto m-[50px] grid grid-cols-3 gap-7 items-center">
        {
          products.map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
      <div className="cart-container">
        <h1 className="text-3xl bg-orange-200 h-[100vh] fixed top-15 right-0">Order Summury</h1>
      </div>
    </div>
  );
};

export default Shop;
