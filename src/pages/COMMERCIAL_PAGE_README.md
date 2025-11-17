# Commercial Solar Page - Documentation

## Overview
Comprehensive commercial solar installation page for Savannah Solar Power targeting business owners and commercial property managers.

## Page Structure

### Files Created
1. **src/pages/commercial.jsx** - Main commercial page component
2. **src/components/ROICalculator.jsx** - Interactive ROI calculator
3. **src/components/CaseStudies.jsx** - Commercial case studies showcase
4. **src/styles/commercial.css** - Styling, hover effects, and responsive design

## Page Sections

### 1. Hero Section
- **Headline**: "Commercial Solar Installation in Savannah, GA"
- **Subheading**: Focus on cost reduction, sustainability, and energy price protection
- **CTA**: "Get Your Free Commercial Solar Assessment"

### 2. Why Commercial Solar Makes Business Sense
Six benefit cards covering:
- Immediate Cost Savings (30-60% reduction)
- Fast ROI (4-7 year payback)
- Tax Benefits (30% ITC, MACRS depreciation)
- Hedge Against Rising Rates
- Sustainability & Brand Value
- Energy Independence

### 3. Commercial Solar Applications
Grid display of 9 business types served:
- Office buildings
- Retail centers
- Warehouses
- Manufacturing facilities
- Agricultural operations
- Multi-unit properties
- Hotels
- Churches/nonprofits
- Government facilities

### 4. ROI Calculator (Interactive Component)
**Features**:
- Input: Annual energy bill, system size
- Calculates: System cost, federal ITC, MACRS value, net cost, annual savings, payback period, 25-year savings
- Real-time calculation on button click
- Professional results display with highlighted key metrics

**Calculation Logic**:
- Cost: $1.90/watt (commercial average)
- Federal ITC: 30% of system cost
- MACRS: 85% depreciation value (assumes 21% corporate tax rate)
- Energy offset: 70% of annual bill
- 25-year projection

### 5. Commercial Solar Process
8-step process displayed with numbered timeline:
1. Site Assessment & Energy Audit
2. Financial Analysis
3. Custom System Design
4. Proposal & Financing
5. Permitting & Engineering
6. Professional Installation
7. Inspection & Interconnection
8. Monitoring & Maintenance

### 6. Commercial Solar Equipment
Four equipment categories with specifications:
- **Solar Panels**: Jinko 425W, Longi LR5 400W, QCells 415W
- **Commercial Inverters**: Enphase IQ8M, SolArk, String inverters
- **Racking Systems**: IronRidge XR Commercial, Ballasted, Ground Mount
- **Battery Backup**: Tesla Powerwall 3, EP Cube, Franklin aPower

### 7. What's Included
14-item grid of included services:
- Energy audit and analysis
- Financial modeling
- Custom engineering
- Permitting and coordination
- Professional installation
- Equipment and warranties
- Monitoring and support

### 8. Financing Options
Four financing methods with details:
- **Cash Purchase**: Maximum tax benefits and savings
- **Solar Loan**: $0 down, own the system
- **PPA**: $0 upfront, pay for production
- **Solar Lease**: Fixed monthly payment

### 9. Commercial Case Studies (Component)
Three real-world examples:
1. **50kW Office Building** - $18K annual bill, 3.2 year payback
2. **150kW Warehouse** - $48K annual bill, 3.1 year payback
3. **75kW Retail Plaza** - $28.5K annual bill, 4.9 year payback

Each case study includes:
- Project details and location
- Financial stats (cost, savings, payback)
- Project description
- 4 project highlights with checkmarks

### 10. Service Area
Coverage statement: Southeast Georgia (Savannah, Pooler, Richmond Hill, Hinesville, Statesboro, surrounding counties)

### 11. Final CTA
- "Ready to Reduce Your Business Energy Costs?"
- Two buttons: Schedule Consultation, Call phone number

## Design Features

### Color Scheme
- **Primary Blue**: #1e3a8a, #3b82f6 (gradient)
- **Accent Orange**: #f59e0b
- **Success Green**: #10b981
- **Neutral Grays**: #f9fafb, #e5e7eb, #6b7280, #374151

### Typography
- **System font stack**: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
- **Responsive sizing**: clamp() for fluid typography
- **Hierarchy**: Clear h1 → h2 → h3 progression

### Responsive Design
- **Mobile-first grid layouts**: auto-fit, minmax patterns
- **Breakpoints**: 768px, 480px
- **Flexible components**: All grids adapt to screen size
- **Touch-friendly**: Large button targets

### Interactive Elements
- **Hover effects**: Cards lift on hover, buttons transform
- **Focus states**: Accessible keyboard navigation
- **Animations**: Fade-in for calculator results
- **Smooth scrolling**: Page-wide smooth scroll behavior

## SEO Optimization

### Target Keywords
- Commercial solar installation Savannah GA
- Business solar panels Savannah
- Commercial solar company Georgia
- Solar for warehouses Savannah
- Commercial solar ROI Georgia

### Meta Tags (Recommended)
```html
<title>Commercial Solar Installation Savannah GA | Business Solar Panels</title>
<meta name="description" content="Commercial solar installation in Savannah, GA. Reduce operating costs 30-60% with fast ROI. Federal tax credits + MACRS depreciation. Serving offices, warehouses, retail centers." />
<meta name="keywords" content="commercial solar Savannah, business solar panels Georgia, commercial solar installation, solar for warehouses, commercial solar company" />
```

### Structured Data (Schema.org)
Recommended schema types:
- LocalBusiness
- Service
- Offer
- FAQPage (for process steps)

## Accessibility Features
- Semantic HTML structure
- ARIA-friendly components
- Keyboard navigation support
- Focus-visible states
- Sufficient color contrast
- Scalable text (rem/em units)

## Performance Considerations
- **Inline styles**: Initial render performance
- **CSS file**: Hover/media queries separation
- **Lazy loading ready**: Image placeholders for actual photos
- **Minimal dependencies**: React-only, no heavy libraries

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 support requires polyfills
- Mobile Safari iOS 12+
- Chrome Android 90+

## Future Enhancements
1. **Real project photos**: Replace placeholders with actual installations
2. **Form integration**: Connect CTAs to contact form/CRM
3. **Analytics tracking**: Add event tracking for calculator use, button clicks
4. **Video testimonials**: Embed customer success stories
5. **Energy savings calculator**: More detailed input options
6. **Financing calculator**: Monthly payment estimator
7. **Map integration**: Interactive service area map
8. **Live chat**: Commercial inquiry support

## Testing Checklist
- [ ] Mobile responsiveness (320px - 1920px)
- [ ] ROI calculator calculations accuracy
- [ ] All CTAs functional
- [ ] Cross-browser compatibility
- [ ] Accessibility audit (WAVE, axe)
- [ ] Performance audit (Lighthouse)
- [ ] SEO audit
- [ ] Form submissions
- [ ] Print stylesheet

## Deployment Notes
- Ensure images directory exists: `/public/images/projects/`
- Configure routing in Next.js or React Router
- Set up meta tags in document head
- Configure analytics tracking
- Test contact form endpoints
- Verify phone number and contact info

## Maintenance
- Update equipment specs as inventory changes
- Refresh case studies with new projects
- Update tax credit percentages (ITC currently 30%)
- Review and update ROI calculation assumptions
- Keep service area current

## Contact Integration
All CTAs should link to:
- Contact form: `/contact` or modal
- Phone: tel:+19125555SOLAR
- Assessment scheduler: Calendly or similar

## Business Logic
**ROI Calculator Assumptions**:
- Commercial system cost: $1.90/watt average
- Federal ITC: 30% (current through 2032)
- MACRS depreciation: 85% first year value
- Corporate tax rate: 21% (for MACRS calculation)
- Energy offset: 70% of annual consumption
- System lifespan: 25+ years

**Note**: All financial calculations are estimates. Actual results vary based on:
- Energy consumption patterns
- Utility rate structures
- Roof/site conditions
- Available incentives
- System design
- Corporate tax situation

---

**Built for**: Savannah Solar Power (C SQUARED POWER LLC)
**Target Audience**: Business owners, commercial property managers, facilities managers
**Conversion Goal**: Schedule free commercial solar assessment
**Page Type**: Service/Product landing page
**Content Tone**: Professional, ROI-focused, data-driven, trustworthy
