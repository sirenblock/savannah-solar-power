import React, { useState } from 'react';
import {
  Sun,
  Zap,
  Shield,
  Smartphone,
  Battery,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Award,
  TrendingUp,
  Eye,
  Wifi,
  CloudOff,
  AlertTriangle,
  X,
  DollarSign
} from 'lucide-react';

const EnphaseSystems = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const whyEnphase = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "Industry's #1 Microinverter",
      description: "Enphase is the world's leading microinverter manufacturer. Over 3 million systems installed worldwide. Proven reliability, industry-best warranty, and cutting-edge technology."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-yellow-500" />,
      title: "Our Default Choice",
      description: "We install Enphase IQ8 microinverters as our standard inverter solution. Why? Superior reliability, 25-year warranty, panel-level optimization, and future-proof technology."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Panel-Level Intelligence",
      description: "Unlike traditional string inverters, each solar panel gets its own Enphase microinverter. Maximum energy harvest from every panel, no single point of failure, and shade on one panel doesn't affect others."
    },
    {
      icon: <CloudOff className="w-12 h-12 text-yellow-500" />,
      title: "Grid-Forming Technology",
      description: "IQ8 series microinverters can form a microgrid during outages - a revolutionary feature called Sunlight Backup. Your solar keeps working even when the grid is down."
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: "Superior Safety",
      description: "No high-voltage DC on your roof. Microinverters convert DC to AC right at the panel. Safer for installers, firefighters, and homeowners. Meets all NEC rapid shutdown requirements."
    },
    {
      icon: <Eye className="w-12 h-12 text-yellow-500" />,
      title: "Real-Time Monitoring",
      description: "See exactly how much energy each panel is producing with the Enlighten app. Identify shading issues, track your environmental impact, and monitor your energy independence."
    }
  ];

  const iq8Models = [
    {
      model: "IQ8M",
      badge: "MOST COMMON",
      peakOutput: "384W",
      continuousOutput: "325W",
      efficiency: "97.0%",
      bestFor: "350-420W solar panels",
      usage: "Used on 90% of our residential installs",
      featured: true
    },
    {
      model: "IQ8+",
      badge: "HIGH POWER",
      peakOutput: "480W",
      continuousOutput: "425W",
      efficiency: "97.3%",
      bestFor: "400-500W+ panels",
      usage: "Ideal for high-wattage panel arrays"
    },
    {
      model: "IQ8A",
      badge: "STANDARD POWER",
      peakOutput: "349W",
      continuousOutput: "295W",
      efficiency: "96.5%",
      bestFor: "300-380W panels",
      usage: "Budget-friendly option for standard panels"
    }
  ];

  const systemFeatures = [
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "25-Year Warranty",
      description: "Industry-leading 25-year microinverter warranty. That's the same lifespan as your solar panels. No other inverter technology offers this level of coverage."
    },
    {
      icon: <Sun className="w-10 h-10 text-yellow-500" />,
      title: "Sunlight Backup",
      description: "During grid outages, IQ8 microinverters can power your home using only solar energy during daylight hours - even without batteries. Add Enphase IQ Batteries for 24/7 backup."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
      title: "Built for Harsh Environments",
      description: "Enphase microinverters are sealed against moisture, rated for extreme temperatures (-40°C to +65°C), and perfect for coastal Georgia's salt air and humidity."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Rapid Shutdown Compliant",
      description: "Meets all NEC rapid shutdown requirements. Microinverters convert DC to AC right at the panel, so there's no high-voltage DC wiring on your roof."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
      title: "No Single Point of Failure",
      description: "If one microinverter fails (rare), only that panel is affected. Your other panels keep producing. With string inverters, one failure can shut down your entire system."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: "World-Class Monitoring",
      description: "Enlighten app provides real-time production monitoring, panel-level performance data, historical graphs, system health alerts, and remote troubleshooting capability."
    }
  ];

  const microVsString = {
    microinverters: [
      "25-year warranty (vs 10-12 for string)",
      "Panel-level optimization",
      "No single point of failure",
      "Better performance with shade",
      "Safer (no high-voltage DC)",
      "Easier to expand system",
      "Panel-level monitoring",
      "Better for complex roof layouts"
    ],
    stringInverters: [
      "Shorter warranty",
      "One inverter for all panels",
      "Shade on one panel reduces entire system output",
      "High-voltage DC on roof",
      "Single point of failure"
    ]
  };

  const installationProcess = [
    {
      number: "01",
      title: "Site Assessment",
      description: "We evaluate your roof, shading, energy needs, and design a custom Enphase system tailored to your property."
    },
    {
      number: "02",
      title: "System Design",
      description: "Our Enphase-certified designers create an optimized layout using Enphase design tools for maximum efficiency."
    },
    {
      number: "03",
      title: "Permitting",
      description: "We handle all permits and utility paperwork. Average turnaround: 2-4 weeks. You don't lift a finger."
    },
    {
      number: "04",
      title: "Installation",
      description: "Enphase-trained installers complete your system in 1-3 days with precision and care. All work is inspected and warrantied."
    },
    {
      number: "05",
      title: "Activation & App Setup",
      description: "We activate your system, set up your Enlighten app, and train you on monitoring your solar production."
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "Remote monitoring, proactive alerts, and local support for 25+ years. We're here for the long haul."
    }
  ];

  const coastalBenefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Salt Air Resistance",
      description: "Enphase microinverters are sealed and conformal-coated to resist corrosion. Perfect for coastal environments."
    },
    {
      icon: <CloudOff className="w-8 h-8 text-gray-600" />,
      title: "Hurricane Ready",
      description: "When properly installed with IronRidge racking, Enphase systems withstand hurricane-force winds. Plus, Sunlight Backup capability provides power during grid outages after storms."
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "High Temperature Performance",
      description: "Enphase microinverters operate efficiently in Georgia's hot summers with excellent thermal management."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      title: "Enphase Platinum Installer",
      description: "We're an Enphase Platinum Installer - the highest level of Enphase certification. Extensive training, priority technical support, and access to latest technology."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
      title: "Enphase is Our Standard",
      description: "We've installed hundreds of Enphase systems. It's our go-to inverter technology because it simply works better."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: "Expert Support",
      description: "Our team monitors your system remotely. We can diagnose most issues without a site visit. When we do need to visit, we're local and responsive."
    }
  ];

  const pricingIncluded = [
    "Enphase IQ8M microinverters (one per panel)",
    "Enphase Envoy gateway (monitoring hub)",
    "Tier-1 solar panels",
    "IronRidge racking system",
    "Complete installation",
    "Electrical work",
    "Permitting and inspections",
    "Enlighten app setup",
    "25-year microinverter warranty",
    "25-year panel warranty",
    "Workmanship warranty",
    "Ongoing monitoring and support"
  ];

  const faqs = [
    {
      question: "Why Enphase over other inverters?",
      answer: "Reliability, 25-year warranty, panel-level optimization, safety, and expansion flexibility. It's the best inverter technology available. Enphase has over 3 million systems installed worldwide with proven track record."
    },
    {
      question: "Can I add more panels later?",
      answer: "Yes! Enphase systems are easily expandable. Just add more panels and microinverters. Unlike string inverters, you don't need to worry about string sizing or replacing the central inverter."
    },
    {
      question: "What happens if a microinverter fails?",
      answer: "Only that one panel is affected. We can quickly replace the microinverter (covered under 25-year warranty). Your other panels keep producing at full capacity. This is a huge advantage over string inverters where one failure can shut down your entire system."
    },
    {
      question: "Does Enphase work with battery backup?",
      answer: "Yes! Enphase IQ8 integrates seamlessly with Enphase IQ Batteries (3T/5P models) or can be AC-coupled with Tesla Powerwall. Plus, IQ8 offers Sunlight Backup - limited backup power during outages even without batteries."
    },
    {
      question: "Can I monitor my system?",
      answer: "Yes! The Enlighten app provides real-time monitoring of your entire system, down to each individual panel. Track production, consumption (with Enphase Consumption Meter), system health, and environmental impact from your phone or computer."
    },
    {
      question: "How long do Enphase microinverters last?",
      answer: "Enphase microinverters are designed to last 25+ years, matching the lifespan of your solar panels. The 25-year warranty is industry-leading and covers the entire operational life of your system."
    },
    {
      question: "What is Sunlight Backup?",
      answer: "Sunlight Backup is a revolutionary IQ8 feature that allows your solar system to provide limited backup power during grid outages - even without batteries - when the sun is shining. Add Enphase IQ Batteries for 24/7 backup protection."
    },
    {
      question: "Are Enphase systems safe?",
      answer: "Extremely safe. Microinverters eliminate high-voltage DC wiring on your roof. They meet all NEC rapid shutdown requirements. Safer for installers, firefighters, and homeowners."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      {/*
      <title>Enphase IQ8 Solar Systems | Savannah, GA | Platinum Installer</title>
      <meta name="description" content="Enphase Platinum Installer in Savannah, GA. IQ8 microinverters with 25-year warranty, panel-level optimization, and Sunlight Backup technology. Get your free quote." />
      <meta name="keywords" content="Enphase solar installation Savannah GA, Enphase IQ8 installer Georgia, Enphase microinverters Savannah, Enphase certified installer Savannah" />
      */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Platinum Installer Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-bold mb-6">
                <Award className="w-5 h-5" />
                <span>Enphase Platinum Installer</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enphase IQ8 Solar Systems | Savannah, GA
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                The most reliable, efficient, and advanced solar technology available. Enphase IQ8 microinverters are our default inverter choice for residential solar installations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                  Get Your Free Enphase Solar Quote
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                  Call (912) 555-0100
                </button>
              </div>
            </div>
            <div className="bg-blue-800/50 p-8 rounded-lg backdrop-blur">
              <div className="aspect-video bg-blue-700/50 rounded-lg flex items-center justify-center">
                <Zap className="w-32 h-32 text-yellow-500" />
              </div>
              <p className="text-sm text-center mt-4 text-blue-200">
                [Enphase IQ8 Microinverter Installation Photo]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-yellow-500 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-900">3M+</div>
            <div className="text-sm text-blue-800">Systems Worldwide</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">25 Years</div>
            <div className="text-sm text-blue-800">Warranty</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">97%+</div>
            <div className="text-sm text-blue-800">Efficiency</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">#1</div>
            <div className="text-sm text-blue-800">Microinverter Brand</div>
          </div>
        </div>
      </section>

      {/* Why Enphase IQ8 Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Enphase IQ8 Microinverters?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
            Enphase microinverters represent the gold standard in solar technology. Here's why we choose them for nearly every installation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyEnphase.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enphase IQ8 Microinverter Models */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Enphase IQ8 Microinverter Models
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We match the right IQ8 microinverter to your solar panel specifications for optimal performance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {iq8Models.map((model, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  model.featured ? 'ring-4 ring-yellow-500' : ''
                }`}
              >
                <div className={`p-4 text-center font-bold text-white ${
                  model.featured ? 'bg-yellow-500' : 'bg-blue-600'
                }`}>
                  {model.badge}
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-blue-900 text-center mb-6">
                    {model.model}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-700 font-semibold">Peak AC Output:</span>
                      <span className="text-gray-900 font-bold">{model.peakOutput}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-700 font-semibold">Continuous Output:</span>
                      <span className="text-gray-900 font-bold">{model.continuousOutput}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-700 font-semibold">Efficiency:</span>
                      <span className="text-gray-900 font-bold">{model.efficiency}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Best For:</span> {model.bestFor}
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        {model.usage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enphase IQ8 System Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Enphase IQ8 System Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enphase App & Monitoring */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Smartphone className="w-16 h-16 text-yellow-500 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enlighten App & Monitoring
              </h2>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                World-Class Monitoring
              </h3>
              <p className="text-blue-100 mb-6">
                See exactly how much energy each panel is producing with the Enlighten app on your phone or computer:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time production monitoring",
                  "Panel-level performance data",
                  "Historical production graphs",
                  "System health alerts",
                  "Energy consumption tracking (with Enphase Consumption Meter)",
                  "Remote troubleshooting capability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-800/50 p-6 rounded-lg backdrop-blur">
                <h4 className="font-bold text-lg mb-2">Homeowner Benefits</h4>
                <p className="text-blue-100 text-sm">
                  See exactly how much energy each panel is producing. Identify shading issues. Track your environmental impact. Monitor your energy independence.
                </p>
              </div>
            </div>
            <div className="bg-blue-800/50 p-8 rounded-lg backdrop-blur">
              <div className="aspect-square bg-blue-700/50 rounded-lg flex items-center justify-center">
                <Wifi className="w-32 h-32 text-yellow-500" />
              </div>
              <p className="text-sm text-center mt-4 text-blue-200">
                [Enlighten App Screenshot Placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enphase IQ Battery Integration */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="aspect-video bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Battery className="w-32 h-32 text-purple-600" />
              </div>
              <p className="text-sm text-center text-gray-600">
                [Enphase IQ Battery Installation Photo]
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enphase IQ Battery Integration
              </h2>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                Seamless Battery Backup
              </h3>
              <p className="text-gray-700 mb-6">
                Enphase IQ8 microinverters integrate perfectly with Enphase IQ Batteries for whole-home backup:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>IQ Battery 3T/5P:</strong> 3.3 kWh / 5.0 kWh per unit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Modular and expandable</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">AC-coupled for easy installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Works with existing Enphase systems</span>
                </li>
              </ul>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-yellow-600" />
                  Sunlight Backup
                </h4>
                <p className="text-gray-700 text-sm">
                  Even without batteries, IQ8 microinverters can provide limited backup power during grid outages when the sun is shining. Add batteries for 24/7 protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Microinverters vs String Inverters Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Microinverters vs String Inverters?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            The choice is clear: microinverters outperform traditional string inverters in every category.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Microinverters */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Microinverters Win</h3>
              </div>
              <ul className="space-y-3">
                {microVsString.microinverters.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* String Inverters */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-10 h-10 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">String Inverters</h3>
              </div>
              <ul className="space-y-3">
                {microVsString.stringInverters.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enphase Installation Process */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Enphase Installation Process
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            From design to activation, we handle everything. Here's how we deliver your Enphase solar system.
          </p>
          <div className="space-y-6">
            {installationProcess.map((step, index) => (
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

      {/* Enphase for Coastal Georgia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Enphase for Coastal Georgia
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Built to withstand salt air, humidity, hurricanes, and Georgia's extreme heat.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {coastalBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Savannah Solar Power for Enphase */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Savannah Solar Power for Enphase
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We're not just certified - we're experts. Enphase is what we do best.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur hover:bg-gray-700/50 transition-colors">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enphase System Pricing */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Enphase System Pricing
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Transparent pricing with comprehensive coverage. Here's what's included in every Enphase installation.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Included
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {pricingIncluded.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-500">
              <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                30% Federal Tax Credit
              </h4>
              <p className="text-gray-700">
                All Enphase solar systems qualify for the 30% federal investment tax credit. Reduce your system cost by thousands.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Your Custom Enphase Quote
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Enphase FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for the Best Solar Technology?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get your free Enphase system quote and start saving with the world's #1 microinverter.
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
                placeholder="Tell us about your energy goals (optional)"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get Your Free Enphase System Quote
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

      {/* Trust Signals Footer */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
              <h3 className="font-bold mb-2">Enphase Platinum</h3>
              <p className="text-sm text-gray-400">Highest certification level</p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="font-bold mb-2">25-Year Warranty</h3>
              <p className="text-sm text-gray-400">Industry-leading coverage</p>
            </div>
            <div>
              <Smartphone className="w-12 h-12 mx-auto mb-3 text-blue-400" />
              <h3 className="font-bold mb-2">Remote Monitoring</h3>
              <p className="text-sm text-gray-400">Enlighten app included</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="font-bold mb-2">Local Support</h3>
              <p className="text-sm text-gray-400">Savannah-based experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnphaseSystems;
