require('dotenv').config();

const fs = require('fs');
const axios = require('axios');
const R = require('ramda');

const parseData = require('./helpres/parserData');

async function startCrawler () {
  const { data } = await axios.get(`${process.env.MS_URL}`);

  const dataset = JSON.parse(data.substring(13)).brazil;
  const lastReport = R.last(dataset);

  const date = R.reverse(lastReport.date.split('/'));
  const filename = `${date[0]}${date[1]}${date[2]}.json`;

  if (!fs.existsSync(`../data/ms/${filename}`)) {
    const parsedData = parseData(lastReport.values);

    fs.writeFileSync(`../data/ms/${filename}`, JSON.stringify(parsedData, 0, 2));
    fs.copyFileSync(`../data/ms/${filename}`, `./report.json`);
    console.log('♻️ Updated dataset!')
  } else {
    console.log('⚠️ Not avalible update')
  }


}

startCrawler();
