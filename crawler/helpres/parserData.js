const states = require('./states');

function parseData (data) {
  const datetime = new Date()
  return data.map(item => {
    return {
      uid: item["uid"] || "",
      uf: states.names[item["uid"]] || "",
      state: states.codes[item["uid"]] || "",
      cases: item["cases"] || 0,
      deaths: item["deaths"] || 0,
      suspects: item["suspects"] || 0,
      refuses: item["refuses"] || 0,
      broadcast: item["broadcast"] || false,
      comments: item["comments"] || "",
      datetime
    };
  });
}

module.exports = parseData;
