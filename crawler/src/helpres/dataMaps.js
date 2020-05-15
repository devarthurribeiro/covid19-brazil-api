const states = require('./states');

function getStateInfo(uf) {
  console.log(uf);

  let state = {};
  Object.keys(states.objectIds).forEach((key) => {
    if (key === `${uf}`.toUpperCase()) {
      state = {
        uid: states.codes[key],
        uf: key,
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
    ...getStateInfo(item.nome),
    cases: item.casosAcumulado || 0,
    deaths: item.obitosAcumulado || 0,
  }),
};

module.exports = dataMaps;
