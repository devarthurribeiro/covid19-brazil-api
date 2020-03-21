const states = require('./states');

function getStateInfo (uf) {
  let state = {}
  Object.keys(states.codes).forEach(key => {
    if (states.codes[key] === uf.toUpperCase()) {
      state = {
        uf: states.codes[key],
        uid: parseInt(key),
        state: states.names[key]
      }
    }
  });
  return state
}

const dataMaps = {
  ms: (item) => ({
    uid: item["uid"] || "",
    uf: states.names[item["uid"]] || "",
    state: states.codes[item["uid"]] || "",
    cases: item["cases"] || 0,
    deaths: item["deaths"] || 0,
    suspects: item["suspects"] || 0,
    refuses: item["refuses"] || 0,
  }),
  od: item => ({
    ...getStateInfo(item["u"]),
    cases: item["c"] || 0,
    deaths: item["o"] || 0,
    suspects: item["s"] || 0,
    refuses: item["d"] || 0,
  })
}

module.exports = dataMaps;
