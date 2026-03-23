import { CONTACT } from "./../constants/index";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-16" >
      {/* HEADING */}
      <h1 className="text-center font-light text-4xl my-12">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          Me
        </span>
      </h1>

      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* ADDRESS */}
        <div className="flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-neutral-900/50 backdrop-blur-md hover:border-blue-400 transition duration-300">
          <MdLocationOn className="text-2xl mb-2 text-gray-300" />
          <p className="text-sm text-gray-400 text-center">{CONTACT.address}</p>
        </div>

        {/* PHONE */}
        <div
          onClick={() => window.open(`tel:${CONTACT.phoneNo}`)}
          className="cursor-pointer flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-neutral-900/50 backdrop-blur-md hover:border-blue-400 transition duration-300"
        >
          <FaPhone className="text-2xl mb-2 text-gray-300" />
          <p className="text-sm text-gray-400">{CONTACT.phoneNo}</p>
        </div>

        {/* EMAIL */}
        <div
          onClick={() => window.open(`mailto:${CONTACT.email}`)}
          className="cursor-pointer flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-neutral-900/50 backdrop-blur-md hover:border-blue-400 transition duration-300"
        >
          <FaEnvelope className="text-2xl mb-2 text-gray-300" />
          <p className="text-sm text-gray-400">{CONTACT.email}</p>
        </div>

        {/* LINKEDIN */}
        <div
          onClick={() => window.open(CONTACT.linkedin)}
          className="cursor-pointer flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-neutral-900/50 backdrop-blur-md hover:border-blue-400 transition duration-300"
        >
          <FaLinkedin className="text-2xl mb-2 text-gray-300" />
          <p className="text-sm text-gray-400">LinkedIn</p>
        </div>
      </div>

      {/* OPTIONAL CTA */}
      <div className="mt-10 text-center">
        <button
          onClick={() => window.open(CONTACT.portfolio)}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-white text-black font-medium hover:scale-105 transition duration-300"
        >
          Visit Portfolio
        </button>
      </div>
    </div>
  );
};

export default Contact;
