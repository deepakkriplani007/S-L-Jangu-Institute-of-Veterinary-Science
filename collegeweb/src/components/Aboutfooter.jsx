import React from "react";
import Footerweb from "./Footerweb";

const Aboutfooter = () => {
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
          <h1 className="flex justify-center text-xl text-center">Jodhpur</h1>
          <h1 className="flex justify-center text-xl text-center">
            Mo. 9414146000
          </h1>
        </div>
        <div className="bg-[#162242] p-8 flex justify-center ">
          <div className="text-white text-lg lg:text-xl pl-8">
            <div className="flex justify-center pb-4 ">
              <h1 className="text-xl lg:text-2xl font-bold">Location</h1>
            </div>
            <div className="text-black">
              <div className="flex flex-col text-white justify-center items-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6636595962586!2d72.9872086!3d26.272577299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e84a6b9d2e5%3A0x3d0b37f8d162c34c!2s34.%20SHREE%20S.L.%20JANGU%20INSTITUTE%20OF%20VETERINARY%20SCIENCE%2C%20JODHPUR!5e0!3m2!1sen!2sin!4v1716194148756!5m2!1sen!2sin"
                  className="border-0 w-[100%] h-[30vh] sm:w-[55vh] sm:h-[33vh] pb-2"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <address className="flex flex-col items-center text-center">
                  <h1>
                    SHREE S.L. JANGU INSTITUTE OF VETERINARY SCIENCE,Jodhpur{" "}
                    427, Pal Link Rd, Baldev Nagar, Jodhpur, Rajasthan 342008
                  </h1>
                </address>
                <div className="flex flex-col justify-center items-center mt-4">
                  <img
                    src="./fac (1).jpeg"
                    className="w-20 border-2 border-black rounded-sm "
                    alt=""
                  />
                  <p className="pt-2"> Kartik </p>
                  <p className=""> Kittusharma7357@gmail.com</p>
                  <p className="pt-px mt-2"> 7357277835</p>
                </div>
              </div>
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
            Shri S. L. Jangu Institute of of Veterinary Science
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

export default Aboutfooter;
