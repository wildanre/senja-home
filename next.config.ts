import type { NextConfig } from "next";

const withOptimizedImages = require('next-optimized-images');

const nextConfig: NextConfig = withOptimizedImages({
  // Enable static optimization for better SEO
  output: 'standalone',

  // Image optimization for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Disable Next.js default static image handling to use next-optimized-images
    disableStaticImages: true,
  },

  // next-optimized-images config
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 50,
  },
  optipng: {
    optimizationLevel: 7,
  },
  svgo: {
    // enable/disable SVG optimization
  },

  // Compression for better loading speed
  compress: true,

  // Enable SWC minification for JS/CSS
  swcMinify: true,

  // Advanced image optimization (for next-optimized-images, if used)
  // To further compress images, consider using next-optimized-images or an external image CDN

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
