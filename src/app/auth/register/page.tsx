"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/authHelpers";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields.");
      return;
    }
    registerUser(form.name, form.email, form.password);
    alert("Registration successful!");
    router.push("login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="bg-black p-6 rounded-xl shadow-xl max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-accent hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
