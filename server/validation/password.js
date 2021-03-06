const Validator = require("validator"); 
const isEmpty = require("is-empty"); 

module.exports = function validateRegisterInput(data) { 
    let errors = {}; 
    // Convert empty fields to an empty string so we can use validator functions 
    data.old_password = !isEmpty(data.old_password) ? data.old_password : ""; 
    data.password = !isEmpty(data.password) ? data.password : ""; 
    data.password2 = !isEmpty(data.password2) ? data.password2 : ""; 
    // Old Password checks 
    if (Validator.isEmpty(data.old_password)) { 
        errors.old_password = "Old Password field is required"; 
    } 
    // Password checks 
    if (Validator.isEmpty(data.password)) { 
        errors.password = "Password field is required"; 
    } 
    if (Validator.isEmpty(data.password2)) { 
        errors.password2 = "Confirm Password field is required"; 
    } 
    if (!Validator.isLength(data.password, { min: 4, max: 30 })) { 
        errors.password = "Password must be at least 6 characters"; 
    } 
    if (!Validator.equals(data.password, data.password2)) { 
        errors.password2 = "Passwords must match"; 
    } 
    return { 
        errors, 
        isValid: isEmpty(errors) 
    }; 
};