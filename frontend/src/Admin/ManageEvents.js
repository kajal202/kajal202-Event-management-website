import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [eventsPerPage] = useState(4); 

  // Fetch all events 
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/events?page=${currentPage}&limit=${eventsPerPage}`);
      setEvents(response.data); 
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the total count of events
  const fetchTotalCount = async () => {
    try {
      const response = await axios.get('/events/count');
      setTotalCount(response.data.totalCount); 
    } catch (error) {
      console.error('Error fetching total event count:', error);
    }
  };

  // Fetch events and total count when the page loads or when the page changes
  useEffect(() => {
    fetchEvents();
    fetchTotalCount();
  }, [currentPage]); 

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(totalCount / eventsPerPage)) {
      setCurrentPage(pageNumber); 
    }
  };

  // Total number of pages
  const totalPages = Math.ceil(totalCount / eventsPerPage);


    // Delete an event
    const deleteEvent = async (eventId) => {
      if (window.confirm('Are you sure you want to delete this event?')) {
        try {
          await axios.delete(`/events/${eventId}`);
          fetchEvents(); 
        } catch (error) {
          console.error('Error deleting event:', error);
        }
      }
    };

  return (
    <div className="container mx-auto p-6 mt-10 min-h-80">
      <h1 className="text-2xl font-semibold text-center mb-8">Manage Events</h1>

      {/* Spinner for loading data state */}
      {loading ? (
        <div className="flex justify-center items-center mb-8">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-6 py-3 border-b border-gray-300">Event Title</th>
                <th className="px-6 py-3 border-b border-gray-300">Category</th>
                <th className="px-6 py-3 border-b border-gray-300">No. of Attendees</th>
                <th className="px-6 py-3 border-b border-gray-300">Update</th>
                <th className="px-6 py-3 border-b border-gray-300">Delete</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-300">{event.title}</td>
                  <td className="px-6 py-3 border-b border-gray-300">{event.category}</td>
                  <td className="px-6 py-3 border-b border-gray-300">{event.attendees}</td>
                  <td className="px-6 py-3 border-b border-gray-300">
                    <Link to={`/update-event/${event._id}`} className="text-yellow-600 hover:text-yellow-800">
                      <FaEdit className="w-10" />
                    </Link>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300">
                    <button
                      onClick={() => deleteEvent(event._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <RiDeleteBin6Fill className="w-10" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mx-2"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageEvents;
