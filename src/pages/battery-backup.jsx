'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Battery, Zap, Shield, Home, Sun, AlertTriangle, Clock, TrendingDown, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

{/*
SEO Meta Tags:
<title>Solar Battery Backup Systems | Savannah, GA | Hurricane Preparedness</title>
<meta name="description" content="Protect your Savannah home with solar battery backup systems. Tesla Powerwall, EP Cube & more. Hurricane preparedness & 24/7 power security. 30% tax credit available." />
<meta name="keywords" content="solar battery backup Savannah GA, home battery backup systems Georgia, Tesla Powerwall Savannah, hurricane backup power Savannah, power outage protection, battery backup installation" />
*/}

export default function BatteryBackup() {
  const [selectedBattery, setSelectedBattery] = useState(null)
  const [runtimeCalcOpen, setRuntimeCalcOpen] = useState(false)
  const [averageLoad, setAverageLoad] = useState(5)
  const [stormTipsOpen, setStormTipsOpen] = useState(false)

  const batteries = [
    {
      name: 'Tesla Powerwall 3',
      capacity: '13.5 kWh',
      continuousPower: '11.5 kW',
      peakPower: '22 kW (10 sec)',
      warranty: '10 years',
      expandable: 'Up to 4 units (54 kWh)',
      features: [
        'Integrated inverter',
        'Whole-home backup capable',
        'Industry-leading app',
        'Seamless Tesla integration',
        'Premium design'
      ],
      bestFor: 'Homeowners who want premium, whole-home backup with seamless Tesla integration',
      price: '$$$$'
    },
    {
      name: 'EP Cube',
      capacity: '9.9 / 16.5 / 19.9 kWh',
      continuousPower: 'Up to 10 kW',
      peakPower: '15 kW',
      warranty: '10 years',
      expandable: 'Stackable modules',
      features: [
        'Modular design',
        'Stackable',
        'LiFePO4 chemistry',
        'Flexible sizing options',
        'Excellent value'
      ],
      bestFor: 'Flexible sizing options, excellent value for money',
      price: '$$$'
    },
    {
      name: 'Franklin aPower2',
      capacity: '13.6 kWh',
      continuousPower: '12 kW',
      peakPower: '18 kW',
      warranty: '12 years',
      expandable: 'Up to 4 units (54.4 kWh)',
      features: [
        'Advanced smart home integration',
        'Intelligent load management',
        'Industry-leading warranty',
        'Whole-home backup',
        'Made in USA'
      ],
      bestFor: 'Whole-home backup with intelligent load management and longest warranty',
      price: '$$$$'
    },
    {
      name: 'EG4 PowerPro',
      capacity: '14.3 - 28.6 kWh',
      continuousPower: '7.6 kW',
      peakPower: '11.4 kW',
      warranty: '10 years',
      expandable: 'Yes',
      features: [
        'LiFePO4 batteries',
        'Excellent cycle life',
        'Wall or floor mount',
        'Cost-effective',
        'Reliable backup'
      ],
      bestFor: 'Cost-effective, reliable backup with long service life',
      price: '$$'
    }
  ]

  const calculateRuntime = (batteryCapacity, load) => {
    const capacity = parseFloat(batteryCapacity)
    const runtime = (capacity / load) * 0.9 // 90% usable capacity
    return runtime.toFixed(1)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solar Battery Backup Systems | Savannah, GA
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Never lose power again. Keep your home running during storms and outages with solar battery backup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?quote=battery-backup"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-center"
                >
                  Get Your Free Battery Backup Quote
                </Link>
                <a
                  href="tel:+19125551234"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-center"
                >
                  Call (912) 555-1234
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <Battery className="w-64 h-64 text-yellow-400 opacity-20" />
                <Zap className="w-32 h-32 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Battery Backup is Essential */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Why Battery Backup is Essential in Coastal Georgia
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Hurricane Preparedness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Savannah faces hurricane threats every year. Extended power outages are common. A battery backup system keeps your essential systems running - refrigeration, AC, medical equipment, and communications - when the grid goes down.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Grid Resilience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Even without hurricanes, grid outages happen. Storms, accidents, and maintenance cause disruptions. Battery backup provides peace of mind year-round.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Energy Independence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Store solar energy produced during the day and use it at night or during outages. Reduce reliance on the grid and take control of your energy future.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <TrendingDown className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Load Shifting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Use stored energy during peak rate periods. Save money while maintaining power security. Smart energy management for maximum savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Solar + Battery Backup Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            How Solar + Battery Backup Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-900">During Normal Operation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solar panels generate electricity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Excess energy charges your battery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Battery powers your home when solar isn't producing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Seamless integration with grid connection</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-orange-600" />
                <h3 className="text-2xl font-bold text-blue-900">During Power Outages</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">System detects grid failure instantly (&lt; 10 milliseconds)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Battery automatically powers your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Essential circuits stay online</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solar continues charging battery during daylight</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>You maintain power for days or indefinitely (with solar)</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Systems We Install */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
            Battery Backup Systems We Install
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We offer the industry's leading battery backup systems. Each system is carefully selected for reliability, performance, and value.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {batteries.map((battery, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border-2 ${
                  selectedBattery === index ? 'border-orange-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedBattery(selectedBattery === index ? null : index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{battery.name}</h3>
                    <div className="text-orange-500 font-bold text-lg">{battery.price}</div>
                  </div>
                  <Battery className="w-12 h-12 text-blue-600" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <div className="text-gray-500 font-semibold">Capacity</div>
                    <div className="text-gray-900 font-bold">{battery.capacity}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-semibold">Continuous Power</div>
                    <div className="text-gray-900 font-bold">{battery.continuousPower}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-semibold">Peak Power</div>
                    <div className="text-gray-900 font-bold">{battery.peakPower}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-semibold">Warranty</div>
                    <div className="text-gray-900 font-bold">{battery.warranty}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-gray-500 font-semibold text-sm mb-2">Expandable</div>
                  <div className="text-gray-900">{battery.expandable}</div>
                </div>

                <div className="mb-4">
                  <div className="text-gray-500 font-semibold text-sm mb-2">Key Features</div>
                  <ul className="space-y-1">
                    {battery.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="text-gray-500 font-semibold text-sm mb-2">Best For</div>
                  <p className="text-gray-700 text-sm">{battery.bestFor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact?quote=battery-backup"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Get Custom Battery System Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Battery Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Battery System Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">Tesla Powerwall 3</th>
                  <th className="px-6 py-4 text-left font-semibold">EP Cube</th>
                  <th className="px-6 py-4 text-left font-semibold">Franklin aPower2</th>
                  <th className="px-6 py-4 text-left font-semibold">EG4 PowerPro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Capacity</td>
                  <td className="px-6 py-4 text-gray-900">13.5 kWh</td>
                  <td className="px-6 py-4 text-gray-900">9.9-19.9 kWh</td>
                  <td className="px-6 py-4 text-gray-900">13.6 kWh</td>
                  <td className="px-6 py-4 text-gray-900">14.3 kWh</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Continuous Power</td>
                  <td className="px-6 py-4 text-gray-900">11.5 kW</td>
                  <td className="px-6 py-4 text-gray-900">10 kW</td>
                  <td className="px-6 py-4 text-gray-900">12 kW</td>
                  <td className="px-6 py-4 text-gray-900">7.6 kW</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Warranty</td>
                  <td className="px-6 py-4 text-gray-900">10 yr</td>
                  <td className="px-6 py-4 text-gray-900">10 yr</td>
                  <td className="px-6 py-4 text-gray-900">12 yr</td>
                  <td className="px-6 py-4 text-gray-900">10 yr</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Expandable</td>
                  <td className="px-6 py-4 text-gray-900">Yes (4 max)</td>
                  <td className="px-6 py-4 text-gray-900">Yes</td>
                  <td className="px-6 py-4 text-gray-900">Yes (4 max)</td>
                  <td className="px-6 py-4 text-gray-900">Yes</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Best Use Case</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Premium whole-home</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Flexible sizing</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Smart load mgmt</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Cost-effective</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-700">Price Range</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">$$$$</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">$$$</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">$$$$</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">$$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Backup Configuration Options */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Backup Configuration Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Whole-Home Backup</h3>
              <p className="text-gray-700 mb-4">
                Powers your entire house including AC, heating, all appliances. Requires larger battery system (typically 2-3 batteries).
              </p>
              <div className="text-sm text-gray-600">
                <strong>Best for:</strong> Complete peace of mind, larger homes, extended outages
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-orange-500">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Critical Loads Backup</h3>
              <p className="text-gray-700 mb-4">
                Powers essential circuits: refrigerator, lights, outlets, internet, medical equipment. More affordable, longer backup duration with smaller battery.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Best for:</strong> Budget-conscious, essential coverage, maximum runtime
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Custom Hybrid</h3>
              <p className="text-gray-700 mb-4">
                Mix of whole-home and critical loads. We prioritize essential loads during outages but can power the whole home when battery is fully charged.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Best for:</strong> Flexibility, optimized performance, smart energy management
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Runtime Calculator */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setRuntimeCalcOpen(!runtimeCalcOpen)}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                How Long Will My Battery Last During an Outage?
              </h2>
              {runtimeCalcOpen ? (
                <ChevronUp className="w-6 h-6 text-blue-900" />
              ) : (
                <ChevronDown className="w-6 h-6 text-blue-900" />
              )}
            </div>

            {runtimeCalcOpen && (
              <div className="mt-6">
                <div className="bg-white p-6 rounded-lg mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Average Load During Outage: <span className="text-blue-600">{averageLoad} kW</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={averageLoad}
                    onChange={(e) => setAverageLoad(parseFloat(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1 kW (Critical loads)</span>
                    <span>15 kW (Whole home + AC)</span>
                  </div>
                </div>

                <h3 className="font-bold text-blue-900 mb-4">Estimated Runtime (13.5 kWh Battery - 1 Powerwall):</h3>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-900">
                      {calculateRuntime(13.5, averageLoad)}h
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Per Charge</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">
                      {averageLoad <= 5 ? 'Indefinite' : 'Multi-day'}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">With Solar Recharging</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <Battery className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">
                      {Math.ceil(13.5 / averageLoad)}+ days
                    </div>
                    <div className="text-sm text-gray-600 mt-1">With Conservative Use</div>
                  </div>
                </div>

                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h4 className="font-bold mb-3">Example Usage Scenarios:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Critical Loads Only (3-5 kW):</span>
                      <span className="font-bold">8-12 hours per charge</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Whole Home Average (8-10 kW):</span>
                      <span className="font-bold">4-6 hours per charge</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conservative Use (2-3 kW):</span>
                      <span className="font-bold">18-24 hours per charge</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-700 text-blue-100 text-xs">
                    With solar recharging during daylight hours, your runtime extends indefinitely for conservative use, or multiple days for whole-home backup.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Adding Battery to Existing Solar */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
            Adding Battery Backup to Existing Solar
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
            Already have solar? We can add battery backup to most existing systems.
          </p>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Enphase Systems</h3>
                <p className="text-gray-700 text-sm">
                  IQ8 series microinverters support Sunlight Backup with Enphase batteries
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-blue-900 mb-2">String Inverter Systems</h3>
                <p className="text-gray-700 text-sm">
                  AC-coupled batteries work with most string inverter installations
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Older Systems</h3>
                <p className="text-gray-700 text-sm">
                  We can retrofit with modern batteries and backup gateways
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
              <p className="text-lg mb-4">
                Free consultation to assess your existing system compatibility
              </p>
              <Link
                href="/contact?quote=add-battery"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Schedule Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            What's Included in Battery Backup Installation
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Site assessment and load calculation',
              'Battery system sizing and design',
              'Electrical panel upgrades (if needed)',
              'Battery installation and mounting',
              'Backup gateway or automatic transfer switch',
              'Integration with existing solar (if applicable)',
              'System programming and configuration',
              'Permit acquisition and inspections',
              'Commissioning and testing',
              'Monitoring system setup',
              'Training on system operation',
              '10-12 year battery warranties',
              'Ongoing support and service'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Backup Incentives */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Battery Backup Incentives
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">💰</div>
                <h3 className="text-2xl font-bold text-blue-900">30% Federal Tax Credit</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Battery systems paired with solar qualify for the 30% federal solar tax credit. Save thousands on your battery backup system.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Example Savings:</div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">System Cost: $15,000</span>
                  <span className="text-green-600 font-bold">Tax Credit: $4,500</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-2xl font-bold text-blue-900">Net Metering</h3>
              </div>
              <p className="text-gray-700 mb-4">
                In Georgia, store energy during the day and export excess to the grid for credits. Maximize your solar investment with battery storage.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">
                  Combined with battery backup, net metering allows you to optimize when you use grid power versus stored solar energy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Preparation Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-orange-200">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setStormTipsOpen(!stormTipsOpen)}
            >
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-10 h-10 text-orange-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                  Hurricane & Storm Preparation Tips
                </h2>
              </div>
              {stormTipsOpen ? (
                <ChevronUp className="w-6 h-6 text-blue-900" />
              ) : (
                <ChevronDown className="w-6 h-6 text-blue-900" />
              )}
            </div>

            {stormTipsOpen && (
              <div className="mt-6 space-y-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                    Before Hurricane Season
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Ensure battery is fully charged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Test backup circuits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Update critical load panel if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Review monitoring app and familiarize yourself with controls</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                    When Storm Approaches
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Charge battery to 100%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Minimize non-essential energy use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Have flashlights and emergency supplies ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Know how to monitor battery status on your app</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                    During Outage
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Battery automatically takes over (you won't notice)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Solar recharges battery during daylight hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Monitor battery level on app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Conserve energy for extended outages (turn off AC if not needed)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-600 text-white p-4 rounded-lg">
                  <p className="font-semibold">Pro Tip: With solar recharging, your battery can keep your home powered indefinitely during extended outages, as long as you manage your energy usage wisely.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your Home with Battery Backup
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free battery backup assessment today. We'll design the perfect system for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?quote=battery-backup"
              className="bg-orange-500 text-white px-10 py-5 rounded-lg font-semibold hover:bg-orange-600 transition text-lg"
            >
              Schedule Free Assessment
            </Link>
            <a
              href="tel:+19125551234"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-lg"
            >
              Call (912) 555-1234
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-sm">Serving Savannah, Pooler, Richmond Hill, Hinesville & all of Coastal Georgia</p>
          </div>
        </div>
      </section>
    </div>
  )
}
