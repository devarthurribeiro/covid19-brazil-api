const R = require('ramda');
const axios = require('axios');
const cheerio = require('cheerio');

const { convertUrl } = require('tabletojson').Tabletojson;

const lastReport = require('../../data/ms/report.json');
const mapData = require('../helpres/dataMaps').msSite;
const { findStateById } = require('../util');

const baseUrl = 'https://www.saude.gov.br';

const formatDate = (d) => (d.toISOString().slice(0, 10));

const searchUrl = () => {
  const utcDate = new Date();
  utcDate.setHours(utcDate.getHours() - 3);
  const date = formatDate(utcDate);
  return `${baseUrl}/noticias?filter-search=&limit=20&filter-start_date=${date}&filter-end_date=${date}+23%3A59%3A59`;
};

const isNotANumber = (row) => !!parseInt(row['0'], 10);
// get some state report
const cleanResult = (list) => R.filter(isNotANumber, list);

function parseData(data) {
  const statesReport = R.map(mapData, cleanResult(data));
  const datetime = new Date();
  const updatedReport = statesReport.map((report) => {
    const oldReport = findStateById(report.uid)(lastReport);
    return { ...oldReport, ...report, datetime };
  });

  return updatedReport;
}

async function searchNews() {
  const { data } = await axios.get(searchUrl());
  const urls = [];

  if (data.includes('casos')) {
    const $ = cheerio.load(data);

    $('.tileHeadline a').each(function find() {
      const url = $(this).attr('href');
      if (url.includes('mortes')) {
        urls.push(url);
      }
    });
  }
  return urls;
}

async function start() {
  const links = await searchNews();
  console.log(searchUrl());
  return new Promise((resolve) => {
    if (links[0]) {
      console.log(`Request to ${baseUrl + links[0]}`);
      convertUrl(`${baseUrl + links[0]}`, (siteTableData) => {
        if (siteTableData[0]) {
          resolve(parseData(siteTableData[0]) || []);
        }
      });
    } else {
      resolve([]);
    }
  });
}

module.exports = start;
