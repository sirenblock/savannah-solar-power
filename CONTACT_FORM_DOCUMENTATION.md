# Contact Form System Documentation

Complete documentation for the Savannah Solar Power contact form system.

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [ContactForm Component Usage](#contactform-component-usage)
4. [Form Validation](#form-validation)
5. [API Endpoint](#api-endpoint)
6. [Email Configuration](#email-configuration)
7. [Testing Checklist](#testing-checklist)
8. [SEO & Analytics](#seo--analytics)

---

## Overview

The contact form system consists of:
- **Reusable ContactForm component** with 3 variants (full, simple, quick)
- **Form validation utilities** for client-side validation
- **API endpoint** for server-side processing
- **Email notification system** (company notification + customer auto-reply)
- **Google Maps integration** for service area visualization
- **SEO optimization** with meta tags and schema markup

---

## File Structure

```
savannah-solar-power/
├── src/
│   ├── components/
│   │   └── ContactForm.jsx          # Reusable contact form component
│   ├── pages/
│   │   ├── contact.jsx              # Full contact page
│   │   └── api/
│   │       └── contact.js           # Form submission API endpoint
│   └── utils/
│       └── validation.js            # Form validation utilities
├── EMAIL_SETUP.md                    # Email configuration guide
├── EMAIL_TEMPLATE_NOTIFICATION.txt   # Company notification template
├── EMAIL_TEMPLATE_AUTOREPLY.txt      # Customer auto-reply template
└── CONTACT_FORM_DOCUMENTATION.md     # This file
```

---

## ContactForm Component Usage

### Import

```jsx
import ContactForm from '../components/ContactForm';
```

### Variants

#### 1. Full Form (Contact Page)

```jsx
<ContactForm
  variant="full"
  showServiceArea={true}
/>
```

**Fields Included:**
- Full Name *
- Email Address *
- Phone Number *
- Property Address
- City, State, ZIP
- Service Area Dropdown
- Interests (checkboxes) *
- Property Type (radio)
- Monthly Electric Bill (dropdown)
- Own/Rent (radio)
- Message (textarea)
- Preferred Contact Method (radio)
- Best Time to Reach (checkboxes)

#### 2. Simple Form (Product Pages)

```jsx
<ContactForm
  variant="simple"
  defaultInterest="Tesla Powerwall"
  submitText="Get Powerwall Quote"
/>
```

**Fields Included:**
- Full Name *
- Email Address *
- Phone Number *
- Message (textarea)

**Use Cases:**
- Tesla Powerwall page
- Battery Backup page
- Equipment pages
- Service pages

#### 3. Quick Form (Homepage, Popups)

```jsx
<ContactForm
  variant="quick"
  submitText="Get Free Quote"
/>
```

**Fields Included:**
- Full Name *
- Email Address *
- Phone Number *

**Use Cases:**
- Homepage hero section
- Modal/popup forms
- Quick quote CTAs

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | `"full"` | Form variant: "full", "simple", or "quick" |
| `submitText` | string | `"Get Your Free Solar Assessment"` | Custom submit button text |
| `showServiceArea` | boolean | `true` | Show/hide service area dropdown |
| `defaultInterest` | string | `""` | Pre-select interest type |

### Usage Examples

#### Example 1: Tesla Powerwall Page

```jsx
// pages/tesla-powerwall.jsx
import ContactForm from '../components/ContactForm';

<section className="py-16 px-4 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">
      Get Your Tesla Powerwall Quote
    </h2>
    <ContactForm
      variant="simple"
      defaultInterest="Tesla Powerwall"
      submitText="Request Powerwall Quote"
    />
  </div>
</section>
```

#### Example 2: Homepage Quick Contact

```jsx
// pages/index.jsx
import ContactForm from '../components/ContactForm';

<section className="py-16 px-4">
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Get Started Today</h2>
    <ContactForm
      variant="quick"
      submitText="Get Free Quote"
    />
  </div>
</section>
```

#### Example 3: Commercial Solar Page

```jsx
// pages/commercial.jsx
import ContactForm from '../components/ContactForm';

<section>
  <ContactForm
    variant="simple"
    defaultInterest="Commercial Solar"
    submitText="Request Commercial Quote"
    showServiceArea={true}
  />
</section>
```

---

## Form Validation

### Client-Side Validation

Validation occurs in real-time as users interact with form fields.

#### Validation Rules

| Field | Rules |
|-------|-------|
| Full Name | Required, min 2 characters |
| Email | Required, valid email format |
| Phone | Required, valid 10-digit phone number |
| Interests | At least one selection (full form only) |

#### Validation Functions

Located in `src/utils/validation.js`:

```javascript
import {
  validateEmail,
  validatePhone,
  validateRequired,
  formatPhoneNumber,
  sanitizeInput,
  validateForm
} from '../utils/validation';
```

**Functions:**
- `validateEmail(email)` - Returns true if valid email format
- `validatePhone(phone)` - Returns true if valid phone (10-11 digits)
- `validateRequired(value)` - Returns true if field has content
- `formatPhoneNumber(phone)` - Formats to (XXX) XXX-XXXX
- `sanitizeInput(input)` - Removes potentially harmful characters
- `validateForm(formData, requiredFields)` - Validates entire form

#### Usage Example

```javascript
// Validate single field
if (!validateEmail(email)) {
  setError('Please enter a valid email address');
}

// Format phone number
const formatted = formatPhoneNumber('1234567890');
// Result: (123) 456-7890

// Validate entire form
const { isValid, errors } = validateForm(formData, ['name', 'email', 'phone']);
if (!isValid) {
  console.log(errors); // { email: 'Please enter a valid email address' }
}
```

### Server-Side Validation

Additional validation occurs in the API endpoint (`src/pages/api/contact.js`):

1. Check for required fields
2. Validate email format with regex
3. Sanitize all inputs to prevent XSS

---

## API Endpoint

### Endpoint Details

- **URL:** `/api/contact`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Request Body

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "(912) 555-1234",
  "propertyAddress": "123 Main St",
  "city": "Savannah",
  "state": "GA",
  "zip": "31401",
  "serviceArea": "Savannah",
  "interests": ["Residential Solar", "Battery Backup"],
  "propertyType": "residential",
  "monthlyBill": "$200-$300",
  "ownRent": "own",
  "message": "Interested in solar for my home",
  "preferredContact": "phone",
  "bestTime": ["morning", "afternoon"],
  "variant": "full",
  "submittedAt": "2025-01-15T10:30:00.000Z"
}
```

### Response

#### Success (200)

```json
{
  "success": true,
  "message": "Form submitted successfully",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

#### Error (400)

```json
{
  "error": "Missing required fields",
  "details": "Full name, email, and phone are required"
}
```

#### Error (500)

```json
{
  "error": "Internal server error",
  "message": "Failed to process form submission"
}
```

### Processing Flow

1. Validate HTTP method (POST only)
2. Extract form data from request body
3. Validate required fields
4. Validate email format
5. Send notification email to company
6. Send auto-reply email to customer
7. Return success response

---

## Email Configuration

See `EMAIL_SETUP.md` for detailed setup instructions.

### Quick Start

1. Install nodemailer:
   ```bash
   npm install nodemailer
   ```

2. Create `.env.local`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   COMPANY_EMAIL=info@savannahsolarpower.com
   COMPANY_PHONE=(XXX) XXX-XXXX
   ```

3. Uncomment email code in `src/pages/api/contact.js`

### Email Templates

Two email templates are sent:

1. **Notification Email** (to company)
   - Template: `EMAIL_TEMPLATE_NOTIFICATION.txt`
   - Contains all form data
   - Formatted for easy reading

2. **Auto-Reply Email** (to customer)
   - Template: `EMAIL_TEMPLATE_AUTOREPLY.txt`
   - Confirms receipt of inquiry
   - Includes helpful resources
   - Sets expectations (24-hour response)

---

## Testing Checklist

### Functional Testing

#### Form Validation
- [ ] Required field validation works
- [ ] Email format validation works
- [ ] Phone format validation works
- [ ] Error messages display correctly
- [ ] Error messages clear when user starts typing
- [ ] Phone number auto-formats as user types
- [ ] Checkboxes allow multiple selections
- [ ] Radio buttons allow single selection
- [ ] Dropdowns populate correctly

#### Form Submission
- [ ] Form submits successfully with valid data
- [ ] Form prevents submission with invalid data
- [ ] Loading state displays during submission
- [ ] Success message displays after submission
- [ ] Error message displays on failure
- [ ] Form resets after successful submission
- [ ] User cannot submit while form is submitting

#### Email Functionality
- [ ] Company notification email sent
- [ ] Customer auto-reply email sent
- [ ] All form data appears in notification email
- [ ] Email formatting is correct
- [ ] Links in emails work
- [ ] Phone numbers are clickable in emails

### UI/UX Testing

#### Desktop
- [ ] Form displays correctly on large screens
- [ ] All fields are accessible
- [ ] Buttons are properly sized
- [ ] Text is readable
- [ ] Form fits within container

#### Tablet (iPad)
- [ ] Form layout adapts to medium screens
- [ ] Grid layouts collapse appropriately
- [ ] Touch targets are adequate size
- [ ] No horizontal scrolling

#### Mobile
- [ ] Form displays in single column
- [ ] All fields are tappable
- [ ] Keyboard doesn't obscure fields
- [ ] Submit button is visible
- [ ] Success/error messages display properly

### Browser Compatibility

Test in the following browsers:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Accessibility Testing

- [ ] All form fields have labels
- [ ] Form can be navigated with keyboard (Tab key)
- [ ] Form can be submitted with Enter key
- [ ] Error messages are announced to screen readers
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] ARIA labels are present where needed

### Performance Testing

- [ ] Form loads quickly
- [ ] Validation doesn't lag user input
- [ ] Google Maps loads efficiently
- [ ] No console errors
- [ ] No console warnings

### Security Testing

- [ ] Form data is sanitized
- [ ] SQL injection attempts are blocked
- [ ] XSS attempts are blocked
- [ ] CSRF protection is in place (if applicable)
- [ ] Rate limiting prevents spam (recommended)
- [ ] Environment variables are not exposed

---

## SEO & Analytics

### Meta Tags

Located in `src/pages/contact.jsx`:

```jsx
<Head>
  <title>Contact Savannah Solar Power | Free Solar Consultation</title>
  <meta
    name="description"
    content="Contact Savannah Solar Power for your free solar consultation..."
  />
  <meta name="keywords" content="Contact solar company Savannah GA, ..." />
</Head>
```

### Schema Markup

Structured data for search engines:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Savannah Solar Power",
  "address": { ... },
  "telephone": "XXX-XXX-XXXX",
  "areaServed": [ ... ]
}
```

### Analytics Tracking (Optional)

Add event tracking for form submissions:

```javascript
// In ContactForm.jsx, after successful submission
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'form_submission', {
    form_type: variant,
    interests: formData.interests.join(', ')
  });
}
```

---

## Troubleshooting

### Form Not Submitting

1. Check browser console for errors
2. Verify API endpoint is accessible: `/api/contact`
3. Check network tab for failed requests
4. Verify all required fields are filled

### Emails Not Sending

1. Check `.env.local` variables are set
2. Verify SMTP credentials are correct
3. Check server logs for email errors
4. Test SMTP connection separately

### Validation Issues

1. Clear browser cache
2. Check validation functions in `src/utils/validation.js`
3. Verify regex patterns are correct
4. Test with various input formats

---

## Support & Maintenance

### Regular Maintenance Tasks

- Monitor form submission logs
- Check email delivery rates
- Update spam filters as needed
- Review and respond to inquiries within 24 hours
- Update service areas if expanded
- Keep contact information current

### Future Enhancements

Consider adding:
- CAPTCHA for spam prevention
- Database storage of submissions
- CRM integration (HubSpot, Salesforce)
- SMS notifications
- File upload capability (for roof photos)
- Calendar integration for scheduling
- Multi-step form wizard
- Progress save/resume functionality

---

## Contact

For technical support with this form system:
- Developer documentation: Check inline code comments
- Next.js docs: https://nextjs.org/docs
- React docs: https://react.dev
