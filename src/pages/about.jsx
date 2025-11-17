import React from 'react';
import styles from '../styles/about.module.css';
import SEO from '../components/SEO';
import seoData from '../data/aboutSEO.json';

const AboutPage = () => {
  return (
    <>
      {/* SEO Meta Tags - Uncomment when using Next.js or react-helmet */}
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImage={seoData.ogImage}
      />

      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.structuredData)
        }}
      />

      <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>About Savannah Solar Power</h1>
          <p className={styles.subtitle}>
            Your Trusted Partner for Hurricane-Ready Solar Solutions in Coastal Georgia
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Our Story</h2>
          <div className={styles.storyContent}>
            <p>
              Savannah Solar Power was founded with a clear mission: to bring reliable,
              hurricane-ready solar solutions to coastal Georgia. As a family-owned local
              company, we understand the unique challenges that come with living in Savannah
              and the surrounding areas.
            </p>
            <p>
              From intense summer heat and high humidity to the very real threat of hurricanes
              and severe storms, our coastal climate demands solar installations that are built
              to last. That's why every system we design and install is engineered to withstand
              Georgia's most severe weather conditions.
            </p>
            <p>
              We're not just solar installers—we're your neighbors, committed to providing
              quality installations and exceptional service to our community. Our customer-first
              approach means we're here for you from the initial consultation through decades
              of reliable system operation.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.container}>
          <h2>Complete Solar Solutions</h2>
          <p className={styles.intro}>
            We provide turnkey solar installations for residential and commercial properties
            throughout the Savannah area. Our comprehensive services include:
          </p>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>📋</div>
              <h3>Site Surveys & Energy Audits</h3>
              <p>Comprehensive assessment of your property and energy needs</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>Custom System Engineering</h3>
              <p>Professional design tailored to your specific requirements</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>📄</div>
              <h3>Permit Acquisition</h3>
              <p>Complete handling of all permits and approvals</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Equipment Procurement</h3>
              <p>Tier-1 manufacturers only—the best equipment available</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>👷</div>
              <h3>Professional Installation</h3>
              <p>Certified technicians ensuring quality workmanship</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>🔌</div>
              <h3>Utility Coordination</h3>
              <p>Seamless interconnection with your utility provider</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>✅</div>
              <h3>System Commissioning</h3>
              <p>Complete testing and system activation</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>📊</div>
              <h3>Ongoing Monitoring</h3>
              <p>Continuous support and performance tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={`${styles.section} ${styles.certificationsSection}`}>
        <div className={styles.container}>
          <h2>Certifications & Credentials</h2>
          <p className={styles.intro}>
            Our team holds the industry's most respected certifications and partnerships
          </p>
          <div className={styles.certificationsList}>
            <div className={styles.certificationBadge}>
              <div className={styles.badgeIcon}>⚡</div>
              <h3>Tesla Powerwall</h3>
              <p>Certified Installer</p>
            </div>
            <div className={styles.certificationBadge}>
              <div className={styles.badgeIcon}>💎</div>
              <h3>Enphase</h3>
              <p>Platinum Installer</p>
            </div>
            <div className={styles.certificationBadge}>
              <div className={styles.badgeIcon}>🎓</div>
              <h3>NABCEP</h3>
              <p>Certified Professionals</p>
            </div>
            <div className={styles.certificationBadge}>
              <div className={styles.badgeIcon}>🏛️</div>
              <h3>Georgia State</h3>
              <p>Licensed & Insured</p>
            </div>
            <div className={styles.certificationBadge}>
              <div className={styles.badgeIcon}>✓</div>
              <h3>Manufacturer</h3>
              <p>Certified for All Equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Why Savannah Trusts Us</h2>
          <div className={styles.trustPoints}>
            <div className={styles.trustCard}>
              <h3>🌪️ Hurricane-Ready Installations</h3>
              <p>
                Every system we install is engineered to withstand Category 3+ hurricane
                wind loads. We use IronRidge racking systems with enhanced fastening and
                structural calculations specific to coastal Georgia's building codes. Your
                investment is built to last through the toughest storms.
              </p>
            </div>
            <div className={styles.trustCard}>
              <h3>🏝️ Local Expertise</h3>
              <p>
                Based in Savannah, we understand the unique challenges of solar in coastal
                Georgia—from high humidity and salt air to severe storm preparation. Our
                installations account for all these factors, ensuring your system performs
                optimally in our specific climate.
              </p>
            </div>
            <div className={styles.trustCard}>
              <h3>🔄 Complete Service</h3>
              <p>
                From your first consultation to decades of system operation, we're here.
                We handle permitting, utility paperwork, inspections, and provide ongoing
                support. One company, complete solution—no need to coordinate multiple
                contractors.
              </p>
            </div>
            <div className={styles.trustCard}>
              <h3>⭐ Quality Equipment</h3>
              <p>
                We only install tier-1 equipment from trusted manufacturers: Jinko, Longi,
                and QCells solar panels; Enphase microinverters; Tesla Powerwall, EP Cube,
                and Franklin batteries. Premium equipment means reliable, long-lasting
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className={`${styles.section} ${styles.serviceAreaSection}`}>
        <div className={styles.container}>
          <h2>Areas We Serve</h2>
          <p className={styles.intro}>
            Proudly serving Savannah and the surrounding coastal Georgia communities
          </p>
          <div className={styles.serviceAreas}>
            <div className={styles.areaColumn}>
              <h3>Primary Service Areas</h3>
              <ul>
                <li>Savannah, GA</li>
                <li>Pooler</li>
                <li>Richmond Hill</li>
                <li>Hinesville</li>
                <li>Statesboro</li>
              </ul>
            </div>
            <div className={styles.areaColumn}>
              <h3>Counties We Cover</h3>
              <ul>
                <li>Chatham County</li>
                <li>Bryan County</li>
                <li>Liberty County</li>
                <li>Effingham County</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.container}>
          <h2>Our Process</h2>
          <p className={styles.intro}>
            From consultation to system activation, we make going solar simple
          </p>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Consultation</h3>
              <p>
                Free site assessment and energy audit. We review your energy bills,
                discuss your goals, and answer all your questions.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Custom Design</h3>
              <p>
                Our engineering team designs a system optimized for your property,
                energy needs, and budget.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Permitting</h3>
              <p>
                We handle all permitting and utility interconnection applications—you
                don't lift a finger.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Installation</h3>
              <p>
                Certified technicians install your system with precision and care.
                Most residential installs complete in 1-3 days.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Inspection & Interconnection</h3>
              <p>
                We coordinate all inspections and utility interconnection. Your
                system goes live.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>6</div>
              <h3>Monitoring & Support</h3>
              <p>
                We set up monitoring and provide ongoing support. You have a partner
                for the life of your system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <h2>Ready to Go Solar?</h2>
          <p className={styles.ctaText}>
            Schedule a free consultation today and learn if solar is right for your property
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Get Free Quote</button>
            <a href="tel:XXX-XXX-XXXX" className={styles.secondaryButton}>
              Call Now: (XXX) XXX-XXXX
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AboutPage;
