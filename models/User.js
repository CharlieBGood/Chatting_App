const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
// Create Schema 
const UserSchema = new Schema({ 
    name: { 
        type: String, 
        required: false,
        default: 'NN'
    }, 
    lastname: { 
        type: String, 
        required: false,
        default: 'NN'
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
        required: false,
        default: '1234567890'
    }, 
    password: { 
        type: String, 
        required: true 
    },
    contacts: { 
        type: [String], 
        required: false,
        default: []
    },
    image:
    {
        data: Buffer,
        contentType: String,
        required: false
    }
}); 
module.exports = User = mongoose.model("users", UserSchema); 