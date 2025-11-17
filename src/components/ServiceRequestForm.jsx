'use client';

import { useState } from 'react';
// import '../styles/service-request-form.module.css';

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    serviceType: '',
    issueDescription: '',
    systemAge: '',
    systemBrand: '',
    urgency: 'normal',
    preferredContact: 'phone',
    preferredDate: '',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData.issueDescription.trim()) {
      newErrors.issueDescription = 'Please describe the issue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // In a real application, this would send data to a server
    console.log('Service request submitted:', formData);

    // Show success message
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        serviceType: '',
        issueDescription: '',
        systemAge: '',
        systemBrand: '',
        urgency: 'normal',
        preferredContact: 'phone',
        preferredDate: '',
        additionalNotes: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Service Request Submitted!</h3>
        <p>
          Thank you for contacting Savannah Solar Power. We've received your service
          request and will contact you within 24 hours to schedule your service call.
        </p>
        <p className="success-contact">
          For urgent issues, please call us directly at{' '}
          <a href="tel:912-555-0123">(912) 555-0123</a>
        </p>
      </div>
    );
  }

  return (
    <form className="service-request-form" onSubmit={handleSubmit}>
      <div className="form-intro">
        <p>
          Fill out the form below and we'll contact you to schedule your service call.
          For emergency service, please call us directly.
        </p>
      </div>

      {/* Contact Information */}
      <fieldset>
        <legend>Contact Information</legend>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(912) 555-0123"
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="preferredContact">
              Preferred Contact Method
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
            >
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Service Location */}
      <fieldset>
        <legend>Service Location</legend>

        <div className="form-group">
          <label htmlFor="address">
            Street Address <span className="required">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main Street"
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Savannah"
            />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="31401"
            />
          </div>
        </div>
      </fieldset>

      {/* Service Details */}
      <fieldset>
        <legend>Service Details</legend>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="serviceType">
              Type of Service Needed <span className="required">*</span>
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={errors.serviceType ? 'error' : ''}
            >
              <option value="">-- Select Service Type --</option>
              <option value="diagnostic">Diagnostic Service Call</option>
              <option value="inverter-issue">Inverter Problem</option>
              <option value="monitoring-issue">Monitoring System Issue</option>
              <option value="low-production">Low Production / Performance Issue</option>
              <option value="panel-damage">Panel Damage</option>
              <option value="electrical-issue">Electrical Problem</option>
              <option value="storm-damage">Storm Damage Assessment</option>
              <option value="maintenance">Annual Maintenance</option>
              <option value="add-battery">Add Battery Backup</option>
              <option value="add-panels">Add More Panels</option>
              <option value="upgrade">System Upgrade</option>
              <option value="reroof">Reroof Coordination</option>
              <option value="ev-charger">EV Charger Installation</option>
              <option value="other">Other</option>
            </select>
            {errors.serviceType && <span className="error-message">{errors.serviceType}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="urgency">
              Urgency Level
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
            >
              <option value="normal">Normal (1-3 business days)</option>
              <option value="urgent">Urgent (next day)</option>
              <option value="emergency">Emergency (same day)</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="issueDescription">
            Describe the Issue <span className="required">*</span>
          </label>
          <textarea
            id="issueDescription"
            name="issueDescription"
            value={formData.issueDescription}
            onChange={handleChange}
            rows="5"
            placeholder="Please describe what's happening with your solar system. Include any error messages, warning lights, or changes in performance you've noticed."
            className={errors.issueDescription ? 'error' : ''}
          ></textarea>
          {errors.issueDescription && <span className="error-message">{errors.issueDescription}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="systemAge">
              System Age (approximate)
            </label>
            <select
              id="systemAge"
              name="systemAge"
              value={formData.systemAge}
              onChange={handleChange}
            >
              <option value="">-- Select Age --</option>
              <option value="0-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="systemBrand">
              Inverter Brand (if known)
            </label>
            <select
              id="systemBrand"
              name="systemBrand"
              value={formData.systemBrand}
              onChange={handleChange}
            >
              <option value="">-- Select Brand --</option>
              <option value="enphase">Enphase</option>
              <option value="solaredge">SolarEdge</option>
              <option value="sma">SMA</option>
              <option value="fronius">Fronius</option>
              <option value="solark">SolArk</option>
              <option value="tesla">Tesla Powerwall</option>
              <option value="eg4">EG4</option>
              <option value="other">Other</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="preferredDate">
            Preferred Service Date (optional)
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalNotes">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows="3"
            placeholder="Any additional information that might be helpful..."
          ></textarea>
        </div>
      </fieldset>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Submit Service Request
        </button>
        <p className="form-note">
          <strong>Need immediate help?</strong> Call us at{' '}
          <a href="tel:912-555-0123">(912) 555-0123</a>
        </p>
      </div>
    </form>
  );
};

export default ServiceRequestForm;
