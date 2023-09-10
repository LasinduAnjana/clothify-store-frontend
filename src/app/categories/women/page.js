"use client"

import { useState, useEffect } from "react";
import axios from "axios";

const WomenScreen = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      axios
        .get(
          "http://localhost:8080/api/v1/public/product/filter-by-category?category=LADIES"
        )
        .then((res) => {
          console.log(res.data);
          setproducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();
  }, []);
  return (
    <div className="container p-4">
      <div>
        <h2 className="text-3xl text-center p-8 bg-silver text-purple my-8">
          LADIES
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
              <img
                src={product.imageLinks[0]}
                alt={product.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.material}</p>
              </div>
              <p className="text-sm font-medium text-secondary-varient">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
