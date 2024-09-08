import mongoose from "mongoose";

const profilePictureSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },

    imageName: {
        type: String,
    },
    
    imagePath: {
        type: String,
    },
});

const ProfilePicture = mongoose.model('ProfilePictures', profilePictureSchema);

export default ProfilePicture;