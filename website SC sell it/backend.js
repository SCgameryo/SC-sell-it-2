const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to send email
app.post('/sendEmail', (req, res) => {
    const { recipient, subject, body, attachmentPath } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password'
        }
    });

    let mailOptions = {
        from: 'your_email@gmail.com',
        to: recipient,
        subject: subject,
        text: body,
        attachments: [{
            filename: 'attachment.jpg',
            path: attachmentPath // Replace with actual path
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
