import DetailsSlider from "@/components/DetailsSlider";
import Location from "@/components/Location";
import RelatedServices from "@/components/RelatedServices";
import { SERVICES } from "@/constans";
import { Image } from "lucide-react";
import React from "react";
import { BiCheck } from "react-icons/bi";

export default async function Post({ params }: any) {
  const slug = (await params)?.slug;
  const service = SERVICES.filter((service) => service.slug === slug);

  return (
    <div className="container mx-auto  w-md mt-10 min-h-screen px-3">
      <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl ">
        {service[0]?.title}
      </h2>

      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              {service[0]?.images.length > 0 ? (
                <DetailsSlider images={service[0]?.images} />
              ) : (
                <div className="flex items-center justify-center h-full border p-5 mb-5 bg-gray-300 rounded-md">
                  <Image className="w-16 h-16 text-white" />
                </div>
              )}
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex justify-between">
                {service[0]?.title}
              </h2>

              <div className="mb-4">
                <div className="mb-4">
                  <span className="text-green-600 dark:text-gray-300 font-bold text-xl">
                    {service[0]?.price}{" "}
                    {service[0]?.base && " / " + service[0]?.base}
                    <span className="text-xs ml-4">
                      {service[0]?.isNegotiable && "(Negotiable)"}
                    </span>
                  </span>
                </div>
                <div className="flex">
                  {service[0]?.availability &&
                    service[0]?.availability === "Available" && (
                      <>
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Availability:
                        </span>
                        <span className="flex items-center text-gray-600 dark:text-gray-300 border bg-orange-500 text-white rounded-md px-2 ml-1">
                          <BiCheck /> Available
                        </span>
                      </>
                    )}
                  {service[0]?.availability === "Not Available" ? (
                    <>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Availability:
                      </span>
                      <span className="flex items-center text-gray-600 dark:text-gray-300 border bg-gray-300  rounded-md px-2 ml-1">
                        X Not available
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                  {}
                </div>
              </div>

              {service[0]?.features && service[0]?.features.length > 0 && (
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Features:
                  </span>
                  <ul className="ml-5 list-disc	 text-gray-600 dark:text-gray-300 text-sm my-2">
                    {service[0]?.features &&
                      service[0]?.features.map((x) => (
                        <li
                          key={`${x}-${
                            Math.floor(Math.random() * (1000 - 100 + 1)) + 100
                          }`}
                        >
                          {x}
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {service[0]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {service[0]?.location && <Location url={service[0]?.location} />}
      <RelatedServices />
    </div>
  );
}
