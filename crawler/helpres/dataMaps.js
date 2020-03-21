const states = require('./states');

function getStateInfo (uf) {
  Object.keys(states.codes).filter(key => {
    if (states.codes[key] === uf.toLowerCse()) {
      return {
        uf: states.codes[key],
        uid: key,
        name: states.names[key]
      }
    }
  });
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
