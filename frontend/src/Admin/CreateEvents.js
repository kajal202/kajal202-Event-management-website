import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    attendees: '',
    category: '',
    image: null, 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Check file size (max 1MB)
    if (file && file.size > 1 * 1024*1024 ) {
      setError('File size must be less than 5MB');
      setFormData((prevState) => ({ ...prevState, image: null }));
      setImagePreview('');
    } else {
      setError('');
      setFormData((prevState) => ({ ...prevState, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Show image preview
      };
      if (file) {
        reader.readAsDataURL(file); // Display image preview
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Simple validation
    if (!formData.title || !formData.date || !formData.location || !formData.description || !formData.category) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }
  

    try {
      const response = await axios.post('/create-event', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }, // Set headers for file upload
      });
      setLoading(false);
      setSuccess(true);
      setFormData({ title: '', date: '', location: '', description: '', category: '', attendees: '', image: null });
      setImagePreview('');
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      setError('Error creating event. Please try again.');
    }
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-blue-600 to-blue-300">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url(/corporate-2.jpg)' }}></div>
        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-white transform skew-x-[-45deg] "></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url(/wedding-stage.webp)' }}></div>
      </div>

      {/* Form Content */}
      <div className="relative z-0 container mx-auto p-6 mt-10 min-h-80">
        <h1 className="text-2xl uppercase font-semibold text-center mb-4 text-white">
          Create New Event
        </h1>
        {error && <div className="text-center text-red-500 mb-2">{error}</div>}
        {success && (
          <div className="text-center text-green-500 mb-3">
            Event created successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="border border-gray-300 p-1.5 rounded-lg w-full"
              placeholder="Event Title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border border-gray-300 p-1.5 rounded-lg w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="border border-gray-300 p-1.5 rounded-lg w-full"
              placeholder="Location"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-lg w-full"
              placeholder="Description"
              required
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Event Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded-lg w-full"
                placeholder="Category"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Attendees</label>
              <input
                type="text"
                name="attendees"
                value={formData.attendees}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded-lg w-full"
                placeholder="No. of Attendees"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Event Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              className="border border-gray-300 p-1.5 rounded-lg w-full"
            />
            {imagePreview && (
              <div className="mt-2">
                <img src={imagePreview} alt="Event Preview" className="w-full h-auto max-h-48 object-cover rounded-lg" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="px-2 py-1.5 bg-blue-800 text-white rounded-lg hover:bg-blue-600 w-1/3"
            disabled={loading}
          >
            {loading ? (
              <span className="flex justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a8 8 0 0116 0v12a8 8 0 01-16 0"
                  />
                </svg>
                Creating Event...
              </span>
            ) : (
              'Create Event'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
