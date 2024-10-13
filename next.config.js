module.exports = {
  reactStrictMode: true,
  webpack(config, { dev }) {
    if (dev) {
      config.mode = 'development';
    }
    return config;
  },
};