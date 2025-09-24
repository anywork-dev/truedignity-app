import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    clientSegmentCache: true,
    nodeMiddleware: true
  }
};

export default nextConfig;
