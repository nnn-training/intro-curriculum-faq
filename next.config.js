/**
 * @type {import('next').NextConfig}
*/

require('dotenv').config();

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ?
    '/faq'
    :
    ''
  ,
  basePath: process.env.GITHUB_PAGES ?
    '/faq'
    :
    ''
  ,
  trailingSlash: true,
};
