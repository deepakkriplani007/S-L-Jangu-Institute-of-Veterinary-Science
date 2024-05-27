import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addprofile } from "../action/Profile";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
const Forgot = () => {
  const navigate = useNavigate();
  const host = import.meta.env.VITE_REACT_APP_HOST;
  const [submitbutton, setSubmitbutton] = useState(false);
  const [value, setValue] = useState({
    token: "",
    email: "",
    pass: "",
    confirmpass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const handleOnSubmit = async () => {
    if (!value.token || !value.confirmpass || !value.pass) {
      setErrorMsg("Please enter all fields");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }

    if (value.pass.length < 5) {
      setErrorMsg("Please enter password greater then 5 characters");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }
    if (value.pass !== value.confirmpass) {
      setErrorMsg("Please enter same password and confirm password");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }
    setErrorMsg("");
    // console.log(value);
    // setSubmitbutton(true);
    const formData = {
      password: value.pass,
      passwordconfirm: value.confirmpass,
    };

    try {
      setErrorMsg("wait...");
      const response = await Axios.post(
        `${host}/resetpassword/${value.token}`,
        formData
      );
      setErrorMsg(response.data.message);
      setTimeout(() => {
        setErrorMsg("");
        navigate("/login");
      }, 500);
    } catch (error) {
      setErrorMsg(error.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      setSubmitbutton(false);
    }
  };
  return (
    <div>
      <div className="">
        {/* <img className="w-[550px] " src={Logo} alt="" /> */}
      </div>
      <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-green-400  shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] pointer-events-none"></div>
        <div className=" flex flex-col items-center justify-center h-screen">
          <div className="border-4 border-gray-700 hover:border-gray-400 w-full max-w-lg bg-[#f5f5f5] rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reset Password
            </h2>
            <div className="flex flex-col">
              <input
                type="token"
                className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Enter Token"
                onChange={(event) =>
                  setValue((prev) => ({
                    ...prev,
                    token: event.target.value,
                  }))
                }
              />
              <input
                type="password"
                className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Password"
                onChange={(event) =>
                  setValue((prev) => ({
                    ...prev,
                    pass: event.target.value,
                  }))
                }
              />

              <input
                type="confirmpassword"
                className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="confirmpassword"
                onChange={(event) =>
                  setValue((prev) => ({
                    ...prev,
                    confirmpass: event.target.value,
                  }))
                }
              />

              <div className="flex items-center justify-between flex-wrap h-10">
                <b className="font-bold text-[0.875rem] text-[#ff3300]">
                  {errorMsg}
                </b>
              </div>

              <button
                disabled={submitbutton}
                onClick={handleOnSubmit}
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
