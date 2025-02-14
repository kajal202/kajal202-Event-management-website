import React from 'react';
import { FaRegLightbulb, FaHandsHelping, FaLeaf, FaUsers, FaTrophy, FaPaintBrush } from 'react-icons/fa';

const MissionPage = () => {
    return (
        <div className="bg-blue-600 py-10 w-full">
            <section className="text-center py-10 bg-blue-600 text-white">
                <h1 className="text-4xl font-bold">Our Mission</h1>
                <p className="mt-4 text-xl">We are driven by a passion for creating unforgettable events and experiences.</p>
            </section>

            {/* Mission List */}
            <section className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Mission Item 1 - Innovation */}
                    <div className="bg-white p-6 rounded-lg text-gray-600 shadow-xl shadow-gray-800 hover:text-white hover:bg-blue-900 hover:shadow-lg">
                        <div className="flex justify-center items-center text-4xl mb-2">
                            <FaRegLightbulb className="text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-black text-center">Innovation</h3>
                        <p className="mt-4">We continuously innovate and create new ways to deliver exceptional events and experiences for our clients.</p>
                    </div>

                    {/* Mission Item 2 - Customer Satisfaction */}
                    <div className="bg-white p-6 rounded-lg text-gray-600 shadow-xl shadow-gray-800 hover:text-white hover:bg-blue-900 hover:shadow-lg">
                        <div className="flex justify-center items-center text-4xl mb-2">
                            <FaHandsHelping className="text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-black text-center">Customer Satisfaction</h3>
                        <p className="mt-4">Our primary focus is on understanding and exceeding our client's expectations, ensuring their complete satisfaction.</p>
                    </div>

                    {/* Mission Item 3 - Sustainability */}
                    <div className="bg-white p-6 rounded-lg text-gray-600 shadow-xl shadow-gray-800 hover:text-white hover:bg-blue-900 hover:shadow-lg">
                        <div className="flex justify-center items-center text-4xl mb-2">
                            <FaLeaf className="text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-black text-center">Sustainability</h3>
                        <p className="mt-4">We are committed to sustainability by integrating eco-friendly practices into every aspect of our event management services.</p>
                    </div>

                    {/* Mission Item 4 - Collaboration */}
                    <div className="bg-white p-6 rounded-lg text-gray-600 shadow-xl shadow-gray-800 hover:text-white hover:bg-blue-900 hover:shadow-lg">
                        <div className="flex justify-center items-center text-4xl mb-2">
                            <FaUsers className="text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-black text-center">Collaboration</h3>
                        <p className="mt-4">We believe in the power of teamwork and collaboration, working closely with clients, vendors, and partners to bring events to life.</p>
                    </div>

                    {/* Mission Item 5 - Excellence */}
                    <div className="bg-white p-6 rounded-lg text-gray-600 shadow-xl shadow-gray-800 hover:text-white hover:bg-blue-900 hover:shadow-lg">
                        <div className="flex justify-center items-center text-4xl mb-2">
                            <FaTrophy className="text-yellow-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-black text-center">Excellence</h3>
                        <p className="mt-4">We strive for excellence in every project we take on, ensuring the highest standards are met throughout the entire event process.</p>
                    </div>

                    {/* Mission Item 6 - Creativity */}
                    <div className="bg-white p-6 rounded-lg text-gray-600 shadow-xl shadow-gray-800 hover:text-white hover:bg-blue-900 hover:shadow-lg">
                        <div className="flex justify-center items-center text-4xl mb-2">
                            <FaPaintBrush className="text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-black text-center">Creativity</h3>
                        <p className="mt-4">We foster creativity and think outside the box to design unique and memorable experiences tailored to each client.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionPage;
