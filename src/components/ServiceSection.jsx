import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Services } from "../global";

const PPFServices = ({ title = "OUR SERVICES", services = Services }) => {
  return (
    <div id="services" className="bg-[#F3F4F6] dark:bg-black py-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 sm:h-20 bg-primary"></div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] dark:text-white">
              {title}
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition flex flex-col"
            >
              <div className="w-full h-48 sm:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-top"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-5">
                  {service.subtitle}
                </h3>

                <div className="mb-6 grow">
                  <ul className="space-y-2">
                    {service.coverage.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CircleCheckBig className="w-5 h-5 text-primary mr-2 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:scale-105 transition">
                  BOOK TODAY
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PPFServices;
