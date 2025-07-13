"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  images: { secure_url: string }[];
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the response to see if the products are returned
        setProducts(data.data);
      })
      .catch((err) => console.error(err));
  },
   []);

   function CountdownTimer({ minutes = 15 }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="text-5xl font-bold text-[#a97459] text-center my-6">
      {mins}:{secs}
    </div>
  );
}



  return (
    <main className="min-h-screen bg-[url('/bg9.jpeg')] text-[#3e2c1c]">
      <div className="absolute inset-0 bg-[#f8f1e4] bg-cover bg-center opacity-5"></div>
      <section className="relative flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-[#f8f1e4] bg-cover bg-center max-w-6xl mx-auto rounded-lg shadow-lg">
        <div className="absolute inset-0 bg-[#f8f1e4] bg-cover bg-center opacity-2"></div>
        <div className="space-y-4 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3e2c1c] leading-tight animate-sparkle">
            Find The Best Fashion Style For You
          </h1>
          <p className="text-lg text-[#3e2c1c] font-['Roboto', sans-serif]">
            Discover the latest trends and styles from GloreBD, designed for comfort and elegance.
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#3e2c1c] hover:bg-[#2a1d14] text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Shop Now
          </Link>
        </div>
        {/* Replace with your image */}
        <div className="overflow-hidden rounded-lg w-full sm:w-3/5 md:w-1/2 mt-8 md:mt-0">
          <img
            src="/twin.png"
            alt="Fashion"
            className="object-contain max-h-[400px] w-full transition-transform duration-300 transform hover:scale-150"
          />
        </div>
      </section>


      <section className="relative flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-[url('/bg9.jpeg')] bg-cover bg-center max-w-6xl mx-auto rounded-lg shadow-lg">
        {/* Background image with reduced opacity */}
        <div className="absolute inset-0 bg-[url('/bg1.jpeg')] bg-cover bg-center opacity-20"></div>

        <div className="space-y-6 md:w-full text-center md:text-center relative z-10">
          <h2 className="text-3xl font-semibold text-[#3e2c1c]">Why Choose Us?</h2>
          <p className="text-[#3e2c1c]">
            Discover why GloreBD is the best choice for your fashion needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
            {/* Quality Assurance */}
            <div className="bg-[#f9f7f0] p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 h-full flex flex-col items-center justify-between">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-[#a97459]"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-[#3e2c1c]">Quality Assurance</h3>
              <p className="text-sm text-[#6f4f37]">
                Our products are made with high-quality materials to ensure durability and comfort.
              </p>
            </div>

            {/* Fast Delivery */}
            <div className="bg-[#f9f7f0] p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 h-full flex flex-col items-center justify-between">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-[#a97459]"
                >
                  <path
                    fill="currentColor"
                    d="M10 5h4v14h-4zM6 5h2v14H6zM16 5h2v14h-2z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-[#3e2c1c]">Fast Delivery</h3>
              <p className="text-sm text-[#6f4f37]">
                We offer fast and reliable delivery to ensure your products arrive quickly.
              </p>
            </div>

            {/* Customer Support */}
            <div className="bg-[#f9f7f0] p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 h-full flex flex-col items-center justify-between">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-[#a97459]"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-12h-1v5h1V8zm0 7h-1v4h1v-4z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-[#3e2c1c]">Customer Support</h3>
              <p className="text-sm text-[#6f4f37]">
                We provide excellent customer support to assist you with all your inquiries.
              </p>
            </div>

            {/* Secure Payment */}
            <div className="bg-[#f9f7f0] p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 h-full flex flex-col items-center justify-between">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-[#a97459]"
                >
                  <path
                    fill="currentColor"
                    d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 2v10h16V7H4z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-[#3e2c1c]">Secure Payment</h3>
              <p className="text-sm text-[#6f4f37]">
                Your transactions are secure with our encrypted payment gateways.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* New Collection */}
      <section className="py-16 bg-[#f8f1e4]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Section - Grid of Boxes */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-[#3e2c1c] text-center md:text-left">New Collection</h2> {/* New Collection header */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { name: "Footwear", image: "/footwear.jpeg", quote: "Step into comfort with every pair." },
                { name: "Bags", image: "/bags.jpeg", quote: "Carry elegance everywhere you go." },
                { name: "Hair", image: "/hair.jpeg", quote: "Style your hair, define your look." },
                { name: "Jewelry", image: "/jwel.jpeg", quote: "Add a touch of sparkle to your life." }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-[#f9f7f0] rounded-lg p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300"
                >
                  <div className="w-full h-48 bg-gray-300 rounded-lg mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="font-medium text-[#3e2c1c] text-lg">{category.name}</p>
                  <p className="text-sm text-[#6f4f37] mt-2">{category.quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Inspirational Quotes */}
          <div className="w-full md:w-1/2 flex flex-col justify-start space-y-6 pl-8">
            <h2 className="text-3xl font-semibold text-[#3e2c1c]">Inspiration for Your Journey</h2>
            <div className="text-[#3e2c1c] text-lg font-medium">
              <p>Here’s what we believe at GloreBD:</p>
              <p className="mt-4 text-[#6f4f37]">
                Fashion is more than just clothes; it’s about expressing who you are.
              </p>
            </div>
            <ul className="list-disc pl-6 text-[#6f4f37] text-sm space-y-2">
              <li>"Style is a way to say who you are without having to speak."</li>
              <li>"Elegance is not about being noticed, it’s about being remembered."</li>
              <li>"Every piece of clothing tells a story – what’s yours?"</li>
              <li>"Confidence is the best accessory you can wear."</li>
              <li>"Invest in your wardrobe, invest in yourself."</li>
            </ul>

            {/* Video Below the Text */}
            {/* <div className="mt-8">
              <video autoPlay muted loop className="w-full h-auto rounded-lg shadow-lg">
                <source src="/vdodemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
          </div>
        </div>
      </section>




      {/* Best Seller Products */}
      <section className="py-16 bg-[#f8f1e4]">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-[#3e2c1c]">Best Seller Products</h2>
          <p className="text-xl text-[#3e2c1c]">Check out our top-selling products this season.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6">
            {products.slice(0, 6).map((product, index) => (
              <Link
                href={`/products/${product._id}`}
                key={product._id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl duration-300 opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 200}ms` }} // stagger animation for each product
              >
                {/* Product Tag */}
                <div className="absolute top-0 left-0 bg-[#a97459] text-white px-4 py-2 text-xs uppercase font-semibold rounded-tr-2xl rounded-bl-2xl">
                  Best Seller
                </div>

                {/* Product Image */}
                <img
                  src={product.images[0]?.secure_url}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-xl group-hover:scale-110 transition-all duration-300"
                />

                {/* Product Details */}
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-[#3e2c1c] group-hover:text-[#a97459] transition-colors duration-300">{product.name}</h3>
                  <p className="text-sm text-[#6f4f37]">{product.description}</p>
                  <p className="mt-2 font-bold text-[#a97459]">{product.price} BDT</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


 {/* Deal of the Day */}
<section className="py-16 bg-[url('/bg10.jpeg')] bg-cover bg-center text-center">
  <h3 className="text-2xl font-semibold text-[#3e2c1c]">Deal of the Day</h3>

  {/* Hover and Pop-up Animation on the Text */}
  <div className="text-lg text-[#6f4f37] mb-8 transition-all duration-300 transform hover:scale-110 hover:font-bold hover:tracking-wide hover:opacity-90">
    Hurry! This deal won't last long!
  </div>

  {/* Live Countdown Timer */}
  <CountdownTimer minutes={15} />

  <Link
    href="/products"
    className="mt-6 inline-block bg-[#3e2c1c] hover:bg-[#2a1d14] text-white px-6 py-3 rounded-full font-semibold transition duration-300"
  >
    Shop Now
  </Link>
</section>

      {/* Best Fashion Since 2023 Section */}
      <section className="py-16 bg-[#f8f1e4] bg-cover bg-center text-center">
        <div className="max-w-6xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-[#3e2c1c]">Best Fashion Since 2023</h2>
          <div className="text-lg text-[#3e2c1c]">
            Over 8900+ products sold with 3105+ best reviews! Join the trend today.
          </div>
          <div className="grid grid-cols-3 gap-8 mt-6">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#a97459]">2023</p>
              <p className="text-sm text-[#6f4f37]">Fashion Finished</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#a97459]">8900+</p>
              <p className="text-sm text-[#6f4f37]">Product Sold</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#a97459]">3105+</p>
              <p className="text-sm text-[#6f4f37]">Best Reviews</p>
            </div>
          </div>
        </div>
      </section>


{/* What People Say About Us Section */}
<section className="py-16 bg-[#f8f1e4] relative">
  <div className="absolute inset-0 bg-[url('/bg6.jpeg')] bg-cover bg-center opacity-15"></div>  {/* background image with opacity */}
  
  <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
    <h2 className="text-3xl font-semibold text-[#3e2c1c]">What People Say About Us</h2>
    <p className="text-[#3e2c1c]">Customer reviews and testimonials from happy shoppers.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {[
        { name: "Tanha", image: "/tanha.jpeg", testimonial: "“Amazing products! I love the quality.”" },
        { name: "Shimu", image: "/shimu.jpeg", testimonial: "“Great service and excellent quality!”" },
        { name: "Aysha", image: "/ayhsa.jpeg", testimonial: "“Fast delivery and very satisfied with my purchase.”" },
      ].map((customer) => (
        <div key={customer.name} className="bg-[#f8f1e4] p-6 rounded-lg shadow-md">
          <div className="w-32 h-32 mb-4 overflow-hidden rounded-full mx-auto">
            <img
              src={customer.image}
              alt={customer.name}
              className="w-full h-full object-cover" // Make image circular and cover the space
            />
          </div>
          <p className="text-lg font-medium text-[#3e2c1c]">{customer.name}</p>
          <p className="text-sm text-[#6f4f37]">{customer.testimonial}</p>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#3e2c1c] via-[#2f1b10] to-[#4b3c31] text-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name and Description */}
          <div className="space-y-4 md:space-y-0 md:w-1/3 text-center md:text-left">
            <div className="text-2xl font-bold">GloreBD</div>
            <p className="text-sm">Your go-to store for the best fashion styles and trends!</p>
          </div>

          {/* Footer Links */}
          <nav className="space-x-6 mb-6 md:mb-0 flex justify-center md:justify-start">
            <Link href="/" className="hover:text-[#a97459] transition duration-300">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#a97459] transition duration-300">Terms of Service</Link>
            <Link href="/" className="hover:text-[#a97459] transition duration-300">Contact</Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#a97459] transition duration-300">
              {/* Facebook SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path fill="currentColor" d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351c0 .73.595 1.325 1.325 1.325h11.495v-9.292h-3.12v-3.62h3.12v-2.67c0-3.09 1.815-4.799 4.57-4.799 1.345 0 2.656.097 2.999.141v3.496h-2.146c-1.684 0-2.1.816-2.1 1.94v2.536h4.2l-.542 3.62h-3.658v9.292h7.131c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#a97459] transition duration-300">
              {/* Instagram SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path fill="currentColor" d="M12 2.163c3.182 0 3.556.013 4.804.07 1.19.057 2.04.249 2.539.52.521.276.964.719 1.241 1.241.272.498.464 1.348.52 2.539.057 1.249.07 1.622.07 4.804s-.013 3.556-.07 4.804c-.057 1.19-.249 2.04-.52 2.539-.276.521-.719.964-1.241 1.241-.498.272-1.348.464-2.539.52-1.249.057-1.622.07-4.804.07s-3.556-.013-4.804-.07c-1.19-.057-2.04-.249-2.539-.52-.521-.276-.964-.719-1.241-1.241-.272-.498-.464-1.348-.52-2.539-.057-1.249-.07-1.622-.07-4.804s.013-3.556.07-4.804c.057-1.19.249-2.04.52-2.539.276-.521.719-.964 1.241-1.241.498-.272 1.348-.464 2.539-.52 1.249-.057 1.622-.07 4.804-.07zm0-2.163c-3.182 0-3.556.013-4.804.07-1.191.057-2.04.249-2.539.52-.521.276-.964.719-1.241 1.241-.272.498-.464 1.348-.52 2.539-.057 1.249-.07 1.622-.07 4.804s.013 3.556.07 4.804c.057 1.19.249 2.04.52 2.539.276.521.719.964 1.241 1.241.498.272 1.348.464 2.539.52 1.249.057 1.622.07 4.804.07s3.556-.013 4.804-.07c1.19-.057 2.04-.249 2.539-.52.521-.276.964-.719 1.241-1.241.272-.498.464-1.348.52-2.539.057-1.249.07-1.622.07-4.804s-.013-3.556-.07-4.804c-.057-1.19-.249-2.04-.52-2.539-.276-.521-.719-.964-1.241-1.241-.498-.272-1.348-.464-2.539-.52-1.249-.057-1.622-.07-4.804-.07z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#a97459] transition duration-300">
              {/* Twitter SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path fill="currentColor" d="M23.644 4.834c-.885.39-1.83.653-2.82.773 1.014-.607 1.794-1.566 2.163-2.724-.951.564-2.004.974-3.12 1.195-.897-.955-2.18-1.553-3.598-1.553-2.723 0-4.93 2.207-4.93 4.931 0 .39.044.765.12 1.125C7.692 8.826 4.1 7.213 2.09 5.066a4.93 4.93 0 0 0-.667 2.477c0 1.71.87 3.218 2.187 4.099-.807-.026-1.567-.247-2.229-.617v.062c0 2.394 1.701 4.392 3.946 4.843-.413.113-.85.175-1.291.175-.315 0-.622-.031-.924-.088.622 1.944 2.425 3.365 4.557 3.407-1.67 1.309-3.773 2.091-6.063 2.091-.393 0-.78-.023-1.16-.067 2.171 1.393 4.762 2.207 7.568 2.207 9.056 0 14.012-7.513 14.012-14.011 0-.21 0-.42-.015-.63.961-.695 1.79-1.563 2.44-2.549z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-8 text-center text-sm text-[#e0c1a1]">
          <p>&copy; 2023 GloreBD. All Rights Reserved.</p>
        </div>
      </footer>


    </main>
  );
}
