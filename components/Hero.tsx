"use client"; // this is a client component
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaQuestionCircle } from "react-icons/fa";
import YouTube from "react-youtube";
import * as Dialog from "@radix-ui/react-dialog";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: "/img/fondohero.jpg",
      title: "PROTEGE TU SALUD",
      subtitle: "BEBIDAS INMUNOLOGICAS",
      description: "Refuerza tus defensas de manera natural.",
    },
    {
      image: "/img/fondohero2.jpg",
      title: "CUERPO FUERTE",
      subtitle: "BEBIDAS PROTEICAS",
      description: "Aumenta tu energía y rendimiento.",
    },
    {
      image: "/img/fondohero3.jpg",
      title: "MENTE TRANQUILA",
      subtitle: "BEBIDAS RELAJANTES",
      description: "Encuentra la calma y el bienestar.",
    },
  ];

  const handleArrow = (direction: 'l' | 'r') => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : slides.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== slides.length - 1 ? index + 1 : 0);
    }
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url('${slides[index].image}')` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 z-10"></div>
      <div className="absolute z-30 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{slides[index].title}</h1>
        <h2 className="text-3xl md:text-5xl mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{slides[index].subtitle}</h2>
        <p className="text-xl md:text-2xl mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{slides[index].description}</p>
        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">PEDIR YA!</button>
        <div className="flex flex-col items-center mt-6 cursor-pointer">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="animate-vibrate flex flex-col items-center">
                <FaQuestionCircle className="text-4xl text-white mb-2 drop-shadow-lg" />
                <h4 className="text-2xl text-green-600 font-extrabold drop-shadow-lg">Preguntas Frecuentes</h4>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 z-40" />
              <Dialog.Content className="bg-white p-4 rounded-lg shadow-xl relative z-50 mx-auto my-auto max-w-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Dialog.Close className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2">X</Dialog.Close>
                <YouTube videoId="M7lc1UVf-VE" opts={opts} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 cursor-pointer" onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="Left Arrow" width={50} height={50} />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 cursor-pointer" onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" alt="Right Arrow" width={50} height={50} />
      </div>
    </div>
  );
};

export default Hero;
