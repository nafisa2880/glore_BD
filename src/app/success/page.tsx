"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background fade-in">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Thank you for your order!</h1>
        <p className="mb-6 text-textPrimary">
          Your order has been placed successfully. You will receive a confirmation email soon.
        </p>
        <Link
          href="/homepage"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
