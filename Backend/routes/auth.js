const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('../models/userModel')
const autheticate = require('../middleware/authenticate');


router.post('/register', async (req, res) => {
    const { name, email, password} = req.body;

    if (name && email && password ) {
        const newUser = new Users({ name, email, password });
        const userExist = await Users.findOne({ email });
        if (userExist) {
            return res.status(400).json({ error: "user is already registered" });
        }
        const userRegistered = newUser.save();
        if (userRegistered) {
            return res.json({ success: "user registered successfully" });
        }
        else {
            return res.status(500).json({ error: "Opps some error occured while trying to registered" });
        }
    } else {
        res.status(406).json({ error: "please fill all the required fields" });
    }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const userFound = await Users.findOne({ email: email });

        if (userFound) {
            const passwordMatch = await bcrypt.compare(password, userFound.password);
            const token = await userFound.generateAuthToken();
            res.cookie('jsonwebToken', token, {
                expires: new Date(Date.now() + 86500000),
                httpOnly: true,
            });
            if (passwordMatch) {
                res.json({ message: "login successful", userFound });
            } else {
                res.status(401).json({ message: "login failed. Incorrect credentials" });
            }
        } else {
            res.status(481).json({ message: "invalid credential" });
        }
    } else {
        res.status(486).json({ message: "please fill all the fields correctly" });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("jsonwebToken");
    res.send({ success: true, message: "User logged Out Successfully" });
});

router.get("/profile", autheticate, (req, res) => {
    res.send(req.user);
});


module.exports = router;
