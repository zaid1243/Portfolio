import React from "react";
import { EXPERIENCES } from "../constants";
const Education = () => {
  return (
    <div className="border-b pb-15 border-gray-700 lg:p-12 scale-95">
      <h1 className="text-4xl font-thin text-center my-10">
        Education & Skills
      </h1>
      {EXPERIENCES.map((tech, index) => (
        <div>
          <div
            key={index}
            className="mb-10 flex flex-wrap justify-start lg:justify-end "
          >
            <h1 className="lg:w-1/4 mb-3">{tech.year}</h1>
            <p className="lg:w-3/4 font-light text-sm lg:text-xl tracking-tighter lg:text-start text-start">
              {tech.description}
            </p>
          </div>
          <div className="lg:text mr-65 mb-10 mt-3 flex flex-wrap">
            {tech.technologies.map((tech, index) => (
              <span
                key={index}
                className=" mr-1.5 mt-3 px-1.5   py-1.5 bg-gray-900  text-purple-700 rounded-md "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
