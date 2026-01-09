import React from "react";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  return (
    <a href={`/product/${id}`}>
      <div style={{ border: "1px solid #ddd", padding: 12, cursor: "pointer" }}>
        <img src={image} alt={title} className="w-full" />
        <h3>{title}</h3>
        <p>{price} บาท</p>
      </div>
    </a>
  );
}
