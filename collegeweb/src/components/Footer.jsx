import React from "react";
import Footerweb from "./Footerweb";

const Footer = () => {
  return (
    <div className="bg-[#162242] ">
      <div className="flex justify-between max-lg:flex-col pt-4 pl-4 pr-4">
        <div className="text-white ">
          <div className="flex justify-center">
            <img src="./chairman.png" className="h-[20vh] w-[17vh]" alt="" />
          </div>
          <h1 className="text-xl lg:text-2xl flex justify-center">
            Shri Daya Ram Jangu
          </h1>
          <div className="flex justify-center">
            <h1 className="text-lg lg:text-xl font-bold"> Chairman</h1>
          </div>
          <h1 className="flex justify-center text-xl text-center">
            Shri Balaji Education Society
          </h1>
          <h1 className="flex justify-center text-xl">Jodhpur</h1>
          <h1 className="flex justify-center text-xl"> Mo. 9414146000</h1>
        </div>
        <div className="bg-[#162242] p-8 flex justify-center ">
          <div className="text-white text-lg lg:text-xl pl-8">
            <div className="flex justify-center ">
              <h1 className="text-xl lg:text-2xl font-bold">Contact Us</h1>
            </div>
            <div className="text-black">
              <Footerweb />
            </div>
          </div>
        </div>
        <div className="text-white ">
          <div className="flex justify-center">
            <img src="./director.png" className="h-[20vh] w-[17vh]" alt="" />
          </div>
          <h1 className="text-xl lg:text-2xl flex justify-center">
            Dr. Sandeep Kumar
          </h1>
          <div className="flex justify-center">
            <h1 className="text-lg lg:text-xl font-bold">Principal</h1>
          </div>
          <h1 className="flex justify-center text-xl text-center">
            Shri S. L. Jangu Institute of Veterinary Science
          </h1>

          <h1 className="flex justify-center text-xl">Mo. 9680927332</h1>
        </div>
      </div>
      <div className="bg-[#162242] text-white pt-4">
        <hr className="my-6 border-gray-100 w-3/4 sm:mx-auto lg:my-8" />
        <div className="flex justify-center text-sm p-2">
          ©2024 All Rights Reserved, Shri Balaji Education Society, Jodhpur For
          any comments/enquiries/feedback, please eMail to the Webmaster
        </div>
      </div>
    </div>
  );
};

export default Footer;
