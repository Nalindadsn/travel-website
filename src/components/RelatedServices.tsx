import { SERVICES } from "@/constans";
import Link from "next/link";
import React from "react";

function RelatedServices() {
  return (
    <div>
      <div className="w-full mt-10 border-t">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="pt-1">
            <h4 className="font-bold text-xl  font-heading ">
              RelatedServices
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="w-full border shadow-lg rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="w-full  text-left p-6 md:p-4 space-y-2 flex items-center">
                  <div>
                    <Link
                      href={`/services/${service?.slug}`}
                      className="text-xl text-gray-600 font-bold focus:text-green-600 hover:text-green-600"
                    >
                      {service?.title}
                    </Link>

                    <p className="text-sm leading-relaxed text-gray-500 font-normal">
                      {service?.description.substring(1, 107)}
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

export default RelatedServices;
