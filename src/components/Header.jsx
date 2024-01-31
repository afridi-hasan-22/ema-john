import React from "react";

const Header = () => {
  return (
    <div className="bg-[#1C2B35] ">
      <div className="w-[88%] mx-auto">
        <div className="w-full flex justify-between items-center py-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-white">Ema-John</h1>
            <img className="" src="../../public/amazon (1).png" alt="" />
          </div>
          <div>
            <ul className="flex space-x-6 text-white font-semibold">
              <li>Order</li>
              <li>Order Review</li>
              <li>Manage Inventory</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
