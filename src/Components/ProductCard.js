import React from "react";

const ProductCard = (props) => {
  const { name, imageurl, rating, review, id, price } = props;
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 grid grid-cols-1 grid-rows-1">
        <a href="/" className="flex items-center">
          <img className="p-8 rounded-t-lg" src={require(`../${imageurl}`)} />
        </a>
        <div className="px-5 pb-5 grid grid-cols-1 grid-rows-auto gap-y-2">
          <div>
            <a href="/">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                {name}
              </h5>
            </a>
          </div>

          <div className="flex items-center mt-1 mb-2">
            Rating:
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {rating}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${(price / 100).toFixed(2)}
            </span>
            <a
              href="/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
