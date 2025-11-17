import React from 'react';
// import '../styles/commercial.module.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: '50kW Office Building',
      location: 'Savannah, GA',
      image: '/images/projects/office-building-placeholder.jpg',
      stats: {
        annualBill: '$18,000',
        systemCost: '$110,000',
        afterTaxBenefits: '$38,500',
        annualSavings: '$12,000',
        payback: '3.2 years',
      },
      description: 'Professional office building in downtown Savannah reduced energy costs by 65% with a rooftop solar installation. System includes 118 x 425W panels with Enphase IQ8M microinverters.',
      highlights: [
        'Minimal disruption during installation',
        'Real-time monitoring system',
        'First-year energy savings exceeded projections',
        'Enhanced corporate sustainability profile',
      ],
    },
    {
      title: '150kW Warehouse',
      location: 'Pooler, GA',
      image: '/images/projects/warehouse-placeholder.jpg',
      stats: {
        annualBill: '$48,000',
        systemCost: '$285,000',
        afterTaxBenefits: '$100,000',
        annualSavings: '$32,000',
        payback: '3.1 years',
      },
      description: 'Distribution warehouse installation featuring ground-mount and rooftop arrays. System designed to offset daytime warehouse operations and refrigeration loads.',
      highlights: [
        'Combined roof and ground-mount system',
        'Battery backup for critical refrigeration',
        'Installation completed in 10 days',
        '25-year performance warranty',
      ],
    },
    {
      title: '75kW Retail Plaza',
      location: 'Richmond Hill, GA',
      image: '/images/projects/retail-plaza-placeholder.jpg',
      stats: {
        annualBill: '$28,500',
        systemCost: '$142,500',
        afterTaxBenefits: '$50,000',
        annualSavings: '$19,000',
        payback: '4.9 years',
      },
      description: 'Shopping plaza with multiple tenants now benefits from reduced common area electrical costs. Ballasted racking system on flat roof required no roof penetrations.',
      highlights: [
        'No roof penetrations (ballasted system)',
        'Reduced common area maintenance fees',
        'Tenant appeal and sustainability marketing',
        'Hurricane-rated installation',
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <p style={styles.intro}>
        Real projects from real businesses in coastal Georgia. See how commercial solar has
        transformed their bottom line.
      </p>

      <div style={styles.studiesGrid}>
        {caseStudies.map((study, index) => (
          <div key={index} className="study-card" style={styles.studyCard}>
            <div style={styles.imageContainer}>
              <div style={styles.imagePlaceholder}>
                <span style={styles.placeholderText}>Project Photo</span>
              </div>
            </div>

            <div style={styles.studyContent}>
              <h3 style={styles.studyTitle}>{study.title}</h3>
              <p style={styles.studyLocation}>{study.location}</p>

              <div style={styles.statsGrid}>
                <div style={styles.statItem}>
                  <div style={styles.statLabel}>Annual Energy Bill</div>
                  <div style={styles.statValue}>{study.stats.annualBill}</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statLabel}>System Cost</div>
                  <div style={styles.statValue}>{study.stats.systemCost}</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statLabel}>After Tax Benefits</div>
                  <div style={styles.statValue}>{study.stats.afterTaxBenefits}</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statLabel}>Annual Savings</div>
                  <div style={styles.statValue}>{study.stats.annualSavings}</div>
                </div>
                <div style={{...styles.statItem, ...styles.paybackStat}}>
                  <div style={styles.statLabel}>Payback Period</div>
                  <div style={{...styles.statValue, fontSize: '1.8rem', fontWeight: '700'}}>
                    {study.stats.payback}
                  </div>
                </div>
              </div>

              <p style={styles.studyDescription}>{study.description}</p>

              <div style={styles.highlightsSection}>
                <h4 style={styles.highlightsTitle}>Project Highlights:</h4>
                <ul style={styles.highlightsList}>
                  {study.highlights.map((highlight, idx) => (
                    <li key={idx} style={styles.highlightItem}>
                      <span style={styles.checkmark}>✓</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.ctaBox}>
        <h3 style={styles.ctaBoxTitle}>Your Business Could Be Next</h3>
        <p style={styles.ctaBoxText}>
          Every business is different. Get a custom ROI analysis and system design for your property.
        </p>
        <button className="cta-box-button" style={styles.ctaBoxButton}>Schedule Your Free Assessment</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
  },
  intro: {
    fontSize: '1.15rem',
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px',
    margin: '0 auto 40px',
  },
  studiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    marginBottom: '50px',
  },
  studyCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  imageContainer: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)',
  },
  placeholderText: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  studyContent: {
    padding: '30px',
  },
  studyTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#1e3a8a',
    marginBottom: '8px',
  },
  studyLocation: {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '20px',
    fontWeight: '500',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
  },
  statItem: {
    textAlign: 'center',
    padding: '10px',
  },
  paybackStat: {
    gridColumn: '1 / -1',
    backgroundColor: '#ecfdf5',
    borderRadius: '8px',
    padding: '15px',
    border: '2px solid #10b981',
  },
  statLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '600',
  },
  statValue: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1e3a8a',
  },
  studyDescription: {
    fontSize: '1rem',
    color: '#4b5563',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  highlightsSection: {
    marginTop: '20px',
  },
  highlightsTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: '12px',
  },
  highlightsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  highlightItem: {
    fontSize: '0.95rem',
    color: '#4b5563',
    marginBottom: '8px',
    paddingLeft: '8px',
    position: 'relative',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'flex-start',
  },
  checkmark: {
    color: '#10b981',
    fontWeight: '700',
    fontSize: '1.2rem',
    marginRight: '8px',
    flexShrink: 0,
  },
  ctaBox: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '50px 30px',
    borderRadius: '12px',
    textAlign: 'center',
    marginTop: '50px',
  },
  ctaBoxTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '15px',
  },
  ctaBoxText: {
    fontSize: '1.15rem',
    marginBottom: '25px',
    opacity: '0.95',
  },
  ctaBoxButton: {
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
};

export default CaseStudies;
