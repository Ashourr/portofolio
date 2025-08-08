const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'profile.alsaifgrup.com',
        pathname: '/**', // أو يمكن تخصيصه حسب المسار الصحيح
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);