require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/myweb2.html'));
});

app.post('/send', (req, res) => {
    const { username, email, subject, websiteName, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'williamsayia82@gmail.com',
        subject: `Message from ${email}: ${subject}`,
        text: `Name: ${username}\nWebsite: ${websiteName}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Success');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
