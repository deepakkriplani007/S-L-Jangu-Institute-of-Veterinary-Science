import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addprofile, remove } from "../action/Profile";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Navbar from "../components/Navbar";
const Login = ({ setToken, setRole }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const host = import.meta.env.VITE_REACT_APP_HOST;
  const [submitbutton, setSubmitbutton] = useState(false);
  const [value, setValue] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleforgot = async (e) => {
    console.log("here");
    if (!value.email) {
      setErrorMsg("Please enter email address");
      console.log("Please enter email address");
      setTimeout(() => {
        setErrorMsg("");
      }, 700);
      return;
    }
    setErrorMsg("");
    const formData = {
      email: value.email,
    };
    try {
      setErrorMsg("wait...");
      const response = await Axios.post(`${host}/forgotpassword`, formData);
      setErrorMsg(response.data.message + " Check spam also");

      setTimeout(() => {
        setErrorMsg("");
        navigate("/forgot");
      }, 3000);
    } catch (error) {
      setErrorMsg(error.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      setSubmitbutton(false);
    }
  };
  const handleOnSubmit = async () => {
    if (!value.email || !value.pass) {
      setErrorMsg("Please enter all fields");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }

    if (value.pass.length < 5) {
      setErrorMsg("Please enter password is incorrect");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }

    setErrorMsg("");
    // console.log(value);
    setSubmitbutton(true);
    const formData = {
      email: value.email,
      password: value.pass,
    };
    try {
      setErrorMsg("Wait..");
      const response = await Axios.post(`${host}/login`, formData);
      console.log(response.data.token);
      setRole(response.data.role);
      dispatch(
        addprofile({
          email: value.email,
          name: response.data.name,
          token: response.data.token,
          role: response.data.role,
          scholarNumber: response.data.scholarNumber,
          fatherName: response.data.fatherName,
          motherName: response.data.motherName,
          mobile: response.data.mobile,
          dateOfBirth: response.data.dateOfBirth,
          gender: response.data.gender,
        })
      );
      console.log(response.data.role);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("id", response.data.id);
      // console.log("pikA");
      setTimeout(() => {
        setToken(null);
        dispatch(remove());
        localStorage.removeItem("token");
      }, 2100000);
      console.log("vika");
      setToken(response.data.token);
      setSubmitbutton(false);
      setTimeout(() => {
        setErrorMsg("");
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      setErrorMsg(err.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      setSubmitbutton(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="">
        {/* <img className="w-[550px] " src={Logo} alt="" /> */}
      </div>
      <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-green-400  shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] pointer-events-none"></div>
        <div className=" flex flex-col items-center justify-center h-screen">
          <div className="border-4 border-gray-700 hover:border-gray-400 w-full max-w-lg bg-[#f5f5f5] rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Login</h2>
            <form className="flex flex-col">
              <input
                type="email"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email address"
                onChange={(event) =>
                  setValue((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              />
              <input
                type="password"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Password"
                onChange={(event) =>
                  setValue((prev) => ({
                    ...prev,
                    pass: event.target.value,
                  }))
                }
              />
              <div className="flex items-center justify-between flex-wrap">
                <label className="text-sm text-gray-900 cursor-pointer"></label>
                <Link
                  onClick={handleforgot}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              {/* <div className="mt-4">
                <p className="text-gray-900">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Signup
                  </Link>
                </p>
              </div> */}
              <div className="mt-4 h-4 flex items-center">
                <b className="font-bold text-[1rem] text-[#ff3300]">
                  {errorMsg}
                </b>
              </div>
              <button
                disabled={submitbutton}
                onClick={handleOnSubmit}
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
