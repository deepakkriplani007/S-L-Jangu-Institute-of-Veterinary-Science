import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Aboutfooter from "../components/Aboutfooter";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { motion } from "framer-motion";

const Contact = () => {
  const slides = [
    "./about1.png",
    "./pc (1).jpg",
    "./pc (2).jpg",
    "./pc (3).jpg",
    "./pc (4).jpg",
  ];
  return (
    <div className="overflow-auto">
      <Navbar />
      <Slider className="hide-scrollbar" slides={slides} />
      <div className="flex flex-col  bg-gray-300  h-full p-8 ">
        <div className=" bg-gray-100 rounded-lg p-4 mt-24 ml-24 sm:mr-24">
          <div className=" w-full flex flex-col items-end  mt-16">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=" bg-[#162242] max-[900px]:pr-[12vh] max-[900px]:pl-[8vh] flex items-center justify-center  w-1/4 pl-8 pr-8 pt-2 pb-2 sm:mr-[10vh] "
              style={{ clipPath: "polygon(100% 0, 10% 0%, 0% 100%, 90% 100%)" }}
            >
              <h1 className="pt-4 pb-4 text-base   min-[900px]:text-lg lg:text-xl min-[1200px]:text-3xl text-white font-semibold  pl-8">
                Introduction
              </h1>
            </motion.div>
            <hr className="h-1 w-3/4 mt-5 bg-gray-300 border-0" />
          </div>
          <div className="mt-[8vh] mb-[8vh] ml-[4vh] mr-[4vh] sm:ml-[25vh] sm:mr-[25vh] text-gray-900 text-sm max-sm:font-medium sm:text-xl lg:text-2xl">
            <p>
              Shree S.L. Jangu Institute of Veterinary Science, located in the
              vibrant city of Jodhpur, Rajasthan, stands as a beacon of
              excellence in the field of veterinary education. With a rich
              legacy and a commitment to nurturing compassionate and skilled
              veterinarians, this institute has become a cornerstone for
              aspiring animal health professionals.
            </p>
          </div>
          <div className="w-full flex flex-col items-start  pl-8 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=" bg-[#162242]  flex items-center justify-center  w-1/4 sm:ml-[8vh] "
              style={{
                clipPath: "polygon(0% 0, 90% 0%, 100% 100%, 10% 100%)",
              }}
            >
              <h1 className=" text-base  min-[700px]:text-lg  min-[800px]:text-2xl lg:text-3xl text-white font-semibold  pl-8 pr-8 pt-4 pb-4 ">
                Unveiling the Essence
              </h1>
            </motion.div>
            <hr className="h-1 w-3/4 mt-5 bg-gray-300 border-0" />
            <div className=" mt-[8vh] mb-[8vh]  ml-[4vh] mr-[4vh] sm:ml-[25vh] sm:mr-[25vh] flex justify-center text-gray-900 text-sm max-sm:font-medium sm:text-xl lg:text-2xl">
              <p>
                At Shree S.L. Jangu Institute of Veterinary Science, we believe
                that the well-being of animals is intricately linked to the
                health of our planet. Our mission is to produce competent
                veterinary professionals who can contribute significantly to
                animal welfare, public health, and environmental sustainability.
              </p>
              <br />
            </div>
          </div>
          <div className=" w-full flex flex-col items-end  mt-5">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=" bg-[#162242] max-[900px]:pr-[12vh] max-[900px]:pl-[8vh] flex items-center justify-center  w-1/4 pl-8 pr-8 pt-2 pb-2 sm:mr-[10vh] "
              style={{ clipPath: "polygon(100% 0, 10% 0%, 0% 100%, 90% 100%)" }}
            >
              <h1 className="pt-4 pb-4 text-base   min-[900px]:text-lg lg:text-xl min-[1200px]:text-3xl text-white font-semibold  pl-8">
                Key Features
              </h1>
            </motion.div>
            <hr className="h-1 w-3/4 mt-5 bg-gray-300 border-0" />
          </div>
          <div className="mt-[8vh] mb-[8vh] ml-[4vh] mr-[4vh] sm:ml-[25vh] sm:mr-[25vh] text-gray-900 text-sm max-sm:font-medium sm:text-xl lg:text-2xl">
            <div>
              <p>
                <b>Holistic Curriculum:</b> Our comprehensive curriculum blends
                theoretical knowledge with practical experience. Students engage
                in hands-on learning, clinical rotations, and research projects,
                ensuring a well-rounded education.
              </p>
              <br />
              <p>
                <b>Expert Faculty:</b> Our esteemed faculty members are not just
                teachers, they are mentors, guiding students through their
                academic journey. Their expertise spans diverse areas, from
                surgery and pathology to epidemiology and wildlife conservation.
              </p>
              <br />
              <p>
                <b>State-of-the-Art Facilities:</b> Our campus boasts modern
                laboratories, surgical suites, and animal care facilities.
                Students gain practical skills using cutting-edge equipment and
                technology.
              </p>
              <br />
              <p>
                <b>Clinical Exposure:</b> Regular clinical rounds and field
                visits provide students with real-world exposure. Whether it’s
                diagnosing a sick cow or assisting in a wildlife rescue, our
                students learn by doing.
              </p>
              <br />
              <p>
                <b>Research Opportunities:</b> We encourage students to explore
                research in areas like zoonotic diseases, animal nutrition, and
                genetics. Our institute collaborates with national and
                international research organizations.
              </p>
              <br />
              <p>
                <b> Community Outreach:</b> We believe in giving back. Our
                students participate in health camps, vaccination drives, and
                awareness programs, making a positive impact on both animals and
                communities. Global Perspective: We foster a global outlook by
                organizing workshops, conferences, and exchange programs. Our
                students interact with experts from around the world, broadening
                their horizons.
              </p>
              <br />
              <p>
                <b> Accreditation:</b>The college is accredited by respected
                nursing councils, ensuring that the education provided meets
                high standards and is recognized nationally and internationally.
              </p>
              <br />
              <p>
                <b> Established Legacy: </b>Shree Balaji Nursing College has a
                long-standing history of providing quality nursing education and
                has been a pillar in the healthcare education sector.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start  pl-8 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=" bg-[#162242]  flex items-center justify-center  w-1/4 sm:ml-[8vh] "
              style={{
                clipPath: "polygon(0% 0, 90% 0%, 100% 100%, 10% 100%)",
              }}
            >
              <h1 className=" text-base  min-[700px]:text-lg  min-[800px]:text-2xl lg:text-3xl text-white font-semibold  pl-8 pr-8 pt-4 pb-4 ">
                Course offered
              </h1>
            </motion.div>
            <hr className="h-1 w-3/4 mt-5 bg-gray-300 border-0" />
            <div className=" mt-[8vh] mb-[8vh]  ml-[4vh] mr-[4vh] sm:ml-[25vh] sm:mr-[25vh] flex justify-center text-gray-900 text-sm max-sm:font-medium sm:text-xl lg:text-2xl">
              <div>
                <p>
                  <b>Diploma in Animal Husbandry (Dip. AH):</b>
                  This program equips students with essential skills in animal
                  care, disease management, and farm management. Graduates play
                  a crucial role in livestock health and production.
                  Undergraduate
                </p>
                <br />
                <p>
                  <b>Diploma (UG Diploma): </b>Our UG Diploma program focuses on
                  practical aspects of veterinary science, preparing students
                  for diverse career paths.
                </p>
              </div>
              <br />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col  bg-gray-300  h-full p-8 ">
        <div className=" mt-4 flex flex-col bg-gray-100 rounded-lg p-4 m-auto shadow-xl">
          <img
            src="./about1.png"
            alt=""
            className="h-screen border-4 border-black rounded-lg"
          />
        </div>
      </div> */}
        <div className=" mt-32 flex flex-col bg-gray-100 rounded-lg p-4 mb-24 ml-24 mr-24 shadow-xl">
          <h2 className="text-black font-bold text-4xl pb-3 mb-2">
            Faculty
            <hr className="h-px mt-5 bg-gray-300 border-0" />
          </h2>
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="">
                  <tr className="bg-blue-700 text-white text-lg ">
                    <th
                      scope="col"
                      className="px-6 py-3 flex justify-center font-medium"
                    >
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Designation{" "}
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Qualification
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-medium flex justify-center"
                    >
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex flex-col justify-center items-center ">
                        <img
                          src="./fac(3).png"
                          className="w-20 border-2 border-black rounded-sm "
                          alt=""
                        />
                        <p className="pt-2">DR. Rakesh Kumar Kharbas</p>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                      <p className="text-xl font-normal">Professor</p>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      <p className="text-xl font-normal">B.V.Sc. & A.H.</p>
                    </td>
                    <td className="px-6 py-4  text-gray-900">
                      <div className=" flex flex-col items-center">
                        <p className="text-lg font-normal">9782565738</p>
                        <p className="text-lg font-normal">
                          dr.rakeshkharbas@gmail.com
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex flex-col justify-center items-center ">
                        <img
                          src="./fac (2).jpeg"
                          className="w-20 border-2 border-black rounded-sm "
                          alt=""
                        />
                        <p className="pt-2"> Indu Godhara</p>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                      <p className="text-xl font-normal">Professor</p>
                      <p>Management Study</p>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      <p className="text-xl font-normal">B.V.Sc.</p>
                    </td>
                    <td className="px-6 py-4  text-gray-900">
                      <div className=" flex flex-col items-center">
                        <p className="text-lg font-normal">
                          indugodhara521@gmail.com
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Aboutfooter />
    </div>
  );
};

export default Contact;
