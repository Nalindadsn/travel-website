import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constans";
import Link from "next/link";
import React from "react";
import FooterItem from "./FooterItem";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center border-t  mt-5 bg-gray-800">
        <div className="container flex w-full flex-col gap-16 px-3">
          <div className="md:flex md:justify-between w-full ">
            <div
              className="flex flex-col items-start mt-10 justify-center
            gap-20 md:flex-row"
            >
              <div className="flex flex-wrap justify-between gap-6 md:flex-1">
                {FOOTER_LINKS.map((columns) => (
                  <FooterItem key={columns.title} title={columns.title}>
                    {columns.links.map((link) => (
                      <Link href="/" key={link}>
                        {link}
                      </Link>
                    ))}
                  </FooterItem>
                ))}
              </div>

              <div className="flex flex-wrap justify-end gap-5 md:flex-1">
                <FooterItem title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      href="/"
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p>{link.label}</p>
                      <p>{link.value}</p>
                    </Link>
                  ))}
                </FooterItem>
              </div>
            </div>
            <div className="flex items-center justify-center text-center text-5xl ">
              <div>
                <Link
                  href="/"
                  className="flex mt-1 title-font font-medium items-center md:justify-start justify-center text-gray-900"
                >
                  {/* <Link href={"/"} className="text-4xl font-mono"> */}
                  <Image
                    src="/logo.png"
                    width={300}
                    height={130}
                    className="w-[150px] h-[65px]"
                    alt="logo"
                  />
                  {/* </Link> */}
                </Link>
                <div className="font-semibold font-pacifiko text-3xl">
                  <span className="text-green-600">Abc</span> <br />
                  <span className="text-orange-400"> Clay House</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 bg-gray-900 body-font  border-gray-600">
        <div className="container  mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 CODEADDON.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
        </div>
      </section>
    </footer>
  );
};

export default Footer;
