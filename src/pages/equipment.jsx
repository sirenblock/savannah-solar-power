import React, { useState } from 'react';
import Head from 'next/head';
import {
  Sun,
  Zap,
  Battery,
  Box,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EquipmentCard from '../components/EquipmentCard';
import ComparisonTable from '../components/ComparisonTable';
import equipmentData from '../data/equipment.json';

const EquipmentLibrary = () => {
  const [activePanelTab, setActivePanelTab] = useState(0);
  const [activeInverterTab, setActiveInverterTab] = useState(0);
  const [activeBatteryTab, setActiveBatteryTab] = useState(0);
  const [activeRackingTab, setActiveRackingTab] = useState(0);
  const [showComparisons, setShowComparisons] = useState(false);

  const { solarPanels, inverters, batteries, racking } = equipmentData;

  return (
    <>
      <Head>
        <title>Solar Equipment Library | Premium Tier-1 Components | Savannah Solar Power</title>
        <meta name="description" content="Explore the high-quality solar panels, inverters, batteries, and racking systems we install. All tier-1 equipment with industry-leading warranties for Savannah, GA." />
        <meta name="keywords" content="solar equipment Savannah GA, best solar panels Georgia, Enphase inverters Savannah, Tesla Powerwall specs, solar panel comparison" />
      </Head>

      <Header />

      <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Equipment We Install | Premium Tier-1 Components
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              We only install high-quality, proven equipment from trusted manufacturers. Every component is backed by industry-leading warranties.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#panels" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                <Sun className="w-5 h-5" />
                View Solar Panels
              </a>
              <a href="#inverters" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                <Zap className="w-5 h-5" />
                View Inverters
              </a>
              <a href="#batteries" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                <Battery className="w-5 h-5" />
                View Batteries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transparency in Equipment Selection
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Savannah Solar Power, we believe in transparency. You deserve to know exactly what equipment will be installed on your property. That's why we only work with tier-1 manufacturers known for quality, reliability, and excellent warranty support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every solar system we install uses commercial-grade components designed for coastal Georgia's challenging environment - salt air, high humidity, extreme heat, and hurricane-force winds.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tier-1 Only</h3>
              <p className="text-sm text-gray-600">Top-rated manufacturers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">25-Year Warranties</h3>
              <p className="text-sm text-gray-600">Industry-leading coverage</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Coastal-Rated</h3>
              <p className="text-sm text-gray-600">Built for Georgia climate</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proven Performance</h3>
              <p className="text-sm text-gray-600">Millions installed worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Panels Section */}
      <section id="panels" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Sun className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solar Panels
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We install high-efficiency solar panels from three tier-1 manufacturers. All panels include 25-year performance warranties guaranteeing at least 85% production at year 25.
            </p>
          </div>

          {/* Panel Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {solarPanels.map((panel, index) => (
              <button
                key={panel.id}
                onClick={() => setActivePanelTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activePanelTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {panel.manufacturer} {panel.power}
              </button>
            ))}
          </div>

          {/* Active Panel Card */}
          <div className="max-w-4xl mx-auto">
            <EquipmentCard equipment={solarPanels[activePanelTab]} category="panel" />
          </div>
        </div>
      </section>

      {/* Inverters Section */}
      <section id="inverters" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Zap className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inverters
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Inverters are the brains of your solar system. We primarily install Enphase microinverters for superior reliability, but offer multiple solutions for different applications.
            </p>
          </div>

          {/* Inverter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {inverters.map((inverter, index) => (
              <button
                key={inverter.id}
                onClick={() => setActiveInverterTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors relative ${
                  activeInverterTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {inverter.manufacturer} {inverter.model.split(' ')[0]}
                {inverter.featured && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                    ★
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Active Inverter Card */}
          <div className="max-w-4xl mx-auto">
            <EquipmentCard equipment={inverters[activeInverterTab]} category="inverter" />
          </div>
        </div>
      </section>

      {/* Batteries Section */}
      <section id="batteries" className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Battery className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Battery Backup Systems
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Battery backup is essential in coastal Georgia for hurricane preparedness. We install multiple battery systems to match your needs and budget.
            </p>
          </div>

          {/* Battery Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {batteries.map((battery, index) => (
              <button
                key={battery.id}
                onClick={() => setActiveBatteryTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeBatteryTab === index
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {battery.manufacturer}
              </button>
            ))}
          </div>

          {/* Active Battery Card */}
          <div className="max-w-4xl mx-auto">
            <EquipmentCard equipment={batteries[activeBatteryTab]} category="battery" />
          </div>
        </div>
      </section>

      {/* Racking Systems Section */}
      <section id="racking" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Box className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Racking Systems
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Proper racking is critical for system longevity and hurricane survival. We use IronRidge - the industry standard for quality and engineering.
            </p>
          </div>

          {/* Racking Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {racking.map((rack, index) => (
              <button
                key={rack.id}
                onClick={() => setActiveRackingTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeRackingTab === index
                    ? 'bg-gray-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {rack.model}
              </button>
            ))}
          </div>

          {/* Active Racking Card */}
          <div className="max-w-4xl mx-auto">
            <EquipmentCard equipment={racking[activeRackingTab]} category="racking" />
          </div>
        </div>
      </section>

      {/* Equipment Comparison Tables */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipment Comparison
            </h2>
            <button
              onClick={() => setShowComparisons(!showComparisons)}
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-2"
            >
              {showComparisons ? 'Hide' : 'Show'} Comparison Tables
              {showComparisons ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {showComparisons && (
            <div className="space-y-8">
              <ComparisonTable
                title="Solar Panel Comparison"
                data={solarPanels}
                type="panel"
              />
              <ComparisonTable
                title="Inverter Comparison"
                data={inverters}
                type="inverter"
              />
              <ComparisonTable
                title="Battery Comparison"
                data={batteries}
                type="battery"
              />
            </div>
          )}
        </div>
      </section>

      {/* Why Quality Equipment Matters */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Quality Equipment Matters
          </h2>

          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-lg mb-8">
            <p className="text-lg text-gray-100 mb-6 leading-relaxed">
              Solar is a 25+ year investment. Cheap equipment fails, underperforms, and costs more in the long run. We only install tier-1 equipment because:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">Longer Warranties Protect Your Investment</h3>
                  <p className="text-gray-300 text-sm">
                    25-year warranties ensure your system is covered for its entire lifespan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">Better Performance Maximizes Savings</h3>
                  <p className="text-gray-300 text-sm">
                    High-efficiency panels produce more energy from the same roof space.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">Higher Quality Means Fewer Repairs</h3>
                  <p className="text-gray-300 text-sm">
                    Tier-1 manufacturers have rigorous quality control and proven reliability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">Proven Manufacturers Honor Warranties</h3>
                  <p className="text-gray-300 text-sm">
                    Established companies will be around to support your system for decades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">Coastal-Rated Durability</h3>
                  <p className="text-gray-300 text-sm">
                    All equipment is certified for salt mist, high humidity, and hurricane winds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">Better Resale Value</h3>
                  <p className="text-gray-300 text-sm">
                    Premium equipment increases your home's value and makes it more attractive to buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">
              The Bottom Line
            </p>
            <p className="text-lg">
              Cheap solar equipment is expensive in the long run. Quality components pay for themselves through better performance, fewer issues, and decades of reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Learn Which Equipment is Best for Your Property?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Schedule your free consultation today. We'll design a custom system using the optimal equipment for your needs, budget, and goals.
          </p>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto mb-8">
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
              <textarea
                placeholder="Which equipment are you interested in? Any questions?"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get Free Equipment Consultation
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-900">
            <a href="tel:+19125551234" className="inline-flex items-center gap-2 hover:text-blue-900 transition-colors text-lg font-semibold">
              <Phone className="w-5 h-5" />
              <span>(912) 555-1234</span>
            </a>
            <a href="mailto:info@savannahsolarpower.com" className="inline-flex items-center gap-2 hover:text-blue-900 transition-colors text-lg font-semibold">
              <Mail className="w-5 h-5" />
              <span>info@savannahsolarpower.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals Footer */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 mx-auto mb-3 text-blue-400" />
              <h3 className="font-bold mb-2">Tier-1 Equipment Only</h3>
              <p className="text-sm text-gray-400">Premium manufacturers</p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-bold mb-2">25-Year Warranties</h3>
              <p className="text-sm text-gray-400">Industry-leading coverage</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="font-bold mb-2">Coastal-Rated</h3>
              <p className="text-sm text-gray-400">Hurricane-tested durability</p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-purple-400" />
              <h3 className="font-bold mb-2">Proven Performance</h3>
              <p className="text-sm text-gray-400">Millions installed globally</p>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
};

export default EquipmentLibrary;
