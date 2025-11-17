import React, { useState } from 'react';
import {
  Battery,
  Power,
  Zap,
  Shield,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Cloud,
  Smartphone,
  Home,
  Sun,
  Award,
  TrendingUp,
  Settings,
  DollarSign
} from 'lucide-react';

const TeslaPowerwall = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState('capacity');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Powerwall 3 specifications
  const specifications = {
    capacity: {
      title: 'Energy Capacity',
      items: [
        { label: 'Usable Energy Storage', value: '13.5 kWh' },
        { label: 'Scalable', value: 'Up to 4 Powerwalls (54 kWh total)' },
        { label: 'Depth of Discharge', value: '100%' },
        { label: 'Round-Trip Efficiency', value: '97.5%' }
      ]
    },
    power: {
      title: 'Power Output',
      items: [
        { label: 'Continuous Power', value: '11.5 kW' },
        { label: 'Peak Power', value: '22 kW (10 seconds)' },
        { label: 'Backup Capability', value: 'Whole-home backup' },
        { label: 'Solar Support', value: 'Up to 20 kW of solar panels' }
      ]
    },
    inverter: {
      title: 'Integrated Inverter',
      items: [
        { label: 'Inverter Type', value: 'Integrated solar inverter' },
        { label: 'Solar Inputs', value: '6 MPPT inputs' },
        { label: 'Efficiency', value: '97.5%' },
        { label: 'Grid Connection', value: 'Seamless islanding capability' }
      ]
    },
    physical: {
      title: 'Dimensions & Installation',
      items: [
        { label: 'Dimensions', value: '43.25" H × 24" W × 7.6" D' },
        { label: 'Weight', value: '287 lbs' },
        { label: 'Installation', value: 'Wall-mounted, indoor/outdoor' },
        { label: 'Protection Rating', value: 'IP67 (water & dust resistant)' }
      ]
    },
    environment: {
      title: 'Operating Conditions',
      items: [
        { label: 'Temperature Range', value: '-4°F to 122°F (-20°C to 50°C)' },
        { label: 'Humidity', value: '0% to 100%' },
        { label: 'Altitude', value: 'Up to 10,000 ft' },
        { label: 'Coastal Rating', value: 'Engineered for salt air & extreme weather' }
      ]
    },
    warranty: {
      title: 'Warranty & Support',
      items: [
        { label: 'Warranty Period', value: '10 years' },
        { label: 'Cycle Limit', value: 'Unlimited cycles' },
        { label: 'Capacity Retention', value: '70% guaranteed at 10 years' },
        { label: 'Updates', value: 'Over-the-air software updates' }
      ]
    }
  };

  const benefits = [
    {
      icon: <Power className="w-12 h-12 text-yellow-500" />,
      title: 'Whole-Home Backup',
      description: '11.5 kW continuous power and 22 kW peak surge capacity powers your entire home - including AC, heating, and all major appliances - during outages.'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'All-in-One Design',
      description: 'Powerwall 3 includes the battery AND solar inverter in one sleek package. Simpler installation, better aesthetics, lower cost than separate components.'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'Perfect for Coastal Georgia',
      description: 'Engineered for extreme weather. Rated for outdoor installation in harsh environments including salt air, high humidity, and temperature extremes.'
    },
    {
      icon: <Cloud className="w-12 h-12 text-yellow-500" />,
      title: 'Storm Watch Mode',
      description: 'When severe weather is detected, Powerwall automatically charges to 100% to prepare for potential outages. Always ready when you need it most.'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: 'Tesla App Control',
      description: 'Monitor energy usage, set backup reserves, control settings, and receive notifications from anywhere via the intuitive Tesla app for iOS and Android.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-yellow-500" />,
      title: 'Industry-Leading Technology',
      description: 'Tesla Powerwall 3 represents the pinnacle of home battery technology with integrated solar inverter, massive power output, and seamless app control.'
    }
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Site Assessment',
      description: 'Free consultation to assess your home, energy needs, and determine optimal Powerwall configuration for your specific requirements.'
    },
    {
      number: 2,
      title: 'System Design',
      description: 'We design your solar + Powerwall system sized for your energy use and backup needs, optimizing both components for maximum performance.'
    },
    {
      number: 3,
      title: 'Permitting',
      description: 'We handle all permits and utility applications. No hassle for you. Average timeline is 2-4 weeks depending on local requirements.'
    },
    {
      number: 4,
      title: 'Installation',
      description: 'Tesla certified installers complete installation in 1 day for Powerwall only. Solar + Powerwall installations typically take 2-3 days.'
    },
    {
      number: 5,
      title: 'Inspection & Activation',
      description: 'We coordinate all inspections, commission your system, activate with your utility, and set up your Tesla app for monitoring and control.'
    },
    {
      number: 6,
      title: 'Training & Support',
      description: 'Complete training on the Tesla app, backup operation, and settings. Ongoing local support included for the life of your system.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-10 h-10 text-yellow-400" />,
      title: 'Tesla Certified Installer',
      description: "We're certified by Tesla to install Powerwall systems. Our technicians are trained, tested, and approved by Tesla for premium installations."
    },
    {
      icon: <MapPin className="w-10 h-10 text-yellow-400" />,
      title: 'Coastal Expertise',
      description: 'We understand the unique requirements of coastal installations - salt air resistance, hurricane-rated mounting, and proper weatherproofing.'
    },
    {
      icon: <Settings className="w-10 h-10 text-yellow-400" />,
      title: 'Complete Integration',
      description: 'We design solar + Powerwall systems as an integrated solution, optimizing both for maximum performance, savings, and energy independence.'
    },
    {
      icon: <Shield className="w-10 h-10 text-yellow-400" />,
      title: 'White-Glove Service',
      description: 'From permitting through activation, we handle everything. You get Tesla\'s premium product with our premium local service and support.'
    },
    {
      icon: <Phone className="w-10 h-10 text-yellow-400" />,
      title: 'Ongoing Support',
      description: 'We\'re here after installation for monitoring, troubleshooting, and support. Local company, local support - always just a call away.'
    }
  ];

  const faqs = [
    {
      question: 'Can Powerwall power my whole home?',
      answer: 'Yes! Powerwall 3\'s 11.5 kW continuous power can run central AC, heating, and all appliances simultaneously. The 22 kW peak power handles startup surges from motors and compressors.'
    },
    {
      question: 'How long will Powerwall run my home during an outage?',
      answer: 'It depends on usage. For whole-home backup: 4-6 hours of normal use. For essential loads only: 12-24 hours. With solar panels recharging the battery during the day, you can run indefinitely during extended outages.'
    },
    {
      question: 'Can I install multiple Powerwalls?',
      answer: 'Yes, up to 4 Powerwalls can be installed together for a total of 54 kWh of energy storage. This provides even longer backup duration or the ability to power larger homes.'
    },
    {
      question: 'Is Powerwall safe for indoor installation?',
      answer: 'Absolutely. Powerwall 3 uses LFP (lithium iron phosphate) chemistry which is extremely stable and safe for indoor installation. It\'s also rated for outdoor installation in harsh environments.'
    },
    {
      question: 'Does Powerwall work with my existing solar panels?',
      answer: 'Yes! Powerwall 3 works with any solar panels. Its integrated inverter supports up to 20 kW of solar. We can add Powerwall 3 to existing solar systems in AC-coupled configuration.'
    },
    {
      question: 'What happens during a grid outage with Powerwall 3?',
      answer: 'Grid failure is detected in less than 10 milliseconds. Powerwall instantly disconnects from the grid and powers your home. Unlike Powerwall 2, your solar continues operating during the outage, recharging the battery during daylight hours.'
    },
    {
      question: 'Do I need solar panels to use Powerwall?',
      answer: 'No, but Powerwall is most valuable with solar. Without solar, Powerwall charges from the grid and provides backup during outages. With solar, you get backup power plus energy independence and maximum savings.'
    },
    {
      question: 'What is Storm Watch mode?',
      answer: 'Storm Watch automatically charges your Powerwall to 100% when severe weather is approaching. This ensures maximum backup power is available if the storm causes a grid outage.'
    },
    {
      question: 'How much does Powerwall 3 installation cost?',
      answer: 'Powerwall 3 with installation typically costs around $15,000. When paired with solar, it qualifies for the 30% federal solar tax credit, bringing the net cost to approximately $10,500. Financing options are available.'
    },
    {
      question: 'What makes Powerwall 3 better than Powerwall 2?',
      answer: 'Powerwall 3 has 2.3x more continuous power (11.5 kW vs 5 kW), an integrated solar inverter (simpler installation), and the ability for solar to continue operating during grid outages - a major upgrade over Powerwall 2.'
    }
  ];

  const includedItems = [
    'Tesla Powerwall 3 unit with integrated inverter',
    'Backup gateway for seamless grid disconnection',
    'All electrical work and panel upgrades',
    'Permits, applications, and inspections',
    'Professional installation by Tesla certified technicians',
    'System commissioning and testing',
    'Tesla app setup and training',
    'Utility interconnection and activation',
    '10-year comprehensive warranty',
    'Ongoing monitoring and support'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags (commented for Next.js head integration) */}
      {/*
        <title>Tesla Powerwall 3 Installation Savannah GA | Tesla Certified Installer</title>
        <meta name="description" content="Tesla Powerwall 3 installation in Savannah, GA by Tesla Certified Installer. 13.5 kWh whole-home battery backup with 11.5 kW power. Perfect for coastal Georgia." />
        <meta name="keywords" content="Tesla Powerwall installation Savannah GA, Tesla Powerwall certified installer Georgia, Powerwall 3 Savannah, Tesla backup battery Savannah, home energy storage coastal Georgia" />
      */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Tesla Certified Badge */}
              <div className="inline-flex items-center bg-yellow-500 text-gray-900 px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-bold text-sm">Tesla Certified Installer</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tesla Powerwall 3 Installation | Savannah, GA
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Tesla Certified Installer. Premium whole-home battery backup with the industry's best technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors text-center"
                >
                  Get Your Free Powerwall Quote
                </a>
                <a
                  href="tel:+1234567890"
                  className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-blue-800 bg-opacity-50 p-8 rounded-lg border-2 border-blue-400">
                <Battery className="w-64 h-64 mx-auto text-yellow-400" />
                <p className="text-center mt-4 text-blue-100">Tesla Powerwall 3 - All-in-One Energy Storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-yellow-500 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">13.5 kWh</div>
              <div className="text-sm text-gray-800 mt-1">Energy Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">11.5 kW</div>
              <div className="text-sm text-gray-800 mt-1">Continuous Power</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10 Years</div>
              <div className="text-sm text-gray-800 mt-1">Warranty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">Up to 4</div>
              <div className="text-sm text-gray-800 mt-1">Stackable Units</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tesla Powerwall 3 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Why Tesla Powerwall 3?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Tesla Powerwall 3 represents the pinnacle of home battery technology. With integrated solar inverter,
            massive power output, and seamless app control, it's the gold standard for home energy storage.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tesla Powerwall 3 Specifications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Tesla Powerwall 3 Specifications
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Industry-leading specifications designed for whole-home backup and energy independence.
          </p>

          {/* Spec Category Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(specifications).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedSpec(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedSpec === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {specifications[key].title}
              </button>
            ))}
          </div>

          {/* Spec Details */}
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {specifications[selectedSpec].title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specifications[selectedSpec].items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">{item.label}</div>
                    <div className="text-gray-600">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Tesla Powerwall 3 Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How Tesla Powerwall 3 Works
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Normal Operation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Sun className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Normal Operation</h3>
              </div>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">1.</span>
                  <span>Solar panels generate electricity</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">2.</span>
                  <span>Powerwall 3's integrated inverter converts DC to AC</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">3.</span>
                  <span>Your home uses solar power directly</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">4.</span>
                  <span>Excess energy charges Powerwall</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">5.</span>
                  <span>Powerwall powers home at night</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">6.</span>
                  <span>Seamless grid connection for net metering</span>
                </li>
              </ol>
            </div>

            {/* During Outages */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg text-white">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-10 h-10 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold">During Outages</h3>
              </div>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-yellow-400 mr-3">1.</span>
                  <span>Grid failure detected in &lt; 10 milliseconds</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-yellow-400 mr-3">2.</span>
                  <span>Powerwall instantly disconnects from grid</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-yellow-400 mr-3">3.</span>
                  <span>Powerwall powers your home seamlessly</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-yellow-400 mr-3">4.</span>
                  <span>Solar continues operating (unlike Powerwall 2)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-yellow-400 mr-3">5.</span>
                  <span>Solar recharges Powerwall during daylight</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-yellow-400 mr-3">6.</span>
                  <span>When grid returns, seamless reconnection</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Storm Watch Callout */}
          <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-lg">
            <div className="flex items-start max-w-4xl mx-auto">
              <Cloud className="w-12 h-12 text-gray-900 mr-6 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Storm Watch Mode</h3>
                <p className="text-gray-800 text-lg">
                  When severe weather is detected, Powerwall automatically charges to 100% to prepare for potential outages.
                  Your system stays ready for hurricanes and tropical storms common to coastal Georgia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Savannah Solar Power */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Savannah Solar Power for Powerwall Installation?
          </h2>
          <p className="text-center text-blue-100 mb-12 max-w-3xl mx-auto text-lg">
            Tesla certified installer with coastal expertise and white-glove service.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.slice(0, 3).map((item, index) => (
              <div key={index} className="bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-400">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            {whyChooseUs.slice(3).map((item, index) => (
              <div key={index} className="bg-blue-800 bg-opacity-50 p-6 rounded-lg border border-blue-400">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerwall 3 vs Powerwall 2 Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Powerwall 3 vs Powerwall 2
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            See why Powerwall 3 is a massive upgrade over the previous generation.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-left font-bold">
                    <div className="flex items-center">
                      <Battery className="w-5 h-5 mr-2" />
                      Powerwall 3
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-blue-200">Powerwall 2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Usable Capacity</td>
                  <td className="px-6 py-4 text-gray-900">13.5 kWh</td>
                  <td className="px-6 py-4 text-gray-600">13.5 kWh</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Continuous Power</td>
                  <td className="px-6 py-4 font-bold text-green-600">11.5 kW ⚡</td>
                  <td className="px-6 py-4 text-gray-600">5 kW</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Peak Power</td>
                  <td className="px-6 py-4 font-bold text-green-600">22 kW ⚡⚡</td>
                  <td className="px-6 py-4 text-gray-600">7 kW</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Solar Inverter</td>
                  <td className="px-6 py-4 font-bold text-green-600">Integrated ✓</td>
                  <td className="px-6 py-4 text-gray-600">Separate required</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Solar Input</td>
                  <td className="px-6 py-4 font-bold text-green-600">Up to 20 kW</td>
                  <td className="px-6 py-4 text-gray-600">N/A</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Backup During Outages</td>
                  <td className="px-6 py-4 font-bold text-green-600">Solar + Battery ✓</td>
                  <td className="px-6 py-4 text-gray-600">Battery only*</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Installation</td>
                  <td className="px-6 py-4 font-bold text-green-600">Simpler, fewer components</td>
                  <td className="px-6 py-4 text-gray-600">More complex</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Warranty</td>
                  <td className="px-6 py-4 text-gray-900">10 years, unlimited cycles</td>
                  <td className="px-6 py-4 text-gray-600">10 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            *Powerwall 2 requires additional equipment for solar to operate during outages
          </p>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Powerwall Installation Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From consultation to activation, we handle everything. White-glove service from start to finish.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What's Included in Your Powerwall Installation
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Complete turnkey installation with everything you need for whole-home backup.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerwall Pricing & Incentives */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Powerwall Pricing & Incentives
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Affordable pricing with federal tax credits and financing options available.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pricing Breakdown */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Investment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-blue-300">
                  <span className="text-gray-700">Powerwall 3 + Installation</span>
                  <span className="text-xl font-bold text-gray-900">~$15,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-blue-300">
                  <span className="text-gray-700">30% Federal Tax Credit</span>
                  <span className="text-xl font-bold text-green-600">-$4,500</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-semibold text-gray-900">Net Cost</span>
                  <span className="text-3xl font-bold text-blue-600">~$10,500</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                *When paired with solar installation. Financing options available.
              </p>
            </div>

            {/* Federal Tax Credit */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-200">
              <div className="flex items-center mb-6">
                <DollarSign className="w-10 h-10 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Federal Tax Credit</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Powerwall 3 paired with solar qualifies for the <strong>30% federal solar investment tax credit (ITC)</strong>.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>30% tax credit through 2032</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Must be installed with solar system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Applied as dollar-for-dollar tax reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>No maximum credit limit</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Financing CTA */}
          <div className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Flexible Financing Available</h3>
            <p className="text-gray-800 mb-6">
              Monthly payment options as low as $150/month. Own your energy independence with zero money down.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Explore Financing Options
            </a>
          </div>
        </div>
      </section>

      {/* Powerwall for Existing Solar */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Home className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Already Have Solar Panels?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We can add Powerwall 3 to your existing solar system in AC-coupled configuration.
            Compatible with most existing solar installations from any manufacturer.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Add Powerwall to My System
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Powerwall Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get answers to common questions about Tesla Powerwall 3.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
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

      {/* Final CTA & Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready for Tesla Powerwall?
            </h2>
            <p className="text-xl text-gray-800">
              Get your free quote from a Tesla Certified Installer serving Savannah and coastal Georgia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Powerwall Quote</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Do you currently have solar panels?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="hasSolar" value="yes" className="mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="hasSolar" value="no" className="mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="hasSolar" value="planning" className="mr-2" />
                      <span className="text-gray-700">Planning to install</span>
                    </label>
                  </div>
                </div>
                <textarea
                  placeholder="Questions or comments..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  Get Free Powerwall Assessment
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <Phone className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Call Us Today</h3>
                    <p className="text-gray-700">Speak with a Tesla Powerwall specialist</p>
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                      (XXX) XXX-XXXX
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <Mail className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-700">Get a response within 24 hours</p>
                    <a href="mailto:info@savannahsolarpower.com" className="text-blue-600 hover:text-blue-700 font-bold">
                      info@savannahsolarpower.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <MapPin className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Service Area</h3>
                    <p className="text-gray-700">
                      Savannah, Pooler, Richmond Hill, Hinesville, Statesboro, Bluffton, Hilton Head Island,
                      and all of coastal Georgia and South Carolina
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="font-bold text-xl">Tesla Certified Installer</h3>
                </div>
                <p className="text-blue-100">
                  Certified by Tesla to install Powerwall systems. Trained, tested, and approved for premium installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Footer */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-bold mb-2">Tesla Certified</h3>
              <p className="text-sm text-gray-400">Official Powerwall Installer</p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-bold mb-2">10-Year Warranty</h3>
              <p className="text-sm text-gray-400">Comprehensive coverage</p>
            </div>
            <div>
              <Home className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-bold mb-2">Local Service</h3>
              <p className="text-sm text-gray-400">Savannah-based support</p>
            </div>
            <div>
              <Battery className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-bold mb-2">Coastal Expertise</h3>
              <p className="text-sm text-gray-400">Hurricane-rated installations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeslaPowerwall;
