import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative bg-gray-900 text-gray-300">
      <div className="absolute inset-0 w-full h-full">
        <Image src="/img/fondohero.jpg" layout="fill" objectFit="cover" alt="Background Image" className="opacity-70" />
      </div>
      <div className="relative flex flex-col md:flex-row bg-opacity-90 bg-black">
        <div className="flex flex-col md:flex-row flex-grow p-10 md:p-20 space-y-10 md:space-y-0 md:space-x-10">
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-semibold text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              imperdiet, nulla eu auctor egestas, nisl nisl vestibulum lorem, eu
              dictum lorem est at erat.
            </h2>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl text-green-500 mb-4">LOREM IPSUM DOLOR SIT</h1>
            <p className="mb-2">
              1234 Lorem St #567.
              <br />
              Ipsum City, 12345
              <br />
              (123) 456-7890
            </p>
            <p className="mb-2">
              2345 Dolor Ave #890.
              <br />
              Sit City, 67890
              <br />
              (234) 567-8901
            </p>
            <p className="mb-2">
              3456 Amet Blvd #234.
              <br />
              Consectetur, 11223
              <br />
              (345) 678-9012
            </p>
            <p className="mb-2">
              4567 Adipiscing Rd #345.
              <br />
              Elit City, 33445
              <br />
              (456) 789-0123
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl text-green-500 mb-4">LOREM IPSUM HOURS</h1>
            <p className="mb-2">
              MONDAY - FRIDAY
              <br />
              9:00 AM – 10:00 PM
            </p>
            <p>
              SATURDAY - SUNDAY
              <br />
              10:00 AM – 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
