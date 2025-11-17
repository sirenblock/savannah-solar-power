import React, { useState, useMemo } from 'react';
import {
  Sun,
  Search,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  HelpCircle,
  DollarSign,
  Battery,
  Wrench,
  MapPin,
  Shield,
  Home,
  Zap
} from 'lucide-react';

const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // All FAQ data organized by category
  const faqData = {
    solarBasics: {
      title: "Solar Basics",
      icon: <Sun className="w-6 h-6" />,
      questions: [
        {
          question: "How does solar power work?",
          answer: "Solar panels convert sunlight into DC electricity. An inverter converts DC to AC electricity that powers your home. Excess energy is sent to the grid (with net metering) or stored in batteries. At night or during cloudy weather, you draw from the grid or your battery backup."
        },
        {
          question: "Will solar panels work on cloudy days?",
          answer: "Yes! Solar panels produce electricity even on cloudy days, just at reduced capacity (typically 10-25% of peak production). Modern panels are quite efficient in diffuse light. Annual production accounts for weather patterns."
        },
        {
          question: "How much can I save with solar?",
          answer: "Most homeowners in Georgia save 40-70% on their electric bills. Exact savings depend on your energy usage, system size, and utility rates. With the 30% federal tax credit and financing options, monthly solar payments are often less than your current electric bill."
        },
        {
          question: "How long do solar panels last?",
          answer: "Solar panels typically last 30-40+ years. We install panels with 25-year warranties that guarantee 85% production at year 25. Inverters last 15-25 years depending on type (Enphase microinverters have 25-year warranties)."
        },
        {
          question: "Do solar panels require maintenance?",
          answer: "Very little. Rain naturally cleans panels in most cases. We recommend annual visual inspections. If you notice production drops, we can diagnose and address. Enphase monitoring alerts us to issues automatically."
        },
        {
          question: "Will solar panels damage my roof?",
          answer: "No. Proper installation by certified professionals actually protects your roof. We use flashed mounting points that seal penetrations. Racking is engineered to distribute weight properly. Many homeowners report their roof lasts longer under panels."
        }
      ]
    },
    installation: {
      title: "Installation Process",
      icon: <Wrench className="w-6 h-6" />,
      questions: [
        {
          question: "How long does solar installation take?",
          answer: "Physical installation: 1-3 days for residential, 1-2 weeks for commercial. Total project timeline (from contract to activation): 4-8 weeks, mostly waiting for permits and utility approval."
        },
        {
          question: "Do I need to replace my roof first?",
          answer: "If your roof has less than 10 years of life remaining, we recommend reroofing first. If your roof is in good condition, solar installation is fine. We can coordinate reroof later if needed with removal/reinstall service."
        },
        {
          question: "Do I need permission from my HOA?",
          answer: "In Georgia, HOAs cannot prohibit solar installations, but they may have aesthetic guidelines. We handle HOA submissions and ensure compliance with any reasonable restrictions."
        },
        {
          question: "What permits are required?",
          answer: "Building permit from your local jurisdiction and utility interconnection agreement. We handle all permits, applications, and inspections. You don't need to do anything."
        },
        {
          question: "Can I add more panels later?",
          answer: "Yes! Especially with Enphase microinverter systems, expansion is straightforward. We can design systems with future expansion in mind."
        }
      ]
    },
    costs: {
      title: "Costs & Financing",
      icon: <DollarSign className="w-6 h-6" />,
      questions: [
        {
          question: "How much does solar cost?",
          answer: "Residential systems in Savannah typically range from $15,000-$40,000 before incentives, depending on size and equipment. After the 30% federal tax credit, net cost is $10,500-$28,000. Monthly payment options often cost less than your current electric bill."
        },
        {
          question: "What is the federal solar tax credit?",
          answer: "The federal Investment Tax Credit (ITC) is currently 30% of your total solar system cost. If your system costs $20,000, you get a $6,000 tax credit (reducing your taxes owed). This applies to solar and battery systems installed through 2032."
        },
        {
          question: "What financing options are available?",
          answer: "Cash purchase (maximum savings), solar loans (own the system, $0 down options available), and home equity loans. We work with multiple financing partners to find the best option for your situation."
        },
        {
          question: "Is leasing available?",
          answer: "We don't offer solar leases. We recommend solar loans instead - similar monthly payments but you own the system, get the tax credit, and build equity. Better long-term value."
        },
        {
          question: "What's the payback period for solar?",
          answer: "Typical payback is 6-9 years in Georgia. After payback, you enjoy 15-20+ years of virtually free electricity. Solar is a long-term investment in your property."
        }
      ]
    },
    equipment: {
      title: "Equipment & Technology",
      icon: <Zap className="w-6 h-6" />,
      questions: [
        {
          question: "What brand of solar panels do you install?",
          answer: "We install tier-1 panels from Jinko, Longi, and QCells. All have 25-year warranties and excellent track records. We choose panels based on your project requirements and current availability."
        },
        {
          question: "Microinverters or string inverters?",
          answer: "We primarily install Enphase microinverters (one per panel). Benefits: 25-year warranty, panel-level optimization, no single point of failure, safer, easier to expand. For larger commercial projects or specific applications, we may recommend string inverters."
        },
        {
          question: "Should I get battery backup?",
          answer: "In coastal Georgia, we strongly recommend battery backup for hurricane preparedness. Even without storms, batteries provide backup during outages, energy independence, and load shifting capabilities. Popular options: Tesla Powerwall 3, EP Cube, Franklin aPower."
        },
        {
          question: "How long will a battery power my home?",
          answer: "Depends on battery size and your usage. A Tesla Powerwall 3 (13.5 kWh) can power essential loads for 12-24 hours, or whole home for 4-6 hours. With solar recharging during the day, backup can last indefinitely during multi-day outages."
        },
        {
          question: "What happens to solar during power outages?",
          answer: "Without batteries: Standard grid-tied solar shuts off during outages (safety requirement). With batteries: Solar continues operating and charges your battery, providing backup power during outages."
        }
      ]
    },
    savannahSpecific: {
      title: "Savannah-Specific Questions",
      icon: <MapPin className="w-6 h-6" />,
      questions: [
        {
          question: "Will solar survive hurricanes?",
          answer: "Yes! All our systems are engineered to withstand hurricane-force winds per Florida Building Code standards (most stringent in the U.S.). We use IronRidge racking with enhanced fastening rated for 180+ mph winds. Properly installed solar systems routinely survive major hurricanes."
        },
        {
          question: "Does salt air damage solar equipment?",
          answer: "Quality equipment is designed for coastal environments. Enphase microinverters are sealed and coated for corrosion resistance. Panels have tempered glass and anodized aluminum frames. Racking is marine-grade aluminum or stainless steel. We've installed hundreds of systems in coastal Georgia with excellent longevity."
        },
        {
          question: "What about humidity and heat?",
          answer: "Solar panels actually perform slightly better in cooler temperatures, but they're designed for heat. Panels are rated for temperatures up to 185°F. Humidity is not an issue for sealed equipment. Georgia's climate is well within normal operating parameters."
        }
      ]
    },
    netMetering: {
      title: "Net Metering & Utility",
      icon: <Zap className="w-6 h-6" />,
      questions: [
        {
          question: "What is net metering?",
          answer: "Net metering credits you for excess solar energy sent to the grid. When your system produces more than you use, your meter runs backward (figuratively). You bank credits that offset energy drawn from the grid at night or cloudy days. Georgia Power offers net metering."
        },
        {
          question: "Will I still have an electric bill?",
          answer: "Yes, but much smaller. You'll have a monthly service charge (typically $20-30) plus charges for any grid energy used beyond what your solar produced. Many customers' bills are $15-40/month instead of $150-300."
        },
        {
          question: "Can I go off-grid completely?",
          answer: "Technically yes, but we don't recommend it unless you're in a remote area. Grid connection provides backup when solar/batteries are insufficient. Most customers prefer grid-tied with battery backup - energy independence with grid as safety net."
        },
        {
          question: "What happens if I produce more energy than I use?",
          answer: "With net metering, excess production credits your account. In Georgia, credits roll over month-to-month. At the end of 12 months, unused credits expire (no cash payout), so we size systems to match annual consumption, not overproduce."
        }
      ]
    },
    warranty: {
      title: "Warranty & Support",
      icon: <Shield className="w-6 h-6" />,
      questions: [
        {
          question: "What warranties come with solar?",
          answer: "Panels: 25-year performance warranty (85% production), 10-15 year product warranty. Enphase microinverters: 25-year warranty. Racking: 25-year warranty. Batteries: 10-12 year warranties. Our workmanship: Multi-year warranty."
        },
        {
          question: "What if something breaks?",
          answer: "We provide ongoing support. Monitoring alerts us to issues. We diagnose remotely when possible. If parts fail under warranty, manufacturers replace at no cost. We handle warranty claims and repairs."
        },
        {
          question: "Do you service systems you didn't install?",
          answer: "Yes! We service all brands of solar systems. Whether we installed it or not, we can troubleshoot, repair, and upgrade your system."
        },
        {
          question: "Can you remove/reinstall panels for reroofing?",
          answer: "Absolutely. We offer reroof coordination service: safely remove your panels, store them, then reinstall after your new roof is complete. System is retested and recertified."
        }
      ]
    },
    homeValue: {
      title: "Home Value & Resale",
      icon: <Home className="w-6 h-6" />,
      questions: [
        {
          question: "Does solar increase home value?",
          answer: "Yes. Studies show solar increases home values by an average of 4-6% (often more than the system cost). Homes with solar also sell faster. Buyers appreciate lower energy costs and environmental benefits."
        },
        {
          question: "What happens if I sell my house?",
          answer: "Solar transfers with the home and is a selling point. If you own the system (not leased), it conveys to the buyer. If you have a solar loan, you can pay it off at closing or have the buyer assume it (with lender approval)."
        }
      ]
    },
    environmental: {
      title: "Environmental Impact",
      icon: <Battery className="w-6 h-6" />,
      questions: [
        {
          question: "How much CO2 does solar offset?",
          answer: "A typical 8kW residential system offsets about 4-5 tons of CO2 annually - equivalent to planting 100+ trees every year or not driving 10,000 miles."
        },
        {
          question: "Are solar panels recyclable?",
          answer: "Yes! Solar panels are 90%+ recyclable. Aluminum frames, glass, and silicon can all be reclaimed. The solar industry has robust recycling programs."
        }
      ]
    }
  };

  // Get all categories for navigation
  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'solarBasics', name: 'Solar Basics', icon: faqData.solarBasics.icon },
    { id: 'installation', name: 'Installation', icon: faqData.installation.icon },
    { id: 'costs', name: 'Costs & Financing', icon: faqData.costs.icon },
    { id: 'equipment', name: 'Equipment', icon: faqData.equipment.icon },
    { id: 'savannahSpecific', name: 'Savannah-Specific', icon: faqData.savannahSpecific.icon },
    { id: 'netMetering', name: 'Net Metering', icon: faqData.netMetering.icon },
    { id: 'warranty', name: 'Warranty & Support', icon: faqData.warranty.icon },
    { id: 'homeValue', name: 'Home Value', icon: faqData.homeValue.icon },
    { id: 'environmental', name: 'Environmental', icon: faqData.environmental.icon }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    const results = {};
    const query = searchQuery.toLowerCase();

    Object.keys(faqData).forEach(categoryKey => {
      // Skip if category filter is active and doesn't match
      if (selectedCategory !== 'all' && selectedCategory !== categoryKey) {
        return;
      }

      const category = faqData[categoryKey];
      const filteredQuestions = category.questions.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );

      if (filteredQuestions.length > 0) {
        results[categoryKey] = {
          ...category,
          questions: filteredQuestions
        };
      }
    });

    return results;
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (categoryKey, index) => {
    const faqId = `${categoryKey}-${index}`;
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  // Count total questions
  const totalQuestions = Object.values(faqData).reduce((sum, cat) => sum + cat.questions.length, 0);

  // Generate FAQ Schema for SEO
  const generateFaqSchema = () => {
    const faqItems = [];
    Object.values(faqData).forEach(category => {
      category.questions.forEach(faq => {
        faqItems.push({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        });
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems
    };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema()) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Everything you need to know about solar power in Savannah, GA
          </p>
          <div className="bg-blue-800/50 backdrop-blur rounded-lg p-2">
            <div className="text-sm text-blue-200">
              <span className="font-semibold text-yellow-500">{totalQuestions}</span> questions answered
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-50 py-8 px-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.id === 'all' ? 'All' : category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {Object.keys(filteredFaqs).length > 0 ? (
            <div className="space-y-12">
              {Object.keys(filteredFaqs).map(categoryKey => {
                const category = filteredFaqs[categoryKey];
                return (
                  <div key={categoryKey} id={categoryKey} className="scroll-mt-32">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        {category.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                    </div>

                    {/* Questions in this category */}
                    <div className="space-y-3">
                      {category.questions.map((faq, index) => {
                        const faqId = `${categoryKey}-${index}`;
                        const isOpen = openFaq === faqId;

                        return (
                          <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                          >
                            <button
                              onClick={() => toggleFaq(categoryKey, index)}
                              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-semibold text-gray-900 text-lg pr-4">
                                {faq.question}
                              </span>
                              {isOpen ? (
                                <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 py-5 bg-blue-50 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                Try a different search term or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help! Get in touch with our solar experts for personalized answers.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="tel:+19125550100"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-6 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call (912) 555-0100
            </a>
            <a
              href="mailto:info@savannahsolarpower.com"
              className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-6 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
              />
              <textarea
                placeholder="What questions can we answer for you?"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get Your Free Solar Assessment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-yellow-500 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose Savannah Solar Power?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900">30%</div>
              <div className="text-sm text-blue-800 font-semibold">Federal Tax Credit</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">25 Years</div>
              <div className="text-sm text-blue-800 font-semibold">Warranties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">180+ mph</div>
              <div className="text-sm text-blue-800 font-semibold">Hurricane-Rated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">Local</div>
              <div className="text-sm text-blue-800 font-semibold">Savannah-Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Learn More About Solar
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/residential"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Home className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Solar</h3>
              <p className="text-gray-700 mb-4">
                Learn about solar for your home - process, equipment, and savings.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                Learn More →
              </span>
            </a>
            <a
              href="/commercial"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Battery className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Solar</h3>
              <p className="text-gray-700 mb-4">
                Explore commercial solar solutions for your business.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                Learn More →
              </span>
            </a>
            <a
              href="/about"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Shield className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-700 mb-4">
                Learn about our team, certifications, and commitment to quality.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                Learn More →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
