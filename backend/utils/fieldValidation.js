const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)) 
        return 'Invalid Email Address'
}

const fieldValidation = async(req, res, next) => {
    const {firstName, lastName, middleName, email, phoneNumber} = req.body;
    const errors = {};

    if (!firstName) {
        errors.firstName = 'First name is required';
    }
    
    if (!lastName) {
     errors.lastName = 'Last name is required';
    }
    
    if (!email) {
        errors.email = 'Email is required';
    } 

    if(validateEmail(email)) {
        errors.email = 'Invalid Email Address';
    }
    
    if (!phoneNumber) {
        errors.phoneNumber = 'Phone number is required';
    }

    if (Object.keys(errors).length > 0) {
        console.log("Error at: ", errors);
    }

    next();
}

export default fieldValidation;