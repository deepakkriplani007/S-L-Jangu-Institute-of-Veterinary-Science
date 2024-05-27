import React, { useState } from "react";
import Axios from "axios";
import { addprofile } from "../action/Profile";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Signup = () => {
  const host = import.meta.env.VITE_REACT_APP_HOST;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    role: "user",
    scholarNumber: "-",
    name: "",
    fatherName: "-",
    motherName: "-",
    mobile: "1234567890",
    email: "",
    dateOfBirth: "2002-01-24",
    gender: "male",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState("");
  const validateForm = () => {
    const {
      scholarNumber,
      name,
      fatherName,
      motherName,
      mobile,
      email,
      dateOfBirth,
      password,
      confirmPassword,
    } = formData;
    const newErrors = {};

    // Check if all fields are filled
    if (
      !scholarNumber ||
      !name ||
      !fatherName ||
      !motherName ||
      !mobile ||
      !email ||
      !dateOfBirth ||
      !password ||
      !confirmPassword
    ) {
      newErrors.emptyFields = "Please fill in all fields.";
      setErrors("Please fill in all fields.");
      return Object.keys(newErrors).length === 0;
    }
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.invalidEmail = "Please enter a valid email address.";
      setErrors("Please enter a valid email address.");
      return Object.keys(newErrors).length === 0;
    }

    // Check mobile number format
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      newErrors.invalidMobile = "Please enter a 10-digit mobile number.";
      setErrors("Please enter a 10-digit mobile number.");
      return Object.keys(newErrors).length === 0;
    }

    return Object.keys(newErrors).length === 0;
  };
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Handle validation errors
      console.log("Validation errors:", errors);
      setTimeout(() => {
        setErrors("");
      }, 1000);
      return;
    }
    if (formData.password.length < 5) {
      setErrors("Please enter password greater then 5 characters");
      setTimeout(() => {
        setErrors("");
      }, 1000);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrors("Please enter same password and confirm password");
      setTimeout(() => {
        setErrors("");
      }, 1000);
      return;
    }
    console.log("okay working");
    setErrors("");
    console.log("okay working");
    try {
      console.log("okay working");
      setErrors("wait...");
      console.log("okay working");
      const response = await Axios.post(`${host}/createuser`, formData);
      setErrors("account is created");
      console.log(response);
      // dispatch(addprofile({ id: response.data.id, name: formData.name }));
      // dispatch(addprofile({ email: formData.email, name: formData.name }));
      console.log("okay working");
      console.log(response.data.token);
      // localStorage.setItem("token", response.data.token);
      // setTimeout(() => {
      //   setToken(null);
      //   localStorage.removeItem("token");
      // }, 3600000);
      console.log("okay working");
      // setToken(response.data.token);

      setTimeout(() => {
        setErrors("");
        // navigate("/");
      }, 100);
    } catch (err) {
      setErrors(err.message);
      console.log(err.message);
      setTimeout(() => {
        setErrors("");
      }, 2000);
    }
  };
  // console.log(formData);
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gray-300  h-screen p-16">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-black font-bold text-4xl pb-3 mb-2">
              Student Registration
            </h2>
            <div>
              <label className="text-black" htmlFor="gender">
                Role<span className="text-red-600">*</span>
              </label>
              <select
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <hr className="h-px mt-5 bg-gray-300 border-0" />
          <div>
            <div className="mt-4 flex flex-row space-x-8">
              {formData.role == "user" && (
                <div className="flex-1">
                  <label className="text-black" htmlFor="scholarNumber">
                    Scholar Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    placeholder="Scholar Number"
                    className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    id="scholarNumber"
                    type="text"
                    name="scholarNumber"
                    value={formData.scholarNumber}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="flex-1">
                <label className="text-black" htmlFor="name">
                  Name of User <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Name of User"
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {formData.role == "user" && (
              <div className="mt-4 flex flex-row space-x-8">
                <div className="flex-1">
                  <label className="text-black" htmlFor="fatherName">
                    Father's Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    placeholder="Father's Name"
                    className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    id="fatherName"
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex-1">
                  <label className="text-black" htmlFor="motherName">
                    Mother's Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    placeholder="Mother's Name"
                    className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    id="motherName"
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-row space-x-8">
              {formData.role == "user" && (
                <div className="flex-1">
                  <label className="text-black" htmlFor="mobile">
                    Mobile No <span className="text-red-600">*</span>
                  </label>
                  <input
                    placeholder="Mobile No"
                    className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    id="mobile"
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="flex-1">
                <label className="text-black" htmlFor="email">
                  Email ID <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Email ID"
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {formData.role == "user" && (
              <div className="mt-4 flex flex-row space-x-8">
                <div className="flex-1">
                  <label className="text-black" htmlFor="dateOfBirth">
                    Date of Birth<span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex-1">
                  <label className="text-black" htmlFor="gender">
                    Gender<span className="text-red-600">*</span>
                  </label>
                  <select
                    className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-row space-x-8">
              <div className="flex-1">
                <label className="text-black" htmlFor="password">
                  Create Password <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Create Password"
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex-1">
                <label className="text-black" htmlFor="confirmPassword">
                  Confirm Password <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Confirm Password"
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4 h-4 flex items-center">
              <b className="font-bold text-[1rem] text-[#ff3300]">{errors}</b>
            </div>
            <div className="mt-8 flex justify-center ">
              <button
                className="  py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
                onClick={handleOnSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
