# Savannah Solar Power - Residential Solar Page

Professional residential solar installation page for **Savannah Solar Power (C SQUARED POWER LLC)**, a leading solar installation company serving Savannah, GA and coastal Georgia.

## Overview

This is a comprehensive, conversion-focused residential solar page built with React and Next.js. The page showcases Savannah Solar Power's complete residential solar offerings, installation process, equipment, financing options, and more.

## Features

### Complete Content Sections

1. **Hero Section** - Eye-catching introduction with clear value proposition
2. **Quick Stats Bar** - Key metrics at a glance (savings, tax credit, warranties)
3. **Interactive Savings Calculator** - Estimates personalized savings based on monthly electric bill
4. **Benefits Section** - 6 key benefits with icons (lower bills, home value, independence, tax credit, hurricane protection, clean energy)
5. **7-Step Installation Process** - Clear, numbered walkthrough from assessment to ongoing support
6. **Equipment Showcase** - Solar panels, inverters, racking, and battery options with specs
7. **What's Included** - Comprehensive checklist of everything in an installation
8. **Financing Options** - Cash purchase, solar loans, and consultation options
9. **FAQ Section** - Expandable accordion with common questions
10. **Service Area** - Geographic coverage with map placeholder
11. **Contact Form** - Lead capture form with validation
12. **Before/After Gallery** - Installation photo placeholders
13. **Trust Signals** - Certifications, warranties, local focus

### Technical Features

- **React 18** - Modern React with hooks
- **Next.js 14** - Server-side rendering, routing, optimization
- **Tailwind CSS** - Utility-first styling for rapid development
- **Lucide React Icons** - Clean, professional icons
- **Mobile Responsive** - Optimized for all device sizes
- **SEO Optimized** - Proper meta tags, semantic HTML, keywords
- **Accessibility** - WCAG 2.1 compliant, keyboard navigation, screen reader support
- **Interactive Elements** - Savings calculator, FAQ accordion, form validation

## Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/savannahsolarpower/website.git
   cd savannah-solar-power
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000` to view the site.

### Build for Production

```bash
npm run build
npm start
```

### Export Static Site

```bash
npm run build
npm run export
```

## Project Structure

```
savannah-solar-power/
├── public/                    # Static assets
│   ├── images/               # Installation photos, equipment images
│   ├── equipment/            # Equipment specification images
│   └── projects/             # Project gallery images
├── src/
│   ├── components/           # Reusable React components
│   ├── pages/
│   │   └── residential.jsx   # Main residential solar page
│   ├── styles/
│   │   ├── globals.css       # Global Tailwind styles
│   │   └── residential.css   # Page-specific styles
│   └── data/                 # JSON data files
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## Page Sections Detail

### Hero Section
- Headline: "Residential Solar Installation in Savannah, GA"
- Subheading with value proposition
- Dual CTAs: "Get Free Assessment" and phone number
- Before/after photo placeholder

### Savings Calculator
- Interactive slider for monthly electric bill ($50-$500)
- Real-time calculation of:
  - Annual current cost
  - Estimated annual savings (60% average)
  - 25-year total savings
  - System cost estimate
  - Federal tax credit (30%)
  - Net investment
- Toggle show/hide functionality

### Equipment Section
Showcases all equipment with specifications:

**Solar Panels:**
- Jinko 425W
- Longi LR5 400W
- QCells 415W

**Inverters:**
- Enphase IQ8M (featured as standard)
- SolArk Hybrid

**Racking:**
- IronRidge XR Systems

**Batteries (Optional):**
- Tesla Powerwall 3
- EP Cube
- Franklin aPower

### FAQ Accordion
6 common questions with expandable answers:
- Will solar work on my roof?
- What about hurricanes?
- How long does installation take?
- What happens to my electric bill?
- What maintenance is required?
- What warranties are included?

## SEO Keywords

Primary keywords targeted:
- Residential solar installation Savannah GA
- Home solar panels Savannah
- Solar company for homes Savannah
- Residential solar Chatham County
- Solar installation coastal Georgia
- Hurricane-rated solar systems
- Tesla Powerwall Savannah
- Enphase systems Savannah

## Customization

### Update Contact Information

Edit the contact details in `src/pages/residential.jsx`:

```jsx
// Phone number
<a href="tel:+19125550100">

// Email
<a href="mailto:info@savannahsolarpower.com">
```

### Adjust Calculator Assumptions

Modify calculation logic in the savings calculator section:

```jsx
const solarSavings = annualCost * 0.60; // 60% savings - adjust as needed
const systemCost = Math.round(monthlyBill * 80); // Cost multiplier
const federalTaxCredit = systemCost * 0.30; // 30% federal credit
```

### Add Equipment

Update equipment arrays in the component:

```jsx
const equipment = {
  panels: [...],
  inverters: [...],
  racking: [...],
  batteries: [...]
};
```

### Modify Process Steps

Edit the `processSteps` array to add/remove/modify installation steps.

## Color Scheme

- **Primary Blue:** `#1e40af` (trustworthy, professional)
- **Secondary Yellow:** `#eab308` (energy, optimism)
- **Accent:** `#3b82f6` (call-to-action)
- **Text:** Gray scale for hierarchy

## Brand Voice

- Professional and confident
- Clear and informative
- Technical but accessible
- Local Georgia focus
- Hurricane/storm resilience emphasis
- Family-owned, community-focused

## Performance Optimization

- Lazy loading images
- Code splitting
- Minified CSS/JS
- Optimized fonts
- Fast TTI (Time to Interactive)
- Lighthouse score: 90+

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader compatible
- High contrast ratios
- Focus indicators
- Semantic HTML5

## Future Enhancements

- [ ] Add real customer testimonials
- [ ] Integrate actual before/after photos
- [ ] Connect form to email service (SendGrid, Mailchimp, etc.)
- [ ] Add Google Maps integration for service area
- [ ] Implement analytics tracking (Google Analytics, Meta Pixel)
- [ ] Add live chat integration
- [ ] Create video walkthrough section
- [ ] Add customer portal login
- [ ] Implement blog integration
- [ ] Add financing calculator with loan terms

## Contributing

This is a proprietary project for Savannah Solar Power. For internal team contributions:

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request
5. Request review from team lead

## License

UNLICENSED - Proprietary software for Savannah Solar Power (C SQUARED POWER LLC).

## Support

For technical support or questions:

- **Email:** dev@savannahsolarpower.com
- **Phone:** (912) 555-0100
- **Hours:** Monday-Friday, 8am-5pm EST

## Credits

**Developed for:** Savannah Solar Power (C SQUARED POWER LLC)
**Built with:** React, Next.js, Tailwind CSS
**Icons:** Lucide React
**Version:** 1.0.0
**Last Updated:** November 2024

---

**Savannah Solar Power** - Professional solar installations for homes and businesses throughout Savannah and coastal Georgia.
