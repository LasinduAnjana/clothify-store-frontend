import { HOST_URL } from "@/config/apiConfig";
import Link from "next/link";
import React from "react";

const ItemCard = ({ product }) => {
  return (
    <Link href={HOST_URL + product.id}>
      <div
        key={product.id}
        className="relative grid grid-cols-2 md:grid-cols-1"
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 md:h-80 lg:h-96">
          <img
            src={product.imageLinks[0]}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <p className="text-sm font-medium text-secondary-varient">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
