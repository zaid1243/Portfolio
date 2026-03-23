import { EXPERIENCES } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-gray-800 pb-16">
      {/* HEADING */}
      <h1 className="text-4xl font-light text-center my-12">
        Education &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          Skills
        </span>
      </h1>

      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start"
          >
            {/* YEAR */}
            <div className="lg:w-1/4 text-gray-400 text-sm">{item.year}</div>

            {/* CONTENT */}
            <div className="lg:w-3/4">
              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-white transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
