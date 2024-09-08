import express from "express";
import { createProfile, getProfile } from "../controller/registerController.js";
import { uploadPhoto } from "../utils/imageHandler.js";

const router = express.Router();

//Registration Route
router.post("/register", uploadPhoto, createProfile);
router.get("/profile", getProfile);

export default router;