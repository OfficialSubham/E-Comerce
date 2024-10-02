import { useContext, useEffect } from "react";
import "./App.css";
import CenterImage from "./Components/CenterImage";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import ProductContext from "./Context/ProductContext/ProductContext";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {
  const { products, setProducts, currentImage, setCurrentImage } =
    useContext(ProductContext);
  useEffect(() => {
    const data = async () => {
      const productsPromise = await fetch(
        "https://officialsubham.github.io/e-commerce-backend/products.js"
      );
      const products = await productsPromise.json();
      setProducts(products);
      let tempArray = [];
      for (let i = 0; i < 5; i++) {
        let randomNum = Math.round(Math.random() * 11);
        tempArray.push(products[randomNum].image);
      }
      setCurrentImage(tempArray);
    };
    data();
  }, []);
  // console.log(images);
  return (
    <>
      <Router basename="/E-Commerce">
        <Navbar />
        <Routes>
          <Route
            path="/E-Commerce"
            element={
              <>
                {currentImage[1] && <CenterImage products={products} />}

                <div className="grid  grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-5 p-16">
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
              </>
            }
          />
          <Route path="/E-Commerce/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
