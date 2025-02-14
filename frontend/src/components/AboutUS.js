import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="pt-[80px] pb-[80px]">
            <div className="container mx-auto px-6">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-gray-700 mb-8">
                        We are EventMaster, a leading event management company dedicated to creating
                        unforgettable experiences. Whether it's a wedding, corporate event, birthday party,
                        or any special occasion, we handle everything from planning to execution with the
                        utmost precision and care.
                    </p>
                </section>

                <section className="my-12">
                    <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Team</h2>
                    <div className="flex flex-wrap justify-center gap-20">
                        <div className="team-member text-center p-8 bg-gray-100 rounded-full  text-gray-700 shadow-lg hover:text-white hover:bg-pink-700 ">
                            <FaUserCircle className="p-4 w-20 h-20 rounded-full mx-auto  " />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="">CEO & Founder</p>
                        </div>

                        <div className="team-member text-center p-6 bg-gray-100 rounded-full text-gray-700 shadow-lg hover:text-white hover:bg-pink-700">
                            <FaUserCircle className="p-4 w-20 h-20 rounded-full mx-auto " />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="">Event Coordinator</p>
                        </div>

                        <div className="team-member text-center p-6 bg-gray-100 rounded-full shadow-lg text-gray-700  hover:text-white hover:bg-pink-700">
                            <FaUserCircle className="p-4 w-20 h-20 rounded-full mx-auto " />
                            <h3 className="text-xl font-semibold">Emily Johnson</h3>
                            <p className="">Creative Director</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
