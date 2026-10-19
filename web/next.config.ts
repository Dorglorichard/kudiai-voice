import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow the current Cloudflare tunnel in development
  allowedDevOrigins: [
    'definitely-deck-powerful-cir.trycloudflare.com',
  ],

  // Enable React strict mode
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname, '..'),
  },

  // Optimize images
  images: {
    unoptimized: true,
  },

  async rewrites() {
    const backendUrl = process.env.AGENT_BACKEND_URL?.replace(/\/$/, '')
    if (!backendUrl) {
      return []
    }

    return [
      {
        source: '/api/get_config',
        destination: `${backendUrl}/get_config`,
      },
      {
        source: '/api/startAgent',
        destination: `${backendUrl}/startAgent`,
      },
      {
        source: '/api/stopAgent',
        destination: `${backendUrl}/stopAgent`,
      },
    ]
  },
}

export default nextConfig
