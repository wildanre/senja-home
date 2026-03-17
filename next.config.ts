import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compress: true,
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
        source: "/newsletter",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

type IndexedDBPolyfill = {
  open: () => {
    result: {
      objectStoreNames: { contains: () => boolean };
      createObjectStore: () => void;
      close: () => void;
    };
    addEventListener: () => void;
    removeEventListener: () => void;
  };
};

// Polyfill for indexedDB in build environment
if (typeof window === "undefined") {
  const indexedDBPolyfill: IndexedDBPolyfill = {
    open: () => ({
      result: {
        objectStoreNames: { contains: () => false },
        createObjectStore: () => {},
        close: () => {},
      },
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
  };

  Object.defineProperty(globalThis, "indexedDB", {
    value: indexedDBPolyfill,
    configurable: true,
    writable: true,
  });
}

export default bundleAnalyzer(nextConfig);
