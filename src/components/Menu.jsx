import React from "react";
import { menuItems } from "../utils/menuData";
import { FaUtensils } from "react-icons/fa6";

const Menu = () => {
  return (
    <section className="min-h-screen bg-accent-dark text-neutral px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-poppins font-bold text-primary flex items-center justify-center gap-3">
          <FaUtensils className="text-secondary text-5xl" />
          Our Delicious Menu
        </h2>
        <p className="text-neutral/80 mt-3 text-lg max-w-2xl mx-auto">
          Savor the flavors crafted with passion and precision. Each dish tells
          a story — one that begins in our kitchen and ends in your heart.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-accent rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group"
          >
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

            <div className="p-5 text-left">
              <h3 className="text-xl font-bold text-secondary mb-2 font-poppins">
                {item.name}
              </h3>
              <p className="text-neutral/70 text-sm mb-4 leading-relaxed">
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
