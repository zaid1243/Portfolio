import image from "./../assets/about.jpg";

const About = () => {
  return (
    <div
      className="text-neutral-300 border-b border-neutral-800 pb-16"
      id="about"
    >
      {/* HEADING */}
      <h1 className="text-center my-10 text-4xl font-light">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white font-medium">
          Me
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-white rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Image */}
            <img
              src={image}
              alt="About"
              className="relative w-64 sm:w-80 lg:w-96 object-cover rounded-xl border border-gray-700 shadow-xl"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a passionate Full Stack Web Developer with a strong focus on
            building responsive, user-friendly, and dynamic web applications. I
            enjoy solving real-world problems and turning ideas into scalable
            products using clean and efficient code.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            With hands-on experience in modern web technologies, I continuously
            learn and adapt to stay updated with industry trends. My goal is to
            build impactful digital experiences and grow as a professional
            developer.
          </p>

          {/* SKILLS TAGS */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {["React", "Node.js", "MongoDB", "Express", "JavaScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 text-sm rounded-full border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-white transition duration-300"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
