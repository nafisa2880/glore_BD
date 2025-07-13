"use client";

import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  images: { secure_url: string }[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="bg-black rounded-xl shadow-md p-4 transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] flex flex-col"
    >
      <img
        src={product.images[0]?.secure_url}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h2 className="font-semibold text-lg mb-1 text-primary">{product.name}</h2>
      <p className="text-gray-600 flex-grow">{product.description}</p>
      <p className="mt-3 font-bold text-accent text-lg">{product.price} BDT</p>
    </Link>
  );
}
