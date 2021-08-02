const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
// Create Schema 
const UserSchema = new Schema({ 
    name: { 
        type: String, 
        required: false 
    }, 
    lastname: { 
        type: String, 
        required: false 
    }, 
    nickname: { 
        type: String, 
        required: true 
    }, 
    email: { 
        type: String, 
        required: true 
    }, 
    phone: { 
        type: Number, 
        required: false 
    }, 
    password: { 
        type: String, 
        required: true 
    },
    contacts: { 
        type: [Number], 
        required: false 
    },
    image:
    {
        data: Buffer,
        contentType: String,
        required: false
    }
}); 
module.exports = User = mongoose.model("users", UserSchema); 