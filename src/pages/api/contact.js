/**
 * Contact Form API Endpoint
 * Handles form submissions from ContactForm component
 *
 * Setup Instructions:
 * 1. Install required package: npm install nodemailer
 * 2. Set environment variables in .env.local:
 *    - EMAIL_HOST (e.g., smtp.gmail.com)
 *    - EMAIL_PORT (e.g., 587)
 *    - EMAIL_USER (your email address)
 *    - EMAIL_PASS (your email password or app-specific password)
 *    - COMPANY_EMAIL (e.g., info@savannahsolarpower.com)
 *    - COMPANY_PHONE (e.g., (XXX) XXX-XXXX)
 *
 * Alternative: Use SendGrid, Mailgun, or AWS SES instead of nodemailer
 */

// Uncomment when nodemailer is installed:
// import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      fullName,
      email,
      phone,
      propertyAddress,
      city,
      state,
      zip,
      serviceArea,
      interests,
      propertyType,
      monthlyBill,
      ownRent,
      message,
      preferredContact,
      bestTime,
      variant,
      submittedAt
    } = req.body;

    // Basic validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({
        error: 'Missing required fields',
        details: 'Full name, email, and phone are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Log submission (for debugging - remove in production)
    console.log('Contact form submission:', {
      fullName,
      email,
      phone,
      serviceArea,
      interests,
      submittedAt
    });

    // Send emails (uncomment when email service is configured)
    try {
      await sendNotificationEmail({
        fullName,
        email,
        phone,
        propertyAddress,
        city,
        state,
        zip,
        serviceArea,
        interests,
        propertyType,
        monthlyBill,
        ownRent,
        message,
        preferredContact,
        bestTime,
        submittedAt
      });

      await sendAutoReply({
        fullName,
        email,
        interests,
        preferredContact,
        bestTime
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Continue even if email fails - form submission still recorded
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process form submission'
    });
  }
}

/**
 * Send notification email to company
 */
async function sendNotificationEmail(data) {
  // NOTE: Uncomment and configure when email service is set up

  /*
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const interestsList = Array.isArray(data.interests)
    ? data.interests.join(', ')
    : data.interests;

  const bestTimeList = Array.isArray(data.bestTime)
    ? data.bestTime.join(', ')
    : data.bestTime;

  const emailBody = `
New Solar Inquiry from Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

${data.propertyAddress ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROPERTY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Address: ${data.propertyAddress}
City: ${data.city || 'Not provided'}
State: ${data.state || 'GA'}
ZIP: ${data.zip || 'Not provided'}
Service Area: ${data.serviceArea || 'Not specified'}
` : ''}

${data.interests && data.interests.length > 0 ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${interestsList}
` : ''}

${data.propertyType ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROPERTY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Property Type: ${data.propertyType}
Monthly Electric Bill: ${data.monthlyBill || 'Not provided'}
Own/Rent: ${data.ownRent || 'Not specified'}
` : ''}

${data.message ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.message}
` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preferred Contact Method: ${data.preferredContact || 'Either'}
Best Time to Contact: ${bestTimeList || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted: ${new Date(data.submittedAt).toLocaleString('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'full',
  timeStyle: 'short'
})}
  `.trim();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.COMPANY_EMAIL,
    subject: `New Website Inquiry - ${data.fullName}`,
    text: emailBody,
  });
  */

  // Temporary: Just log instead of sending email
  console.log('Would send notification email to company');
  return Promise.resolve();
}

/**
 * Send auto-reply confirmation to customer
 */
async function sendAutoReply(data) {
  // NOTE: Uncomment and configure when email service is set up

  /*
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const firstName = data.fullName.split(' ')[0];
  const interestsList = Array.isArray(data.interests) && data.interests.length > 0
    ? data.interests.join(', ')
    : 'solar energy';

  const contactMethod = data.preferredContact === 'either'
    ? 'your preferred method'
    : data.preferredContact;

  const emailBody = `
Hi ${firstName},

Thank you for contacting Savannah Solar Power!

We've received your inquiry about ${interestsList} and will respond within 24 hours. One of our solar consultants will reach out via ${contactMethod}.

In the meantime, here are some helpful resources:

• Learn about the 30% Federal Solar Tax Credit
• View our solar equipment and technology
• Read our Frequently Asked Questions
• Explore our customer success stories

Have an urgent question? Call us at ${process.env.COMPANY_PHONE}

We're excited to help you make the switch to clean, renewable solar energy!

Best regards,
The Savannah Solar Power Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
C SQUARED POWER LLC
Savannah, GA
Phone: ${process.env.COMPANY_PHONE}
Email: ${process.env.COMPANY_EMAIL}
Website: https://savannahsolarpower.com

Licensed & Insured Georgia Solar Contractor
Tesla Powerwall Certified | Enphase Platinum Installer
  `.trim();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: 'We Received Your Solar Inquiry!',
    text: emailBody,
  });
  */

  // Temporary: Just log instead of sending email
  console.log('Would send auto-reply email to:', data.email);
  return Promise.resolve();
}
