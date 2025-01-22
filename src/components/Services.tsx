import { SERVICES } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div>
      <div className="w-full mt-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading ">
              Why Abc Clay House?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="w-full shadow-lg rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/5 h-80">
                  <Link
                    href={`/villa/${service?.slug}`}
                    className="text-xl text-gray-800 font-bold focus:text-green-600 hover:text-green-600"
                  >
                    {" "}
                    <Image
                      className="object-center object-cover w-full h-full"
                      src="/rooms/room1.jpg"
                      alt="photo"
                      width={600}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2 flex items-center">
                  <div>
                    <Link
                      href={`/villa/${service?.slug}`}
                      className="text-xl text-gray-800 font-bold focus:text-green-600 hover:text-green-600"
                    >
                      {service?.title}
                    </Link>

                    <p className="text-base leading-relaxed text-gray-500 font-normal">
                      {service?.description.length > 250
                        ? service?.description.substring(0, 250) + "..."
                        : service?.description.substring(0, 250)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
