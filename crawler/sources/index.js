const parseData = require('../helpres/parserData');

const sources = [
  {
    url: process.env.OD_URL,
    formatBody: (body) => parseData(body, undefined, 'od'),
  },
];

module.exports = sources;
