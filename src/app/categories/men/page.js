"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "@/components/home/cards/itemCard";

const MenScreen = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      axios
        .get(
          "http://localhost:8080/api/v1/public/product/filter-by-category?category=GENTS"
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
          GENTS
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ItemCard product={product}/>
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
