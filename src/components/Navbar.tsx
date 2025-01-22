"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { FiMenu } from "react-icons/fi";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
// import Image from "next/image";
import clsx from "clsx";
import { NAV_LINKS } from "@/constans";
import { BiPhone } from "react-icons/bi";
import Image from "next/image";
// import { Loader } from "lucide-react";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [givenPath, setGivenPath] = useState<string | null>(null);
  const pathname = usePathname();
  return (
    <div>
      <div className="flex justify-end bg-orange-600 text-white px-4 py-2">
        <Link
          href={`https://api.whatsapp.com/send/?phone=94774926917`}
          target="_blank"
        >
          <span className="flex items-center gap-2 border px-2 rounded text-white cursor-pointer ">
            <BiPhone className="bg-white rounded-full p-1 text-green-600" />{" "}
            +9470 42 38 939
          </span>
        </Link>
      </div>

      <nav className="flex justify-between px-8 items-center py-1 border-b z-100 ">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            <Link href={"/"} className="text-4xl font-mono">
              <Image
                src="/logo.png"
                width={300}
                height={130}
                className="w-[150px] h-[65px]"
                alt="logo"
              />
            </Link>
          </div>
          {NAV_LINKS.map((d, i) => (
            <Link
              key={i}
              className={
                pathname === d.link
                  ? "hidden lg:block  text-gray-800 hover:text-black focus:text-black "
                  : "hidden lg:block  text-gray-400 hover:text-black focus:text-black "
              }
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " z-10 fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <div className=" text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {NAV_LINKS.map((d, i) => (
              <Link
                key={i}
                className={`font-bold ${
                  pathname === d.link ? "text-black" : "text-gray-600"
                }`}
                href={d.link}
                onClick={() => {
                  setGivenPath(d.link);
                  setMenu(false);
                }}
              >
                {d.labe}
              </Link>
            ))}
          </div>
        </div>

        {/* last div */}
        <div className="flex items-center gap-4">
          <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start">
            <Link href={`/`} className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href={`/`} className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href={`/`} className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href={`/`} className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
          {givenPath !== null && pathname !== givenPath && (
            <div>
              {/* <div className="h-full w-full flex items-center justify-center">
                <Loader className="h-6 w-6 text-green-600 animate-spin" />
              </div> */}
            </div>
          )}
        </div>
      </nav>

      {pathname !== "/" && (
        <div className="container flex justify-end  py-1 uppercase">
          <span className="flex items-center gap-2 border px-2 rounded overflow-hidden">
            <Link href="/">HOME</Link>
            {pathname}
          </span>
        </div>
      )}
    </div>
  );
}
