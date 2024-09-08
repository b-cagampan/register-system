import ProfilePicture from "../database/ProfilePicture.js";
import { User } from "../database/User.js";

export const createProfile = async(req, res) => {
    const {firstName, lastName, middleName, email, phoneNumber} = req.body;
    const file = req.fileData;

    if(!firstName || !lastName || !email || !phoneNumber || !file)
    {
        res.status(400).json({ error: 'Answer the required fields *' });
        throw Error;
    }

    const user = await User.findOne({email});

    if(user) {
        res.status(400).json({ error: 'User already exist' });
    } else {
        try
        {
            const createUser = await User.create({
                firstName,
                lastName,
                middleName,
                email, 
                phoneNumber,
            });

            const profilePicture = await ProfilePicture.create({
                user_id: createUser._id,
                imageName: file.filename,
                imagePath: file.path
            });
            
            res.status(201).json({ message: 'Profile created successfully' });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Error creating profile' });
        }
    }
}

export const getProfile = async(req, res) => {
    try {
        const recentProfile = await User.findOne().sort({ _id: -1 });
        const recentProfilePicture = await ProfilePicture.findOne().sort({ _id: -1 });

        if (!recentProfile && recentProfilePicture) {
            res.status(400).json({ error: 'No profiles found' });
        } else {
            res.status(200).json({ profile: recentProfile, profilePicture: recentProfilePicture.imageName });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error retrieving profile' });
    }
}