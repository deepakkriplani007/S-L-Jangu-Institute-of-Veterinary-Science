import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Axios from "axios";

const Profile = () => {
  const host = import.meta.env.VITE_REACT_APP_HOST;
  const [formData, setFormData] = useState({
    id: "",
    role: "user",
    scholarNumber: "-",
    name: "",
    fatherName: "-",
    motherName: "-",
    mobile: "1234567890",
    dateOfBirth: "",
    gender: "male",
  });
  const [errors, setErrors] = useState("");
  const [id, setId] = useState();
  const fetchdata = async (storedid) => {
    try {
      const response = await Axios.get(`${host}/finduser/${storedid}`);
      console.log(response.data.user);
      setFormData({
        id: response.data.user._id,
        role: response.data.user.role,
        scholarNumber: response.data.user.scholarNumber,
        name: response.data.user.name,
        fatherName: response.data.user.fatherName,
        motherName: response.data.user.motherName,
        mobile: response.data.user.mobile,
        email: response.data.user.email,
        dateOfBirth: formatDate(response.data.user.dateOfBirth),
        gender: response.data.user.gender,
      });
    } catch (error) {}
  };
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    const storedid = localStorage.getItem("id");
    if (storedid) {
      setId(id);
      fetchdata(storedid);
      console.log(storedid);
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    const { scholarNumber, name, fatherName, motherName, mobile, dateOfBirth } =
      formData;
    const newErrors = {};

    // Check if all fields are filled
    if (
      !scholarNumber ||
      !name ||
      !fatherName ||
      !motherName ||
      !mobile ||
      !dateOfBirth
    ) {
      newErrors.emptyFields = "Please fill in all fields.";
      setErrors("Please fill in all fields.");
      return Object.keys(newErrors).length === 0;
    }
    // Check email format

    // Check mobile number format
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      newErrors.invalidMobile = "Please enter a 10-digit mobile number.";
      setErrors("Please enter a 10-digit mobile number.");
      return Object.keys(newErrors).length === 0;
    }

    return Object.keys(newErrors).length === 0;
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

    setErrors("");
    console.log("okay working");
    try {
      setErrors("Updating...");
      console.log("okay working");
      const response = await Axios.post(`${host}/updateuser`, formData);
      setFormData({
        id: response.data.user._id,
        role: response.data.user.role,
        scholarNumber: response.data.user.scholarNumber,
        name: response.data.user.name,
        fatherName: response.data.user.fatherName,
        motherName: response.data.user.motherName,
        mobile: response.data.user.mobile,
        email: response.data.user.email,
        dateOfBirth: formatDate(response.data.user.dateOfBirth),
        gender: response.data.user.gender,
      });
      setErrors("Profile is updated successfully");
      console.log(response);
      // dispatch(addprofile({ id: response.data.id, name: formData.name }));
      // dispatch(addprofile({ email: formData.email, name: formData.name }));
      console.log("okay working");
      console.log("okay working");
      setTimeout(() => {
        setErrors("");
        // navigate("/");
      }, 1000);
    } catch (err) {
      setErrors(err.message);
      console.log(err.message);
      setTimeout(() => {
        setErrors("");
      }, 2000);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col   bg-gray-300  h-screen p-16 w-full">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-black font-bold text-4xl pb-3 mb-2">
              User Profile
            </h2>
            <div></div>
          </div>
          <hr className="h-px mt-px mb-8 bg-gray-300 border-0" />
          <div>
            <div className="mt-4 flex flex-row space-x-8">
              {formData.role == "user" && (
                <div className="flex-1">
                  <label className="text-black" htmlFor="scholarNumber">
                    Scholar Number <span className="text-red-600">*</span>
                  </label>
                  <div className="w-full bg-white p-2 rounded-md">
                    {formData.scholarNumber}
                  </div>
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

            <div className="mt-4 h-4 flex items-center">
              <b className="font-bold text-[1rem] text-[#ff3300]">{errors}</b>
            </div>
            <div className="mt-8 flex justify-center ">
              <button
                className="  py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
                onClick={handleOnSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
