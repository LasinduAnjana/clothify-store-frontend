"use client";

import { BASE_URL } from "@/config/apiConfig";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const page = ({ params }) => {
  const [product, setproduct] = useState(null);

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
            <div className="grid grid-cols-6 gap-5 pt-5">
                <div className="w-full border-2 rounded-md border-solid border-slate-600 text-center p-1">XS</div>
                <div className="w-full border-2 rounded-md border-solid border-slate-600 text-center p-1">S</div>
                <div className="w-full border-2 rounded-md border-solid border-slate-600 text-center p-1">M</div>
                <div className="w-full border-2 rounded-md border-solid border-slate-600 text-center p-1">L</div>
                <div className="w-full border-2 rounded-md border-solid border-slate-600 text-center p-1">XL</div>
                <div className="w-full border-2 rounded-md border-solid border-slate-600 text-center p-1">XXL</div>
            </div>
            <div className="p-2 my-5 rounded-lg bg-purple w-full text-center text-white">
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>product not found</h1>
      )}
    </div>
  );
};

export default page;
