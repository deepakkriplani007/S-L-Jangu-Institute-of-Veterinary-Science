import React, { useEffect, useState } from "react";
import Adminnav from "../components/Adminnav";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import Axios from "axios";
import Updatemodal from "../components/Updatemodal";
const Admin = ({ setToken }) => {
  const host = import.meta.env.VITE_REACT_APP_HOST;
  const [update, setUpdate] = useState(true);
  const [project, setProject] = useState();
  const [data, setData] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    present: "Yes",
    holiday: "Yes",
  });
  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = (obj) => {
    setProject(obj);
    setModalOpen(true);
  };
  console.log(project);
  function formatDate(dateString) {
    // Create a new Date object from the date string
    const date = new Date(dateString);

    // Get the day, month, and year
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const year = date.getFullYear();

    // Return the formatted date string
    return `${day}-${month}-${year}`;
  }
  const fetchdata = async () => {
    try {
      const response = await Axios.get(`${host}/attend/`);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    fetchdata();
  }, [update]);

  const deleteentry = async (id) => {
    console.log(id);
    try {
      setData((prevdata) => prevdata.filter((data) => data._id !== id));
      const response = await Axios.delete(`${host}/attend/delete/${id}`);
      // console.log(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleOnSubmit = async (e) => {
  //   console.log(formData);
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { name, holiday, present, date } = formData;

    // Check if all fields are filled
    console.log(formData);
    if (!date || !name || !present || !holiday) {
      setErrors("Please fill in all fields.");
      if (!present || !holiday) {
        console.log("Please fill in all fields.");
      }
    }
    // if (!validateForm()) {
    //   // Handle validation errors
    //   setTimeout(() => {
    //     setErrors("");
    //   }, 1000);
    //   return;
    // }
    setErrors("");
    try {
      console.log("okay working");
      setErrors("wait...");
      console.log("okay working");
      const response = await Axios.post(`${host}/attend/add`, formData);
      console.log(response);
      setUpdate(!update);
      // dispatch(addprofile({ email: formData.email, name: formData.name }));
      setFormData({
        date: "",
        name: "",
        present: "Yes",
        holiday: "Yes",
      });
      setTimeout(() => {
        setErrors("");
      }, 100);
    } catch (err) {
      setErrors(err.message);
      console.log(err.message);
      setTimeout(() => {
        setErrors("");
      }, 2000);
    }
  };

  return (
    <div>
      <Adminnav setToken={setToken} />
      <div className="flex flex-col  bg-gray-300  h-screen p-8">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-lg">
          <div className="flex max-sm:flex-col justify-between">
            <h2 className="text-black font-bold text-4xl pb-3 mb-2">
              Attendance
            </h2>
            <Link to="/signup">
              <button className="group rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-[#1a57db] bg-[#1a57db] group hover:bg-[#1a57db] active:bg-[#1a57db] active:border-[#1a57db]">
                <span className="text-white group-hover:hidden font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                  Add User
                </span>
                <span className="absolute right-0 h-full w-10 rounded-lg bg-[#1a57db] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <svg
                    className="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19"></line>
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          <hr className=" text-black font-bold text-4xl  mb-5 h-px mt-5 bg-gray-300 border-0" />
          {/* table */}
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="">
                  <tr className="bg-blue-700 text-white text-xl ">
                    <th scope="col" className="px-6 py-3 font-medium">
                      Date Time
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Present
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                      Holiday
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((obj) => (
                    <tr
                      key={obj._id}
                      className="odd:bg-white text-lg odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {formatDate(obj.date)}
                      </th>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {obj.name}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {obj.present}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {obj.holiday}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex">
                        <div className=" m-auto p-auto">
                          <button
                            onClick={() => deleteentry(obj?._id)}
                            className="hover:text-white hover:bg-blue-700 p-2  rounded-full"
                          >
                            <MdDelete />
                          </button>
                        </div>
                        <div className=" m-auto p-auto w-1/2">
                          <button
                            onClick={() => handleModalOpen(obj)}
                            className="hover:text-white hover:bg-blue-700 p-2  rounded-full"
                          >
                            <MdEdit />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="rounded-md bg-blue-100 text-xl border-2 border-blue-500  placeholder-purple-400 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </th>
                    <td className="px-4 py-4">
                      <input
                        placeholder="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-md w-32 bg-blue-100 text-xl border-2 border-blue-500  placeholder-blue-500 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <select
                        className="rounded-md bg-blue-100 text-xl border-2 border-blue-500  placeholder-blue-500 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="present"
                        name="present"
                        value={formData.present}
                        onChange={handleChange}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        className="rounded-md bg-blue-100 text-xl border-2 border-blue-500  placeholder-blue-500 focus:text-violet-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="holiday"
                        name="holiday"
                        value={formData.holiday}
                        onChange={handleChange}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className=" px-6 py-4">
                      <button
                        onClick={handleOnSubmit}
                        className="group rounded-lg relative w-28 h-10 cursor-pointer flex items-center border border-[#1a57db] bg-[#1a57db] group hover:bg-[#1a57db] active:bg-[#1a57db] active:border-[#1a57db]"
                      >
                        <span className="text-white group-hover:hidden font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                          Add
                        </span>
                        <span className="absolute right-0 h-full w-10 rounded-lg bg-[#1a57db] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                          <svg
                            className="svg w-8 text-white"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                          </svg>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Updatemodal
          onClose={handleModalClose}
          project={project}
          setUpdate={setUpdate}
          update={update}
        />
      )}
    </div>
  );
};

export default Admin;
