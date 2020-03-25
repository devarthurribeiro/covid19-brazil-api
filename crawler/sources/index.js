const R = require('ramda');
const parseData = require('../helpres/parserData');

const sources = [
  {
    url: process.env.MS_URL,
    formatBody: (body) => {
      const latestReport = R.last(JSON.parse(body.substring(13)).brazil);

      const date = R.reverse(latestReport.date.split('/'));
      const time = latestReport.time.split(':');
      const datetime = new Date(date);

      datetime.setHours(time[0]);
      datetime.setMinutes(time[1]);

      const data = latestReport.values.map((item) => ({ ...item, datetime }));
      const parsedData = parseData(data, datetime, 'ms');

      return parsedData;
    },
  },
  {
    url: process.env.OD_URL,
    formatBody: (body) => parseData(body, undefined, 'od'),
  },
  // {
  //   url: process.env.ARCGIS_URL,
  //   formatBody: (body) => {
  //     const parsedBody = body.features.map(({ attributes }) => attributes);
  //     return parseData(parsedBody, undefined, 'arcgis');
  //   },
  // },
];

module.exports = sources;
