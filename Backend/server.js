const express = require("express")
const dotenv = require("dotenv");
var cookieParser = require("cookie-parser");
const app = express();
const path = require('path');
const auth = require("./routes/auth");
const event = require("./routes/EventRoute");
const Message = require("./routes/MessageRoute");
dotenv.config({ path: "./.env" });

app.use(cookieParser());
app.use(express.json());
require("./db/connection");
app.use(auth, event, Message);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const cors = require('cors');
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  methods: ['GET', 'POST'],
}));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`);
});

// express
// npm i moongoose
// npm i dotenv
// npm i react-router-dom    client
// npm i jsonwebtoken
// npm i cookie-parser
// npm i bycrptjs to install
