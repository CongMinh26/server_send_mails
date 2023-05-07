import express from "express";
import { BulkEmailController } from "../controllers/bulkEmailController";

const router = express.Router();
const bulkEmailController = new BulkEmailController();

router.post("/bulk-emails", bulkEmailController.sendBulkEmails.bind(bulkEmailController));

export default router;
