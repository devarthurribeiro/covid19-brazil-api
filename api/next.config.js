const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    baseUrlCSSE: 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/',
    baseUrlMs: 'https://devarthurribeiro.github.io/covid19-brazil-api/data/ms/',
  },
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
  },
});
