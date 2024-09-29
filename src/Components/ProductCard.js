import React from "react";

const ProductCard = (props) => {
  const { name, imageurl, rating, review, id, price } = props;
  return (
    <>
      <div
        className="card mx-3 mb-3 p-3"
        style={{ width: "20rem" }}
        data-id={id}
      >
        <div
          className="d-flex flex-column justify-content-center"
        >
          <img
            src={require(`../${imageurl}`)}
            className="card-img-top"
            alt="..."
            style={{ padding: "20px" }}
          />
          <div className="container">
            <h5 className="card-title">{name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">$ {price}</li>
            <li className="list-group-item">Rating: {rating}</li>
            <li className="list-group-item">Reviews: {review}</li>
          </ul>
          <div className="d-flex flex-column justify-content-center">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
