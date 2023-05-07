import nodemailer from "nodemailer";

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(to: string, subject: string, html: string, from: string, key: string) {
    try {
      if (from && key) {
        this.transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: from,
            pass: key,
          },
        });
      }

      const mailOptions: nodemailer.SendMailOptions = {
        from: from || process.env.EMAIL_USER,
        to,
        subject,
        html,
      };
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`Message sent: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (err) {
      console.error("Failed to send email: ", err);
      return { success: false, error: err };
    }
  }
}
