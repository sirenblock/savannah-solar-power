/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Image optimization configuration
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable static export for deployment
  output: 'export',

  // Disable image optimization for static export
  // (can be removed if using a server)
  trailingSlash: true,

  // Environment variables
  env: {
    SITE_NAME: 'Savannah Solar Power',
    SITE_URL: 'https://savannahsolarpower.com',
    COMPANY_PHONE: '(912) 555-0100',
    COMPANY_EMAIL: 'info@savannahsolarpower.com',
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Custom webpack config if needed
    return config;
  },
}

module.exports = nextConfig;
