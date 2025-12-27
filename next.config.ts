import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the correct workspace root for Turbopack
  turbopack: {
    root: __dirname,
    resolveAlias: {
      "why-is-node-running": "./empty-module.js",
      fastbench: "./empty-module.js",
      "pino-elasticsearch": "./empty-module.js",
      "thread-stream/test": "./empty-module.js",
    },
  },

  // Image optimization for better performance (using Next.js built-in)
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression for better loading speed
  compress: true,

  // Webpack configuration to fix build errors
  webpack: (config, { isServer }) => {
    // Exclude test files from being parsed
    config.module = config.module || {};
    config.module.noParse = config.module.noParse || [];

    if (Array.isArray(config.module.noParse)) {
      config.module.noParse.push(/thread-stream\/test/);
    }

    // Add fallbacks for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "why-is-node-running": false,
      fastbench: false,
      "pino-elasticsearch": false,
    };

    // Ignore specific modules
    config.resolve.alias = {
      ...config.resolve.alias,
      "thread-stream/test": false,
    };

    // Ignore warnings about missing modules
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      /Can't resolve '\.\/ROOT\/node_modules/,
      /thread-stream\/test/,
    ];

    return config;
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "/:path*",
        permanent: true,
        has: [
          {
            type: "host",
            value: "senja.finance",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
