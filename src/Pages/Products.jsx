import React from "react";
import { useState, useEffect } from "react";

import CardProduct from "../components/Fragments/CardProduct";
import TableCart from "../components/Fragments/TableCart";

// Hooks
import { getProducts } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const res = await getProducts();
      setProducts(res);
    };

    fecthData();
  }, []);

  return (
    <>
      <Navbar />

      <div id="content" className="flex flex-row justify-between py-6 mt-24">
        <div
          id="card-list"
          className="flex flex-wrap justify-center gap-3 basis-3/4"
        >
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>

        <div className="flex flex-col items-center justify-start mx-5 basis-1/4">
          <div
            id="cart"
            className="flex flex-col justify-center w-full p-6 rounded-md shadow"
          >
            <h1 className="mb-8 text-lg font-bold">🛒 Keranjang Belanja</h1>
            <TableCart products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
