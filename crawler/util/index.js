const fs = require('fs');
const axios = require('axios');
const extractData = require('../web/extractData');


async function fetchAlldata(sources) {
  const requests = sources.map((source) => {
    console.log(`request to ${source.url}`);
    return axios
      .get(source.url)
      .then(({ data }) => source.formatBody(data))
      .catch(() => []);
  });

  requests.push(extractData);

  try {
    return await Promise.all(requests);
  } catch (error) {
    throw new Error('requests_error');
  }
}

async function saveReport(path, reportData) {
  fs.writeFileSync(path, JSON.stringify(reportData, 0, 2));
  fs.copyFileSync(path, '../data/ms/report.json');
  console.log('♻️ Updated dataset!');
}

function getFileName(date) {
  const d = date.toISOString().slice(0, 10).split('-');
  return `${d[0]}${d[1]}${d[2]}.json`;
}

module.exports = {
  fetchAlldata,
  saveReport,
  getFileName,
};
