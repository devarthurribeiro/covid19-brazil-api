const parseData = require('../helpres/parserData');
const { mergeReports } = require('../util');

const sources = [
  {
    url: process.env.MS_URL,
    headers: { 'x-parse-application-id': process.env.APPLICATION_ID },
    formatBody: (body) => {
      const report = parseData(body.results, undefined, 'msPlatform');
      // eslint-disable-next-line global-require
      const lastReport = require('../../data/ms/report.json');
      return mergeReports(lastReport, report);
    },
  },
];

module.exports = sources;
