import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (search = '') => {
    setLoading(true);
    try {
      const response = await axios.get(`events?search=${search}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchEvents(searchQuery);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  const truncateDescription = (description) => {
    return description.length > 45 ? description.substring(0, 45) + '...' : description;
  };

  return (
    <div className="container mx-auto p-6 mt-10 min-h-80">
      <h1 className="text-2xl uppercase font-semibold text-center mb-8">Find Events</h1>

      <form onSubmit={handleSearchSubmit} className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search events..."
          className="border border-gray-300 p-2 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="ml-2 px-4 py-1 bg-blue-800 text-white rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>

      {/* Spinner */}
      {loading && (
        <div className="flex justify-center items-center mb-8">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {events.length === 0 && !loading && (
        <div className="text-center text-xl text-gray-600">
          No events found.
        </div>
      )}
      {/* Displaying Events */}
      <div className=" gap-6 flex flex-wrap justify-center">
        {events.map((event) => (
          <div key={event._id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 max-w-80 relative">
            <div
              className=" h-36 bg-cover bg-center rounded-lg mb-2 border-1 border-gray-200 shadow-sm"
              style={{
                backgroundImage: `url(${event.image || '/sangeet1.jpg'})`,
              }}
            ></div>

            <h3 className="text-xl flex justify-between font-bold text-gray-800 ">{event.title}
              <span className=' text-gray-600 text-sm '>{formatDate(event.date)}</span></h3>
            <div className="flex items-center mt-1 text-sm text-gray-600">
              <span className="font-semibold mr-2">Attendees:</span>
              <span className="text-white bg-red-500 px-2 py-1 rounded-full">
                {event?.Attendees?.length || 0}
              </span>
            </div>
            <p className="text-sm text-gray-600 "><span className="font-semibold mr-2">Location : </span>{event?.location ? event.location : "xyz road sector 16A Dwarka, kakrola"}</p>
            <p className="mb-2 text-sm text-gray-600 font-semibold mt-4"> {truncateDescription(event?.description ? event?.description :
              "Its is going to be amazing as this event will be public for participate in someone's happy day.. ")}</p>

            <Link to={`/event-details/${event?._id}`} className="px-1 py-1 mt-2 font-semibold bg-red-900 text-white rounded-lg hover:bg-blue-600">
              Know More
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
