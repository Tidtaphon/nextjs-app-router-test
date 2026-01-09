"use client";

import React, { use, useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function Page({ params }: Props) {
  const { id } = use(params);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get<Product>(`/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return null;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <a
          href="/"
          className="flex justify-center items-center h-7.5 w-30 bg-blue-400"
        >
          Back To Home
        </a>
      </div>
      <div style={{ padding: 24 }}>
        <img src={product.image} alt={product.title} width={300} />
        <h1>{product.title}</h1>
        <p>Price: {product.price} บาท</p>
      </div>
    </>
  );
}
