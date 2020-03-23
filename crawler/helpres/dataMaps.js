const states = require('./states');

function getStateInfo(uf) {
  let state = {};
  Object.keys(states.codes).forEach((key) => {
    if (states.codes[key] === uf.toUpperCase()) {
      state = {
        uid: parseInt(key, 10),
        uf: states.codes[key],
        state: states.names[key],
      };
    }
  });
  return state;
}

const dataMaps = {
  ms: (item) => ({
    uid: item.uid || '',
    uf: states.names[item.uid] || '',
    state: states.codes[item.uid] || '',
    cases: item.cases || 0,
    deaths: item.deaths || 0,
    suspects: item.suspects || 0,
    refuses: item.refuses || 0,
  }),
  od: (item) => ({
    ...getStateInfo(item.u),
    cases: item.c || 0,
    deaths: item.o || 0,
    suspects: item.s || 0,
    refuses: item.d || 0,
  }),
  arcgis: (item) => ({
    uid: item.cod_uf || 0,
    uf: states.codes[item.cod_uf] || '',
    state: states.names[item.cod_uf] || '',
    cases: item.casos_conf || 0,
    deaths: item.obitos || 0,
    suspects: item.casos_susp || 0,
    refuses: item.casos_desc || 0,
  }),
  msSite: (item) => ({
    ...getStateInfo(item['1']),
    cases: parseInt(item['2'], 10) || 0,
    deaths: parseInt(item['3'], 10) || 0,
  }),
};

module.exports = dataMaps;
