/**
 * Form Validation Utilities
 * Savannah Solar Power - Contact Form Validation
 */

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validate phone number format
 * Accepts formats: (123) 456-7890, 123-456-7890, 1234567890, etc.
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const validatePhone = (phone) => {
  if (!phone) return false;
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  // Check if we have 10 or 11 digits (with or without country code)
  return digitsOnly.length === 10 || digitsOnly.length === 11;
};

/**
 * Validate required field
 * @param {string} value - Field value to validate
 * @returns {boolean} - True if field has content
 */
export const validateRequired = (value) => {
  if (value === null || value === undefined) return false;
  return value.toString().trim().length > 0;
};

/**
 * Format phone number to (XXX) XXX-XXXX format
 * @param {string} phone - Phone number to format
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');

  // Format based on length
  if (digitsOnly.length === 0) return '';
  if (digitsOnly.length <= 3) return `(${digitsOnly}`;
  if (digitsOnly.length <= 6) return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
  if (digitsOnly.length <= 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }
  // Handle 11 digits (with country code)
  return `+${digitsOnly.slice(0, 1)} (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 11)}`;
};

/**
 * Validate form data based on field requirements
 * @param {object} formData - Form data object
 * @param {array} requiredFields - Array of required field names
 * @returns {object} - Object with isValid boolean and errors object
 */
export const validateForm = (formData, requiredFields = []) => {
  const errors = {};

  // Check required fields
  requiredFields.forEach(field => {
    if (!validateRequired(formData[field])) {
      errors[field] = 'This field is required';
    }
  });

  // Validate email if present
  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate phone if present
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Sanitize user input to prevent XSS
 * @param {string} input - User input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  if (!input) return '';
  return input
    .toString()
    .trim()
    .replace(/[<>]/g, ''); // Remove < and > characters
};

/**
 * Get validation error message for a specific field
 * @param {string} fieldName - Name of the field
 * @param {string} value - Value of the field
 * @param {boolean} isRequired - Whether field is required
 * @returns {string} - Error message or empty string
 */
export const getFieldError = (fieldName, value, isRequired = false) => {
  // Check if required field is empty
  if (isRequired && !validateRequired(value)) {
    return `${fieldName} is required`;
  }

  // Don't validate empty optional fields
  if (!value) return '';

  // Email validation
  if (fieldName.toLowerCase().includes('email') && !validateEmail(value)) {
    return 'Please enter a valid email address';
  }

  // Phone validation
  if (fieldName.toLowerCase().includes('phone') && !validatePhone(value)) {
    return 'Please enter a valid phone number (10 digits)';
  }

  return '';
};
