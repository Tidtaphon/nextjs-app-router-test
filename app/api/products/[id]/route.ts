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

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
