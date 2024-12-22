import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

export default function PersonCard() {
  return (
    <div className=" bg-gray-100 w-[700px] h-36 rounded-sm p-2 shadow-md hover:shadow-xl flex">
      <img src="g.jpg" alt="person" className="w-28 h-28 rounded-md m-2" />
      <div className="mx-2">
        <h2 className="font-bold text-[28px] font-Roboto ">
          Kushani Dhanushika
        </h2>
        <div className="flex gap-12">
          <div>
            <div className="flex items-center gap-3 my-2">
              <FaLocationDot />
              <h1>Nawalapitiya</h1>
            </div>
            <div className="flex items-center gap-3 my-2">
              <FaBirthdayCake />
              <h1>28 years</h1>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 my-2">
              <IoPerson />
              <h1>Sinhalse</h1>
            </div>
            <div className="flex items-center gap-3 my-2">
              <FaBookOpen />
              <h1>Buddist</h1>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 my-2">
            <FaRulerVertical />
              <h1>5 feet 4 inch</h1>
            </div>
            <div className="flex items-center gap-3 my-2">
            <BsBriefcaseFill />
              <h1>Teacher</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
