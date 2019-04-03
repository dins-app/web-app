import withPlugin from 'next-compose-plugins';
import withOffline from 'next-offline';
import withTypescript from '@zeit/next-typescript';
import optimizedImages from 'next-optimized-images';

const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  env: {
    // BACKEND_URL: prod ? "https://myapp.herokuapp.com" : "http://localhost:8000"
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimizeImagesInDev: true,  // uncomment for testing what images look like in production
        webp: {
          quality: 92,
        },
      },
    ],
    [withTypescript, {}],
    [withOffline, {}],
  ],
  nextConfig,
);
