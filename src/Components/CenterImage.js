import React, { useState, useContext } from "react";
import ProductContext from "../Context/ProductContext/ProductContext";

const ImageCarousel = () => {
  const { currentImage } = useContext(ProductContext);
  let [displayedImage, setDisplayedImage] = useState(0);

  const handleNext = () => {
    if (displayedImage <= 2) {
      setDisplayedImage(displayedImage++);
    } else {
      setDisplayedImage(0);
    }
  };
  const handlePrevious = () => {
    if (displayedImage >= 0) {
      setDisplayedImage(displayedImage--);
    } else {
      setDisplayedImage(2);
    }
  };

  // useEffect(() => {
  //   setcurrentProducts(products)
  // }, [products])

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="relative mb-6 rounded-md"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators
        >
          <button
            type="button"
            data-twe-target="#carouselExampleCaptions"
            data-twe-slide-to="0"
            data-twe-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-gray-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
            onClick={() => {
              setDisplayedImage(0);
            }}
          ></button>
          <button
            type="button"
            data-twe-target="#carouselExampleCaptions"
            data-twe-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-gray-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
            onClick={() => {
              setDisplayedImage(1);
            }}
          ></button>
          <button
            type="button"
            data-twe-target="#carouselExampleCaptions"
            data-twe-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-gray-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
            onClick={() => {
              setDisplayedImage(2);
            }}
          ></button>
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-active
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={require(`../${currentImage[displayedImage]}`)}
              className="block w-full"
              style={{ height: "450px", objectFit: "contain" }}
              alt="..."
            />
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={require(`../${currentImage[displayedImage]}`)}
              style={{ height: "450px", objectFit: "contain" }}
              className="block w-full"
              alt="..."
            />
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={require(`../${currentImage[displayedImage]}`)}
              style={{ height: "450px", objectFit: "contain" }}
              className="block w-full"
              alt="..."
            />
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center  opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide="prev"
          onClick={handlePrevious}
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center  opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]  hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide="next"
          onClick={handleNext}
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
