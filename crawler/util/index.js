const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

function execShellCommand(cmd) {
  console.log(cmd);
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout || stderr);
    });
  });
}

async function pushToRepo() {
  const cmd = `git add ../data && git commit -m 'update reports ${new Date().toISOString()}' && git push origin`;
  await execShellCommand(cmd);
}

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
  execShellCommand,
  pushToRepo,
  fetchAlldata,
  saveReport,
};
