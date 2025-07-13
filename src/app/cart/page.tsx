"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CartItem {
  id: string;
  quantity: number;
}

interface Product {
  _id: string;
  name: string;
  price: string;
  images: { secure_url: string }[];
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    async function fetchProducts() {
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const json = await res.json();
        // Filter products in cart
        const filtered = json.data.filter((p: Product) => storedCart.some((c) => c.id === p._id));
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function removeFromCart(id: string) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setProducts(products.filter((p) => p._id !== id));
  }

  const total = products.reduce((acc, p) => {
    const item = cart.find((c) => c.id === p._id);
    return acc + Number(p.price) * (item?.quantity || 1);
  }, 0);

  if (loading) return <div className="p-6 text-center">Loading cart...</div>;

  if (products.length === 0)
    return (
      <div className="p-6 text-center">
        <p>Your cart is empty.</p>
        <Link href="/products" className="text-accent hover:underline mt-4 inline-block">
          Shop Products
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto p-6 fade-in max-w-xl">
      <h1 className="text-4xl font-bold mb-6 text-primary">Your Cart</h1>
      <ul className="flex flex-col gap-6">
        {products.map((product) => {
          const quantity = cart.find((c) => c.id === product._id)?.quantity || 1;
          return (
            <li
              key={product._id}
              className="flex gap-4 bg-brown rounded-xl shadow-md p-4 items-center"
            >
              <img
                src={product.images[0]?.secure_url}
                alt={product.name}
                className="h-20 w-20 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-primary">{product.name}</h2>
                <p className="text-accent font-bold">{product.price} BDT</p>
                <p>Quantity: {quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <p className="text-right text-xl font-bold mt-6">Total: {total} BDT</p>
      <Link
        href="/checkout"
        className="block mt-6 bg-black text-white text-center py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
