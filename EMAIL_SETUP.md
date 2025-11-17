# Email Setup Guide - Savannah Solar Power Contact Form

This guide explains how to set up email notifications for the contact form.

## Prerequisites

1. Email service provider account (choose one):
   - **Gmail** (easiest for testing)
   - **SendGrid** (recommended for production)
   - **Mailgun**
   - **AWS SES**

## Quick Setup with Gmail (Development/Testing)

### 1. Install Nodemailer

```bash
npm install nodemailer
```

### 2. Enable Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an "App Password" for "Mail"
4. Save the 16-character password

### 3. Create Environment Variables

Create a `.env.local` file in the project root:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here

# Company Information
COMPANY_EMAIL=info@savannahsolarpower.com
COMPANY_PHONE=(XXX) XXX-XXXX
COMPANY_NAME=Savannah Solar Power
COMPANY_LEGAL_NAME=C SQUARED POWER LLC
COMPANY_ADDRESS=Savannah, GA 31XXX
COMPANY_WEBSITE=https://savannahsolarpower.com
```

### 4. Uncomment Email Code

In `src/pages/api/contact.js`:
- Uncomment the `import nodemailer` line
- Uncomment the email sending code in `sendNotificationEmail()` and `sendAutoReply()`

### 5. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check both the company email and customer email for messages

## Production Setup with SendGrid (Recommended)

### 1. Install SendGrid SDK

```bash
npm install @sendgrid/mail
```

### 2. Get SendGrid API Key

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API Key with "Mail Send" permissions
3. Verify your sender email address

### 3. Update Environment Variables

```env
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@savannahsolarpower.com
COMPANY_EMAIL=info@savannahsolarpower.com
COMPANY_PHONE=(XXX) XXX-XXXX
```

### 4. Update API Code

Replace the nodemailer code in `src/pages/api/contact.js` with:

```javascript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendNotificationEmail(data) {
  const msg = {
    to: process.env.COMPANY_EMAIL,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: `New Website Inquiry - ${data.fullName}`,
    text: `[Email body content]`,
    html: `<p>[HTML email content]</p>`,
  };

  await sgMail.send(msg);
}
```

## Email Templates

See the following files for template content:
- `EMAIL_TEMPLATE_NOTIFICATION.txt` - Email sent to company
- `EMAIL_TEMPLATE_AUTOREPLY.txt` - Confirmation email sent to customer

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_HOST` | SMTP server hostname | smtp.gmail.com |
| `EMAIL_PORT` | SMTP server port | 587 |
| `EMAIL_USER` | SMTP username/email | your@email.com |
| `EMAIL_PASS` | SMTP password | app-password-here |
| `SENDGRID_API_KEY` | SendGrid API key | SG.xxxxx |
| `COMPANY_EMAIL` | Company contact email | info@savannahsolarpower.com |
| `COMPANY_PHONE` | Company phone number | (XXX) XXX-XXXX |

## Testing Checklist

- [ ] Form submits successfully
- [ ] Company notification email received
- [ ] Customer auto-reply received
- [ ] Email contains all form data
- [ ] Email formatting looks correct
- [ ] Links in email work
- [ ] Phone numbers are clickable
- [ ] No sensitive data exposed in logs

## Troubleshooting

### Emails not sending

1. Check environment variables are set correctly
2. Verify SMTP credentials are correct
3. Check server logs for error messages
4. Test SMTP connection with a simple script
5. Verify firewall/security settings allow SMTP

### Gmail "Less secure app" error

- Use an App Password instead of your regular password
- Ensure 2FA is enabled on your Google account

### Rate limiting

- Gmail: 100 emails per day for free accounts
- SendGrid: 100 emails per day on free tier
- Consider upgrading for production use

## Security Best Practices

1. ✅ Never commit `.env.local` to version control
2. ✅ Use environment variables for all sensitive data
3. ✅ Validate and sanitize all user inputs
4. ✅ Implement rate limiting on the API endpoint
5. ✅ Use HTTPS in production
6. ✅ Consider adding CAPTCHA to prevent spam

## Optional Enhancements

### Add Form Submission Storage

Store submissions in a database for backup and CRM integration:

```javascript
// Example with MongoDB
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db('savannah-solar');
await db.collection('contacts').insertOne({
  ...formData,
  submittedAt: new Date()
});
```

### Add CAPTCHA Protection

Protect against spam with Google reCAPTCHA:

```bash
npm install react-google-recaptcha
```

### Add Slack Notifications

Get instant notifications in Slack:

```bash
npm install @slack/webhook
```

### Integrate with CRM

Connect to HubSpot, Salesforce, or Zoho:

```bash
npm install @hubspot/api-client
```

## Support

For questions or issues:
- Check Next.js documentation: https://nextjs.org/docs
- Check Nodemailer documentation: https://nodemailer.com/
- Check SendGrid documentation: https://docs.sendgrid.com/
