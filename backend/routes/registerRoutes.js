import express from "express";
import { createProfile } from "../controller/registerController.js";
import fieldValidation from "../utils/fieldValidation.js";
import { uploadPhoto } from "../utils/imageHandler.js";

const router = express.Router();

//Registration Route
router.post("/register", uploadPhoto, createProfile);

export default router;