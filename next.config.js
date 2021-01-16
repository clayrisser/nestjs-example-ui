const withImages = require('next-images');
const withSourceMaps = require('@zeit/next-source-maps');

const configs = {
  productionSourcemaps: true
};

let nextConfig = withImages({
  assetPrefix: './',
  poweredByHeader: false,
  target: 'server',
  devIndicators: {
    autoPrerender: false
  },
  webpack: (config) => {
    if (!config.watchOptions) config.watchOptions = {};
    config.watchOptions.ignored = '**/.*';
    return config;
  }
});

if (configs.productionSourcemaps) {
  nextConfig = withSourceMaps(nextConfig);
}

module.exports = nextConfig;
