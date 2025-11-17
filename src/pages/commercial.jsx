import React, { useState } from 'react';
import ROICalculator from '../components/ROICalculator';
import CaseStudies from '../components/CaseStudies';
// import '../styles/commercial.module.css';

const Commercial = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section className="hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Commercial Solar Installation in Savannah, GA</h1>
          <p style={styles.heroSubtitle}>
            Reduce operating costs, enhance your business's sustainability profile, and protect
            against rising energy prices with commercial solar.
          </p>
          <button className="cta-button" style={styles.ctaButton}>Get Your Free Commercial Solar Assessment</button>
        </div>
      </section>

      {/* Why Commercial Solar Makes Business Sense */}
      <section className="section" style={styles.section}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Why Commercial Solar Makes Business Sense</h2>

          <div className="benefits-grid" style={styles.benefitsGrid}>
            <div className="benefit-card" style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Immediate Cost Savings</h3>
              <p style={styles.benefitText}>
                Commercial properties typically have high daytime energy consumption - perfect for solar.
                Reduce your operating expenses by 30-60% and improve your bottom line.
              </p>
            </div>

            <div className="benefit-card" style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Fast ROI</h3>
              <p style={styles.benefitText}>
                With federal tax credits, accelerated depreciation (MACRS), and high commercial electric
                rates, typical payback is 4-7 years. Then you enjoy decades of nearly free electricity.
              </p>
            </div>

            <div className="benefit-card" style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Tax Benefits</h3>
              <ul className="benefit-list" style={styles.benefitList}>
                <li><strong>30% Federal Investment Tax Credit (ITC)</strong></li>
                <li><strong>MACRS Depreciation</strong> - Recover 85% of system cost in Year 1</li>
                <li><strong>Potential state/local incentives</strong></li>
              </ul>
            </div>

            <div className="benefit-card" style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Hedge Against Rising Rates</h3>
              <p style={styles.benefitText}>
                Lock in your energy costs for 25+ years. Eliminate exposure to utility rate increases.
              </p>
            </div>

            <div className="benefit-card" style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Sustainability & Brand Value</h3>
              <p style={styles.benefitText}>
                Demonstrate environmental commitment to customers and employees. Solar is a visible
                statement about your company's values.
              </p>
            </div>

            <div className="benefit-card" style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Energy Independence</h3>
              <p style={styles.benefitText}>
                Add battery backup for critical operations. Maintain business continuity during grid outages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Solar Applications */}
      <section style={styles.sectionAlt}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Commercial Solar Applications</h2>
          <p style={styles.sectionIntro}>We Serve:</p>

          <div className="applications-grid" style={styles.applicationsGrid}>
            <div className="application-item" style={styles.applicationItem}>Office buildings</div>
            <div className="application-item" style={styles.applicationItem}>Retail centers and shopping plazas</div>
            <div className="application-item" style={styles.applicationItem}>Warehouses and distribution facilities</div>
            <div className="application-item" style={styles.applicationItem}>Manufacturing facilities</div>
            <div className="application-item" style={styles.applicationItem}>Agricultural operations</div>
            <div className="application-item" style={styles.applicationItem}>Apartment complexes and multi-unit properties</div>
            <div className="application-item" style={styles.applicationItem}>Hotels and hospitality</div>
            <div className="application-item" style={styles.applicationItem}>Churches and nonprofits</div>
            <div className="application-item" style={styles.applicationItem}>Government facilities</div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section style={styles.section}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Calculate Your Commercial Solar ROI</h2>
          <ROICalculator />
        </div>
      </section>

      {/* Our Commercial Solar Process */}
      <section style={styles.sectionAlt}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Our Commercial Solar Process</h2>

          <div style={styles.processSteps}>
            <div style={styles.processStep}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Site Assessment & Energy Audit</h3>
                <p style={styles.stepText}>
                  We analyze your energy bills (12 months), assess your property, and identify
                  opportunities for maximum savings.
                </p>
              </div>
            </div>

            <div style={styles.processStep}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Financial Analysis</h3>
                <p style={styles.stepText}>
                  Detailed ROI modeling including tax benefits, depreciation, incentives, and
                  projected savings over 25 years.
                </p>
              </div>
            </div>

            <div style={styles.processStep}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Custom System Design</h3>
                <p style={styles.stepText}>
                  Engineering team designs a system optimized for your building, energy load profile,
                  and roof/ground space.
                </p>
              </div>
            </div>

            <div style={styles.processStep}>
              <div style={styles.stepNumber}>4</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Proposal & Financing</h3>
                <p style={styles.stepText}>
                  Comprehensive proposal with multiple financing options: cash purchase, solar loan,
                  PPA, or lease.
                </p>
              </div>
            </div>

            <div style={styles.processStep}>
              <div style={styles.stepNumber}>5</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Permitting & Engineering</h3>
                <p style={styles.stepText}>
                  We manage all permitting, structural engineering, electrical engineering, and
                  utility applications.
                </p>
              </div>
            </div>

            <div style={styles.processStep}>
              <div style={styles.stepNumber}>6</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Professional Installation</h3>
                <p style={styles.stepText}>
                  Certified commercial installers with minimal disruption to your operations.
                  Most commercial systems install in 1-2 weeks.
                </p>
              </div>
            </div>

            <div style={styles.processStep}>
              <div style={styles.stepNumber}>7</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Inspection & Interconnection</h3>
                <p style={styles.stepText}>
                  We coordinate all inspections, testing, and utility interconnection.
                </p>
              </div>
            </div>

            <div style={styles.processStep}>
              <div style={styles.stepNumber}>8</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Monitoring & Maintenance</h3>
                <p style={styles.stepText}>
                  Remote monitoring system with real-time performance tracking. Ongoing support
                  and maintenance available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Solar Equipment */}
      <section style={styles.section}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Commercial Solar Equipment</h2>

          <div className="equipment-grid" style={styles.equipmentGrid}>
            <div style={styles.equipmentCategory}>
              <h3 style={styles.equipmentTitle}>Solar Panels</h3>
              <ul className="equipment-list" style={styles.equipmentList}>
                <li><strong>Jinko 425W</strong> - High-efficiency, excellent commercial track record</li>
                <li><strong>Longi LR5 400W</strong> - Tier-1 manufacturer, superior warranties</li>
                <li><strong>QCells 415W</strong> - German-engineered reliability</li>
              </ul>
            </div>

            <div style={styles.equipmentCategory}>
              <h3 style={styles.equipmentTitle}>Commercial Inverters</h3>
              <ul className="equipment-list" style={styles.equipmentList}>
                <li><strong>Enphase IQ8M Microinverters</strong> - Scalable, panel-level optimization, 25-year warranty</li>
                <li><strong>SolArk 12K/15K/20K</strong> - Hybrid systems for battery backup capability</li>
                <li><strong>String inverters</strong> - For larger commercial arrays (when applicable)</li>
              </ul>
            </div>

            <div style={styles.equipmentCategory}>
              <h3 style={styles.equipmentTitle}>Racking Systems</h3>
              <ul className="equipment-list" style={styles.equipmentList}>
                <li><strong>IronRidge XR Commercial</strong> - Engineered for high wind loads, 25-year warranty</li>
                <li><strong>Ballasted Systems</strong> - For flat commercial roofs (no roof penetrations)</li>
                <li><strong>Ground Mount</strong> - For properties with land available</li>
              </ul>
            </div>

            <div style={styles.equipmentCategory}>
              <h3 style={styles.equipmentTitle}>Commercial Battery Backup</h3>
              <ul className="equipment-list" style={styles.equipmentList}>
                <li><strong>Tesla Powerwall 3</strong> - Stackable for larger backup needs</li>
                <li><strong>EP Cube 16.5/19.9 kWh</strong> - Commercial-scale energy storage</li>
                <li><strong>Franklin aPower</strong> - Modular systems up to 54.4 kWh</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={styles.sectionAlt}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>What's Included</h2>
          <p style={styles.includedIntro}>Complete commercial solar installation including:</p>

          <div className="included-grid" style={styles.includedGrid}>
            <div className="included-item" style={styles.includedItem}>Comprehensive energy audit and analysis</div>
            <div className="included-item" style={styles.includedItem}>Financial modeling and ROI projections</div>
            <div className="included-item" style={styles.includedItem}>Custom system engineering</div>
            <div className="included-item" style={styles.includedItem}>Structural and electrical engineering</div>
            <div className="included-item" style={styles.includedItem}>All permitting and utility coordination</div>
            <div className="included-item" style={styles.includedItem}>Tier-1 commercial-grade equipment</div>
            <div className="included-item" style={styles.includedItem}>Professional installation with certified electricians</div>
            <div className="included-item" style={styles.includedItem}>Electrical upgrades as needed</div>
            <div className="included-item" style={styles.includedItem}>Safety and disconnect equipment</div>
            <div className="included-item" style={styles.includedItem}>System commissioning and testing</div>
            <div className="included-item" style={styles.includedItem}>Remote monitoring system</div>
            <div className="included-item" style={styles.includedItem}>25-year equipment warranties</div>
            <div className="included-item" style={styles.includedItem}>Optional maintenance agreements</div>
            <div className="included-item" style={styles.includedItem}>Ongoing technical support</div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section style={styles.section}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Financing Options for Commercial Solar</h2>

          <div className="financing-grid" style={styles.financingGrid}>
            <div className="financing-card" style={styles.financingCard}>
              <h3 style={styles.financingTitle}>Cash Purchase</h3>
              <ul className="financing-list" style={styles.financingList}>
                <li>30% ITC reduces cost immediately</li>
                <li>MACRS depreciation recovers 85% of cost in first year</li>
                <li>Full ownership and maximum savings</li>
              </ul>
            </div>

            <div className="financing-card" style={styles.financingCard}>
              <h3 style={styles.financingTitle}>Solar Loan</h3>
              <ul className="financing-list" style={styles.financingList}>
                <li>$0 down options available</li>
                <li>Claim all tax benefits</li>
                <li>Own your system</li>
                <li>Payments often less than your energy savings</li>
              </ul>
            </div>

            <div className="financing-card" style={styles.financingCard}>
              <h3 style={styles.financingTitle}>Power Purchase Agreement (PPA)</h3>
              <ul className="financing-list" style={styles.financingList}>
                <li>$0 upfront cost</li>
                <li>Pay only for the solar energy produced</li>
                <li>Locked-in rate lower than utility</li>
                <li>No maintenance responsibilities</li>
              </ul>
            </div>

            <div className="financing-card" style={styles.financingCard}>
              <h3 style={styles.financingTitle}>Solar Lease</h3>
              <ul className="financing-list" style={styles.financingList}>
                <li>Fixed monthly payment</li>
                <li>$0 down</li>
                <li>Immediate savings</li>
                <li>Maintenance included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={styles.sectionAlt}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Commercial Case Studies</h2>
          <CaseStudies />
        </div>
      </section>

      {/* Service Area */}
      <section style={styles.section}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>Service Area</h2>
          <p style={styles.serviceAreaText}>
            We install commercial solar systems throughout Southeast Georgia: Savannah, Pooler,
            Richmond Hill, Hinesville, Statesboro, and surrounding counties.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.contentContainer}>
          <h2 style={styles.ctaTitle}>Ready to Reduce Your Business Energy Costs?</h2>
          <p style={styles.ctaText}>Get Your Free Assessment</p>
          <div className="cta-buttons" style={styles.ctaButtons}>
            <button className="cta-button-primary" style={styles.ctaButtonPrimary}>Schedule Consultation</button>
            <button className="cta-button-secondary" style={styles.ctaButtonSecondary}>Call (912) 555-SOLAR</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  hero: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    marginBottom: '30px',
    opacity: '0.95',
  },
  ctaButton: {
    backgroundColor: '#f59e0b',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  section: {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
  },
  sectionAlt: {
    padding: '60px 20px',
    backgroundColor: '#f9fafb',
  },
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  sectionIntro: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    fontWeight: '600',
    color: '#374151',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  benefitCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  benefitTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#1e3a8a',
  },
  benefitText: {
    color: '#4b5563',
    fontSize: '1rem',
  },
  benefitList: {
    color: '#4b5563',
    fontSize: '1rem',
    paddingLeft: '20px',
  },
  applicationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    marginTop: '30px',
  },
  applicationItem: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '1.05rem',
    color: '#374151',
    fontWeight: '500',
    textAlign: 'center',
  },
  processSteps: {
    maxWidth: '900px',
    margin: '40px auto 0',
  },
  processStep: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    alignItems: 'flex-start',
  },
  stepNumber: {
    backgroundColor: '#3b82f6',
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1e3a8a',
  },
  stepText: {
    color: '#4b5563',
    fontSize: '1rem',
  },
  equipmentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  equipmentCategory: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  equipmentTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#1e3a8a',
    borderBottom: '3px solid #f59e0b',
    paddingBottom: '10px',
  },
  equipmentList: {
    listStyle: 'none',
    padding: 0,
  },
  includedIntro: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#374151',
    textAlign: 'center',
  },
  includedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '12px',
    marginTop: '30px',
  },
  includedItem: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    fontSize: '0.95rem',
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
  },
  financingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  financingCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e5e7eb',
    transition: 'border-color 0.3s, transform 0.3s',
  },
  financingTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#1e3a8a',
  },
  financingList: {
    listStyle: 'none',
    padding: 0,
  },
  serviceAreaText: {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#374151',
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    marginBottom: '15px',
  },
  ctaText: {
    fontSize: '1.3rem',
    marginBottom: '30px',
    opacity: '0.95',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaButtonPrimary: {
    backgroundColor: '#f59e0b',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  ctaButtonSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '16px 32px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
  },
};

export default Commercial;
