import { useEffect, useState } from "react";
import "./App.css";
import CenterImage from "./Components/CenterImage";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = async () => {
      const productsPromise = await fetch(
        "https://officialsubham.github.io/e-commerce-backend/products.js"
      );

      const products = await productsPromise.json();
      setProducts(products);
    };
    data();
  }, []);
  return (
    <>
      <Navbar />
      <CenterImage />
      <div className="container">
        <div className="row row-cols-auto">
          {products.map((productsData) => {
            return (
              <ProductCard
                name={productsData.name}
                rating={productsData.rating.stars}
                imageurl={productsData.image}
                price={productsData.priceCents}
                key={productsData.id}
                id={productsData.id}
                review={productsData.rating.count}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
