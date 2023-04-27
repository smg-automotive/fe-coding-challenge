/** @type {import('next').NextConfig} */
const { breakpoints } = require('@smg-automotive/components');

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: Object.values(breakpoints)
      .map(({ px }) => px)
      .filter((x) => x > 0),
  },
};

module.exports = nextConfig;
