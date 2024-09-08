import ProfilePicture from "../database/ProfilePicture.js";
import { User } from "../database/User.js";

export const createProfile = async(req, res) => {
    const {firstName, lastName, middleName, email, phoneNumber} = req.body;
    const file = req.fileData;

    const user = User.findOne({firstName, lastName, middleName, email, phoneNumber});

    if(!user) {
        console.log("User already registered");
    }

    try
    {
        const createUser = await User.create({
            firstName,
            lastName,
            email, 
            phoneNumber,
        });

        const profilePicture = await ProfilePicture.create({
            user_id: createUser._id,
            imageName: file.filename,
            imagePath: file.path
        });
        
        res.json({ message: 'Profile created successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error creating profile' });
    }

}

export const getProfile = async(req, res) => {
    console.log("Login User");
}

export const updateProfile = async(req, res) => {
    console.log("Logout User");
}