const express = require("express"); 
const router = express.Router(); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 
const keys = require("../../config/keys"); 
const multer = require('multer')

// Load input validation 
const validateRegisterInput = require("../../validation/register"); 
const validateLoginInput = require("../../validation/login"); 

// Load User model 
const User = require("../../models/User");
const { useRef } = require("react");

// @route POST api/users/register 
// @desc Register user 
// @access Public 
router.post("/register", (req, res) => { 
    // Form validation 
    const { errors, isValid } = validateRegisterInput(req.body); 
    // Check validation 
    if (!isValid) { 
        return res.status(400).json(errors); 
    } 
    User.findOne({ email: req.body.email }).then(user => { 
        if (user) { 
            return res.status(400).json({ email: "User registered with that email already exists" }); 
        } 
        else { 
            const newUser = new User({ 
            nickname: req.body.nickname, 
            email: req.body.email, 
            password: req.body.password 
            }); 
            // Hash password before saving in database 
            bcrypt.genSalt(10, (err, salt) => { 
                bcrypt.hash(newUser.password, salt, (err, hash) => { 
                    if (err) throw err; 
                    newUser.password = hash; 
                    newUser 
                    .save() 
                    .then(user => res.json(user)) 
                    .catch(err => console.log(err)); 
                }); 
            }); 
        } 
    }); 
});

// @route POST api/users/login 
// @desc Login user and return JWT token 
// @access Public 
router.post("/login", (req, res) => { 
    // Form validation 
    const { errors, isValid } = validateLoginInput(req.body); 
    // Check validation 
    if (!isValid) { 
        return res.status(400).json(errors); 
    } 
    const email = req.body.email; 
    const password = req.body.password; 
    // Find user by email 
    User.findOne({ email }).then(user => { 
        // Check if user exists 
        if (!user) { 
            return res.status(404).json({ emailnotfound: "User does not exists" }); 
        } 
        // Check password 
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) { 
                // User matched 
                // Create JWT Payload 
                const payload = { 
                    id: user.id, 
                    nickname: user.nickname,
                    name : user.name,
                    lastname : user.lastname,
                    phone: user.phone, 
                    github : user.github,
                    instagram : user.instagram,
                    twitter: user.twitter,
                    linkedin: user.linkedin,
                    contacts : user.contacts
                }; 
                // Sign token 
                jwt.sign( 
                    payload, 
                    keys.secretOrKey, 
                    { 
                        expiresIn: 3600 // 1 hour in seconds 
                    }, 
                    (err, token) => { 
                        res.json({ 
                            success: true, 
                            token: "Bearer " + token 
                        }); 
                    }  
                ); 
            } 
            else { 
                return res 
                    .status(400) 
                    .json({ passwordincorrect: "Incorrect password" }); 
            } 
        }); 
    }); 
}); 

// @route POST api/users/upload_image 
// @desc Register user 
// @access Public 
router.post("/upload_image", (req, res) => { 
    // Form validation 
    const { errors, isValid } = validateRegisterInput(req.body); 
    // Check validation 
    if (!isValid) { 
        return res.status(400).json(errors); 
    } 
    User.findOne({ email: req.body.email }).then(user => { 
        if (user) { 
             
        } 
        else { 
            return res 
                .status(400) 
                .json({ passwordincorrect: "User does not exists" }); 
        } 
    }); 
});
     

// @route GET api/users/find_user 
// @desc Find user 
// @access Public 
router.get("/find_user", (req, res) => {
    User.findById(req.query.id).then(user => { 
        if (user) { 
            return res.status(200).json(
                { 
                    id: user.id, 
                    nickname: user.nickname,
                    contacts: user.contacts
                }
            ); 
        } 
        else { 
            return res 
                .status(400) 
                .json({ passwordincorrect: "User does not exists" }); 
        } 
    })
})


// @route PATCH api/users/add-contact 
// @desc Add contact to registered user 
// @access Registered User
router.patch("/add-contact", (req, res) => {

    const { id_user, id_contact, contacts_list } = req.body; 

    User.findById(id_contact).then(contact => {
        if (contact) {
            contacts_list.map((contact_element) => {
                if (contact_element.id === id_contact) {
                    return res.status(400).json({ message: "The contact already exists in your contacts list" });
                }
            })
            User.findById(id_user).then(main_user => {
                main_user.contacts.push(id_contact);
                main_user.save();
            })
            const new_contact = {
                id : contact.id,
                nickname : contact.nickname,
                contacts : contact.contacts
            }
            contacts_list.push(new_contact);
            return res.status(200).json(
                { 
                    contacts_list: contacts_list
                }
            ); 
        }
        else {
            return res.status(400).json({ message: "Unfortunately, the contact you are trying to add is not on Chatting App yet, invite him!" });
        }
    })
});


// @route GET api/users/get-users
// @desc Get all users registered in app 
// @access Public
router.get("/get-users", (req, res) => {
    
    const contacts_list = req.query.list.split('-');
    User.find({ _id: {$nin : contacts_list} }, (err, users) => {
        if(err) {
            console.log(err)
        }
        else{
            users_list = []
            users.map(user => {
                users_list.push({
                    id: user.id,
                    nickname: user.nickname,
                    email: user.email,
                    name: user.name,
                    lastname: user.lastname,
                    phone: user.phone,
                    github : user.github,
                    instagram : user.instagram,
                    twitter: user.twitter,
                    linkedin: user.linkedin,
                })
            })
            return res.status(200).json(
                { 
                    users_list: users_list
                }
            ); 
        } 
    })

})

// @route POST api/users/remove-contact
// @desc Remove the contact from contacts list
// @access Registered User
router.post("/remove-contact", (req, res) => {

    const { id_user, id_contact } = req.body; 

    User.findById(id_user).then((user) => {
        if (user.contacts.includes(id_contact)) {
            let index = user.contacts.indexOf(id_contact)
            user.contacts.splice(index)
            user.save()

            return res.status(200).json(
                { 
                    contacts_list: user.contacts
                }
            ); 
        }
        else { 
            return res 
                .status(400) 
                .json({ user: "Contact does not exits in your contacts list" }); 
        } 
    })
})

// @route GET api/users/get-contacts
// @desc Get all contacts from the current us 
// @access Public
router.get("/get-contacts", async (req, res) => {
    
    const contacts_list = req.query.list.split('-');
    try{
        const lista = await User.find({ _id: {$in : contacts_list} });
        return_contacts_list = []
        lista.map(contact => {
            return_contacts_list.push({
                id: contact.id,
                nickname: contact.nickname,
                email: contact.email,
                name: contact.name,
                lastname: contact.lastname,
                phone: contact.phone,
                github : contact.github,
                instagram : contact.instagram,
                twitter: contact.twitter,
                linkedin: contact.linkedin,
            })
        })
        
        return res.status(200).json(
            { 
                contacts_list: return_contacts_list
            }
        ); 
    }
    catch {

    }
})


// @route PATCH api/users/update-user
// @desc Update user info
// @access Registered User
router.post("/update-user", (req, res) => {

    const { id_user, name, lastname, nickname, phone, github, instagram, twitter, linkedin } = req.body; 

    User.findById(id_user).then((user) => {
        if (user) {
            user.name = name
            user.lastname = lastname
            user.nickname = nickname
            user.phone = phone
            user.github = github
            user.instagram = instagram
            user.linkedin = linkedin
            user.twitter = twitter

            user.save()
            
            const payload = { 
                id: user.id, 
                nickname: user.nickname,
                name : user.name,
                lastname : user.lastname,
                phone: user.phone, 
                github : user.github,
                instagram : user.instagram,
                twitter: user.twitter,
                linkedin: user.linkedin,
                contacts : user.contacts
            }; 
            // Sign token 
            jwt.sign( 
                payload, 
                keys.secretOrKey, 
                { 
                    expiresIn: 3600 // 1 hour in seconds 
                }, 
                (err, token) => { 
                    res.json({ 
                        success: true, 
                        token: "Bearer " + token 
                    }); 
                }  
            ); 
        }
        else { 
            return res 
                .status(400) 
                .json({ user: "User is not registered in Chatting App" }); 
        } 
    })
})



module.exports = router; 

