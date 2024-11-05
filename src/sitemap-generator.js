// sitemap-generator.js
require('babel-register');
const router = require('./').default;
const Sitemap = require('react-router-sitemap').default;

const generateSitemap = () => (
  new Sitemap(router)
    .build('https://www.yourwebsite.com') // Replace with your website URL
    .save('./public/sitemap.xml') // Save to the public directory for Firebase hosting
);

generateSitemap();
