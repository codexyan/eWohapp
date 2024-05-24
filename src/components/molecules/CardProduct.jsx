import React from "react";
import Button from "../atoms/Button/Button";
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

export default function CardProduct(props) {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between max-w-xs p-5 border border-gray-200 rounded-lg shadow cards">
      {children}
    </div>
  );
}

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="balok"
        className="object-cover w-full rounded h-96"
      />
    </Link>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div id="body" className="flex flex-col h-full gap-3 my-4">
      <p className="text-xl font-bold text-slate-700">
        {name.substring(0, 30)}
      </p>
      <p className="text-sm text-slate-500">
        {children.substring(0, 180)} ...{" "}
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center justify-between detail">
      <p className="text-xl font-bold text-green-700">
        $.{" "}
        {price.toLocaleString("en-US", { styles: "currency", currency: "USD" })}
      </p>
      <Button
        classname="bg-green-700 "
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
