"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const KidsScreen = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      axios
        .get(
          "http://localhost:8080/api/v1/public/product/filter-by-category?category=KIDS"
        )
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
    <div className="container p-4">
      <div>
        <h2 className="text-3xl text-center p-8 bg-silver text-purple my-8">
          KIDS
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ItemCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsScreen;
