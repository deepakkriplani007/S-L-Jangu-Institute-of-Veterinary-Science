import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Payfee = () => {
  const [formData, setFormData] = useState({
    year: "1",
    semester: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    // Perform form submission logic, e.g., API call or form validation
    console.log("Form data:", formData);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col  bg-gray-300  h-screen p-8">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-lg">
          <h2 className="text-black font-bold text-4xl pb-3 mb-2">
            Pay Fee For
            <hr className="h-px mt-5 bg-gray-300 border-0" />
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 sm:flex flex-row space-x-2 max-sm:space-y-4">
              <div className="flex gap-x-2 w-1/2">
                <label className="text-black w-1/4 " htmlFor="Year">
                  Year <span className="text-red-600">*</span>
                </label>
                <select
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="flex gap-x-2 w-1/2 sm:pl-4">
                <label className="text-black " htmlFor="semester">
                  Semester<span className="text-red-600">*</span>
                </label>
                <select
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-center ">
              <button
                className="  py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payfee;
