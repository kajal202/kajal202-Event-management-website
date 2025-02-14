import React from "react";
import { useNavigate } from "react-router-dom";
const { createContext, useContext, useState, } = require("react");

export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {

  const [Auth, setAuth] = useState({ isLoggedIn: false, user: null });
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      setAuth({ isLoggedIn: false, user: null });
      navigate("/");
      window.alert("User Logged Out");
      console.log(json);
    } catch (err) {
      window.alert("Opps ! error occured");
    }
  };

  const handleLogin = async (LoginDetails) => {
    const { email, password } = LoginDetails;
    const res = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();

    if (res.status === 200 && json.userFound.role === 'Admin') {
      setAuth({ isLoggedIn: true, user: json.userFound });
      window.alert('User logined successfully');
        navigate('/Dashboard');
      } else {
        window.alert('Invalid credentials');
      }
    };

    const handleGuestLogin = async (LoginDetails) => {
      const { email, password } = LoginDetails;
      const res = await fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
  
      if (res.status === 200 && json.userFound.role === 'guest') {
        setAuth({ isLoggedIn: true, user: json.userFound });
        window.alert('User logined successfully');
          navigate('/Dashboard');
        } else {
          window.alert('Invalid credentials or unauthorized');
        }
      };


    return (
      <LoginContext.Provider value={{
        Auth, handleLogout, handleLogin, handleGuestLogin,
      }}>
        {children}
      </LoginContext.Provider>
    );
  };

  export const useLogin = () => {
    return useContext(LoginContext);
  };

