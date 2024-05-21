import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
      totalPriceRef.current.value = totalPrice;
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <table className="text-left border-separate table-auto border-spacing-x-5">
        <thead>
          <tr className="font-medium">
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );

              return (
                <tr key={item.id} className="text-sm">
                  <td>
                    {product
                      ? product.title.substring(0, 10)
                      : "Product Not Found"}
                  </td>
                  <td>
                    $.{" "}
                    {product
                      ? product.price.toLocaleString("en-US", {
                          styles: "currency",
                          currency: "USD",
                        })
                      : "Price Not Found"}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    $.{" "}
                    {(item.qty * product.price).toLocaleString("en-US", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              );
            })}
          <tr ref={totalPriceRef}>
            <td colSpan={3} className="font-bold text-left">
              Total Price
            </td>
            <td className="font-bold">
              $.{" "}
              {totalPrice.toLocaleString("en-US", {
                styles: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableCart;
