const CracoLessPlugin = require('craco-less');
const path = require('path');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@common': path.resolve(__dirname, 'src/common/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@dummy': path.resolve(__dirname, 'src/dummy/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@translations': path.resolve(__dirname, 'src/translations/'),
    },
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
