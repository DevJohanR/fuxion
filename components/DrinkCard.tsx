"use client";
import Image from "next/image";
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa';

interface DrinkCardProps {
  src: string;
  alt: string;
  title: string;
  price: string;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ src, alt, title, price }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-6 flex flex-col items-center justify-center cursor-pointer m-4 transition-transform transform hover:scale-105">
      <Image src={src} alt={alt} width="400" height="400" className="rounded-lg"/>
      <h1 className="text-2xl font-bold text-red-600 mt-4">{title}</h1>
      <span className="text-xl font-bold text-gray-600 mt-2">{price}</span>
      <p className="text-center text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button className="bg-red-600 text-white py-2 px-4 rounded-full flex items-center">
          <FaShoppingCart className="mr-2"/> Comprar
        </button>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-500 flex items-center">
          <FaWhatsapp className="mr-2"/> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default DrinkCard;
