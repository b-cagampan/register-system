import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    middleName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true
    },
    profileUserPictureId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ProfilePicture',
    }
});

export const User = mongoose.model('Users', userSchema);