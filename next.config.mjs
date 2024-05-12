import { i18n } from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
