import React from "react";
import { menuItems } from "../utils/menuData";
import { FaUtensils } from "react-icons/fa6";

const Menu = () => {
  return (
    <section id="menu" className="min-h-screen px-6 py-16 bg-accent-dark text-neutral">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-roboto relative flex items-center justify-center gap-3">
          <FaUtensils className="text-secondary text-5xl" />
          Our <span className="text-primary">
            Delicious Menu
          </span>
        </h2>
        <p className="mt-3 text-lg max-w-2xl mx-auto text-neutral/80">
          Savor the flavors crafted with passion and precision. Each dish tells
          a story — one that begins in our kitchen and ends in your heart.
        </p>
      </div>

      {/* Menu Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="
              bg-white text-dark rounded-2xl shadow-md overflow-hidden
              hover:shadow-xl hover:scale-[1.03]
              transition-all duration-300 group
              w-[85%] sm:w-[70%] md:w-[45%] lg:w-[25%]
            "
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <span className="absolute top-3 right-3 bg-primary text-white text-sm px-3 py-1 rounded-full font-semibold">
                {item.category}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5 text-left">
              <h3 className="text-xl font-bold text-secondary mb-2 font-poppins">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">
                  ${item.price}
                </span>
                <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
