import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Savannah Solar Power</h3>
            <p className="text-sm mb-4">C SQUARED POWER LLC</p>
            <p className="text-sm mb-2">
              Your trusted partner for hurricane-ready solar installations in Coastal Georgia.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-white">Tesla Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-white">Enphase Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/residential" className="text-sm hover:text-white transition">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-sm hover:text-white transition">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/battery-backup" className="text-sm hover:text-white transition">
                  Battery Backup Systems
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-sm hover:text-white transition">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-sm hover:text-white transition">
                  Financing & Incentives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/residential" className="text-sm hover:text-white transition">
                  Residential Installations
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-sm hover:text-white transition">
                  Commercial Installations
                </Link>
              </li>
              <li>
                <Link href="/tesla-powerwall" className="text-sm hover:text-white transition">
                  Tesla Powerwall 3
                </Link>
              </li>
              <li>
                <Link href="/enphase-systems" className="text-sm hover:text-white transition">
                  Enphase IQ8 Systems
                </Link>
              </li>
              <li>
                <Link href="/service-repair" className="text-sm hover:text-white transition">
                  Service & Repair
                </Link>
              </li>
              <li>
                <Link href="/storm-damage" className="text-sm hover:text-white transition">
                  Storm Damage Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+19125551234" className="text-sm hover:text-white transition">
                  (912) 555-1234
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@savannahsolarpower.com" className="text-sm hover:text-white transition">
                  info@savannahsolarpower.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">
                  Savannah, GA
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white text-sm font-semibold mb-2">Service Areas</h5>
              <p className="text-xs leading-relaxed">
                Savannah • Pooler • Richmond Hill • Hinesville • Statesboro • Chatham County
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} C SQUARED POWER LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-xs text-gray-500">
              Licensed Solar Contractor | NABCEP Certified | Tesla Powerwall Certified Installer | Enphase Certified Installer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
