import React from 'react';
import EventSlider from './EventSlider';
import MissionPage from './Missions'; 
const Home = () => {
  

  return (
    <>

      <div className="p-2 ">
        <div className="flex flex-col items-center justify-center bg-gray-800">
          <EventSlider />
          <section className="p-6 text-center ">
            <h2 className="text-2xl font-semibold text-orange-400">Make Your Event Unforgettable</h2>
            <p className="mt-2 text-gray-400 font-semibold">We handle everything, from planning to execution.</p>
          </section>
        </div>
      </div>
       {/* Our missions */}
      <div className="flex flex-col items-center justify-center ">
        <MissionPage />
      </div>
      
      {/* Contact Us Section  */}
<section className="contact-us py-20 bg-slate-200 text-center text-black">
  <h2 className="text-4xl font-bold mb-4">Join Us in Our Mission</h2>
  <p className="mt-4 text-xl text-gray-400 font-semibold">Become part of our journey and help us create unforgettable events.</p>
  <a 
    href="/contact-us" 
    className="mt-6 inline-block bg-green-600 text-white py-3 px-10 rounded-full text-lg font-semibold hover:bg-green-500 transform transition duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"> 
      Contact Us
  </a>
</section>


    </>
  );
};

export default Home;
