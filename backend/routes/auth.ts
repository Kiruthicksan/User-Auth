import { Router } from "express";
import RegisterUser from "../controllers/authController";


const router = Router()

router.post('/register', RegisterUser)
export default router