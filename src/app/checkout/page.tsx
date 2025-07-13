"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/utils/authHelpers";
import Link from "next/link";


interface Product {
  _id: string;
  name: string;
  price: string;
}

export default function CheckoutPage() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (!isLoggedIn()) {
      alert("Please log in to proceed to checkout.");
      router.push("/auth/login");
      return;
    }

    async function fetchCartProducts() {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const json = await res.json();
        const allProducts: Product[] = json.data;
        const filtered = allProducts.filter((p) =>
          cart.some((c: { id: string }) => c.id === p._id)
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCartProducts();
  }, [router]);

  const total = products.reduce((acc, p) => acc + Number(p.price), 0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields");
      return;
    }
    // Simulate payment and order completion
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    router.push("/success");
  }

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (products.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="mb-4">Your cart is empty.</p>
        <Link href="/products" className="text-accent hover:underline">
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-xl fade-in">
      <h1 className="text-4xl font-bold mb-6 text-primary">Checkout</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-xl">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
          rows={4}
          required
        />
        <p className="text-xl font-semibold">Total: {total} BDT</p>
        <button
          type="submit"
          className="bg-primary text-white py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
