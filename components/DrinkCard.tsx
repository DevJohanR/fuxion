"use client"; // this is a client component
import Image from "next/image";

const DrinkCard = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 flex flex-col items-center justify-center cursor-pointer m-2 transition-transform transform hover:scale-105">
      <Image src="/img/pizza.png" alt="Drink Image" width="500" height="500" className="rounded-lg"/>
      <h1 className="text-lg font-bold text-red-600 mt-4">Lorem rier Lorem wer</h1>
      <span className="text-lg font-bold text-gray-600">$19.90</span>
      <p className="text-center text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default DrinkCard;
