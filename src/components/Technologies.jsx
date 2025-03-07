import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import React from "react";

const Technologies = () => {
  return (
    <div className="pb-15  border-b-neutral-900 ">
      <h2 className="text-4xl my-10 lg:my-18 text-center font-thin">
        Technologies
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="border-3 rounded-2xl p-3 border-neutral-800 ">
          <RiReactjsLine className="text-4xl text-cyan-500" />
        </div>
        <div className="border-3 rounded-2xl p-3 border-neutral-800 ">
          <TbBrandNextjs className="text-4xl " />
        </div>
        <div className="border-3 rounded-2xl p-3 border-neutral-800 ">
          <SiMongodb className="text-4xl text-green-500" />
        </div>
        <div className="border-3 rounded-2xl p-3 border-neutral-800 ">
          <DiRedis className="text-4xl text-red-700" />
        </div>
        <div className="border-3 rounded-2xl p-3 border-neutral-800 ">
          <FaNode className="text-4xl text-green-700" />
        </div>
        <div className="border-3 rounded-2xl p-3 border-neutral-800 ">
          <BiLogoPostgresql className="text-4xl text-cyan-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
