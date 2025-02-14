const express = require('express');
const MessageModel = require('../models/MessageModel');

const router = express.Router();

// get all messages from the database
router.get('/get-messages', async (req, res) => {
    try {
        const messages = await MessageModel.find(); 
        return res.status(200).json({ success: true, messages });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error fetching messages.' });
    }
});

router.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Received message:", req.body);
    try {
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        const newMessage = new MessageModel({ name, email, message });
        const savedMessage = await newMessage.save();
        return res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'There was an error saving your message. Please try again later.' });
    }
});

module.exports = router;
