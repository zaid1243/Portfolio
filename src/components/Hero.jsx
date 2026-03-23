import { HERO_CONTENT } from "./../constants/index";
import image from "./../assets/Zaid.jpeg";

const Hero = () => {
const scrollToSection = (id) => {
  console.log("hello")
  const element = document.getElementById(id);
  if (element) {
    console.log("yes ele")
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <div className="border-b border-gray-800 pb-10 lg:pb-32 mb-10 pt-5">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 relative z-10">  
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Heading */}
            <h1 className="pb-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white font-semibold">
                Zaid
              </span>
            </h1>

            {/* Role */}
            <span className="pb-4 text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-300 via-slate-400 to-white bg-clip-text text-transparent font-medium">
              Full Stack Developer
            </span>

            {/* Description */}
            <p className="py-3 text-gray-300 max-w-xl leading-relaxed">
              {HERO_CONTENT}
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4 flex-wrap justify-center lg:justify-start relative z-20">
  <button
    onClick={() => scrollToSection("projects")}
    className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-white text-black font-medium shadow-lg hover:scale-105 transition duration-300"
  >
    View Projects
  </button>

  <button
    onClick={() => scrollToSection("contact")}
    className="px-6 py-2 rounded-xl border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white transition duration-300"
  >
    Contact Me
  </button>
</div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
       <div className="w-full lg:w-1/2 flex justify-center relative z-0">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-white rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none"></div>

            {/* Image Container */}
            <div className="relative w-64 sm:w-80 lg:w-96 aspect-square overflow-hidden rounded-2xl border border-gray-700 shadow-xl ">
              <img
                src={image}
                alt="Zaid"
                className="w-full  h-full object-cover object-center group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
