# About Page - Savannah Solar Power

## Overview
Comprehensive About page for Savannah Solar Power featuring company story, services, certifications, service areas, and process information. Fully responsive, SEO-optimized, and trust-focused.

## Files Created

### 1. `/src/pages/about.jsx`
Main React component for the About page with the following sections:

- **Hero Section**: Eye-catching header with company name and tagline
- **Company Story**: Background about Savannah Solar Power and mission
- **Complete Solar Solutions**: 8-point grid showcasing all services offered
- **Certifications & Credentials**: Display of industry certifications (Tesla, Enphase, NABCEP)
- **Why Savannah Trusts Us**: 4 key trust builders (Hurricane-ready, Local expertise, Complete service, Quality equipment)
- **Service Area**: Cities and counties served in coastal Georgia
- **Our Process**: 6-step process from consultation to monitoring
- **Call to Action**: Quote request and phone contact buttons

### 2. `/src/styles/about.module.css`
Professional CSS module with:

- Modern, clean design with solar/energy color scheme
- Fully responsive (desktop, tablet, mobile)
- CSS Grid layouts for sections
- Smooth transitions and hover effects
- Mobile breakpoints at 768px and 480px
- Print-friendly styles
- Accessible color contrast ratios

### 3. `/src/components/SEO.jsx`
Reusable SEO component supporting both Next.js and react-helmet for:

- Page title and description
- Meta keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card metadata
- Canonical URLs
- Viewport and charset settings

### 4. `/src/data/aboutSEO.json`
SEO configuration data including:

- Page title and meta description
- Targeted keywords for Savannah solar market
- Structured data (JSON-LD) for search engines
- LocalBusiness schema markup
- Service area definitions
- Certifications and credentials

## Features

### SEO Optimization
- **Title**: "About Us - Savannah's Trusted Solar Installation Experts"
- **Keywords**: Solar company Savannah GA, hurricane-ready solar, Tesla Powerwall certified, Enphase installers, NABCEP certified
- **Structured Data**: LocalBusiness schema with complete company information
- **Semantic HTML**: Proper heading hierarchy (H1, H2, H3)
- **Optimized Content**: Natural keyword integration throughout

### Trust Signals
- Industry certifications prominently displayed
- Hurricane-ready installation messaging (critical for coastal Georgia)
- Local expertise emphasis
- Equipment quality assurance
- Complete service offering
- Professional process outline

### Mobile Responsiveness
- Fully responsive grid layouts
- Touch-friendly buttons and links
- Optimized font sizes for mobile
- Hamburger menu compatible
- Fast loading on mobile networks

### Accessibility
- Semantic HTML structure
- ARIA-compatible design
- High contrast color ratios
- Keyboard navigation support
- Screen reader friendly

## Color Scheme

```css
Primary Blue: #1e3a8a (trust, professionalism)
Primary Green: #059669 (solar, energy, sustainability)
Accent Gold: #f59e0b (premium, quality)
Light Background: #f8fafc
Dark Text: #1e293b
```

## Integration Instructions

### For Next.js Projects

1. **Install Next.js (if not already)**:
   ```bash
   npx create-next-app@latest savannah-solar-power
   ```

2. **Enable SEO Component**:
   In `/src/components/SEO.jsx`, uncomment the Next.js section:
   ```javascript
   import Head from 'next/head';
   ```

3. **Update Routing**:
   - Place `about.jsx` in `pages/` directory for automatic routing
   - Access at: `http://localhost:3000/about`

### For Create React App

1. **Install react-helmet**:
   ```bash
   npm install react-helmet
   ```

2. **Enable SEO Component**:
   In `/src/components/SEO.jsx`, uncomment the react-helmet section:
   ```javascript
   import { Helmet } from 'react-helmet';
   ```

3. **Setup Routing**:
   ```javascript
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import AboutPage from './pages/about';

   <Routes>
     <Route path="/about" element={<AboutPage />} />
   </Routes>
   ```

## Customization

### Update Contact Information
Replace placeholder phone number in:
- Line 299: `tel:XXX-XXX-XXXX`
- Line 300: Display phone number

### Add Real Images
Update image paths in:
- `/src/data/aboutSEO.json`: ogImage, logo paths
- Hero section: Add background image
- Certifications: Add certification logos

### Modify Company Details
Edit structured data in `/src/data/aboutSEO.json`:
- Business address
- Phone number
- Email address
- Operating hours
- Social media links

### Customize Service Areas
Update service area lists in `about.jsx` lines 189-204 to add/remove cities and counties.

## SEO Keywords Targeted

Primary:
- Solar company Savannah GA
- Hurricane-ready solar installation
- Certified solar installers Savannah
- Tesla Powerwall certified Savannah
- Enphase installers Savannah

Secondary:
- Solar installation coastal Georgia
- NABCEP certified solar Savannah
- Licensed solar contractors Georgia
- Solar battery backup Savannah

## Performance Considerations

- CSS Module approach (no runtime CSS-in-JS overhead)
- Minimal JavaScript bundle
- Semantic HTML for faster parsing
- Optimized grid layouts (CSS Grid > Flexbox for this use case)
- No external dependencies beyond React

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile

## Testing Checklist

- [ ] Responsive design on mobile (375px, 768px, 1024px, 1440px)
- [ ] All links functional
- [ ] Phone number click-to-call works on mobile
- [ ] SEO meta tags render correctly
- [ ] Structured data validates at schema.org
- [ ] Accessible via keyboard navigation
- [ ] Fast page load (<3 seconds)
- [ ] Images load with proper alt text
- [ ] Print stylesheet works correctly

## Future Enhancements

1. Add team member photos and bios
2. Include customer testimonials section
3. Add video about company/process
4. Integrate Google Maps for service area
5. Add before/after installation photos
6. Create FAQ accordion section
7. Add company timeline/milestones
8. Include awards and recognition section

## Support

For questions or issues with this component, refer to:
- React Documentation: https://react.dev
- Next.js Documentation: https://nextjs.org/docs
- CSS Modules: https://github.com/css-modules/css-modules
- Schema.org Documentation: https://schema.org
