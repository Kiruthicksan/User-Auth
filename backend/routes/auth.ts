import { Router } from "express";
import { RegisterUser, LoginUser } from '../controllers/authController';
import { protect } from "../middleware/protect";
import { authorize } from "../middleware/authorize";


const router = Router()

router.post('/register', RegisterUser)
router.post('/login', LoginUser)


router.get('/api/seller/dashboard', protect, authorize("seller"), (req, res) => {
    res.json({ message : "Welcome to the seller dashboard" });
});

export default router