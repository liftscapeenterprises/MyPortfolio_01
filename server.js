const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/sendmail', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    const mailOptions = {
        from: email,
        to: 'your-email@example.com',
        subject: `New Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email' });
        }
        res.json({ message: 'Email sent successfully' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));