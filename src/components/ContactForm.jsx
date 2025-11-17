'use client';

import { useState } from 'react';
import { validateEmail, validatePhone, validateRequired, formatPhoneNumber, sanitizeInput } from '../utils/validation';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

/**
 * Reusable Contact Form Component
 *
 * @param {object} props
 * @param {string} props.variant - Form variant: "full", "simple", or "quick"
 * @param {string} props.submitText - Custom submit button text
 * @param {boolean} props.showServiceArea - Show service area dropdown
 * @param {string} props.defaultInterest - Pre-select interest type
 * @returns {JSX.Element}
 */
const ContactForm = ({
  variant = 'full',
  submitText = 'Get Your Free Solar Assessment',
  showServiceArea = true,
  defaultInterest = ''
}) => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    city: '',
    state: 'GA',
    zip: '',
    serviceArea: '',
    interests: defaultInterest ? [defaultInterest] : [],
    propertyType: '',
    monthlyBill: '',
    ownRent: '',
    message: '',
    preferredContact: 'either',
    bestTime: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Service area options
  const serviceAreas = [
    'Savannah',
    'Pooler',
    'Richmond Hill',
    'Hinesville',
    'Statesboro',
    'Other (please specify in message)'
  ];

  // Interest options
  const interestOptions = [
    'Residential Solar',
    'Commercial Solar',
    'Battery Backup',
    'Tesla Powerwall',
    'System Service/Repair',
    'System Upgrade/Expansion',
    'Free Consultation',
    'Other'
  ];

  // Property type options
  const propertyTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'agricultural', label: 'Agricultural' },
    { value: 'industrial', label: 'Industrial' }
  ];

  // Monthly bill ranges
  const billRanges = [
    'Under $100',
    '$100-$150',
    '$150-$200',
    '$200-$300',
    '$300-$500',
    'Over $500',
    'Not Sure'
  ];

  // Best time options
  const timeOptions = [
    { value: 'morning', label: 'Morning (8 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 7 PM)' }
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'interests') {
        const updatedInterests = checked
          ? [...formData.interests, value]
          : formData.interests.filter(interest => interest !== value);
        setFormData(prev => ({ ...prev, interests: updatedInterests }));
      } else if (name === 'bestTime') {
        const updatedTimes = checked
          ? [...formData.bestTime, value]
          : formData.bestTime.filter(time => time !== value);
        setFormData(prev => ({ ...prev, bestTime: updatedTimes }));
      }
    } else if (name === 'phone') {
      // Format phone number as user types
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateFormData = () => {
    const newErrors = {};

    // Required fields based on variant
    if (!validateRequired(formData.fullName)) {
      newErrors.fullName = 'Full name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    // Full variant requires additional fields
    if (variant === 'full') {
      if (formData.interests.length === 0) {
        newErrors.interests = 'Please select at least one interest';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateFormData()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Sanitize inputs
      const sanitizedData = {
        ...formData,
        fullName: sanitizeInput(formData.fullName),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        message: sanitizeInput(formData.message),
        propertyAddress: sanitizeInput(formData.propertyAddress),
        city: sanitizeInput(formData.city),
        zip: sanitizeInput(formData.zip)
      };

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...sanitizedData,
          variant,
          submittedAt: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Success
      setSubmitStatus('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          propertyAddress: '',
          city: '',
          state: 'GA',
          zip: '',
          serviceArea: '',
          interests: defaultInterest ? [defaultInterest] : [],
          propertyType: '',
          monthlyBill: '',
          ownRent: '',
          message: '',
          preferredContact: 'either',
          bestTime: []
        });
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render different form variants
  const renderQuickForm = () => (
    <>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name *"
        className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
        required
      />
      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address *"
        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
        required
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number *"
        className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
        required
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
    </>
  );

  const renderSimpleForm = () => (
    <>
      {renderQuickForm()}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about your solar needs..."
        rows="4"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </>
  );

  const renderFullForm = () => (
    <>
      {/* Name, Email, Phone */}
      <div>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name *"
          className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
          required
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
            required
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Property Address */}
      <div>
        <input
          type="text"
          name="propertyAddress"
          value={formData.propertyAddress}
          onChange={handleChange}
          placeholder="Property Address (optional - helps us prepare for consultation)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="ZIP Code"
          maxLength="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Service Area */}
      {showServiceArea && (
        <div>
          <select
            name="serviceArea"
            value={formData.serviceArea}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select Your Service Area</option>
            {serviceAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>
      )}

      {/* Interests */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          I'm Interested In: *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {interestOptions.map(interest => (
            <label key={interest} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-600"
              />
              <span className="text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
        {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Property Type:
        </label>
        <div className="grid md:grid-cols-4 gap-3">
          {propertyTypes.map(type => (
            <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="propertyType"
                value={type.value}
                checked={formData.propertyType === type.value}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="text-gray-700">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Monthly Bill */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Average Monthly Electric Bill:
        </label>
        <select
          name="monthlyBill"
          value={formData.monthlyBill}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Range</option>
          {billRanges.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      {/* Own or Rent */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Do you own or rent?
        </label>
        <div className="flex gap-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="ownRent"
              value="own"
              checked={formData.ownRent === 'own'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
            <span className="text-gray-700">Own</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="ownRent"
              value="rent"
              checked={formData.ownRent === 'rent'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
            <span className="text-gray-700">Rent</span>
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message / Additional Details (optional but encouraged)"
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Preferred Contact Method:
        </label>
        <div className="flex gap-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === 'phone'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
            <span className="text-gray-700">Phone</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === 'email'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
            <span className="text-gray-700">Email</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="either"
              checked={formData.preferredContact === 'either'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
            <span className="text-gray-700">Either</span>
          </label>
        </div>
      </div>

      {/* Best Time to Reach */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Best Time to Reach You:
        </label>
        <div className="grid md:grid-cols-3 gap-3">
          {timeOptions.map(time => (
            <label key={time.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="bestTime"
                value={time.value}
                checked={formData.bestTime.includes(time.value)}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-600"
              />
              <span className="text-gray-700">{time.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        {variant === 'quick' && renderQuickForm()}
        {variant === 'simple' && renderSimpleForm()}
        {variant === 'full' && renderFullForm()}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {submitText}
            </>
          )}
        </button>

        {/* Privacy Notice */}
        <p className="text-sm text-gray-600 text-center">
          We respect your privacy. Your information is never shared with third parties.
        </p>
      </form>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-green-800 mb-1">Thank you for contacting Savannah Solar Power!</h3>
            <p className="text-green-700">
              We've received your inquiry and will respond within 24 hours. Check your email for confirmation.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-800 mb-1">Oops! Something went wrong.</h3>
            <p className="text-red-700">
              Please try again or call us at <a href="tel:XXX-XXX-XXXX" className="underline font-semibold">(XXX) XXX-XXXX</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
