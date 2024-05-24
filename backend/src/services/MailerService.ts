import { createTransport } from "nodemailer";

class MailerService {
    async sendMail(params: any) {
        try {
            let { email, text, subject } = params

            let mailOptions = {
                from: 'support@rentyourride.com',
                to: [email, 'vishwakarmavirendra74@gmail.com'],
                subject,
                text
            }

            console.log(mailOptions)

            const transporter = createTransport({
                host: 'smtp-relay.brevo.com',
                port: 587,
                tls: {
                    rejectUnauthorized: true,
                    minVersion: "TLSv1.2"
                },
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                }
            })

            const send = await transporter.sendMail(mailOptions)
            console.log("EMAIL", send)
            return send

        } catch (error) {
            console.log("ERROR IN MAIL SERVICE", error)
            throw error
        }
    }
}

export default new MailerService()