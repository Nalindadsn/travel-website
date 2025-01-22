import Link from "next/link";
import { Suspense } from "react";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="">
      <div className="mt-1">
        <div className="flex bg-white h-96 container mx-auto">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                CONTACT US
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Welcome to my travel website. Here you can get to know About us
                and as well as you can explore the blogs section and get to know
                what sort of things we offer.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  href="/about"
                  className="mx-auto md:mt-0 mt-2 ml-2 md:mr-0 mr-2 bg-orange-500 px-5 py-3 rounded-xl text-sm text-white hover:text-white shadow-xl hover:shadow-xl hover:shadow-green-300/80 shadow-green-400/40 hover:bg-orange-600"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div
              className="h-full bg-gray-100 "
              style={{
                backgroundImage: `url('/contact.jpg')`,
                backgroundPosition: "center",
              }}
            >
              {/* <Slider /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg ">
        <div className="h-full flex items-center">
          <div className="w-full">
            <h1 className="text-3xl mb-5 font-semibold text-gray-800 md:text-4xl text-center ">
              Contact Us
            </h1>
            <div className="mb-5 shadow-md border w-full p-4 flex items-center">
              <div>
                <CiLocationOn className="text-3xl  text-red-600" />
              </div>

              <p className="text-sm text-gray-500 ml-5">Abc Clay House</p>
            </div>
            <div className="mb-5 shadow-md border w-full p-4 flex items-center">
              <div>
                <BiPhone className="text-3xl text-blue-600" />
              </div>

              <p className="text-sm text-gray-500 ml-5">
                <Link
                  href={`https://api.whatsapp.com/send/?phone=94774926917`}
                  target="_blank"
                >
                  +9470 42 38 939
                </Link>
              </p>
            </div>
            <div className="mb-5 shadow-md border w-full p-4 flex items-center">
              <div>
                <MdEmail className="text-3xl  text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 ml-5">
                abcclayhouse@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="relative w-full h-[450px] flex items-center border text-center">
              <span className="mx-auto flex items-center gap-3">
                {" "}
                <CiLocationOn className="text-3xl mx-auto text-red-600" /> MAP
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15859.67370244263!2d81.3462042!3d6.4045106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4271d31929887%3A0x35e9cdbee1ae3173!2sAbc%20Clay%20House!5e0!3m2!1sen!2slk!4v1731439268096!5m2!1sen!2slk"
                width="100%"
                height="450"
                className="absolute"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>{" "}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
