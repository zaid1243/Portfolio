import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <h1 className="my-4 text-4xl  text-center font-semibold">Projects</h1>
      <div className="flex flex-wrap lg:justify-around lg:m-20 lg:px-6 ">
        {PROJECTS.map((tech, index) => (
          <>
            <div className="flex flex-wrap ">
              <div
                onClick={() => window.open(tech.link)}
                className="flex justify-center w-full lg:w-1/4 p-3 lg:p-5 overflow-hidden h-70 object-cover "
              >
                <img
                  src={tech.image}
                  alt=""
                  className="border border-gray-700 rounded-md object-cover w-full h-full "
                />
              </div>

              <div className="w-full lg:w-3/4 py-4 lg:p-15 lg:pl-20 tracking-tighter font-light antialiased text-center lg:text-start">
                <h1 className="font-bold pb-3">{tech.title}</h1>
                <p className="text-neutral-300">{tech.description}</p>
                <div className="mt-2">
                  {tech.technologies.map((stack, index) => (
                    <span
                      className=" ml-2 text-sm text-white  bg-gray-900 outline-none rounded-md p-1"
                      key={index}
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <span className="py-2 text-xs font-semibold">
                  Live Link Give Below
                </span>
                <h4
                  className="mt-2 text-green-700 cursor-pointer"
                  onClick={() => window.open(tech.link)}
                >
                  {" "}
                  {tech.link}
                </h4>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
