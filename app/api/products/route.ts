import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    image: "https://picsum.photos/seed/100/300/300",
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    image: "https://picsum.photos/seed/101/300/300",
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    image: "https://picsum.photos/seed/102/300/300",
  },
  {
    id: 4,
    title: "Product 4",
    price: 400,
    image: "https://picsum.photos/seed/103/300/300",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
