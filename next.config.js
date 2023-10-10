require('dotenv').config();

module.exports = {
  webpack5: false,
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
  future: { webpack5: true }
};
