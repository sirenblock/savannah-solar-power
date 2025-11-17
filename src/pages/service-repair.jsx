import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceRequestForm from '../components/ServiceRequestForm';
// import '../styles/service-repair.module.css';

export default function ServiceRepair() {
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Solar System Service & Repair | Savannah, GA | Savannah Solar Power</title>
        <meta
          name="description"
          content="Expert solar panel repair and maintenance in Savannah, GA. We service all brands - fast, reliable repairs to keep your system running at peak performance."
        />
        <meta
          name="keywords"
          content="solar panel repair Savannah GA, solar service Savannah, solar system maintenance Georgia, solar troubleshooting Savannah"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="service-repair-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1>Solar System Service & Repair | Savannah, GA</h1>
            <p className="hero-subheading">
              Expert service for all solar brands. Fast, reliable repairs and maintenance
              to keep your system running at peak performance.
            </p>
            <button className="cta-button primary" onClick={scrollToForm}>
              Schedule Service Call
            </button>
          </div>
        </section>

        {/* We Service All Solar Systems */}
        <section className="all-systems-section section">
          <div className="container">
            <h2>We Service All Solar Systems</h2>

            <div className="two-column">
              <div className="column">
                <h3>Not Just Our Installs</h3>
                <p>
                  We service and repair solar systems from any installer. Whether we installed
                  your system or someone else did, we can help:
                </p>
                <ul className="service-list">
                  <li>System not producing expected energy</li>
                  <li>Inverter errors or failures</li>
                  <li>Monitoring system issues</li>
                  <li>Panel damage or replacement</li>
                  <li>Electrical problems</li>
                  <li>Storm damage assessment</li>
                  <li>Performance optimization</li>
                  <li>System upgrades</li>
                </ul>
              </div>

              <div className="column">
                <h3>All Equipment Brands</h3>
                <div className="brands-grid">
                  <div className="brand-category">
                    <h4>Microinverters</h4>
                    <ul>
                      <li>Enphase (IQ7, IQ8, older models)</li>
                      <li>APsystems</li>
                      <li>Hoymiles</li>
                    </ul>
                  </div>
                  <div className="brand-category">
                    <h4>String Inverters</h4>
                    <ul>
                      <li>SMA</li>
                      <li>SolarEdge</li>
                      <li>Fronius</li>
                      <li>SolArk</li>
                    </ul>
                  </div>
                  <div className="brand-category">
                    <h4>Battery Systems</h4>
                    <ul>
                      <li>Tesla Powerwall (all generations)</li>
                      <li>Enphase IQ Batteries</li>
                      <li>EP Cube</li>
                      <li>Franklin aPower</li>
                      <li>EG4 PowerPro</li>
                    </ul>
                  </div>
                  <div className="brand-category">
                    <h4>Other Equipment</h4>
                    <ul>
                      <li>All panel manufacturers</li>
                      <li>All monitoring systems</li>
                      <li>All racking systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Solar System Issues We Fix */}
        <section className="common-issues-section section bg-light">
          <div className="container">
            <h2>Common Solar System Issues We Fix</h2>

            <div className="issues-grid">
              <div className="issue-card">
                <h3>Inverter Problems</h3>
                <p>
                  Inverter failures are the most common issue with solar systems. Symptoms:
                </p>
                <ul>
                  <li>System stopped producing</li>
                  <li>Error codes or red lights on inverter</li>
                  <li>Monitoring app shows offline</li>
                  <li>Reduced production</li>
                </ul>
                <p>
                  We diagnose and repair all inverter brands. If replacement is needed,
                  we source and install new units quickly.
                </p>
              </div>

              <div className="issue-card">
                <h3>Monitoring System Issues</h3>
                <p>
                  Can't see your system data? Monitoring problems include:
                </p>
                <ul>
                  <li>Gateway offline</li>
                  <li>App not updating</li>
                  <li>Missing production data</li>
                  <li>Communication errors</li>
                </ul>
                <p>
                  We troubleshoot network connectivity, gateway issues, and restore your monitoring.
                </p>
              </div>

              <div className="issue-card">
                <h3>Underperforming Systems</h3>
                <p>
                  System not producing what it used to? We investigate:
                </p>
                <ul>
                  <li>Panel soiling or shading</li>
                  <li>Inverter derating</li>
                  <li>Wiring issues</li>
                  <li>Failed optimizers or microinverters</li>
                  <li>Panel degradation</li>
                </ul>
                <p>
                  Comprehensive diagnostics to identify and fix performance issues.
                </p>
              </div>

              <div className="issue-card">
                <h3>Panel Damage</h3>
                <p>
                  Hail, falling branches, or debris can crack panels. We:
                </p>
                <ul>
                  <li>Assess damage</li>
                  <li>Replace individual panels</li>
                  <li>Match existing panels when possible</li>
                  <li>Test system after replacement</li>
                </ul>
              </div>

              <div className="issue-card">
                <h3>Electrical Issues</h3>
                <p>
                  AC or DC electrical problems require expert diagnosis:
                </p>
                <ul>
                  <li>Tripped breakers</li>
                  <li>Wiring failures</li>
                  <li>Connector issues</li>
                  <li>Grounding problems</li>
                  <li>Safety shutoff malfunctions</li>
                </ul>
              </div>

              <div className="issue-card">
                <h3>Storm Damage</h3>
                <p>
                  After hurricanes or severe storms:
                </p>
                <ul>
                  <li>Visual inspection of panels and racking</li>
                  <li>Electrical testing</li>
                  <li>Inverter diagnostics</li>
                  <li>Insurance claim documentation</li>
                  <li>Repair or replacement as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Service Offerings */}
        <section className="service-offerings-section section">
          <div className="container">
            <h2>Our Service Offerings</h2>

            <div className="offerings-grid">
              <div className="offering-card">
                <h3>Diagnostic Service Calls</h3>
                <p>Comprehensive system inspection and troubleshooting:</p>
                <ul>
                  <li>Visual inspection of all components</li>
                  <li>Inverter diagnostics</li>
                  <li>Production analysis</li>
                  <li>Monitoring review</li>
                  <li>Electrical testing</li>
                  <li>Detailed report with findings and recommendations</li>
                </ul>
                <div className="pricing-note">
                  <strong>Service call fee waived if we perform repairs</strong>
                </div>
              </div>

              <div className="offering-card">
                <h3>Annual Maintenance</h3>
                <p>Preventive maintenance keeps your system running optimally:</p>
                <ul>
                  <li>Panel cleaning (if needed)</li>
                  <li>Visual inspection</li>
                  <li>Electrical connection check</li>
                  <li>Inverter diagnostics</li>
                  <li>Performance verification</li>
                  <li>Monitoring system check</li>
                </ul>
                <div className="pricing-note">
                  <strong>Annual maintenance packages available</strong>
                </div>
              </div>

              <div className="offering-card">
                <h3>Emergency Repairs</h3>
                <p>System down? We offer priority emergency service for critical issues:</p>
                <ul>
                  <li>Same-day or next-day service available</li>
                  <li>Fast diagnosis and repair</li>
                  <li>Emergency contact line</li>
                  <li>Priority scheduling</li>
                </ul>
                <button className="cta-button secondary" onClick={scrollToForm}>
                  Request Emergency Service
                </button>
              </div>

              <div className="offering-card">
                <h3>System Upgrades</h3>
                <p>Enhance your existing system:</p>
                <ul>
                  <li>Add more panels (increase capacity)</li>
                  <li>Add battery backup</li>
                  <li>Upgrade inverter</li>
                  <li>Install monitoring</li>
                  <li>Add EV charger</li>
                  <li>Generator integration</li>
                </ul>
              </div>

              <div className="offering-card highlight">
                <h3>Reroof Coordination</h3>
                <p>Need to replace your roof? We handle solar removal and reinstallation:</p>
                <ul>
                  <li>Safe removal of solar panels and racking</li>
                  <li>Secure storage during roofing work</li>
                  <li>Reinstallation after new roof complete</li>
                  <li>System retesting and recertification</li>
                  <li>Coordination with roofing contractor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="service-process-section section bg-light">
          <div className="container">
            <h2>Service Process</h2>

            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Contact Us</h3>
                <p>Call or submit service request online. Describe the issue you're experiencing.</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h3>Diagnosis</h3>
                <p>We schedule a service call. Technician performs comprehensive diagnostics to identify the problem.</p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h3>Estimate</h3>
                <p>You receive a detailed estimate for repairs needed. No surprises.</p>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <h3>Repair</h3>
                <p>Upon approval, we complete repairs efficiently. Most repairs same-visit.</p>
              </div>

              <div className="step">
                <div className="step-number">5</div>
                <h3>Testing</h3>
                <p>We verify system is operating correctly and producing as expected.</p>
              </div>

              <div className="step">
                <div className="step-number">6</div>
                <h3>Follow-Up</h3>
                <p>We monitor remotely (if monitoring is available) to ensure continued proper operation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Storm-Related Services */}
        <section className="storm-services-section section">
          <div className="container">
            <h2>Storm-Related Services</h2>

            <div className="three-column">
              <div className="column">
                <h3>Pre-Storm Preparation</h3>
                <p>Hurricane approaching? We can:</p>
                <ul>
                  <li>Inspect system structural integrity</li>
                  <li>Verify battery is charged (if applicable)</li>
                  <li>Check rapid shutdown functionality</li>
                  <li>Recommend storm preparations</li>
                </ul>
              </div>

              <div className="column">
                <h3>Post-Storm Inspection</h3>
                <p>After severe weather:</p>
                <ul>
                  <li>Visual damage assessment</li>
                  <li>Electrical safety check</li>
                  <li>Production verification</li>
                  <li>Insurance documentation (photos, reports)</li>
                  <li>Repair coordination</li>
                </ul>
              </div>

              <div className="column">
                <h3>Insurance Claims Assistance</h3>
                <p>We work with your insurance company:</p>
                <ul>
                  <li>Detailed damage assessment</li>
                  <li>Photo documentation</li>
                  <li>Repair estimates</li>
                  <li>Scope of work for insurance adjusters</li>
                  <li>Direct billing to insurance (when applicable)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* System Monitoring & Remote Support */}
        <section className="monitoring-section section bg-light">
          <div className="container">
            <h2>System Monitoring & Remote Support</h2>

            <div className="two-column">
              <div className="column">
                <h3>Remote Diagnostics</h3>
                <p>
                  For systems with monitoring, we can often diagnose issues remotely:
                </p>
                <ul>
                  <li>Inverter errors</li>
                  <li>Production anomalies</li>
                  <li>Communication issues</li>
                  <li>Performance trends</li>
                </ul>
                <p className="highlight-text">
                  Many issues can be resolved remotely without a site visit.
                </p>
              </div>

              <div className="column">
                <h3>Monitoring Setup</h3>
                <p>
                  Older system without monitoring? We can add:
                </p>
                <ul>
                  <li>Enphase Envoy for Enphase systems</li>
                  <li>SolarEdge monitoring for SolarEdge inverters</li>
                  <li>Third-party monitoring solutions</li>
                  <li>Consumption monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Adding Battery Backup */}
        <section className="battery-retrofit-section section">
          <div className="container">
            <h2>Adding Battery Backup to Existing Solar</h2>

            <div className="content-box">
              <h3>Retrofit Battery Solutions</h3>
              <p>
                Already have solar? Add battery backup for storm protection:
              </p>
              <div className="battery-options">
                <div className="battery-option">
                  <strong>Tesla Powerwall</strong>
                  <span>(AC-coupled)</span>
                </div>
                <div className="battery-option">
                  <strong>Enphase IQ Batteries</strong>
                  <span>(for Enphase systems)</span>
                </div>
                <div className="battery-option">
                  <strong>EP Cube, Franklin, or EG4</strong>
                  <span>(various configurations)</span>
                </div>
              </div>
              <p className="compatibility-note">
                Compatible with most existing solar systems
              </p>
              <button className="cta-button primary" onClick={scrollToForm}>
                Free Battery Consultation
              </button>
            </div>
          </div>
        </section>

        {/* System Expansion */}
        <section className="expansion-section section bg-light">
          <div className="container">
            <h2>System Expansion</h2>

            <div className="two-column">
              <div className="column">
                <h3>Add More Solar Panels</h3>
                <p>Need more production? We can:</p>
                <ul>
                  <li>Add panels to existing array</li>
                  <li>Create new array on different roof section</li>
                  <li>Upgrade inverter if needed</li>
                  <li>Ensure system compatibility</li>
                  <li>Handle all permitting and utility approval</li>
                </ul>
              </div>

              <div className="column">
                <h3>Upgrade Old Equipment</h3>
                <p>Old inverter failing? Time to upgrade:</p>
                <ul>
                  <li>Replace outdated string inverters with Enphase microinverters</li>
                  <li>Upgrade to hybrid inverter (battery-ready)</li>
                  <li>Replace old panels with higher-efficiency models</li>
                  <li>Modernize monitoring systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EV Charger Installation */}
        <section className="ev-charger-section section">
          <div className="container">
            <h2>EV Charger Installation</h2>

            <div className="content-box centered">
              <h3>Solar-Powered EV Charging</h3>
              <p className="tagline">Drive on sunshine.</p>
              <p>We install Level 2 EV chargers:</p>
              <div className="charger-brands">
                <span className="brand">Tesla Wall Connector</span>
                <span className="brand">ChargePoint Home Flex</span>
                <span className="brand">JuiceBox</span>
                <span className="brand">Grizzl-E</span>
              </div>
              <p className="benefit-text">
                Integrate with your solar system for clean, low-cost EV charging.
              </p>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="service-area-section section bg-light">
          <div className="container">
            <h2>Service Area</h2>
            <p className="service-area-intro">
              We provide solar service and repair throughout:
            </p>
            <div className="service-area-grid">
              <div className="area-column">
                <h4>Cities</h4>
                <ul>
                  <li>Savannah, GA</li>
                  <li>Pooler</li>
                  <li>Richmond Hill</li>
                  <li>Hinesville</li>
                  <li>Statesboro</li>
                </ul>
              </div>
              <div className="area-column">
                <h4>Counties</h4>
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

        {/* Service Pricing */}
        <section className="pricing-section section">
          <div className="container">
            <h2>Service Pricing</h2>

            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Diagnostic Service Call</h3>
                <p className="price-note">Contact for pricing</p>
                <p className="pricing-detail">(Waived if repairs are performed)</p>
              </div>

              <div className="pricing-card">
                <h3>Common Repairs</h3>
                <ul className="pricing-list">
                  <li>
                    <span>Microinverter replacement</span>
                    <span className="price">Contact for quote</span>
                  </li>
                  <li>
                    <span>String inverter replacement</span>
                    <span className="price">Contact for quote</span>
                  </li>
                  <li>
                    <span>Panel replacement</span>
                    <span className="price">Per panel pricing</span>
                  </li>
                  <li>
                    <span>Monitoring system repair</span>
                    <span className="price">Varies by scope</span>
                  </li>
                  <li>
                    <span>Electrical repairs</span>
                    <span className="price">Varies by scope</span>
                  </li>
                </ul>
              </div>

              <div className="pricing-card highlight">
                <h3>Annual Maintenance Package</h3>
                <p className="price-note">Contact for pricing</p>
                <p className="package-includes">
                  Includes annual inspection, cleaning (if needed), diagnostics,
                  and priority service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section section bg-light">
          <div className="container">
            <h2>Why Choose Savannah Solar Power for Service</h2>

            <div className="reasons-grid">
              <div className="reason">
                <h3>Expert Technicians</h3>
                <p>Certified, trained, experienced with all major solar brands.</p>
              </div>

              <div className="reason">
                <h3>Fast Response</h3>
                <p>Local company. We respond quickly. Most service calls within 1-3 business days.</p>
              </div>

              <div className="reason">
                <h3>Comprehensive Diagnostics</h3>
                <p>We find the root cause, not just symptoms. Permanent fixes, not Band-Aids.</p>
              </div>

              <div className="reason">
                <h3>Fair Pricing</h3>
                <p>Transparent estimates. Competitive rates. No hidden fees.</p>
              </div>

              <div className="reason">
                <h3>All Brands</h3>
                <p>We service equipment from any manufacturer, any installer.</p>
              </div>

              <div className="reason">
                <h3>Ongoing Support</h3>
                <p>We're here for the long term. Build a relationship with a local company you can trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service FAQs */}
        <section className="faq-section section">
          <div className="container">
            <h2>Service FAQs</h2>

            <div className="faq-list">
              <div className="faq-item">
                <h3>Do you only service systems you installed?</h3>
                <p>
                  No! We service all brands and systems, regardless of who installed them.
                  Whether you got your system from us or another company, we can help.
                </p>
              </div>

              <div className="faq-item">
                <h3>How quickly can you respond?</h3>
                <p>
                  Most service calls scheduled within 1-3 business days. Emergency service
                  available for critical issues.
                </p>
              </div>

              <div className="faq-item">
                <h3>Do you offer warranties on repairs?</h3>
                <p>
                  Yes. All our repair work is warrantied. We stand behind our work.
                </p>
              </div>

              <div className="faq-item">
                <h3>Can you help with insurance claims?</h3>
                <p>
                  Yes. We provide documentation, estimates, and work with adjusters to
                  streamline the claims process.
                </p>
              </div>

              <div className="faq-item">
                <h3>What if my system is old?</h3>
                <p>
                  We service systems of any age. If parts are unavailable, we recommend
                  upgrade paths to modern equipment.
                </p>
              </div>

              <div className="faq-item">
                <h3>Can you add batteries to my existing solar system?</h3>
                <p>
                  Yes! Most existing solar systems can be retrofitted with battery backup.
                  We'll assess your system and design a compatible battery solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section section bg-primary">
          <div className="container centered">
            <h2>Need Solar Service or Repair?</h2>
            <p className="cta-text">
              Schedule Your Service Call Today
            </p>
            <div className="cta-buttons">
              <button className="cta-button large white" onClick={scrollToForm}>
                Schedule Service
              </button>
              <a href="tel:912-555-0123" className="cta-button large outline-white">
                Call Now: (912) 555-0123
              </a>
            </div>
            <p className="emergency-note">Emergency Service Available</p>
          </div>
        </section>

        {/* Service Request Form */}
        {showForm && (
          <section id="service-form" className="form-section section">
            <div className="container">
              <h2>Request Service</h2>
              <ServiceRequestForm />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
