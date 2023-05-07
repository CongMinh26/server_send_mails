import { EmailService } from "./emailService";

export default class BulkEmailService {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }
    
  public async sendBulkEmails(toList: string[], subject: string, message: string, from: string, key: string): Promise<void> {
    const promises = toList.map(to => this.emailService.send(to, subject, message, from, key));
    await Promise.all(promises);
  }
}
