import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  Calculator,
  CreditCard,
  Home,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Calendar,
  Award,
  Percent
} from 'lucide-react';

const Financing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [systemCost, setSystemCost] = useState(20000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(5.99);

  // Calculate financing details
  const federalTaxCredit = systemCost * 0.30;
  const netCost = systemCost - federalTaxCredit;
  const monthlyPayment = (systemCost * (interestRate / 100 / 12)) / (1 - Math.pow(1 + (interestRate / 100 / 12), -loanTerm * 12));
  const totalPaid = monthlyPayment * loanTerm * 12;
  const estimatedAnnualSavings = 2000;
  const estimatedMonthlySavings = estimatedAnnualSavings / 12;
  const twentyFiveYearSavings = estimatedAnnualSavings * 25;
  const netSavingsWithLoan = twentyFiveYearSavings - totalPaid + federalTaxCredit;
  const paybackYears = netCost / estimatedAnnualSavings;

  const financingOptions = [
    {
      title: "Cash Purchase",
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      bestFor: "Maximum long-term savings",
      pros: [
        "Highest total savings over system life",
        "Full 30% tax credit immediately",
        "No interest payments",
        "Immediate ROI tracking",
        "Typical payback: 6-9 years"
      ],
      cons: [
        "Requires upfront capital",
        "Longer payback period"
      ],
      example: {
        systemCost: "$20,000",
        taxCredit: "-$6,000",
        netCost: "$14,000",
        annualSavings: "~$2,000",
        payback: "~7 years",
        twentyFiveYearSavings: "~$36,000"
      }
    },
    {
      title: "Solar Loan",
      icon: <CreditCard className="w-12 h-12 text-blue-500" />,
      bestFor: "Most homeowners - great balance of affordability and ownership",
      featured: true,
      pros: [
        "$0 down payment options",
        "Own your system immediately",
        "Claim 30% tax credit",
        "Payments often less than current electric bill",
        "Build equity in your home",
        "Fixed monthly payment (unlike utility bills)"
      ],
      cons: [
        "Interest charges reduce total savings vs cash",
        "Monthly payment obligation"
      ],
      loanTerms: [
        "10, 15, 20, or 25-year terms",
        "Rates typically 3.99% - 7.99% (based on credit)",
        "$0 down or small down payment",
        "No prepayment penalties",
        "Unsecured (no home lien) or secured options"
      ],
      example: {
        systemCost: "$20,000",
        monthlyPayment: "~$143",
        taxCredit: "$6,000 (you keep this)",
        totalCost: "~$28,320 (over 20 years)",
        estimatedSavings: "~$40,000",
        netSavings: "~$11,680"
      }
    },
    {
      title: "Home Equity Loan/HELOC",
      icon: <Home className="w-12 h-12 text-orange-500" />,
      bestFor: "Homeowners with substantial equity seeking lowest interest rates",
      pros: [
        "Often lowest interest rates (currently 6-9%)",
        "Interest may be tax-deductible (consult tax pro)",
        "Flexible terms",
        "Full 30% solar tax credit"
      ],
      cons: [
        "Home is collateral",
        "May have closing costs",
        "Reduces home equity"
      ]
    },
    {
      title: "Commercial Financing",
      icon: <Building2 className="w-12 h-12 text-purple-500" />,
      bestFor: "Business solar installations",
      options: [
        "Commercial solar loans",
        "Equipment financing",
        "Sale-leaseback (for larger projects)",
        "Power Purchase Agreements (PPAs)"
      ],
      taxBenefits: [
        "30% federal ITC",
        "MACRS depreciation (recover 85% of cost in Year 1)",
        "State/local incentives"
      ],
      callToAction: "Contact us for commercial financing consultation"
    }
  ];

  const georgiaIncentives = [
    {
      title: "Georgia Net Metering",
      description: "Georgia Power and EMCs offer net metering - credit for excess solar energy sent to the grid. Your meter runs backward (figuratively) when you overproduce. Credits offset energy drawn at night or cloudy days.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Property Tax Exemption",
      description: "Georgia law exempts solar systems from property tax assessments. Your home value increases, but property taxes don't.",
      icon: <Home className="w-8 h-8 text-green-500" />
    },
    {
      title: "Sales Tax",
      description: "Solar equipment installations are subject to Georgia sales tax, but the overall value still significantly outweighs this cost.",
      icon: <Percent className="w-8 h-8 text-gray-500" />
    }
  ];

  const whySolarMakesSense = [
    {
      title: "Hedge Against Rising Rates",
      description: "Georgia Power rates have increased 30%+ over the past decade. Utility rates will continue rising. Lock in your energy costs for 25+ years.",
      icon: <TrendingUp />
    },
    {
      title: "Increase Home Value",
      description: "Studies show solar increases home values by 4-6% on average. A $20,000 solar system can add $20,000-$30,000 to home value.",
      icon: <Home />
    },
    {
      title: "Environmental Value",
      description: "Beyond money, solar offsets tons of CO2 annually - equivalent to planting 100+ trees per year.",
      icon: <CheckCircle />
    }
  ];

  const faqs = [
    {
      question: "Can I use the tax credit as a down payment?",
      answer: "No, the tax credit comes when you file taxes (following year). However, some lenders offer reduced payments in Year 1 assuming you'll apply the tax credit."
    },
    {
      question: "What credit score do I need?",
      answer: "Most solar loans require 650+ credit score. Some programs accept lower scores."
    },
    {
      question: "Are there prepayment penalties?",
      answer: "No, our solar loan partners don't charge prepayment penalties."
    },
    {
      question: "What if I sell my house?",
      answer: "With ownership (cash or loan), solar transfers to the buyer and increases home value. If you have a loan, you can pay it off at closing or buyer may assume it (with lender approval)."
    },
    {
      question: "How long does it take to recoup my investment?",
      answer: "Most homeowners see payback in 6-9 years with cash purchase, after which all energy savings are pure profit for the remaining 16-19+ years of the system's life."
    },
    {
      question: "Do batteries qualify for the tax credit?",
      answer: "Yes! Battery systems qualify for the 30% federal tax credit when installed with solar panels."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Financing & Incentives
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Save thousands with the 30% federal tax credit. Flexible financing options make solar accessible for every budget.
            </p>
          </div>
        </div>
      </div>

      {/* Federal Tax Credit Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Award className="w-16 h-16 text-yellow-500 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                30% Federal Investment Tax Credit
              </h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-800 mb-6">
                The federal solar Investment Tax Credit (ITC) is the single biggest financial incentive for going solar. This tax credit reduces your federal income taxes by 30% of your total solar system cost.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Install a solar system in 2024-2032</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>System costs $20,000 → You get $6,000 tax credit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Tax credit reduces your federal taxes owed dollar-for-dollar</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Applies to panels, inverters, batteries, installation, and permitting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>No income limits or caps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Unused credits can roll over to next tax year</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline:</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <p className="font-semibold text-green-700">2024-2032: 30% tax credit</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                      <p className="font-semibold text-yellow-700">2033: 26% tax credit</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <p className="font-semibold text-orange-700">2034: 22% tax credit</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                      <p className="font-semibold text-red-700">2035+: Currently scheduled to expire</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded-lg p-6 mt-6">
                <h4 className="font-bold text-lg mb-2">Important Notes:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• This is a TAX CREDIT, not a deduction (much more valuable)</li>
                  <li>• You must have tax liability to claim it</li>
                  <li>• Consult your tax professional for specifics</li>
                  <li>• Battery systems qualify when installed with solar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Options */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Flexible Financing Options
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {financingOptions.map((option, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 ${
                    option.featured ? 'ring-4 ring-blue-500 relative' : ''
                  }`}
                >
                  {option.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="flex items-center mb-6">
                    {option.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{option.title}</h3>
                  </div>

                  <p className="text-blue-600 font-semibold mb-6">
                    Best For: {option.bestFor}
                  </p>

                  {option.pros && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Pros:</h4>
                      <ul className="space-y-2">
                        {option.pros.map((pro, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {option.cons && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Cons:</h4>
                      <ul className="space-y-2">
                        {option.cons.map((con, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-gray-400 mr-2">•</span>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {option.loanTerms && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Loan Terms:</h4>
                      <ul className="space-y-2">
                        {option.loanTerms.map((term, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {option.options && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Options:</h4>
                      <ul className="space-y-2">
                        {option.options.map((opt, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-purple-500 mr-2">•</span>
                            <span className="text-gray-700">{opt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {option.taxBenefits && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Tax Benefits:</h4>
                      <ul className="space-y-2">
                        {option.taxBenefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {option.example && (
                    <div className="bg-gray-50 rounded-lg p-4 mt-6">
                      <h4 className="font-bold text-gray-900 mb-3">Example:</h4>
                      <div className="space-y-1 text-sm font-mono">
                        {Object.entries(option.example).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="text-gray-900 font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {option.callToAction && (
                    <div className="mt-6">
                      <p className="text-center text-blue-600 font-semibold">{option.callToAction}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Calculator className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Solar ROI Calculator
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    System Cost
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="50000"
                    step="1000"
                    value={systemCost}
                    onChange={(e) => setSystemCost(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-center text-xl font-bold text-blue-900 mt-2">
                    ${systemCost.toLocaleString()}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Term (Years)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="25"
                    step="5"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-center text-xl font-bold text-blue-900 mt-2">
                    {loanTerm} years
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Interest Rate
                  </label>
                  <input
                    type="range"
                    min="3.99"
                    max="9.99"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-center text-xl font-bold text-blue-900 mt-2">
                    {interestRate.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Cash Purchase</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">System Cost:</span>
                      <span className="font-semibold">${systemCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Federal Tax Credit (30%):</span>
                      <span className="font-semibold">-${federalTaxCredit.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg">
                      <span className="font-bold">Net Cost:</span>
                      <span className="font-bold text-blue-900">${netCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Savings:</span>
                      <span className="font-semibold">${estimatedAnnualSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payback Period:</span>
                      <span className="font-semibold">{paybackYears.toFixed(1)} years</span>
                    </div>
                    <div className="flex justify-between text-lg text-green-600">
                      <span className="font-bold">25-Year Savings:</span>
                      <span className="font-bold">${(twentyFiveYearSavings - netCost).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Solar Loan</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="font-semibold">${monthlyPayment.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Monthly Savings:</span>
                      <span className="font-semibold">${estimatedMonthlySavings.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Federal Tax Credit:</span>
                      <span className="font-semibold">${federalTaxCredit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Loan Cost:</span>
                      <span className="font-semibold">${totalPaid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">25-Year Utility Savings:</span>
                      <span className="font-semibold">${twentyFiveYearSavings.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg text-green-600">
                      <span className="font-bold">Net 25-Year Savings:</span>
                      <span className="font-bold">${netSavingsWithLoan.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-900 text-white rounded-lg p-6">
                <p className="text-center">
                  <span className="font-semibold">Monthly payment: ${monthlyPayment.toFixed(0)}</span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Monthly savings: ~${estimatedMonthlySavings.toFixed(0)}</span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Net monthly impact: ~${(estimatedMonthlySavings - monthlyPayment).toFixed(0)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Georgia-Specific Incentives */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Georgia-Specific Incentives
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {georgiaIncentives.map((incentive, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-center mb-4">
                    {incentive.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {incentive.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {incentive.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Solar Makes Financial Sense */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Solar Makes Financial Sense
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {whySolarMakesSense.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Solar vs Traditional Utility (25 Years)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-red-600">Traditional Electric</h3>
                  <TrendingUp className="w-8 h-8 text-red-500" />
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Monthly Bill:</span>
                    <span className="font-semibold">$200/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Cost:</span>
                    <span className="font-semibold">$2,400/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Rate Increase:</span>
                    <span className="font-semibold">3.5%/year</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg">
                    <span className="font-bold text-gray-900">25-Year Total:</span>
                    <span className="font-bold text-red-600">~$96,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8 ring-4 ring-green-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-green-600">With Solar (Cash)</h3>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">System Cost:</span>
                    <span className="font-semibold">$20,000</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Tax Credit (30%):</span>
                    <span className="font-semibold">-$6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Net Investment:</span>
                    <span className="font-semibold">$14,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reduced Bill:</span>
                    <span className="font-semibold">~$40/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">25-Year Total Cost:</span>
                    <span className="font-semibold">~$26,000</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg">
                    <span className="font-bold text-gray-900">25-Year Savings:</span>
                    <span className="font-bold text-green-600">~$70,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Started */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              How to Get Started
            </h2>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Schedule Free Consultation", icon: <Calendar /> },
                { step: "2", title: "Receive Custom Proposal with Financing Options", icon: <Calculator /> },
                { step: "3", title: "Choose Financing Method", icon: <CreditCard /> },
                { step: "4", title: "We Handle Everything Else", icon: <CheckCircle /> },
                { step: "5", title: "Start Saving Immediately", icon: <TrendingUp /> }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="flex justify-center mb-2 text-blue-600">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Financing FAQs
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-green-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Custom Solar Proposal with Financing Options
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              See exactly how much you can save with our free, no-obligation consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?quote=true"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+19125551234"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (912) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
