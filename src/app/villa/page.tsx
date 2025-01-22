import Gallery from "@/components/gallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  container mx-auto">
        <div className="md:pl-12 h-full flex items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Villa
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Abc Clay House is a stunning example of traditional architecture
              that connects with nature. Its use of clay is not just beautiful
              but also shows it&apos;s eco-friendly and sustainable.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={`/services.jpg`}
            alt="photo"
            width={600}
            height={500}
            className="w-full"
          />
        </div>
      </div>

      <section>
        <div className="container  mx-auto mt-8">
          <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl text-center">
            Accomodations
          </h1>
          <div className="md:flex mt-8 justify-center  mx-auto  rounded">
            <div className=" p-5 flex justify-center gap-3 bg-gray-200 mb-2 md:mb-0 ">
              <h3 className="text-xl">Check In</h3>
              <div className="flex text-2xl border rounded bg-orange-600 text-white px-2">
                <div>10.30AM</div>
              </div>
            </div>
            <div className=" p-5 flex  justify-center gap-3 bg-gray-200 md:border-l border-gray-800 mb-2 md:mb-0">
              <h3 className="text-xl">Check Out</h3>
              <div className="flex items-center text-2xl border rounded bg-red-500 text-white px-2">
                <div>09.00AM</div>
              </div>
            </div>
          </div>
          <Gallery />
        </div>
      </section>
      {/* <Services /> */}
    </div>
  );
}
