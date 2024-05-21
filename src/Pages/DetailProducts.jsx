import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

export default function DetailProductsPages() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getDetailProduct(id);
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  console.log(product);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {Object.keys(product).length > 0 && (
        <div className="flex max-w-4xl p-8 font-sans rounded-md shadow-xl">
          <div className="relative flex-none w-48">
            <img src={product.image} alt={product.title} />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {product.title}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                ${product.price}
              </div>
              <div className="flex-none w-full mt-2 text-sm font-medium text-slate-700">
                {product.rating.rate}/5 from {product.rating.count} reviews
              </div>
              <div className="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">
                <div className="flex space-x-2 text-sm">
                  {product.description}
                </div>
              </div>
            </div>
            <div className="flex mb-6 space-x-4 text-sm font-medium">
              <div className="flex flex-auto space-x-4">
                <button
                  className="h-10 px-6 font-semibold text-white bg-black rounded-md"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-6 font-semibold border rounded-md border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
              <button
                className="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
