import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const techStack = [
  { icon: RiReactjsLine, name: "React" },
  { icon: TbBrandNextjs, name: "Next.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: DiRedis, name: "Redis" },
  { icon: FaNode, name: "Node.js" },
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-16">
      {/* HEADING */}
      <h2 className="text-4xl my-12 text-center font-light">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          Technologies
        </span>
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-800 bg-neutral-900/50 backdrop-blur-md hover:border-blue-400 hover:scale-105 transition duration-300"
            >
              {/* ICON */}
              <Icon className="text-4xl text-gray-300 mb-2" />

              {/* NAME */}
              <span className="text-sm text-gray-400">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
