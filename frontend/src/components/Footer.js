import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="p-4 bg-pink-200 text-black py-5 ">
            <div className='flex flex-row  justify-center '>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {/* Footer Info Section */}
                <div className="footer-info ">
                    <h4 className='py-2 font-semibold'>EventMaster</h4>
                    <p className='text-sm'>
                        Your one-stop solution for managing events. 
                        EventMaster is a leading event  management platform
                        that connects event organizers with attendees.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-links ">
                    <h4 className='py-2 font-semibold'>Quick Links</h4>
                    <ul className='text-sm'>
                        <li><a href="/" className="hover:text-pink-700">Home</a></li>
                        <li><a href="/about-us" className="hover:text-pink-700">About Us</a></li>
                        <li><a href="/contact-us" className="hover:text-pink-700">Contact Us</a></li>
                    </ul>
                </div>

                {/* Our Reach Section */}
                <div className="footer-info ">
                    <h2 className='py-2 font-semibold'>Our Reach</h2>
                    <div className='text-sm flex flex-col '>
                        <img src='/map.png' className='w-36 mb-2' />
                        <p className='text-sm'>Address: 123 Event Avenue, New Delhi</p>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="footer-social ">
                    <h4 className='py-2 font-semibold'>Follow Us</h4>
                    <ul className='text-sm'>
                        <li className='flex gap-x-1 '><FaFacebookSquare className=' text-pink-900' /><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700">Facebook</a></li>
                        <li className='flex gap-x-1 '><FaTwitterSquare className='text-pink-900'/><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700">Twitter</a></li>
                        <li className='flex gap-x-1 '><FaInstagramSquare className='text-pink-900'/><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700">Instagram</a></li>
                    </ul>
                </div>

            </div>
            </div>
            <hr className='my-4' />
            <div className="footer-bottom text-center">
                <p className="text-sm">&copy; 2025 EventMaster. All Rights Reserved.</p>
            </div>
           

        </footer>
    );
};

export default Footer;
