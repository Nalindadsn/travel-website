"use client";
import Image from "next/image";
import React, { useState } from "react";

function DetailsSlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
      {JSON.stringify(images)}
      <Image
        className="w-full h-full object-cover"
        src={images[active]}
        alt="Product Image"
        width={600}
        height={500}
      />
      <div className="flex w-full gap-2 mt-2">
        {images.map((x: string) => (
          <div
            key={`${x}-${images.indexOf(x)}`}
            className="w-1/4 cursor-pointer"
            onClick={() => setActive(images.indexOf(x))}
          >
            <Image
              className="w-full h-full object-cover"
              src={x}
              alt="Product Image"
              width={200}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsSlider;
