import React from "react";

const Section2 = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 lg:h-[100vh]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl bg-white w-full h-[370px] shadow-md hover:scale-105 ">
            <div className="relative bg-blue-500 rounded-xl mt-6 mx-4 shadow-lg h-56"></div>
            <div className="border-0 p-6 text-center">
              <p className="text-slate-800 tracking-normal leading-snug font-semibold text-xl mb-2">
                Project One
              </p>
              <p className="text-gray-500 text-sm">
                A short description about Project One.
              </p>
            </div>
            <div className="p-3 border border-gray-200 flex items-center justify-between bg-blue-100/20">
              <p className="font-light text-xs">#React #Tailwind</p>
              <button
                type="button"
                className="select-none border-none outline-none shadow-md text-white uppercase font-bold text-xs py-3 px-6 bg-blue-500 rounded-lg"
              >
                View
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl bg-white w-full h-[370px] shadow-md hover:scale-105">
            <div className="relative bg-green-500 rounded-xl mt-6 mx-4 shadow-lg h-56"></div>
            <div className="border-0 p-6 text-center">
              <p className="text-slate-800 tracking-normal leading-snug font-semibold text-xl mb-2">
                Project Two
              </p>
              <p className="text-gray-500 text-sm">
                A short description about Project Two.
              </p>
            </div>
            <div className="p-3 border border-gray-200 flex items-center justify-between bg-green-100/20">
              <p className="font-light text-xs">#NodeJS #MongoDB</p>
              <button
                type="button"
                className="select-none border-none outline-none shadow-md text-white uppercase font-bold text-xs py-3 px-6 bg-green-500 rounded-lg"
              >
                View
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-xl bg-white w-full h-[370px] shadow-md hover:scale-105">
            <div className="relative bg-purple-500 rounded-xl mt-6 mx-4 shadow-lg h-56"></div>
            <div className="border-0 p-6 text-center">
              <p className="text-slate-800 tracking-normal leading-snug font-semibold text-xl mb-2">
                Project Three
              </p>
              <p className="text-gray-500 text-sm">
                A short description about Project Three.
              </p>
            </div>
            <div className="p-3 border border-gray-200 flex items-center justify-between bg-purple-100/20">
              <p className="font-light text-xs">#API #NextJS</p>
              <button
                type="button"
                className="select-none border-none outline-none shadow-md text-white uppercase font-bold text-xs py-3 px-6 bg-purple-500 rounded-lg"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
