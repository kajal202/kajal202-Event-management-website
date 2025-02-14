import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`/events/${id}`);
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError('Failed to fetch event details');
      }
    };
    fetchEventDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10 min-h-80">
        <p className="mt-2">Loading event details...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-5">{error}</div>;
  }

  return (
    <div className="p-14 h-screen m-10">
      <h1 className="text-2xl uppercase font-semibold text-center mb-4 text-black">
        Event Details
      </h1>
      <div className="flex flex-row gap-x-10">
        <div className="mt-5">
          <img
            src={event.image ? event.image : '/sangeet1.jpg'}
            alt={event?.title || 'Event'} // Ensure alt text is also dynamic
            className="w-full max-h-60 object-cover rounded-lg"
          />
          <h2 className="my-5 text-4xl font-semibold text-gray-800">{event.title}</h2>
        </div>

        <div className="mx-auto p-6 mt-5 min-h-48">
          <div className="max-w-md mx-auto p-6">
            <p className="text-gray-700 font-medium">
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </p>

            <p className="py-5 text-gray-700 font-medium">
              <strong>No. of Attendees:</strong> {event.attendees}
            </p>

            <p className="mb-5 text-gray-700 font-medium">
              <strong>Location:</strong> {event.location}
            </p>

            {/* Back to event list button */}
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600"
            >
              Back to Events
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 font-medium">
          <strong>Description:</strong> {event?.description}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
