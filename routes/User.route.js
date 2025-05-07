import express from "express";
import { registerUser, Login } from "../controllers/UserController.js";
const router = express.Router();

import { registerValidator, loginValidator } from "../utils/userValidator.js";
import { validationResult } from "express-validator";
const handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  };

router.post("/register", registerValidator,handleValidation, registerUser);
router.post("/login", loginValidator,handleValidation, Login);   

export default router;