import Team from "@/components/Team";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-1">
        <div className="flex bg-white h-96 container mx-auto">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                WHO WE ARE?
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Welcome to my travel website. Here you can get to know About us
                and as well as you can explore the blogs section and get to know
                what sort of things we offer.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  href="/services"
                  className="mx-auto md:mt-0 mt-2 ml-2 md:mr-0 mr-2 bg-orange-500 px-5 py-3 rounded-xl text-sm text-white hover:text-white shadow-xl hover:shadow-xl hover:shadow-green-300/80 shadow-green-400/40 hover:bg-orange-600"
                >
                  Explore Services
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
                backgroundImage: `url('/about.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* <Slider /> */}
            </div>
          </div>
        </div>
      </div>

      <Team />
    </div>
  );
}
