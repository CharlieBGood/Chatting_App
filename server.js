const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require('cors') 
const app = express(); 

const passport = require("passport"); 
const users = require("./routes/api/users"); 

// Bodyparser middleware - now done only with express
app.use(express.json());
app.use(express.urlencoded({
    extended: true
})); 
// DB Config 
const db = require("./config/keys").mongoURI; 
// Connect to MongoDB 
mongoose 
  .connect( 
    db, 
    { useNewUrlParser: true, useUnifiedTopology: true } ,
  ) 
  .then(() => console.log("MongoDB successfully connected")) 
  .catch(err => console.log(err)); 

  app.use(cors())

// Passport middleware 
app.use(passport.initialize()); 
 
// Passport config 
require("./config/passport")(passport);

// Routes 
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there 
app.listen(port, () => console.log(`Backend server up and running on port ${port} !`));