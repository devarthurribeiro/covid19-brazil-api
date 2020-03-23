require('dotenv').config();

const R = require('ramda');

const parseData = require('./helpres/parserData');
const { fetchAlldata, saveReport, getFileName } = require('./util');

const orderByCases = (list) => list.sort((a, b) => (a.cases < b.cases ? 1 : -1));

const datasets = [
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
  {
    url: process.env.ARCGIS_URL,
    formatBody: (body) => {
      const parsedBody = body.features.map(({ attributes }) => attributes);
      return parseData(parsedBody, undefined, 'arcgis');
    },
  },
];

function sumTotalCases(list) {
  return list.reduce((total, item) => (total + (item.cases + item.deaths)), 0);
}

function getMoreUpdatedReport(reports) {
  const comparationReport = reports.map((report) => ({
    report,
    totalCases: sumTotalCases(report),
  }));

  const { totalCases } = comparationReport[0];

  const r = comparationReport.find((report) => (report.totalCases > totalCases));

  return (r || comparationReport[0]);
}
const extractData = require('./web/extractData');

async function startCrawler() {
  const data = await Promise.all([extractData()]);
  console.log(data);

  const filename = getFileName(new Date());

  const validReports = data.filter((report) => (report.length > 0));

  console.log(R.map(console.table, validReports));

  if (validReports.length > 0) {
    const newReport = getMoreUpdatedReport(validReports);
    // eslint-disable-next-line global-require
    const latestReportCount = sumTotalCases(require('../data/ms/report.json'));

    console.table(newReport.report);

    if (newReport.totalCases > latestReportCount) {
      console.log(`Total cases: ${newReport.totalCases}`);

      saveReport(`../data/ms/${filename}`, orderByCases(newReport.report));
    } else {
      console.log('⚠️ Not avalible update!');
    }
  } else {
    console.log('🚨 No response from datasets!');
  }
}

startCrawler();
