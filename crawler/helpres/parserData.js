const dataMaps = require('./dataMaps')

function parseData (data, datetime = new Date(), map) {
  return data.map(item => {
    return {
      ...dataMaps[map](item),
      datetime
    };
  });
}

module.exports = parseData;
