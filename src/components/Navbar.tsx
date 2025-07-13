"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { isLoggedIn, logoutUser } from "@/utils/authHelpers";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
    setLoggedIn(isLoggedIn());
  }, []);

  function handleLogout() {
    logoutUser();
    setLoggedIn(false);
    alert("Logged out.");
    router.push("/homepage");
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#4b3c31] backdrop-blur-sm shadow-md transition">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/homepage"
          className="bg-[#4b3c31] text-white text-2xl font-extrabold tracking-wide hover:text-[var(--accent)] transition-colors"
        >
          GloreBD
        </Link>
        <div className="flex gap-4 md:gap-6 items-center">
          <Link
            href="/products"
            className="bg-[#4b3c31] text-white text-white px-3 py-2 rounded-md hover:bg-white hover:text-[var(--background)] transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="bg-[#4b3c31] text-white text-white px-3 py-2 rounded-md hover:bg-white hover:text-[var(--background)] transition-colors duration-200"
          >
            Cart ({cartCount})
          </Link>
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-[#4b3c31] text-white text-white px-3 py-2 rounded-md hover:bg-white hover:text-[var(--background)] transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/auth/login"
              className="text-white px-3 py-2 rounded-md hover:bg-white hover:text-[var(--background)] transition-colors duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
