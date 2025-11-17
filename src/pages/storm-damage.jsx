import React, { useState } from 'react';
import {
  Shield,
  CloudRain,
  FileText,
  Wrench,
  Battery,
  Home,
  CheckCircle,
  AlertTriangle,
  Clock,
  Phone,
  Mail,
  Calendar,
  Wind,
  Zap,
  ChevronDown,
  ChevronUp,
  Download,
  Camera,
  Hammer,
  DollarSign
} from 'lucide-react';

const StormDamage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [checklistVisible, setChecklistVisible] = useState(false);

  const services = [
    {
      title: "Pre-Storm Preparation",
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      items: [
        "Structural inspection to verify hurricane-rated installation",
        "Battery backup system testing",
        "Rapid shutdown verification",
        "Storm preparedness checklist",
        "Documentation of system condition"
      ]
    },
    {
      title: "Post-Storm Assessment",
      icon: <FileText className="w-12 h-12 text-orange-500" />,
      items: [
        "Visual damage inspection from ground level",
        "Electrical safety testing",
        "Production verification",
        "Structural integrity check",
        "Detailed documentation for insurance claims"
      ]
    },
    {
      title: "Insurance Claims Assistance",
      icon: <FileText className="w-12 h-12 text-green-500" />,
      items: [
        "Detailed damage reports with technical specifications",
        "Professional photo and video documentation",
        "Repair estimates and scope of work",
        "Direct communication with insurance adjusters",
        "Complete insurance paperwork assistance"
      ]
    },
    {
      title: "Reroof Coordination",
      icon: <Home className="w-12 h-12 text-purple-500" />,
      items: [
        "Safe solar panel removal before roofing",
        "Secure equipment storage during construction",
        "Coordination with roofing contractor",
        "Professional reinstallation after new roof complete",
        "System retesting and recertification",
        "Utility reconnection and approval"
      ]
    }
  ];

  const hurricanePrep72Hours = [
    "Charge battery backup to 100% (if applicable)",
    "Verify monitoring system is working properly",
    "Check rapid shutdown accessibility",
    "Clear debris from around panels and roof area",
    "Document system condition with photos",
    "Review insurance policy coverage"
  ];

  const hurricanePrep48Hours = [
    "Enable Storm Watch mode (Tesla Powerwall) or similar battery storm mode",
    "Minimize battery usage to preserve charge for outage",
    "Ensure critical load panel is configured correctly",
    "Have flashlights and emergency supplies ready",
    "Fully charge all devices and power banks"
  ];

  const hurricanePrep24Hours = [
    "Final battery charge to 100%",
    "Note monitoring app status and baseline production",
    "Know how to manually shut down system if needed",
    "Prepare emergency contact information",
    "Confirm evacuation plans if necessary"
  ];

  const doNots = [
    "NEVER attempt to remove panels yourself (dangerous and damages roof)",
    "DO NOT touch any electrical components during storm",
    "DO NOT work on roof in high winds or unsafe conditions",
    "AVOID walking on panels or racking systems",
    "DO NOT authorize repairs until insurance inspects (if filing claim)"
  ];

  const postStormSteps = [
    {
      title: "Immediate Post-Storm (Day 1)",
      items: [
        "Check for visible damage from ground (never climb in unsafe conditions)",
        "Look for fallen branches, debris on panels",
        "Check inverter status (lights, error codes)",
        "Verify monitoring system is online",
        "Take photos/video of any visible damage"
      ]
    },
    {
      title: "If You See Damage",
      items: [
        "Take comprehensive photos/video for documentation",
        "DO NOT touch damaged electrical components",
        "Contact us immediately for professional assessment",
        "Contact your insurance company to file claim",
        "Do not authorize repairs until insurance adjusts claim",
        "Request our insurance documentation package"
      ]
    },
    {
      title: "If System Appears Intact",
      items: [
        "Verify production has resumed (check monitoring app)",
        "Watch for any performance anomalies over next few days",
        "Schedule post-storm inspection for peace of mind",
        "Document that system survived for future reference"
      ]
    }
  ];

  const commonDamage = [
    {
      category: "Panel Damage",
      icon: <CloudRain className="w-8 h-8 text-blue-500" />,
      types: [
        "Cracked glass from hail or flying debris",
        "Frame damage from impacts",
        "Junction box damage or water intrusion",
        "Micro-cracks affecting performance"
      ]
    },
    {
      category: "Racking Damage",
      icon: <Hammer className="w-8 h-8 text-orange-500" />,
      types: [
        "Bent rails from extreme winds",
        "Loosened or failed attachments",
        "Flashing damage or displacement",
        "Structural mounting point failure"
      ]
    },
    {
      category: "Electrical Damage",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      types: [
        "Inverter water intrusion",
        "Wiring damage from debris",
        "Disconnect failures or damage",
        "Conduit damage or separation"
      ]
    },
    {
      category: "Roof Damage",
      icon: <Home className="w-8 h-8 text-red-500" />,
      types: [
        "Shingle loss around attachments",
        "Leak development at penetration points",
        "Structural damage requiring reroof",
        "Decking damage underneath panels"
      ]
    }
  ];

  const insuranceProcess = [
    {
      step: "1",
      title: "Document Damage",
      description: "We provide comprehensive documentation including professional damage assessment report, photo/video evidence, repair cost estimate, equipment specifications, and original installation records."
    },
    {
      step: "2",
      title: "File Claim",
      description: "Contact your insurance company to file claim. Provide our documentation package to support your claim with technical details."
    },
    {
      step: "3",
      title: "Adjuster Inspection",
      description: "Insurance adjuster inspects damage. We can attend inspection to provide technical expertise and ensure all damage is properly identified."
    },
    {
      step: "4",
      title: "Estimate Review",
      description: "We review adjuster's estimate to ensure all damage and proper repairs are included at fair market rates."
    },
    {
      step: "5",
      title: "Repair Authorization",
      description: "Once insurance approves, we complete repairs using insurance proceeds with any applicable deductible."
    },
    {
      step: "6",
      title: "Final Inspection",
      description: "We verify repairs are complete, system is operating properly, and provide documentation for your records and insurance."
    }
  ];

  const reroofProcess = [
    {
      number: "01",
      title: "Consultation",
      description: "We assess your system and provide detailed removal and reinstallation quote"
    },
    {
      number: "02",
      title: "Coordination",
      description: "We work with your roofing contractor on scheduling and logistics"
    },
    {
      number: "03",
      title: "Removal",
      description: "We carefully remove panels, racking, and all solar equipment, labeling everything for proper reinstallation"
    },
    {
      number: "04",
      title: "Storage",
      description: "Equipment is securely stored in weather-protected location during roofing work"
    },
    {
      number: "05",
      title: "Inspection",
      description: "After new roof is complete, we inspect for solar readiness and structural integrity"
    },
    {
      number: "06",
      title: "Reinstallation",
      description: "We reinstall system using new flashing, test thoroughly, and recommission"
    },
    {
      number: "07",
      title: "Recertification",
      description: "System is inspected and re-approved with utility company for operation"
    }
  ];

  const batteryBenefits = [
    {
      title: "Power During Outages",
      description: "Extended power during multi-day outages common after hurricanes",
      icon: <Battery />
    },
    {
      title: "Solar Continues Working",
      description: "Solar charges battery during outage - traditional grid-tied systems shut down",
      icon: <Zap />
    },
    {
      title: "Critical Systems Stay Online",
      description: "Refrigeration, medical equipment, communications, lights, and HVAC",
      icon: <Home />
    },
    {
      title: "Whole-Home Comfort",
      description: "Properly sized systems can power entire home during outages",
      icon: <CheckCircle />
    }
  ];

  const stormPreparationChecklist = `HURRICANE PREPARATION CHECKLIST FOR SOLAR SYSTEMS

72 HOURS BEFORE STORM:
☐ Charge battery backup to 100% (if applicable)
☐ Verify monitoring system is working
☐ Check rapid shutdown accessibility
☐ Clear debris from around panels
☐ Document system condition (photos)
☐ Review insurance policy

48 HOURS BEFORE STORM:
☐ Enable Storm Watch/Reserve mode on battery
☐ Minimize battery usage
☐ Configure critical load panel
☐ Prepare emergency supplies
☐ Charge all devices

24 HOURS BEFORE STORM:
☐ Final battery charge to 100%
☐ Note monitoring app baseline
☐ Review manual shutdown procedure
☐ Prepare emergency contacts
☐ Confirm evacuation plans if needed

DO NOT:
✗ Attempt to remove panels yourself
✗ Touch electrical components during storm
✗ Work on roof in high winds
✗ Walk on panels or racking

POST-STORM:
☐ Check for damage from ground
☐ Document any damage with photos
☐ Check inverter status
☐ Verify monitoring system online
☐ Contact Savannah Solar Power if damage found
☐ File insurance claim if necessary

Emergency Contact:
Savannah Solar Power: (912) 555-1234`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Wind className="absolute top-10 left-10 w-32 h-32 animate-pulse" />
          <CloudRain className="absolute bottom-10 right-10 w-40 h-40 animate-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hurricane & Storm Services for Solar Systems
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Expert solar system storm preparation, damage assessment, insurance claims assistance, and reroof coordination for Savannah, GA
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Living in coastal Georgia means preparing for hurricanes and severe storms. At Savannah Solar Power,
              we help homeowners protect their solar investments before storms and restore systems quickly after.
            </p>
          </div>
        </div>
      </div>

      {/* Services We Offer */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Storm Services We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hurricane-Ready Installation */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Wind className="w-16 h-16 text-blue-300 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Hurricane-Ready Solar Installation
              </h2>
            </div>

            <p className="text-xl text-blue-100 text-center mb-8">
              Every system we install is engineered for hurricane survival:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "180+ MPH Wind Rating", desc: "IronRidge racking rated for extreme winds" },
                { title: "Enhanced Fastening", desc: "Direct attachment to structural roof members" },
                { title: "Florida Building Code", desc: "Compliance with USA's most stringent standards" },
                { title: "Weatherproof Connections", desc: "Sealed electrical connections resist water" },
                { title: "Professional Installation", desc: "Certified technicians, proper techniques" },
                { title: "Proper Grounding", desc: "Lightning and electrical surge protection" }
              ].map((item, index) => (
                <div key={index} className="bg-blue-800 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-blue-100">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Before Hurricane Checklist */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What to Do Before a Hurricane
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">72 Hours Before</h3>
                </div>
                <ul className="space-y-2">
                  {hurricanePrep72Hours.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">48 Hours Before</h3>
                </div>
                <ul className="space-y-2">
                  {hurricanePrep48Hours.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">24 Hours Before</h3>
                </div>
                <ul className="space-y-2">
                  {hurricanePrep24Hours.map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">DO NOT:</h3>
              </div>
              <ul className="space-y-2">
                {doNots.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-3 font-bold">✗</span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  const blob = new Blob([stormPreparationChecklist], { type: 'text/plain' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'hurricane-preparation-checklist.txt';
                  a.click();
                }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg inline-flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Hurricane Prep Checklist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* After Storm Steps */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What to Do After a Storm
            </h2>

            <div className="space-y-6">
              {postStormSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{step.title}</h3>
                  <ol className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Common Storm Damage */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Common Storm Damage Types
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commonDamage.map((damage, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex justify-center mb-4">
                    {damage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {damage.category}
                  </h3>
                  <ul className="space-y-2">
                    {damage.types.map((type, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Claims Process */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Insurance Claims Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceProcess.map((process, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start">
                <FileText className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Professional Insurance Documentation Package
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our comprehensive documentation package includes professional damage assessment reports,
                    detailed photo and video evidence, repair cost estimates with labor and materials breakdown,
                    complete equipment specifications, and original installation records.
                  </p>
                  <a
                    href="/contact"
                    className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                  >
                    Request Documentation Package
                    <ChevronDown className="w-4 h-4 ml-1 transform -rotate-90" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reroof Coordination */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Reroof Coordination Service
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              When you need a new roof, we provide complete solar removal and reinstallation service
            </p>

            <div className="grid md:grid-cols-7 gap-4 mb-10">
              {reroofProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <Clock className="w-10 h-10 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Typical Timeline</h4>
                <p className="text-gray-700">2-4 weeks (depending on roofing schedule)</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <DollarSign className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Cost</h4>
                <p className="text-gray-700">Contact us for quote (varies by system size)</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <FileText className="w-10 h-10 text-purple-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Insurance Coverage</h4>
                <p className="text-gray-700">If reroof is insurance claim, removal/reinstall may be covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Battery Backup Benefits */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Battery className="w-16 h-16 text-blue-300 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Battery Backup for Storm Resilience
              </h2>
            </div>

            <p className="text-xl text-center text-blue-100 mb-10">
              The best storm preparation is battery backup. When the grid fails, you maintain power.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {batteryBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="flex justify-center mb-4 text-blue-300">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm text-center">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Systems We Recommend:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-lg text-blue-200 mb-2">Tesla Powerwall 3</h4>
                  <p className="text-blue-100 text-sm">13.5 kWh capacity, whole-home capable with integrated inverter</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-blue-200 mb-2">Franklin aPower2</h4>
                  <p className="text-blue-100 text-sm">Stackable architecture up to 54 kWh for extended backup</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-blue-200 mb-2">EP Cube</h4>
                  <p className="text-blue-100 text-sm">9.9 to 19.9 kWh options, modular design</p>
                </div>
              </div>
              <p className="text-center mt-6 text-xl font-semibold text-blue-200">
                Can be added to existing solar systems!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Storm Service Pricing */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Storm Service Pricing
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { service: "Post-Storm Inspection", price: "$199", note: "Waived if repairs performed" },
                { service: "Insurance Documentation Package", price: "$299", note: "Comprehensive report for claims" },
                { service: "Reroof Removal/Reinstall", price: "$1,500 - $3,500", note: "Depends on system size" },
                { service: "Emergency Repairs", price: "Contact for quote", note: "Based on damage extent" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.service}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">{item.price}</p>
                  <p className="text-sm text-gray-600">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8 italic">
              All pricing subject to damage extent and system size. Contact us for detailed quote.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-green-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prepare Your Solar System or Get Storm Damage Assessment
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Protect your investment with professional storm services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Inspection
              </a>
              <a
                href="tel:+19125551234"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Service: (912) 555-1234
              </a>
            </div>
            <p className="mt-6 text-blue-200">
              Insurance Claims Assistance Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StormDamage;
