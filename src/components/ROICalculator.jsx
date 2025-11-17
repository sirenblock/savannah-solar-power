import React, { useState } from 'react';
// import '../styles/commercial.module.css';

const ROICalculator = () => {
  const [annualBill, setAnnualBill] = useState('48000');
  const [systemSize, setSystemSize] = useState('150');
  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const bill = parseFloat(annualBill) || 0;
    const size = parseFloat(systemSize) || 0;

    // Commercial solar system cost calculation (~$1.90/watt average)
    const costPerWatt = 1.90;
    const systemCost = size * 1000 * costPerWatt;

    // Tax benefits
    const federalITC = systemCost * 0.30; // 30% ITC
    const macrsDepreciation = systemCost * 0.85; // 85% first year depreciation value
    const macrsValue = macrsDepreciation * 0.21; // Assuming 21% corporate tax rate

    const totalTaxBenefits = federalITC + macrsValue;
    const netCost = systemCost - totalTaxBenefits;

    // Annual savings (assuming 70% offset of energy costs)
    const annualSavings = bill * 0.70;

    // Payback period
    const paybackYears = netCost / annualSavings;

    // 25-year savings
    const totalSavings25Years = (annualSavings * 25) - netCost;

    setResults({
      systemCost: systemCost.toFixed(0),
      federalITC: federalITC.toFixed(0),
      macrsValue: macrsValue.toFixed(0),
      totalTaxBenefits: totalTaxBenefits.toFixed(0),
      netCost: netCost.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      paybackYears: paybackYears.toFixed(1),
      totalSavings25Years: totalSavings25Years.toFixed(0),
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculatorBox}>
        <div style={styles.inputSection}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Annual Energy Bill ($)</label>
            <input
              type="number"
              value={annualBill}
              onChange={(e) => setAnnualBill(e.target.value)}
              className="roi-input"
              style={styles.input}
              placeholder="48000"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>System Size (kW)</label>
            <input
              type="number"
              value={systemSize}
              onChange={(e) => setSystemSize(e.target.value)}
              className="roi-input"
              style={styles.input}
              placeholder="150"
            />
          </div>

          <button onClick={calculateROI} className="calculate-button" style={styles.calculateButton}>
            Calculate ROI
          </button>
        </div>

        {results && (
          <div className="results-section" style={styles.resultsSection}>
            <h3 style={styles.resultsTitle}>Your Commercial Solar Investment</h3>

            <div style={styles.resultsGrid}>
              <div style={styles.resultCard}>
                <div style={styles.resultLabel}>System Cost</div>
                <div style={styles.resultValue}>${parseInt(results.systemCost).toLocaleString()}</div>
              </div>

              <div style={styles.resultCard}>
                <div style={styles.resultLabel}>Federal ITC (30%)</div>
                <div style={styles.resultValue}>-${parseInt(results.federalITC).toLocaleString()}</div>
              </div>

              <div style={styles.resultCard}>
                <div style={styles.resultLabel}>MACRS Tax Value</div>
                <div style={styles.resultValue}>-${parseInt(results.macrsValue).toLocaleString()}</div>
              </div>

              <div style={styles.resultCard}>
                <div style={styles.resultLabel}>Total Tax Benefits</div>
                <div style={styles.resultValue}>-${parseInt(results.totalTaxBenefits).toLocaleString()}</div>
              </div>

              <div style={{...styles.resultCard, ...styles.highlightCard}}>
                <div style={styles.resultLabel}>Net Cost After Tax Benefits</div>
                <div style={{...styles.resultValue, fontSize: '2rem'}}>
                  ${parseInt(results.netCost).toLocaleString()}
                </div>
              </div>

              <div style={{...styles.resultCard, ...styles.highlightCard}}>
                <div style={styles.resultLabel}>Annual Savings</div>
                <div style={{...styles.resultValue, fontSize: '2rem'}}>
                  ${parseInt(results.annualSavings).toLocaleString()}
                </div>
              </div>

              <div style={{...styles.resultCard, ...styles.successCard}}>
                <div style={styles.resultLabel}>Payback Period</div>
                <div style={{...styles.resultValue, fontSize: '2.5rem', fontWeight: '700'}}>
                  {results.paybackYears} years
                </div>
              </div>

              <div style={{...styles.resultCard, ...styles.successCard}}>
                <div style={styles.resultLabel}>25-Year Total Savings</div>
                <div style={{...styles.resultValue, fontSize: '2rem', fontWeight: '700'}}>
                  ${parseInt(results.totalSavings25Years).toLocaleString()}
                </div>
              </div>
            </div>

            <div style={styles.disclaimer}>
              <strong>Note:</strong> This is an estimate based on typical commercial installations. Actual results
              vary based on energy consumption patterns, utility rates, roof conditions, and available incentives.
              MACRS calculation assumes 21% corporate tax rate. Schedule a free assessment for a detailed analysis
              specific to your business.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    marginTop: '20px',
  },
  calculatorBox: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e5e7eb',
  },
  inputSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#374151',
  },
  input: {
    padding: '12px 16px',
    fontSize: '1.1rem',
    border: '2px solid #d1d5db',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  calculateButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.1s',
    alignSelf: 'flex-end',
  },
  resultsSection: {
    marginTop: '30px',
    paddingTop: '30px',
    borderTop: '2px solid #e5e7eb',
  },
  resultsTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  resultCard: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    border: '2px solid #e5e7eb',
  },
  highlightCard: {
    backgroundColor: '#eff6ff',
    border: '2px solid #3b82f6',
  },
  successCard: {
    backgroundColor: '#f0fdf4',
    border: '2px solid #10b981',
  },
  resultLabel: {
    fontSize: '0.9rem',
    color: '#6b7280',
    marginBottom: '8px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  resultValue: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1e3a8a',
  },
  disclaimer: {
    fontSize: '0.9rem',
    color: '#6b7280',
    backgroundColor: '#fef3c7',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #fbbf24',
    lineHeight: '1.5',
  },
};

export default ROICalculator;
