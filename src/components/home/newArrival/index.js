"use client";

import { useEffect, useState } from "react";
import NewReleaseCard from "@/components/home/cards/newReleaseCard";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import ItemCard from "../cards/itemCard";

const NewArrival = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      axios
        .get(`http://localhost:8080/api/v1/public/product/new`)
        .then((res) => {
          setproducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();
  }, []);

  return (
    <section className="container py-4 w-full">
      <h2 className="text-center p-8 text-xl md:text-3xl">New Arrivals</h2>
      <div className="w-full flex justify-center hidden p-4 sm:block">
        <Carousel
          itemsToShow={3}
          enableAutoPlay={true}
          autoPlaySpeed={6000}
          itemsToScroll={3}
        >
          {products.map((product) => (
            <ItemCard product={product} />
          ))}
          {/* {products.map((product) => (
            <NewReleaseCard key={product._id} product={product} />
          ))} */}
        </Carousel>
      </div>
      <div className="w-full flex justify-center block md:hidden">
        <Carousel
          itemsToShow={1}
          enableAutoPlay={true}
          autoPlaySpeed={6000}
          itemsToScroll={1}
        >
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-secondary-varient">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default NewArrival;
