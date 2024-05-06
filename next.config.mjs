/** @type {import('next').NextConfig} */
import nextBuildId from 'next-build-id';
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  generateBuildId: () => nextBuildId({ dir: __dirname })
};

export default nextConfig;
