import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendApprovalEmail = async (tenantEmail, tenantName, address, city, rentAmount, propertyType, locationLink) => {
  const msg = {
    to: tenantEmail,
    from: {
      email: 'rentify.notification@gmail.com',  // Your SendGrid verified sender email
      name: 'Rentify'  // The name that will appear in the "From" field
    },
    subject: 'Booking Approval Notification',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f9;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333;">Hello ${tenantName},</h2>
          <p style="font-size: 16px; color: #555;">
            We are happy to inform you that your booking request for the property at <strong>${address}</strong> has been <strong>accepted</strong>.
          </p>
          <p style="font-size: 16px; color: #555;">Here are the details of the property:</p>
          <ul style="font-size: 16px; color: #555; list-style-type: none; padding-left: 0;">
            <li><strong>Rent Amount:</strong> ${new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(rentAmount)}</li>
            <li><strong>Property Type:</strong> ${propertyType}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Location:</strong> <a href="${locationLink}" target="_blank" style="color: #007bff;">View on Map</a></li>
          </ul>
          <p style="font-size: 16px; color: #555;">
            Thank you for choosing Rentify! If you have any questions or need further details, feel free to visit the property or contact us.
          </p>
          <p style="font-size: 16px; color: #555;">
            <strong>Next step:</strong> You can visit the location to further inquire about the property or get more details about the area.
          </p>
          <p style="font-size: 16px; color: #555;">
            Best regards,<br />
            <strong>Rentify Team</strong><br />
          </p>
        </div>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
