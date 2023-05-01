const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Initialize the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Endpoint for sending email
app.post('/send-email', (req, res) => {
  // Extract the user's email and order details from the request body
  const { email, orderDetails } = req.body;

  // Construct the email message
  const msg = {
    to: email,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject: 'Thanks for your purchase!',
    html: `<p>Dear customer,</p>
           <p>Thank you for your recent purchase from our store. Your order details are as follows:</p>
           <ul>
             ${orderDetails.map(item => `<li>${item.name} - $${item.price}</li>`).join('')}
           </ul>
           <p>Please let us know if you have any questions or concerns.</p>
           <p>Best regards,</p>
           <p>Your Store Team</p>`
  };

  // Send the email using the SendGrid API
  sgMail.send(msg)
    .then(() => {
      console.log('Email sent successfully');
      res.status(200).send('Email sent successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error sending email');
    });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
