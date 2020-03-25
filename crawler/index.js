require('dotenv').config();

const {
  fetchAlldata,
  saveReportToJson,
  getValidReports,
  sumTotalCases,
  getMoreUpdatedReport,
  existsValidReport,
  logCases,
  orderReportData,
} = require('./util');

const sources = require('./sources');
const lastReportTotalCase = sumTotalCases(require('../data/ms/report.json'));

const isMoreUpdated = (newReport) => (newReport.totalCases > lastReportTotalCase);

function checkTosave(report) {
  if (isMoreUpdated(report)) {
    saveReportToJson(report.data);
    return;
  }
  console.log('❌ Not avalible update! \n');
}

console.log('🚀 START DATA EXTRACTOR! \n');

fetchAlldata(sources)
  .then(getValidReports)
  .then(existsValidReport)
  .then(getMoreUpdatedReport)
  .then(logCases)
  .then(orderReportData)
  .then(checkTosave)
  .catch(console.error);
