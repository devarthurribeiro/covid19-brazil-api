const fs = require('fs');
const axios = require('axios');
const R = require('ramda');

const extractData = require('../web/extractData');

async function fetchAlldata(sources) {
  const requests = sources.map((source) => {
    console.log(`request to ${source.url}`);
    return axios
      .get(source.url)
      .then(({ data }) => source.formatBody(data))
      .catch(() => []);
  });
  try {
    return await Promise.all([...requests, extractData()]);
  } catch (error) {
    throw new Error('requests_error');
  }
}

function getFileName(date) {
  const d = date.toISOString().slice(0, 10).split('-');
  return `${d[0]}${d[1]}${d[2]}.json`;
}

async function saveReportToJson(reportData) {
  const path = `../data/ms/${getFileName(new Date())}`;

  fs.writeFileSync(path, JSON.stringify(reportData, 0, 2));
  fs.copyFileSync(path, '../data/ms/report.json');

  console.log('♻️ Updated dataset!');
}

const orderByCases = (data) => data.sort((a, b) => (a.cases < b.cases ? 1 : -1));
const orderReportData = (report) => ({ ...report, data: orderByCases(report.data) });

const sumStateCases = ({ cases, deaths }) => R.add(cases, deaths);

const sumTotalCases = (list) => list
  .reduce((sum, report) => R.add(sum, sumStateCases(report)), 0);

const getValidReports = (list) => list.filter((report) => (report.length > 0));

function getMoreUpdatedReport(reports) {
  const allReports = reports.map((report) => ({
    data: report,
    totalCases: sumTotalCases(report),
  }));

  const { totalCases } = allReports[0];
  const moreUpdated = allReports.find((report) => (report.totalCases > totalCases));
  return (moreUpdated || allReports[0]);
}

function existsValidReport(reports) {
  if (reports.length < 1) {
    throw Error('❌ Not avalible valid reports!');
  }
  return reports;
}

function logCases(newReport) {
  console.log(`\n📊 Total cases in report: ${newReport.totalCases}`);
  return newReport;
}

module.exports = {
  fetchAlldata,
  saveReportToJson,
  getFileName,
  orderByCases,
  sumStateCases,
  sumTotalCases,
  getValidReports,
  getMoreUpdatedReport,
  existsValidReport,
  logCases,
  orderReportData,
};
