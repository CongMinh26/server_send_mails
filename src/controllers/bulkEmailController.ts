import { Request, Response } from 'express';
import BulkEmailService from '../services/bulkEmailService';

export class BulkEmailController {

    private bulkEmailService: BulkEmailService;

    constructor() {
        this.bulkEmailService = new BulkEmailService();
    }

    public async sendBulkEmails(req: Request, res: Response): Promise<void> {
        try {
            // Lấy danh sách email và nội dung email từ request body
            const { emails, subject, message, from, key } = req.body;

            // Gửi email đến danh sách email
            await this.bulkEmailService.sendBulkEmails(emails, subject, message, from, key);

            // Trả về kết quả thành công
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            // Xử lý lỗi và trả về lỗi cho client
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
