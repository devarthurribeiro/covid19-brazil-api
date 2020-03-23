const withPWA = require('next-pwa');

const settings = {
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
};

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
