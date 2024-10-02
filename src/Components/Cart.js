import React, { useContext, useState, useEffect } from "react";
import ProductContext from "../Context/ProductContext/ProductContext";
import EachCartProduct from "./EachCartProduct";

const Cart = () => {
  const { cartItems, totalAmount } = useContext(ProductContext);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  useEffect(() => {
   if(totalAmount <= 1000 && totalAmount > 0){
    setDeliveryCharge(100)
   }
   else if(totalAmount <= 2000 && totalAmount > 1000) {
    setDeliveryCharge(50)
   }
   else if(totalAmount > 2000) {
    setDeliveryCharge(0)
   }
  }, [totalAmount]);
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Your Shopping Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">
              Delivery Charge
            </span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>

        {cartItems[0] &&
          cartItems.map((item) => {
            return <EachCartProduct key={item.id} productDetails={item} />;
          })}

        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Sub Total
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${totalAmount}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Delivery Charge
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${deliveryCharge}.00
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
              Total
            </p>
            <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
              ${(Number(totalAmount) + deliveryCharge).toFixed(2)}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
