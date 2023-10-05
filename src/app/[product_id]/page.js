"use client";

import { BASE_URL } from "@/config/apiConfig";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { RadioGroup } from "@headlessui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const page = ({ params }) => {
  const [product, setproduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const getProductData = () => {
    axios
      .get(`${BASE_URL}public/product/${params.product_id}`)
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="container py-5 px-[5rem]">
      {product ? (
        <div className="grid grid-cols-2">
          <div className="py-5 px-[8rem]  w-full">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              showThumbs={false}
              showStatus={false}
            >
              {product.imageLinks.map((link) => (
                <div className="w-full">
                  <img src={link} alt={product.title} className="w-full" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="pt-5 w-full">
            <h3 className="text-4xl py-5">{product.title}</h3>
            <p className="text-4xl py-5">{product.price}</p>
            <p className="py-4">{product.description && product.description}</p>
            <p className="py-4">Material : {product.material}</p>
            <p className="py-4">Type : {product.type}</p>
            <p className="py-4">Category : {product.category}</p>
            <div className="py-5">
              <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-2 grid grid-cols-6 gap-5">
                  {product.size.map((plan) => (
                    <RadioGroup.Option
                      key={plan}
                      value={plan}
                      className={({ active, checked }) =>
                        `${
                          active
                            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                            : ""
                        }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? "text-purple" : "text-gray-900"
                                  }`}
                                >
                                  {plan == "EXTRA_SMALL"
                                    ? "XS"
                                    : plan == "SMALL"
                                    ? "S"
                                    : plan == "MEDIUM"
                                    ? "M"
                                    : plan == "LARGE"
                                    ? "L"
                                    : plan == "EXTRA_LARGE"
                                    ? "XL"
                                    : plan == "DOUBLE_EXTRA_LARGE"
                                    ? "XXL"
                                    : "OTHER"}
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <CheckIcon className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <button className="p-2 my-5 rounded-lg bg-purple w-full text-center text-white">
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      ) : (
        <h1>product not found</h1>
      )}
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default page;
