'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Star,
  Users,
  Zap,
  CheckCircle,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [showMap, setShowMap] = useState(false);

  // Contact information
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '(XXX) XXX-XXXX',
      link: 'tel:XXX-XXX-XXXX',
      description: (
        <div className="text-sm text-gray-600 mt-2">
          <p><strong>Monday-Friday:</strong> 8:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
      )
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@savannahsolarpower.com',
      link: 'mailto:info@savannahsolarpower.com',
      description: <p className="text-sm text-gray-600 mt-2">We respond to all emails within 24 business hours.</p>
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office Address',
      content: 'C SQUARED POWER LLC',
      description: (
        <div className="text-sm text-gray-600 mt-2">
          <p>Savannah, GA 31XXX</p>
          <p className="text-gray-500 italic">(Serving Savannah and surrounding counties)</p>
        </div>
      )
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Emergency Service',
      content: '(XXX) XXX-XXXX (Emergency Line)',
      link: 'tel:XXX-XXX-XXXX',
      description: <p className="text-sm text-gray-600 mt-2">For existing customers with urgent service needs</p>
    }
  ];

  // Trust signals / Why Choose Us
  const trustSignals = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Licensed & Insured',
      description: 'Georgia State Licensed Solar Contractor'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Certified Installers',
      description: 'Tesla Powerwall Certified, Enphase Platinum Installer, NABCEP Certified Professionals'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Local Company',
      description: 'Based in Savannah, serving coastal Georgia'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: '25-Year Warranties',
      description: 'Industry-leading equipment warranties'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: 'Free Consultations',
      description: 'No-obligation assessments and proposals'
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: '5-Star Service',
      description: 'Rated excellent by local homeowners and businesses'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The team at Savannah Solar Power was professional from start to finish. Our system has been producing great energy and our electric bills have dropped significantly!",
      author: "John & Sarah M.",
      location: "Pooler, GA",
      rating: 5
    },
    {
      quote: "We had our Tesla Powerwall installed and couldn't be happier. When the power goes out in the neighborhood, we don't even notice. Highly recommend!",
      author: "David K.",
      location: "Savannah, GA",
      rating: 5
    },
    {
      quote: "Great communication, fair pricing, and quality work. They helped us navigate the tax credits and financing. Our solar system is performing better than expected.",
      author: "Lisa P.",
      location: "Richmond Hill, GA",
      rating: 5
    }
  ];

  // FAQ quick links
  const faqQuickLinks = [
    {
      question: "How much does solar cost?",
      link: "/faq#cost"
    },
    {
      question: "How long does installation take?",
      link: "/faq#installation-time"
    },
    {
      question: "Do I qualify for the tax credit?",
      link: "/faq#tax-credit"
    },
    {
      question: "Will solar work on my roof?",
      link: "/faq#roof-compatibility"
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Savannah Solar Power | Free Solar Consultation</title>
        <meta
          name="description"
          content="Contact Savannah Solar Power for your free solar consultation. Serving Savannah, Pooler, Richmond Hill, Hinesville, Statesboro and surrounding Georgia areas."
        />
        <meta name="keywords" content="Contact solar company Savannah GA, Solar quote Savannah, Solar consultation Georgia, Savannah solar installer contact" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Contact Savannah Solar Power | Free Solar Consultation" />
        <meta property="og:description" content="Get your free solar consultation. We respond to all inquiries within 24 hours." />
        <meta property="og:type" content="website" />

        {/* Schema.org Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Savannah Solar Power",
              "legalName": "C SQUARED POWER LLC",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Savannah",
                "addressLocality": "Savannah",
                "addressRegion": "GA",
                "postalCode": "31XXX",
                "addressCountry": "US"
              },
              "telephone": "XXX-XXX-XXXX",
              "email": "info@savannahsolarpower.com",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Savannah"
                },
                {
                  "@type": "City",
                  "name": "Pooler"
                },
                {
                  "@type": "City",
                  "name": "Richmond Hill"
                },
                {
                  "@type": "City",
                  "name": "Hinesville"
                },
                {
                  "@type": "City",
                  "name": "Statesboro"
                }
              ],
              "priceRange": "$$",
              "image": "https://savannahsolarpower.com/logo.png",
              "sameAs": []
            })
          }}
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Savannah Solar Power
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Get your free solar consultation. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-600">{info.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900">{info.title}</h3>
                </div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-blue-600 hover:text-blue-700 font-semibold block mb-2"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-900 font-semibold mb-2">{info.content}</p>
                )}
                {info.description}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Your Free Solar Assessment
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <ContactForm variant="full" showServiceArea={true} />
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            Our Service Area
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Map Placeholder */}
            <div className="mb-6">
              {!showMap ? (
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <button
                    onClick={() => setShowMap(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg"
                  >
                    <MapPin className="w-5 h-5 inline mr-2" />
                    Load Service Area Map
                  </button>
                </div>
              ) : (
                <div className="rounded-lg overflow-hidden">
                  {/* Google Maps Embed - Replace with actual API key */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429156.3195745655!2d-81.45876784741949!3d32.03399967890238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb9e1d1e8457b1%3A0x4980de17e2eaa355!2sSavannah%2C%20GA!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Savannah Solar Power Service Area"
                  ></iframe>
                </div>
              )}
            </div>

            {/* Service Area Text */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proudly Serving Coastal Georgia
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We proudly serve Savannah, GA and surrounding areas including <strong>Pooler, Richmond Hill, Hinesville, Statesboro</strong>, and all of <strong>Chatham, Bryan, Liberty, and Effingham counties</strong>.
              </p>
              <p className="text-gray-600">
                If you're outside our primary service area, contact us - we may still be able to help!
              </p>

              {/* Service Area Grid */}
              <div className="grid md:grid-cols-4 gap-4 mt-8">
                {['Savannah', 'Pooler', 'Richmond Hill', 'Hinesville', 'Statesboro', 'Chatham County', 'Bryan County', 'Liberty County'].map((area, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 inline mr-2" />
                    <span className="font-semibold text-gray-900">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Savannah Solar Power?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {signal.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {signal.title}
                </h3>
                <p className="text-gray-600">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            See what our customers have to say
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Find quick answers to frequently asked questions
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {faqQuickLinks.map((faq, index) => (
              <a
                key={index}
                href={faq.link}
                className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg flex items-center justify-between group transition-colors"
              >
                <span className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {faq.question}
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/faq"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for your free solar consultation and start saving on your energy bills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:XXX-XXX-XXXX"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (XXX) XXX-XXXX
            </a>
            <a
              href="mailto:info@savannahsolarpower.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
