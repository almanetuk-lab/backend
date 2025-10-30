import express from "express";
import { getNotifications, markAsRead } from "../controller/notificationController.js";

const router = express.Router();

// 📩 Get all notifications for a user
router.get("/:user_id", getNotifications);

// ✅ Mark a notification as read
router.put("/read/:id", markAsRead);

export default router;

