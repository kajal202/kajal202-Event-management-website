import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ onClose }) {
    const navigate = useNavigate();
    const [User, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    let fieldName, value;
    const handleInputChange = (e) => {
        fieldName = e.target.name;
        value = e.target.value;
        setUser({ ...User, [fieldName]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = User;
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await res.json();
        console.log('res', res);
        if (res.status === 200) {
            window.alert('User created successfully');
            onClose(); 
            navigate('/Login');
        } else {
            window.alert('Oops, error');
        }
    };

    return (
        <div className="p-5 mt-10 flex justify-center">
            <div className="bg-white p-3 border border-1 shadow rounded text-left ">
                <form className="p-3 border-1">
                    <h1 className="pb-1 text-3xl font-semibold text-center">Create Account </h1>
                    <p className="pb-4 text-sm text-slate-400 text-center font-semibold ">Create account to start your journey towards events!!</p>

                    <div className="mb-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-900 ">Username </label>
                        <input name="name" type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                            placeholder="John" value={User?.name} onChange={handleInputChange} required
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 ">Email address</label>
                        <input name="email" type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-1.5"
                            placeholder="john.doe@company.com" value={User?.email} onChange={handleInputChange} required
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 ">Password</label>
                        <input name="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-1.5"
                            placeholder="......." value={User?.password} onChange={handleInputChange} required
                        />
                    </div>

                    <div className="mt-4">
                        <button type="button" className="text-white w-full bg-violet-700 hover:bg-violet-950 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-1.5 me-2 mb-2 focus:outline-none " onClick={handleSubmit}>REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
