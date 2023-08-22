const { merge } = require('webpack-merge');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  webpack: config => {
    const newConfig = merge(config, {
      module: {
        rules: [
          {
            test: /\.ttf$/,
            use: [
              {
                loader: 'ttf-loader',
                options: {
                  name: './font/[hash].[ext]'
                }
              }
            ]
          }
        ]
      }
    });

    return newConfig;
  }
};

module.exports = nextConfig;
