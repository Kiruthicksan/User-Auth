import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom"; 
import heroImg from "../assets/home-img.svg"

const HeroSection = () => {
  return (
    <>
    <Navbar />
    <section className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Jupiter
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Explore thousands of high-quality products or start your own digital storefront in minutes. Join trusted sellers worldwide on Jupiter — the smart way to buy and sell online.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Explore
              </Link>
              <Link
                to="/seller/onboard"
                className="px-8 py-3 text-lg font-semibold text-indigo-700 bg-indigo-50 rounded-xl hover:bg-indigo-100 focus:outline-none transition-all"
              >
                Become a Seller
              </Link>
            </div>
          </div>

          {/* Image / Illustration */}
          <div className="flex-1 flex justify-center">
            <img
              src= {heroImg} 
              alt="Jupiter Platform Dashboard"
              className="max-w-full h-auto lg:max-w-md xl:max-w-lg drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};


export default HeroSection;