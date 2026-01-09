"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get<Product[]>("/api/products");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
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
      <div
        className=""
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          padding: "16px",
        }}
      >
        {products.map((p: any, idx: number) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </>
  );
}
