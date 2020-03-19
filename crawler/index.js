require('dotenv').config();

const fs = require('fs');
const axios = require('axios');
const R = require('ramda');

const parseData = require('./helpres/parserData');
const execShellCommand = require('./helpres/execShellCommand')

async function pushToRepo ({ data, time }) {
  const cmd = `git add ../data && git commit -m 'update reports ${date} - ${time}' && git push origin`;
  await execShellCommand(cmd);
}

async function startCrawler () {
  const { data } = await axios.get(`${process.env.MS_URL}`);

  const dataset = JSON.parse(data.substring(13)).brazil;
  const latestReport = R.last(dataset);

  const date = R.reverse(latestReport.date.split('/'));
  const filename = `${date[0]}${date[1]}${date[2]}.json`;

  if (!fs.existsSync(`../data/ms/${filename}`)) {
    const parsedData = parseData(latestReport.values);

    fs.writeFileSync(`../data/ms/${filename}`, JSON.stringify(parsedData, 0, 2));
    fs.copyFileSync(`../data/ms/${filename}`, `./report.json`);

    await pushToRepo(latestReport)

    console.log('♻️ Updated dataset!');
  } else {
    console.log('⚠️ Not avalible update');
  }


}

startCrawler();
