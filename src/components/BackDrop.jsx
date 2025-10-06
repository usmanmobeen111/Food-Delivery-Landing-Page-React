import React from 'react'
import {
    FaAppleAlt,
  FaBeer,
  FaBirthdayCake,
  FaBone,
  FaCocktail,
  FaCoffee,
  FaGlassWhiskey,
  FaHamburger,
  FaPizzaSlice,
  FaUtensilSpoon,
} from "react-icons/fa";
import {
  FaArrowRight,
  FaBowlFood,
  FaBreadSlice,
  FaCandyCane,
  FaCheese,
  FaCookie,
  FaDrumstickBite,
  FaEgg,
  FaFish,
  FaHotdog,
  FaIceCream,
  FaLeaf,
  FaPepperHot,
  FaWineGlass,
} from "react-icons/fa6";

const BackDrop = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full min-h-[100dvh] -z-10 overflow-hidden pointer-events-none">
        <FaPizzaSlice className="absolute top-[10%] left-[15%] rotate-[25deg] scale-[1.1]" />
        <FaBone className="absolute top-[12%] left-[40%] rotate-[5deg] scale-[1]" />
        <FaHotdog className="absolute top-[15%] left-[80%] rotate-[40deg] scale-[1.05]" />
        <FaLeaf className="absolute top-[5%] left-[55%] rotate-[15deg] scale-[1.05]" />
        <FaBirthdayCake className="absolute top-[8%] left-[70%] rotate-[-18deg] scale-[0.95]" />
        <FaBreadSlice className="absolute top-[30%] left-[5%] rotate-[22deg] scale-[1]" />
        <FaUtensilSpoon className="absolute top-[25%] left-[35%] rotate-[15deg] scale-[0.85]" />
        <FaHamburger className="absolute top-[30%] left-[70%] rotate-[-15deg] scale-[0.95]" />

        <FaBowlFood className="absolute top-[35%] left-[75%] rotate-[12deg] scale-[1.15]" />

        <FaCoffee className="absolute top-[55%] left-[40%] rotate-[10deg] scale-[1.1]" />
        <FaEgg className="absolute top-[45%] left-[50%] rotate-[-5deg] scale-[0.95]" />
        <FaFish className="absolute top-[75%] left-[45%] rotate-[18deg] scale-[0.95]" />
        <FaCheese className="absolute top-[65%] left-[55%] rotate-[-15deg] scale-[0.95]" />
        <FaDrumstickBite className="absolute top-[60%] left-[78%] rotate-[35deg] scale-[1]" />

        <FaCookie className="absolute top-[50%] left-[10%] rotate-[-30deg] scale-[0.9]" />
        <FaCandyCane className="absolute top-[62%] left-[25%] rotate-[-12deg] scale-[1]" />
        <FaGlassWhiskey className="absolute top-[70%] left-[65%] rotate-[12deg] scale-[1.12]" />
        <FaBeer className="absolute top-[92%] left-[15%] rotate-[-10deg] scale-[0.85]" />
        <FaWineGlass className="absolute top-[35%] left-[60%] rotate-[12deg] scale-[1]" />


        <FaCocktail className="absolute top-[20%] left-[50%] rotate-[-25deg] scale-[1.05]" />
      <FaPepperHot className="absolute top-[40%] left-[85%] rotate-[-18deg] scale-[1]" />
      <FaAppleAlt className="absolute top-[88%] left-[60%] rotate-[-25deg] scale-[0.85]" />
      <FaIceCream className="absolute top-[80%] left-[80%] rotate-[8deg] scale-[1]" />
      </div>
    </div>
  )
}

export default BackDrop
