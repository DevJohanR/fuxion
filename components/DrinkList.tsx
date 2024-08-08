"use client";
import DrinkCard from "./DrinkCard";

const DrinkList = () => {
  const products = [
    { src: "/img/combo1.png", alt: "Prunex Pack", title: "Prunex Pack", price: "$19.90" },
    { src: "/img/combo2.png", alt: "Prunex", title: "Prunex", price: "$18.90" },
  ];

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center">Lorem Lorem Título</h1>
      <p className="text-lg text-gray-700 mb-8 text-center md:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-full flex flex-wrap items-center justify-center">
        {products.map((product, index) => (
          <DrinkCard
            key={index}
            src={product.src}
            alt={product.alt}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default DrinkList;
