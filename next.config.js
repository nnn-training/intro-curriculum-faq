/**
 * @type {import('next').NextConfig}
*/

require('dotenv').config();

const { resolve } = require('path');
const CopyFilePlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');


module.exports = {
  webpack(config) {
    config.plugins.push(
      new CopyFilePlugin({
        // MARKDOWN と同階層に置かれている画像ファイルを public 配下へコピー
        patterns: [
          {
            context: 'MARKDOWN/intro/images',
            from: '*.{jpg,png}',
            to: resolve(__dirname, 'public/images/intro'),
            noErrorOnMissing: true
          },
          {
            context: 'MARKDOWN/others/images',
            from: '*.{jpg,png}',
            to: resolve(__dirname, 'public/images/others'),
            noErrorOnMissing: true
          },
          {
            context: 'MARKDOWN/spapp/images',
            from: '*.{jpg,png}',
            to: resolve(__dirname, 'public/images/spapp'),
            noErrorOnMissing: true
          },
          {
            context: 'MARKDOWN/unity/images',
            from: '*.{jpg,png}',
            to: resolve(__dirname, 'public/images/unity'),
            noErrorOnMissing: true
          },
          {
            context: 'MARKDOWN/webapp/images',
            from: '*.{jpg,png}',
            to: resolve(__dirname, 'public/images/webapp'),
            noErrorOnMissing: true
          },
        ]
      }),
      new WriteFilePlugin()
    )
    return config;
  },
  assetPrefix: process.env.NEXT_PUBLIC_GITHUB_PAGES ?
    '/faq'
    :
    ''
  ,
  basePath: process.env.NEXT_PUBLIC_GITHUB_PAGES ?
    '/faq'
    :
    ''
  ,
  trailingSlash: true,
};
