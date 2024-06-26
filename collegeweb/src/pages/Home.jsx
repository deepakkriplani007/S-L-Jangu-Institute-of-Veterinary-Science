import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
const Home = ({ setToken, setRole }) => {
  const show = useSelector((state) => state.profile);
  console.log(show);

  const slides = [
    "./1.1.png",
    "./1.2.jpg",
    "./1.3.jpg",
    "./1.4.jpg",
    "./1.5.png",
    "./1.6.jpg",
  ];
  return (
    <div className="hide-scrollbar">
      <Navbar setToken={setToken} />
      <Slider className="hide-scrollbar" slides={slides} />
      <div className=" text-white  pt-16 pb-16 gap-5 justify-center items-center bg-[#162242]">
        <div className=" text-lg pb-2 sm:text-4xl text-center self-center">
          shree S.L jangu veterinary and science college
        </div>
        <p className="text-center">
          Affiliated by Govt. of Rajasthan - RAJUVAS Bikaner
        </p>
        <div className="  text-center pt-3">
          <div className="text-base sm:text-2xl font-semibold">
            Offered Course <br /> AHDP (Livestock Assistant){" "}
          </div>
          <div className="text-sm sm:text-lg">Course Duration : 2 Years</div>
          <div className="text-sm sm:text-lg">
            Eligiblilty for Admission : 10+2 Science Bio or Agriculture
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-end  pr-8 mt-16">
        <div
          className=" bg-[#162242] flex items-center justify-center sm:justify-end  sm:mr-[10vh]"
          style={{ clipPath: "polygon(100% 0, 10% 0%, 0% 100%, 90% 100%)" }}
        >
          <h1 className="p-4 pb-4 text-base sm:text-2xl lg:text-3xl text-white font-semibold  pr-8 pl-8">
            GENESIS AND GROWTH
          </h1>
        </div>
        <hr className="h-1 w-3/4 mt-5 bg-gray-300 border-0" />
      </div>
      <div className="mt-[8vh] mb-[8vh] ml-[4vh] mr-[4vh] sm:ml-[25vh] sm:mr-[25vh] text-gray-900 text-sm max-sm:font-medium sm:text-xl lg:text-2xl">
        <p>
          Welcome to Shri S. L. Jangu Institute of Veterinary Science , a
          premier institution dedicated to advancing veterinary medicine and
          animal welfare. With a rich legacy that spans over 20years, we have
          established ourselves as a leader in veterinary education, renowned
          for our comprehensive curriculum and commitment to excellence. The
          goal is to provide quality veterinary education to the students, carry
          out practical and field-oriented research and to transfer the
          technology to farmers to improve farmers livelihood and rural economy.
        </p>
        <br />
        <p>
          Our state-of-the-art facilities provide students with unparalleled
          opportunities for hands-on learning, while our experienced faculty
          members are passionate about mentoring the next generation of
          veterinary professionals. At Shri S. L. Jangu Institute of Veterinary
          Science, we believe in the power of practical exposure, offering
          extensive internships and clinical rotations that prepare our students
          for real-world challenges. Our vibrant research community fosters
          innovation, allowing students to contribute to groundbreaking
          discoveries in animal health. Through strategic industry
          collaborations, we ensure that our graduates are not only skilled
          practitioners but also leaders who will shape the future of veterinary
          science.
        </p>
      </div>
      <div className="w-full flex flex-col items-start  pl-8 ">
        <div
          className=" bg-[#162242] flex items-center justify-center sm:justify-start sm:ml-[8vh] "
          style={{
            clipPath: "polygon(0% 0, 90% 0%, 100% 100%, 10% 100%)",
          }}
        >
          <h1 className=" text-base sm:text-2xl lg:text-3xl text-white font-semibold  pl-8 pr-8 pt-4 pb-4">
            Faculty & Staff
          </h1>
        </div>
        <hr className="h-1 w-3/4 mt-5 bg-gray-300 border-0" />
        <div className=" mt-[8vh] mb-[8vh]  ml-[4vh] mr-[4vh] sm:ml-[25vh] sm:mr-[25vh] flex justify-center text-gray-900 text-sm max-sm:font-medium sm:text-xl lg:text-2xl">
          <p>
            Faculty members are in place for all departments including
            Veterinary Clinical Complex and Livestock Farm Complex. The
            institute has a well-qualified and dedicated teaching faculty. Many
            faculty members have acquired their higher education degrees at
            national and international levels standards. The non-teaching staff
            such as Administrative Officer, Accounts Officer, Superintendent,
            Junior Assistant, Technician and Electrician cum plumber are also in
            place for the routine administrative activities. Besides, currently,
            the college has casual labours including drivers for the day-to-day
            operational activities. Security guards are also in place at
            college, hostel and farm campus.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
