"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: { name: string };
  images: { secure_url: string }[];
  video?: { secure_url: string };
  price: string;
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const json = await res.json();
        const found = json.data.find((p: Product) => p._id === id);
        setProduct(found);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ id: product?._id, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  }

  if (!product) {
    return <div className="p-4">Loading...</div>;
  }

  const imageUrl = product.images[0]?.secure_url || "";
  const videoUrl = product.video?.secure_url || "";

 return (
  <div className="container mx-auto p-4">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex items-start justify-center">
        {videoUrl ? (
          <video
            controls
            className="rounded-xl w-120 h-140 object-cover shadow"
            style={{ background: "#eee" }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={product.name}
            className="rounded-xl w-32 h-32 object-cover shadow"
          />
        )}
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="mb-2">{product.category.name}</p>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">{product.price} BDT</p>
        <button
          onClick={addToCart}
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
}
