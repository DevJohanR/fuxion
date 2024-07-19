"use client"; // this is a client component
import DrinkCard from "./DrinkCard";

const DrinkList = () => {
  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-5 text-center">Lorem Lorem Título</h1>
      <p className="text-lg text-gray-700 mb-5 text-center md:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-full flex flex-wrap items-center justify-center">
        {Array(8).fill(0).map((_, index) => (
          <DrinkCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default DrinkList;
