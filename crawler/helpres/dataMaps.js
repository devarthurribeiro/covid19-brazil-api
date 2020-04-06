const states = require('./states');

function getStateInfo(uf) {
  let state = {};
  Object.keys(states.codes).forEach((key) => {
    if (states.codes[key] === `${uf}`.toUpperCase()) {
      state = {
        uid: parseInt(key, 10),
        uf: states.codes[key],
        state: states.names[key],
      };
    }
  });
  return state;
}

const toInt = (n) => parseInt(n.replace(/[^0-9]/g, ''), 10);

const dataMaps = {
  msSite: (item) => ({
    ...getStateInfo(item['1']),
    cases: toInt(item['2']) || 0,
    deaths: toInt(item['3']) || 0,
  }),
  msPlatform: (item) => ({
    ...getStateInfo(states.objectIds[item.objectId]),
    cases: item.qtd_confirmado || 0,
    deaths: item.qtd_obito || 0,
  }),
};

module.exports = dataMaps;
