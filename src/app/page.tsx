import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pt-12 text-center ">
        <h2 className="font-bold text-4xl md:text-4xl lg:text-4xl font-heading text-green-600 ">
          Abc
        </h2>
        <h2 className="font-bold text-4xl md:text-4xl lg:text-4xl font-heading text-orange-400 ">
          Clay House
        </h2>
        <Link href={"/"} className="text-4xl font-mono">
          <Image
            src="/logo.png"
            width={300}
            height={130}
            className="w-[150px] h-[65px] mx-auto"
            alt="logo"
          />
        </Link>
        <p className=" leading-relaxed text-gray-500 font-normal mt-4">
          Welcome to Abc Clay House. In the heart of Sri Lanka, the Abc Clay
          House is a symbol of living green and traditional beauty. It&apos;s an
          eco-friendly retreat that lets guests enjoy nature and Sri Lankan
          warmth. Here, you can find peace and feel the local hospitality. This
          place is special because it mixes today&apos;s comforts with ancient
          clay buildings. It&apos;s inspired &apos;by&apos; Sri Lanka&apos;s
          rich culture. Here, you can find a calm place away from daily noise.
        </p>
      </section>

      <section className="py-20 bg-gray-100">
        <Services />
      </section>
      {/* <Testimonials /> */}
      <div className=" container mx-auto  w-md mt-10 px-3">
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          <div className="bg-white   md:shadow-lg lg:absolute md:top-0 lg:mt-48 lg:w-3/5">
            <div className="flex flex-col p-12 md:px-16">
              <h2 className="text-2xl font-medium uppercase text-green-600 lg:text-4xl">
                Feel with Nature
              </h2>
              <p className="mt-4">
                Abc Clay House was built with sustainability in mind. We&apos;ve
                added natural ventilation systems, and biodegradable materials
                in our construction. These features reduce our environmental
                impact and offer a cozy, authentic stay.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-64 lg:w-1/2 lg:h-auto z-5">
          <Image
            src="/img/img-hero.jpg"
            alt="Winding mountain road"
            className="h-full w-full object-cover "
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>

      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading ">
            Testimonials
          </h1>

          <div className="mt-5">
            <Testimonials />
          </div>
        </div>
      </section> */}
    </div>
  );
}
