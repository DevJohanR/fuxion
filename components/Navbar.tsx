"use client"; // this is a client component johan
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    page: "inicio",
  },
  {
    label: "Catalogo",
    page: "catalogo",
  },
  {
    label: "Contacto",
    page: "contacto",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);

  return (
    <header className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow ${theme === 'dark' ? 'bg-stone-900 dark:border-b dark:border-stone-600' : 'bg-white'}`}>
      <div className="flex justify-between items-center h-12 md:h-16">
        <div className="flex items-center space-x-2">
          <Link to="home">
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Fuxion Bebidas</h2>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex md:space-x-6">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className={`block lg:inline-block ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-neutral-500`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
          <button
            className="md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`pb-3 mt-8 md:hidden ${navbar ? "block" : "hidden"} ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}
      >
        <div className="flex flex-col space-y-8 items-center">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className={`block ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-neutral-500`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
