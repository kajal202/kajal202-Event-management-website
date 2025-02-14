const express = require('express');
const Event = require('../models/EventModel');
const authenticate = require('../middleware/authenticate');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Setup multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed (jpg, jpeg, png, gif).'));
  },
}).single('image'); 

// Create an event (with image upload)
router.post('/create-event', authenticate, upload, async (req, res) => {
  const { title, description, date, location, category, attendees } = req.body;
  try {
    let imageUrl = '';
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`; 
    }

    const newEvent = new Event({
      title,
      description,
      date,
      location,
      category,
      attendees,
      image: imageUrl, // Add image URL to the event
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Get all events
router.get('/events', authenticate, async (req, res) => {
  const search = req.query.search;
  try {
      let events;
      if (search) {
          events = await Event.find({
              title: { $regex: search, $options: 'i' },
          });
      } else {
          events = await Event.find();
      }
      res.json(events);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Get the total number of events
router.get('/events/count',  async (req, res) => {
  try {
    const count = await Event.countDocuments();
    res.json({ totalCount: count });
  } catch (err) {
    console.error('Error fetching event count:', err);
    res.status(500).json({ error: 'Error fetching event count' });
  }
});

router.get('/events/:id', authenticate,  async (req, res) => {
  const { id } = req.params;  
  try {
    const event = await Event.findById(id); 
    if (!event) {
      return res.status(404).json({ message: 'Event not found' }); 
    }
    res.json(event);  
  } catch (err) {
    res.status(500).json({ message: 'Error fetching event', error: err.message });  // Handle server errors
  }
});


router.put('/events/:id', authenticate, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).send('Event not found');
    }
    res.json(event);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.delete('/events/:id', authenticate, async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
