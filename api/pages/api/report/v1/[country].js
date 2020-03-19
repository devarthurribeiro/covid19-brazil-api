import microCors from 'micro-cors';
const cors = microCors();

import fetchData from '../../../../util/fetchData'

async function Report (request, response) {
  const country = request.query.country;

  response.status(200);
  const dataset = await fetchData(process.env.baseUrlCSSE + `query?f=json&where=Country_Region='${country}'&outFields=*&cacheHint=true`);
  const jsonDataset = JSON.parse(dataset);

  if (jsonDataset.features.length > 0) {
    const brazilData = jsonDataset.features[0].attributes
    response.json({
      data: {
        country: brazilData.Country_Region,
        cases: brazilData.Active,
        deaths: brazilData.Deaths,
        recovered: brazilData.Recovered,
        updated_at: new Date(brazilData.Last_Update)
      }
    });
  } else {
    response.json({
      data: {}
    })
  }

}

export default cors(Report)