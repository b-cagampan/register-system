import multer from 'multer'
import path from 'path'

// Configure the storage of the image
const upload = multer({
    dest: 'public/Images/',
    limits: {fileSize: 1 * 1024 * 1024},
}).single('image');


// Middlware function
export const uploadPhoto = (req, res, next) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // Multer-specific errors
            console.error(err);
            return res.status(400).json({ error: `Multer error: ${err.message}` });
        } else if (err) {
            // General errors
            console.error(err);
            return res.status(400).json({ error: err.message });
        }
        if (!req.file) {
           return res.status(400).json({ error: 'Please send file' });
        }

        //Add the file to the request fileData
        req.fileData = {
            filename: req.file.filename,
            path: req.file.path,
        };

        next();
    });
};