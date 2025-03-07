import React from "react";
import { CONTACT } from "./../constants/index";
const Contact = () => {
  return (
    <div className="border-b pb-20 border-neutral-900 ">
      <h1 className="text-center font-thin text-4xl my-15">Contact Me</h1>
      <div className=" flex flex-col items-center justify-center text-center gap-4">
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <p>{CONTACT.email}</p>
        <p>{CONTACT.linkedin}</p>
      </div>
    </div>
  );
};

export default Contact;
