const fs = require('fs');
const axios = require('axios');


async function fetchAlldata(sources) {
  const requests = sources.map((source) => {
    console.log(`request to ${source.url}`);
    return axios
      .get(source.url)
      .then(({ data }) => source.formatBody(data))
      .catch(() => []);
  });
  try {
    return await Promise.all(requests);
  } catch (error) {
    throw new Error('requests_error');
  }
}

async function saveReport(filename, reportData) {
  fs.writeFileSync(`../data/ms/${filename}`, JSON.stringify(reportData, 0, 2));
  fs.copyFileSync(`../data/ms/${filename}`, '../data/ms/report.json');
  console.log('♻️ Updated dataset!');
}

module.exports = {
  fetchAlldata,
  saveReport,
};
