import { Router } from "express";
import { userController } from "../User/user.controller";

const router = Router();

router.post("/register", userController.createUser);
router.post("/login",)

export const UserRoutes = router;
