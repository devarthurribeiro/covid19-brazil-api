/* eslint-disable */
const tabletojson = require('tabletojson').Tabletojson;

function mapData(list) {
  return list.filter((row) => (row.length > 4)).map((row) => ({
    uf: row[1],
    cases: row[2],
    deaths: row[3],
  }));
}

tabletojson.convertUrl(
  'https://www.saude.gov.br/noticias/agencia-saude/46573-coronavirus-25-mortes-e-1-546-casos-confirmados',
  (tablesAsJson) => {
    console.log(mapData(tablesAsJson[0]));
  },
);