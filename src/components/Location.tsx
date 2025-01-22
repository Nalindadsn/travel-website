"use client";
import { Map } from "lucide-react";
import { Suspense, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

function Location({ url }: any) {
  const [map, setMap] = useState(false);
  return map ? (
    <div className="mt-5">
      <div
        className="flex justify-end gap-1 text-sm cursor-pointer"
        onClick={() => setMap(false)}
      >
        <div className="border bg-gray-100 flex gap-2 p-2 items-center ">
          <Map className="text-3xl  text-red-600 " /> HIDE LOCATION
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative w-full h-[450px] flex items-center border bg-gray-100 text-center">
          <span className="mx-auto flex items-center gap-3">
            {" "}
            <CiLocationOn className="text-3xl mx-auto text-red-600" /> MAP
          </span>
          <iframe
            src={url}
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
  ) : (
    <div
      className="flex justify-end gap-1 text-sm mt-5 cursor-pointer"
      onClick={() => setMap(true)}
    >
      <div className="border flex gap-2 p-2 items-center">
        <Map className="text-3xl  text-red-600 " /> VIEW LOCATION
      </div>
    </div>
  );
}

export default Location;
