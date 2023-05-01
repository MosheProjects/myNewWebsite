// import { useState, useEffect } from 'react';
// import sgMail from '@sendgrid/mail';

// export default function EmailAfterPurchas() {
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// function sendEmail(customerEmail) {
//   const msg = {
//     to: customerEmail,
//     from: 'you@example.com',
//     subject: 'Please write a review of our product',
//     html: '<p>Thank you for your purchase! Please take a moment to write a review of our product <a href="https://example.com/write-review">here</a>.</p>',
//   };
//   sgMail.send(msg)
//     .then(() => {
//       console.log('Email sent');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

//   const [isPurchased, setIsPurchased] = useState(false);
//   const [customerEmail, setCustomerEmail] = useState('');

//   useEffect(() => {
//     if (isPurchased) {
//       setTimeout(() => {
//         sendEmail(customerEmail);
//       }, 3 * 24 * 60 * 60 * 1000); // 3 days delay
//     }
//   }, [isPurchased, customerEmail]);

//   function handleBuy() {
//     // Logic for buying the product and getting the customer email
//     setIsPurchased(true);
//     setCustomerEmail('customer@example.com');
//   }

//   return (
//     <div>
//       <h1>Product Name</h1>
//       <p>Description of product</p>
//       {isPurchased ? (
//         <p>Thank you for your purchase!</p>
//       ) : (
//         <button onClick={handleBuy}>Buy now</button>
//       )}
//     </div>
//   );
// }
