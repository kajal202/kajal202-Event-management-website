import React, { useState } from "react";
import { useLogin } from "../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Import icons from react-icons

function SignIn() {
  const navigate = useNavigate();

  const handleLoginAsGuest = () => {
    navigate("/guest-login");
  };

  const [LoginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const { handleLogin } = useLogin();
  let fieldName, value;

  const handleInputChange = (e) => {
    fieldName = e.target.name;
    value = e.target.value;
    setLoginDetails({ ...LoginDetails, [fieldName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(LoginDetails);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-400 via-red-300 to-red-200">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center"></div>
        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-white transform skew-x-[-45deg]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"></div>
      </div>

      <div className="relative z-0 p-10 container mx-auto mt-10 flex justify-center">
        <div className="bg-white p-5 pt-7 border rounded-lg border-1 shadow text-left w-full max-w-lg">
          <form className="px-5">
            <h4 className="mb-2 text-center text-2xl font-semibold text-black">
              Login to your Account
            </h4>
            <p className="mb-8 text-center text-sm font-semibold text-slate-500">
              Welcome Back! Resume your Journey
            </p>

            <div className="mb-4 relative min-w-[200px]">
              <AiOutlineMail className="absolute left-3 top-3 text-gray-500" />
              <input
                name="email"
                type="email"
                value={LoginDetails.email}
                onChange={handleInputChange}
                required
                className="peer h-full w-full pl-10 pr-3 rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline-0 transition-all focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label
                htmlFor="email"
                className="font-semibold absolute left-0 -top-1.5 text-[11px] leading-tight text-gray-600 pointer-events-none"
              >
                Email Address *
              </label>
            </div>

            <div className="mb-1 relative min-w-[200px]">
              <AiOutlineLock className="absolute left-3 top-3 text-gray-500" />
              <input
                name="password"
                type="password"
                value={LoginDetails.password}
                onChange={handleInputChange}
                required
                className="peer h-full w-full pl-10 pr-3 rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm text-blue-gray-700 font-normal outline-0 transition-all focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label
                htmlFor="password"
                className="font-semibold absolute left-0 -top-1.5 text-[11px] leading-tight text-gray-600 pointer-events-none"
              >
                Password *
              </label>
            </div>

            <button
              type="button"
              className="mt-5 mb-2 text-white w-full bg-violet-700 border-violet-800 border-1 font-medium rounded text-sm hover:text-white hover:bg-violet-950 py-1 focus:outline-none"
              onClick={handleSubmit}
            >
              LOGIN
            </button>

            <button
              onClick={handleLoginAsGuest}
              type="button"
              className="text-violet-600 w-full bg-transparent border-violet-800 border hover:bg-violet-800 font-medium rounded text-sm hover:text-white p-1 m-1 mb-4 focus:outline-none"
            >
              LOGIN AS GUEST
            </button>

            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="ms-1 font-semibold underline text-violet-600">
                  Create Now
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
