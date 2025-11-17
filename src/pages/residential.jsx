import React, { useState } from 'react';
import Head from 'next/head';
import {
  Sun,
  TrendingDown,
  Home,
  Battery,
  DollarSign,
  Shield,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ResidentialSolar = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [showCalculator, setShowCalculator] = useState(false);

  // Calculate savings
  const annualCost = monthlyBill * 12;
  const solarSavings = annualCost * 0.60; // 60% average savings
  const twentyFiveYearSavings = solarSavings * 25;
  const systemCost = Math.round(monthlyBill * 80); // Rough estimate
  const federalTaxCredit = systemCost * 0.30;
  const netCost = systemCost - federalTaxCredit;

  const benefits = [
    {
      icon: <TrendingDown className="w-12 h-12 text-yellow-500" />,
      title: "Lower Electric Bills",
      description: "Georgia Power rates continue to rise. Lock in decades of savings with solar. Most homeowners save 40-70% on their monthly electric bills."
    },
    {
      icon: <Home className="w-12 h-12 text-yellow-500" />,
      title: "Increase Home Value",
      description: "Studies show solar increases home values by an average of 4-6%. Your solar system is an investment in your property."
    },
    {
      icon: <Battery className="w-12 h-12 text-yellow-500" />,
      title: "Energy Independence",
      description: "Generate your own clean energy. Add battery backup for complete independence from the grid during outages."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-yellow-500" />,
      title: "Federal Tax Credit",
      description: "Take advantage of the 30% federal solar tax credit. Reduce your system cost by thousands."
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: "Hurricane Protection",
      description: "Add battery backup for power during storms. Our systems are engineered to withstand hurricane-force winds and can provide backup power when the grid goes down."
    },
    {
      icon: <Sun className="w-12 h-12 text-yellow-500" />,
      title: "Clean Energy",
      description: "Reduce your carbon footprint while saving money. Solar is clean, renewable, and sustainable."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Home Assessment",
      description: "We visit your property, assess your roof, review your energy usage, and discuss your goals."
    },
    {
      number: "02",
      title: "Custom System Design",
      description: "Our engineers design a system tailored to your home's energy needs, roof characteristics, and budget."
    },
    {
      number: "03",
      title: "Transparent Proposal",
      description: "You receive a detailed proposal with system specs, production estimates, costs, savings projections, and financing options."
    },
    {
      number: "04",
      title: "Permitting & Approvals",
      description: "We handle all permits, HOA approvals (if applicable), and utility paperwork. You don't do anything."
    },
    {
      number: "05",
      title: "Professional Installation",
      description: "Certified installers complete your system in 1-3 days. All work is inspected and warrantied."
    },
    {
      number: "06",
      title: "Interconnection & Activation",
      description: "We coordinate utility interconnection. Your system is activated and begins producing clean energy."
    },
    {
      number: "07",
      title: "Monitoring & Support",
      description: "We set up system monitoring on your phone. Ongoing support for the life of your system."
    }
  ];

  const equipment = {
    panels: [
      {
        name: "Jinko 425W",
        specs: "High-efficiency monocrystalline, 25-year warranty"
      },
      {
        name: "Longi LR5 400W",
        specs: "Premium tier-1 panels, excellent performance"
      },
      {
        name: "QCells 415W",
        specs: "German-engineered quality"
      }
    ],
    inverters: [
      {
        name: "Enphase IQ8M Microinverters",
        specs: "Our standard - 25-year warranty, panel-level optimization, grid-forming technology for backup",
        featured: true
      },
      {
        name: "SolArk Hybrid Inverters",
        specs: "Battery-ready for future expansion"
      }
    ],
    racking: [
      {
        name: "IronRidge XR Systems",
        specs: "Hurricane-rated, 25-year warranty"
      }
    ],
    batteries: [
      {
        name: "Tesla Powerwall 3",
        specs: "13.5 kWh, whole-home backup"
      },
      {
        name: "EP Cube",
        specs: "9.9 to 19.9 kWh options"
      },
      {
        name: "Franklin aPower",
        specs: "Modular, expandable"
      }
    ]
  };

  const included = [
    "Complete site survey and engineering",
    "All permitting and utility interconnection",
    "Tier-1 solar panels and inverters",
    "Hurricane-rated racking and mounting",
    "Electrical wiring, conduit, and safety equipment",
    "Roof penetrations with waterproof flashing",
    "System commissioning and testing",
    "Monitoring system setup",
    "25-year equipment warranties",
    "Workmanship warranty",
    "Post-installation support"
  ];

  const financingOptions = [
    {
      title: "Cash Purchase",
      description: "Maximum savings, 30% federal tax credit, typical payback 6-9 years",
      best: "Best long-term value"
    },
    {
      title: "Solar Loan",
      description: "$0 down financing available, own your system, claim tax credit, low monthly payments",
      best: "Most popular option"
    },
    {
      title: "Consultation",
      description: "We'll review all financing options and help you choose what's best for your situation.",
      best: "Free guidance"
    }
  ];

  const faqs = [
    {
      question: "Will solar work on my roof?",
      answer: "Most roofs are suitable. We work with composition shingle, metal, tile, and flat roofs. Ideal roof pitch is 15-35 degrees facing south, but we've done successful installations on east and west-facing roofs too."
    },
    {
      question: "What about hurricanes?",
      answer: "All our systems are engineered to withstand hurricane-force winds per Florida Building Code requirements. We use enhanced fastening and structural calculations."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential systems are installed in 1-3 days."
    },
    {
      question: "What happens to my electric bill?",
      answer: "You'll still have a grid connection and a small monthly service charge from Georgia Power, but your energy charges drop dramatically - often by 50-80%."
    },
    {
      question: "What maintenance is required?",
      answer: "Solar panels require minimal maintenance. We recommend an annual inspection, and occasional cleaning if needed. Our monitoring systems alert us to any issues."
    },
    {
      question: "What warranties are included?",
      answer: "All equipment comes with 25-year manufacturer warranties. We also provide workmanship warranties and ongoing support for the life of your system."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Residential Solar Installation Savannah GA | Savannah Solar Power</title>
        <meta name="description" content="Professional residential solar panel installation in Savannah, GA. Cut electric bills 40-70%, increase home value, get 30% federal tax credit. Free consultation." />
        <meta name="keywords" content="residential solar installation Savannah GA, home solar panels Savannah, solar company for homes Savannah, residential solar Chatham County, solar installation coastal Georgia" />

        {/* Open Graph */}
        <meta property="og:title" content="Residential Solar Installation Savannah GA | Savannah Solar Power" />
        <meta property="og:description" content="Professional residential solar panel installation in Savannah, GA. Cut electric bills 40-70%, increase home value, get 30% federal tax credit." />
        <meta property="og:url" content="https://savannahsolarpower.com/residential" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Residential Solar Installation Savannah GA" />
        <meta name="twitter:description" content="Cut electric bills 40-70% with professional solar installation. 30% federal tax credit. Free consultation." />

        {/* Canonical */}
        <link rel="canonical" href="https://savannahsolarpower.com/residential" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Residential Solar Installation in Savannah, GA
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Cut your electric bills, increase home value, and gain energy independence with a custom solar system designed for your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                  Get Your Free Solar Assessment
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                  Call (912) 555-0100
                </button>
              </div>
            </div>
            <div className="bg-blue-800/50 p-8 rounded-lg backdrop-blur">
              <div className="aspect-video bg-blue-700/50 rounded-lg flex items-center justify-center">
                <Sun className="w-32 h-32 text-yellow-500" />
              </div>
              <p className="text-sm text-center mt-4 text-blue-200">
                [Before/After Installation Photo]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-yellow-500 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-900">40-70%</div>
            <div className="text-sm text-blue-800">Bill Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">30%</div>
            <div className="text-sm text-blue-800">Federal Tax Credit</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">25 Years</div>
            <div className="text-sm text-blue-800">Warranties</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">1-3 Days</div>
            <div className="text-sm text-blue-800">Installation</div>
          </div>
        </div>
      </section>

      {/* Simple Savings Calculator */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estimate Your Solar Savings
            </h2>
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
            >
              {showCalculator ? 'Hide' : 'Show'} Calculator
              {showCalculator ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </button>
          </div>

          {showCalculator && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Average Monthly Electric Bill: ${monthlyBill}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>$50</span>
                  <span>$500</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Your Savings Estimate</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Annual Current Cost:</span>
                      <span className="font-bold text-gray-900">${annualCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Estimated Annual Savings:</span>
                      <span className="font-bold text-green-600">${Math.round(solarSavings).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-blue-200">
                      <span className="text-gray-700">25-Year Savings:</span>
                      <span className="font-bold text-green-600 text-xl">${Math.round(twentyFiveYearSavings).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Investment Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Est. System Cost:</span>
                      <span className="font-bold text-gray-900">${systemCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Federal Tax Credit (30%):</span>
                      <span className="font-bold text-green-600">-${Math.round(federalTaxCredit).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-green-200">
                      <span className="text-gray-700">Net Investment:</span>
                      <span className="font-bold text-gray-900 text-xl">${Math.round(netCost).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-6 text-center">
                *Estimates based on average savings and system costs. Actual results vary by home, roof, and energy usage.
              </p>

              <div className="text-center mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Get Your Exact Custom Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Benefits of Residential Solar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Residential Solar Process
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            From initial consultation to ongoing support, we handle everything. Here's how we make going solar simple.
          </p>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Residential Solar Equipment
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Solar Panels */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar Panels</h3>
              <div className="space-y-4">
                {equipment.panels.map((panel, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">{panel.name}</h4>
                    <p className="text-sm text-gray-700">{panel.specs}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inverters */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inverters</h3>
              <div className="space-y-4">
                {equipment.inverters.map((inverter, index) => (
                  <div key={index} className={`p-4 rounded-lg ${inverter.featured ? 'bg-yellow-100 border-2 border-yellow-500' : 'bg-white'}`}>
                    <h4 className="font-bold text-gray-900">
                      {inverter.name}
                      {inverter.featured && <span className="ml-2 text-xs bg-yellow-500 text-white px-2 py-1 rounded">OUR STANDARD</span>}
                    </h4>
                    <p className="text-sm text-gray-700">{inverter.specs}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Racking */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Racking Systems</h3>
              <div className="space-y-4">
                {equipment.racking.map((rack, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">{rack.name}</h4>
                    <p className="text-sm text-gray-700">{rack.specs}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Batteries */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Batteries (Optional)</h3>
              <div className="space-y-4">
                {equipment.batteries.map((battery, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">{battery.name}</h4>
                    <p className="text-sm text-gray-700">{battery.specs}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's Included in Every Installation
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-100">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Financing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-4">
                  {option.best}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Common Residential Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving Savannah & Coastal Georgia
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We install residential solar systems throughout Savannah, Pooler, Richmond Hill, Hinesville, Statesboro, and all of Chatham, Bryan, Liberty, and Effingham counties.
          </p>
          <div className="bg-blue-800/50 p-8 rounded-lg backdrop-blur max-w-2xl mx-auto">
            <div className="aspect-video bg-blue-700/50 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-32 h-32 text-yellow-500" />
            </div>
            <p className="text-sm text-blue-200">[Service Area Map Placeholder]</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get your free home assessment and start saving with solar energy today.
          </p>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Tell us about your home and energy goals (optional)"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get Your Free Solar Assessment
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-gray-900">
            <a href="tel:+19125550100" className="inline-flex items-center gap-2 hover:text-blue-900 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(912) 555-0100</span>
            </a>
            <a href="mailto:info@savannahsolarpower.com" className="inline-flex items-center gap-2 hover:text-blue-900 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">info@savannahsolarpower.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Recent Residential Installations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-300 flex items-center justify-center">
                  <Sun className="w-16 h-16 text-gray-500" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    [Before/After Installation Photo {item}]
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {item === 1 && "Pooler, GA - 8.5 kW System"}
                    {item === 2 && "Savannah, GA - 12 kW System with Battery"}
                    {item === 3 && "Richmond Hill, GA - 10 kW System"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Footer */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="font-bold mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-400">Fully certified installers</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="font-bold mb-2">25-Year Warranties</h3>
              <p className="text-sm text-gray-400">Equipment & workmanship</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="font-bold mb-2">Local Company</h3>
              <p className="text-sm text-gray-400">Savannah-based, fast response</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="font-bold mb-2">Hurricane-Rated</h3>
              <p className="text-sm text-gray-400">Engineered for coastal storms</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ResidentialSolar;
