import { HERO_CONTENT } from "./../constants/index";
import image from "./../assets/IMG_20250305_145248[1].png";
const Hero = () => {
  return (
    <div className="border-b border-gray-800 pb-2 lg:pb-40 mb-10">
      <div className="flex flex-wrap items-center justify-around">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className=" pb-6 text-3xl lg:text-6xl font-thin ">
              High I Am Zaid
            </h1>
            <span className="pb-4 text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-900 bg-clip-text text-transparent tracking-tight">
              Full Stack Developer
            </span>
            <p className="py-3 my-4 font-light max-w-xl tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-50  lg:w-90 border border-gray-700 rounded-md overflow-hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
