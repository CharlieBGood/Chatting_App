const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require('cors') 
const app = express(); 


const passport = require("passport"); 
const usersRoute = require("./routes/api/users"); 
const conversationsRoute = require("./routes/api/conversations");
const messagesRoute = require("./routes/api/messages");

// Bodyparser middleware - now done only with express
app.use(cors())
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

// Passport middleware 
app.use(passport.initialize()); 
 
// Passport config 
require("./config/passport")(passport);

// Routes 
app.use("/api/users", usersRoute);
app.use("/api/conversations", conversationsRoute);
app.use("api/messages", messagesRoute);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there 
const server = app.listen(port, () => console.log(`Backend server up and running on port ${port} !`));

//WebSockets

const Message = require('./models/Message');
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});


io.on("connection", socket => {

  socket.on("Input Chat Message", async (msgData) => {
      console.log(msgData)

        try {
          let message = new Message({conversationId: msgData.conversationId, sender: msgData.sender, text: msgData.text})
          console.log(message)  
          message.save((err, doc) => {
              console.log(doc)
              if(err) return res.json({ success: false, err })
  
                  return io.emit("Output Chat Message", message);
              })
           
          } catch (err) {
            console.error(err);
          }

      
})});