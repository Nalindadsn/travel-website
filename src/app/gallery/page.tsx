import Gallery from "@/components/gallery";
import React from "react";

function page() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
        Gallery
      </h2>
      <Gallery />
    </div>
  );
}

export default page;
