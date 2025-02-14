import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EventUpdateForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    attendees: '',
    location: '',
    category: '',
  });

  // Fetch the event details 
  const fetchEvent = async () => {
    try {
      const response = await fetch(`/events/${id}`);
      if (!response.ok) {
        throw new Error('Event not found');
      }
      const data = await response.json();
      setEvent(data); 
    } catch (error) {
      console.error('Error fetching event:', error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event), 
      });

      if (response.ok) {
        console.log('Event updated successfully');
        window.alert('Event updated successfully');
        navigate(`/manage-events`); 
      } else {
        console.error('Failed to update event');
        window.alert('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      window.alert('Error updating event');
    }
  };

  return (
    <div className="mt-20 mb-10">
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Update Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={event.title}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            value={event.description}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="2"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date-time-local"
            name="date"
            id="date"
            value={event.date}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={event.location}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={event.category}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Event
        </button>
      </form>
    </div>
    </div>
  );
};

export default EventUpdateForm;
