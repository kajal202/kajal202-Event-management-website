import React, { useState } from "react";
import { useLogin } from "../context/LoginContext";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function GuestLogin() {
    const [LoginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const { handleGuestLogin } = useLogin();
    let fieldName, value;

    const handleInputChange = (e) => {
        fieldName = e.target.name;
        value = e.target.value;
        setLoginDetails({ ...LoginDetails, [fieldName]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleGuestLogin(LoginDetails);
    };

    return (
        <div className="min-h-screen ">
            <div className="p-10 container mx-auto mt-10 flex justify-center">
                <div className="p-8 pt-7 bg-white rounded-lg border-1 border-pink-400 shadow-md shadow-red-400 w-full max-w-md">
                    <form className="px-5">
                        <h4 className="mb-2 text-center text-2xl font-semibold text-pink-800">
                            Login As Guest
                        </h4>
                        <p className="mb-8 text-center text-sm font-semibold text-slate-500">
                            Welcome Back!
                        </p>

                        <div className="mb-6 relative min-w-[200px] flex items-center border-2 border-pink-400 rounded-lg bg-transparent">
                          <div className="flex items-center pl-3">
                            <FaEnvelope className="text-pink-600" size={20} />
                          </div>
                          <div className="border-r-2 border-pink-600 h-6 mx-3"></div> 
                          <input
                            name="email"
                            type="email"
                            value={LoginDetails.email}
                            onChange={handleInputChange}
                            required
                            className="peer h-full w-full pl-2 pr-4 py-2 text-sm font-medium text-pink-700 outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                          />
                        </div>

                        <div className="mb-6 relative min-w-[200px] flex items-center border-2 border-pink-400 rounded-lg bg-transparent">
                          <div className="flex items-center pl-3">
                            <FaLock className="text-pink-600" size={20} />
                          </div>
                          <div className="border-r-2 border-pink-600 h-6 mx-3"></div>
                          <input
                            name="password"
                            type="password"
                            value={LoginDetails.password}
                            onChange={handleInputChange}
                            required
                            className="peer h-full w-full pl-2 pr-4 py-2 text-sm font-medium text-pink-700 outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                          />
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-pink-600 to-pink-800 text-white font-semibold rounded-lg py-2 mt-5 mb-4 hover:shadow-lg hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        > LOGIN AS GUEST
                        </button>
            
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link to="/signup" className="font-semibold text-pink-600 hover:underline">
                                    Create Now
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GuestLogin;
