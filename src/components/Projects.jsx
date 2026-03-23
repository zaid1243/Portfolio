import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-16">
      {/* HEADING */}
      <h1 className="text-4xl font-light text-center my-12">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          Projects
        </span>
      </h1>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            {/* IMAGE */}
            <div
              onClick={() => window.open(project.link)}
              className="w-full lg:w-1/2 cursor-pointer group"
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-gray-700">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-white blur opacity-20 group-hover:opacity-50 transition duration-500"></div>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* FEATURED TAG */}
              {index === 0 && (
                <span className="inline-block mb-2 px-3 py-1 text-xs bg-blue-500 text-white rounded-full">
                  Featured Project
                </span>
              )}

              {/* TITLE */}
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-white transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => window.open(project.link)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-white text-black font-medium hover:scale-105 transition duration-300"
                >
                  Live Demo
                </button>

                {project.demo && (
                  <button
                    onClick={() => window.open(project.demo)}
                    className="px-4 py-2 rounded-lg border border-gray-600 hover:border-blue-400 transition duration-300"
                  >
                    Demo Video
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
