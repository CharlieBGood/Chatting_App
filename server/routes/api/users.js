const express = require("express"); 
const router = express.Router(); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 
const keys = require("../../config/keys"); 
const multer = require('multer')

// Load input validation 
const validateRegisterInput = require("../../validation/register"); 
const validateLoginInput = require("../../validation/login"); 
const validateChangePassword = require("../../validation/password"); 

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
                    contacts : user.contacts,
                    image : user.image
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
                    name : user.name,
                    lastname : user.lastname,
                    phone: user.phone, 
                    github : user.github,
                    instagram : user.instagram,
                    twitter: user.twitter,
                    linkedin: user.linkedin,
                    contacts : user.contacts,
                    image : user.image
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
                id: contact.id, 
                nickname: contact.nickname,
                name : contact.name,
                lastname : contact.lastname,
                phone: contact.phone, 
                github : contact.github,
                instagram : contact.instagram,
                twitter: contact.twitter,
                linkedin: contact.linkedin,
                contacts : contact.contacts,
                image : contact.image
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


// @route PATCH api/users/add-image 
// @desc Add image to registered user 
// @access Registered User
router.patch("/add-image", async (req, res) => {

    const { url, user_id } = req.body; 

    const user = await User.findById(user_id);
    if (user) {
        user.image = url;
        main_user = await user.save();
        payload = {
            id: main_user.id, 
            nickname: main_user.nickname,
            name : main_user.name,
            lastname : main_user.lastname,
            phone: main_user.phone, 
            github : main_user.github,
            instagram : main_user.instagram,
            twitter: main_user.twitter,
            linkedin: main_user.linkedin,
            contacts : main_user.contacts,
            image : main_user.image
        }
        return res.status(200).json(payload)
    }
    else {
        return res.status(400).json({ message: "User is not registered in Chatting App" });
    }
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
                    image : user.image
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
router.patch("/remove-contact", (req, res) => {

    const { id_user, id_contact } = req.body; 

    User.findById(id_user).then((user) => {
        if (user.contacts.includes(id_contact)) {
            let index = user.contacts.indexOf(id_contact)
            user.contacts.splice(index, 1)
            user.save()

            return res.status(200).json(
                { 
                    user_id: user.id
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
    
    try {
        const user = await User.findOne({ _id : req.query.id })
        const lista = await User.find({ _id : {$in : user.contacts} })

        const contacts_list = []
        lista.map(contact => {
            contacts_list.push({
                id: contact.id, 
                nickname: contact.nickname,
                name : contact.name,
                lastname : contact.lastname,
                phone: contact.phone, 
                github : contact.github,
                instagram : contact.instagram,
                twitter: contact.twitter,
                linkedin: contact.linkedin,
                image : contact.image
            })
        })
        return res.status(200).json(
            { 
                contacts_list: contacts_list
            }
        );  
    }
    catch{

    }
})


// @route PATCH api/users/update-user
// @desc Update user info
// @access Registered User
router.post("/update-user", (req, res) => {

    const { id_user, name, lastname, nickname, phone, image, github, instagram, twitter, linkedin } = req.body; 

    User.findById(id_user).then((user) => {
        if (user) {
            user.name = name
            user.lastname = lastname
            user.nickname = nickname
            user.phone = phone
            user.image = image
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
                image: user.image, 
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
                    expiresIn: 86400 // 1 day in seconds 
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

// @route PATCH api/users/change-password
// @desc Change the password for the current user
// @access Registered User
router.patch("/change-password", (req, res) => {

    const { errors, isValid } = validateChangePassword(req.body); 

    // Check validation 
    if (!isValid) { 
        return res.status(400).json(errors); 
    } 
    else{
        User.findById(req.body.id).then((user) => {
            if (user){ 
                // Check password 
                bcrypt.compare(req.body.old_password, user.password).then(isMatch => {
                    if (isMatch){

                        // Hash password before saving in database 
                        bcrypt.genSalt(10, (err, salt) => { 
                            bcrypt.hash(req.body.password, salt, (err, hash) => { 
                                if (err) throw err; 
                                user.password = hash; 
                                user 
                                .save() 
                                .then(() => res.status(200).json({success:true})) 
                                .catch(err => console.log(err)); 
                            }); 
                        }); 
                    }
                    else {
                        return res 
                            .status(400) 
                            .json({ old_password: "Your old password does not match your current password" }); 
                    }
                })
            }
            else { 
                return res 
                    .status(400) 
                    .json({ user: "User is not registered in Chatting App" }); 
            } 
        })
    }

    
})


module.exports = router; 

