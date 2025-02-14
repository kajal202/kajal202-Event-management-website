import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import SignUp from './SignUp';
import { useLogin } from '../context/LoginContext';
import { CgEventbrite } from "react-icons/cg";

const Header = () => {
  const { Auth, handleLogout } = useLogin();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  

  const toggleForm = () => setIsOpenForm(!isOpenForm);
  const toggleMenu = () => setIsOpen(!isOpen);

  const renderMobileLinks = () => {
    if (Auth.isLoggedIn) {
      if (Auth?.user?.role === 'Admin') {
        return (
          <>
            <Link to='/dashboard' className="text-white">Dashboard</Link>
            <Link to='/create-event' className="text-white">Create Event</Link>
            <Link to='/manage-events' className="text-white">Manage Events</Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        );
      } else if (Auth?.user?.role === 'guest') {
        return (
          <>
            <Link to='/' className="text-white">Home</Link>
            <Link to='/about-us' className="text-white">About Us</Link>
            <Link to='/events' className="text-white">Events</Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        );
      } 
    } else {
      return (
        <>
          <Link to='/' className="text-white">Home</Link>
          <Link to='/about-us' className="text-white">About Us</Link>
          <Link to='/signup' className="text-white">SignUp</Link>
          <Link to='/login' className="text-white">Login</Link>
        </>
      );
    }
  };

  const renderDesktopLinks = () => {
    if (Auth.isLoggedIn) {
      if (Auth?.user?.role === 'Admin') {
        return (
          <>
            <Link to='/dashboard' className="text-white hover:underline">Dashboard</Link>
            <Link to='/create-event' className="text-white hover:underline">Create Event</Link>
            <Link to='/manage-events' className="text-white hover:underline">Manage Events</Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        );
      } else if (Auth?.user?.role === 'guest') {
        return (
          <>
            <Link to='/' className="text-white hover:underline">Home</Link>
            <Link to='/about-us' className="text-white hover:underline">About Us</Link>
            <Link to='/events' className="text-white hover:underline">Events</Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        );
      }
    } else {
      return (
        <>
          <Link to='/' className="text-white hover:underline">Home</Link>
          <Link to='/about-us' className="text-white hover:underline">About Us</Link>
          <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600" onClick={toggleForm}>SignUp</button>
          <Link to='/login' className="text-white hover:underline">Login</Link>
          <Modal isOpen={isOpenForm} onClose={toggleForm}>
            <SignUp onClose={toggleForm} />
          </Modal>
        </>
      );
    }
  };

  return (
    <nav className="w-full bg-pink-800 px-3 py-2 fixed top-0 left-0 flex justify-between items-center z-10">
      <div className="flex items-center justify-center relative">
      {/* Icon */}
      <CgEventbrite className=" text-3xl text-orange-950" />

      {/* Text */}
      <span className="absolute ml-14 text-lg font-bold text-orange-950 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        ventMaster
      </span>
    </div>

      {/* Toggle Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>

      {/* header Links */}
      <div className="hidden lg:flex flex-row items-center gap-10 mr-8">
        {renderDesktopLinks()}
      </div>

      {/* toggle Links */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center p-4 gap-4">
          {renderMobileLinks()}
        </div>
      )}
    </nav>
  );
};

export default Header;
