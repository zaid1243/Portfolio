import React from "react";
import image from "./../assets/about.jpg";
const About = () => {
  return (
    <div className="text-neutral-300 border-b border-neutral-900 pb-4">
      <h1 className="text-center my-8 lg:my-15 text-4xl font-thin">
        About <span className="text-gray-400">me</span>
      </h1>

      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2  lg:p-8">
          <div className="flex justify-center items-center  rounded-md overflow-hidden">
            <img
              className="w-55 lg:w-90 border border-gray-600 rounded-md"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex lg:items-start justify-center tracking-tighter font-light">
          <div className="flex justify-center items-center p-4 lg:p-8">
            <p>
              I’m a passionate Full Stack Web Developer with a strong focus on
              building responsive, user-friendly, and dynamic web applications.
              With experience in both frontend and backend technologies, I enjoy
              solving complex problems and bringing creative ideas to life
              through clean code and intuitive design. I’m always eager to learn
              new technologies and improve my skills to stay up-to-date in the
              ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
