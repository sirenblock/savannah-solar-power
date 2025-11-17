# TASK 10: Contact Page + Contact Form Component

## Your Mission
Create a comprehensive contact page with functional contact form, service area map, and all contact methods. Also build a reusable ContactForm component used throughout the site.

## Company Context
**Savannah Solar Power (C SQUARED POWER LLC)** - Make it easy for prospects to reach us with multiple contact options.

## Page Content Structure

### 1. Hero Section
**Headline:** "Contact Savannah Solar Power"
**Subheading:** "Get your free solar consultation. We respond to all inquiries within 24 hours."

### 2. Contact Methods Section

**Phone:**
**(XXX) XXX-XXXX**
Monday-Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 4:00 PM
Sunday: Closed

**Email:**
info@savannahsolarpower.com
We respond to all emails within 24 business hours.

**Office Address:**
C SQUARED POWER LLC
Savannah, GA 31XXX
(Serving Savannah and surrounding counties)

**Emergency Service:**
For existing customers with urgent service needs:
(XXX) XXX-XXXX (Emergency Line)

### 3. Contact Form

**Form Fields:**

**Full Name*** (required)
- Text input

**Email Address*** (required)
- Email input with validation

**Phone Number*** (required)
- Phone input with formatting

**Property Address**
- Address input (helps us prepare for consultation)
- City, State, ZIP

**Service Area Dropdown:**
- Savannah
- Pooler
- Richmond Hill
- Hinesville
- Statesboro
- Other (please specify)

**I'm Interested In:*** (required)
- Checkboxes (multiple selection):
  - Residential Solar
  - Commercial Solar
  - Battery Backup
  - Tesla Powerwall
  - System Service/Repair
  - System Upgrade/Expansion
  - Free Consultation
  - Other

**Property Type:**
- Radio buttons:
  - Residential
  - Commercial
  - Agricultural
  - Industrial

**Average Monthly Electric Bill:**
- Dropdown:
  - Under $100
  - $100-$150
  - $150-$200
  - $200-$300
  - $300-$500
  - Over $500
  - Not Sure

**Do you own or rent?**
- Radio: Own / Rent

**Message/Additional Details:**
- Textarea (optional but encouraged)

**Preferred Contact Method:**
- Radio: Phone / Email / Either

**Best Time to Reach You:**
- Checkboxes:
  - Morning (8 AM - 12 PM)
  - Afternoon (12 PM - 5 PM)
  - Evening (5 PM - 7 PM)

**Submit Button:**
"Get Your Free Solar Assessment"

**Privacy Notice:**
"We respect your privacy. Your information is never shared with third parties. See our Privacy Policy."

### 4. Form Functionality

**Client-Side Validation:**
- Required fields validation
- Email format validation
- Phone number format validation
- Form can't submit until all required fields valid

**Server-Side Processing:**
- Send email notification to company email
- Send auto-reply confirmation to customer
- Store submission in database (optional)
- Integration with CRM (optional)

**Success Message:**
"Thank you for contacting Savannah Solar Power! We've received your inquiry and will respond within 24 hours. Check your email for confirmation."

**Error Handling:**
"Oops! Something went wrong. Please try again or call us at (XXX) XXX-XXXX."

### 5. Service Area Map

**Interactive Google Map:**
- Centered on Savannah, GA
- Service area overlay showing:
  - Savannah
  - Pooler
  - Richmond Hill
  - Hinesville
  - Statesboro
  - Chatham County
  - Bryan County
  - Liberty County
  - Effingham County

**Service Area Text:**
"We proudly serve Savannah, GA and surrounding areas including Pooler, Richmond Hill, Hinesville, Statesboro, and all of Chatham, Bryan, Liberty, and Effingham counties. If you're outside our primary service area, contact us - we may still be able to help!"

### 6. Why Choose Us (Trust Signals)

**Licensed & Insured**
Georgia State Licensed Solar Contractor

**Certified Installers**
- Tesla Powerwall Certified
- Enphase Platinum Installer
- NABCEP Certified Professionals

**Local Company**
Based in Savannah, serving coastal Georgia

**25-Year Warranties**
Industry-leading equipment warranties

**Free Consultations**
No-obligation assessments and proposals

### 7. Social Media Links (if applicable)

- Facebook
- Instagram
- LinkedIn
- Google Business Profile

### 8. Testimonials Snippet

"Don't just take our word for it..."
[Include 2-3 brief customer testimonials]

### 9. FAQ Quick Links

"Common Questions:"
- How much does solar cost?
- How long does installation take?
- Do I qualify for the tax credit?
- Will solar work on my roof?
[Link to FAQ page]

## ContactForm Component (Reusable)

**Component:** `src/components/ContactForm.jsx`

**Props:**
- `variant` - "full" | "simple" | "quick"
  - "full": All fields (for contact page)
  - "simple": Name, email, phone, message
  - "quick": Name, email, phone only
- `submitText` - Custom button text (default: "Submit")
- `showServiceArea` - Boolean, show service area dropdown
- `defaultInterest` - Pre-select interest (e.g., "Tesla Powerwall" when used on Powerwall page)

**Features:**
- Responsive design
- Inline validation
- Loading state during submission
- Success/error messages
- Accessible (ARIA labels, keyboard navigation)

**Usage Examples:**

```jsx
// Contact page - full form
<ContactForm variant="full" />

// Tesla Powerwall page - pre-filled interest
<ContactForm
  variant="simple"
  defaultInterest="Tesla Powerwall"
  submitText="Get Powerwall Quote"
/>

// Homepage - quick contact
<ContactForm
  variant="quick"
  submitText="Get Free Quote"
/>
```

## Email Templates

**To Company (Notification):**
```
Subject: New Website Inquiry - [Name]

New solar inquiry from website:

Name: [Full Name]
Email: [Email]
Phone: [Phone]
Address: [Property Address]
Service Area: [Service Area]

Interested In:
[Checkboxes selected]

Property Type: [Type]
Monthly Bill: [Range]
Own/Rent: [Selection]

Message:
[Message text]

Preferred Contact: [Method]
Best Time: [Times]

Submitted: [Timestamp]
```

**To Customer (Auto-Reply):**
```
Subject: We Received Your Solar Inquiry!

Hi [First Name],

Thank you for contacting Savannah Solar Power!

We've received your inquiry about [interests] and will respond within 24 hours. One of our solar consultants will reach out via [preferred method] during [preferred time].

In the meantime:
- Check out our FAQ: [link]
- Learn about the 30% tax credit: [link]
- View our equipment: [link]

Questions? Call us at (XXX) XXX-XXXX

Best regards,
Savannah Solar Power Team

---
C SQUARED POWER LLC
Savannah, GA
[phone]
[email]
[website]
```

## Technical Requirements
- React: `src/pages/contact.jsx`
- Component: `src/components/ContactForm.jsx`
- Form validation (client & server)
- Google Maps integration
- Email sending (Node.js backend or service like Sendgrid/Mailgun)
- Responsive design
- Accessible (WCAG 2.1 compliant)
- SEO optimized

## SEO Elements

**Meta Tags:**
- Title: "Contact Savannah Solar Power | Free Solar Consultation"
- Description: "Contact Savannah Solar Power for your free solar consultation. Serving Savannah, Pooler, Richmond Hill, Hinesville, Statesboro and surrounding Georgia areas."

**Schema Markup:**
- LocalBusiness schema
- ContactPage schema
- Service area geographic schema

## SEO Keywords
- Contact solar company Savannah GA
- Solar quote Savannah
- Solar consultation Georgia
- Savannah solar installer contact

## Deliverables
1. `src/pages/contact.jsx`
2. `src/components/ContactForm.jsx` (reusable component)
3. Email templates (text versions)
4. Form validation utilities
5. Google Maps integration
6. Styling (CSS module or Tailwind)

## Testing Checklist
- [ ] All required fields enforce validation
- [ ] Email format validation works
- [ ] Phone format validation works
- [ ] Form submits successfully
- [ ] Email notifications sent
- [ ] Auto-reply received
- [ ] Success message displays
- [ ] Error handling works
- [ ] Mobile responsive
- [ ] Accessible (keyboard navigation, screen readers)
- [ ] Google Maps loads and displays correctly
- [ ] Form works across browsers (Chrome, Safari, Firefox, Edge)

**Build in savannah-solar-power directory. Make the form user-friendly, professional, and conversion-optimized.**
