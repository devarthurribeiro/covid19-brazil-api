import microCors from 'micro-cors';
const cors = microCors();

import fetchData from '../../../../util/fetchData'

async function Report (request, response) {
  const country = request.query.country;

  response.status(200);
  const dataset = await fetchData(process.env.baseUrlCSSE + `query?f=json&where=Country_Region='${country}'&outFields=*&cacheHint=true`);
  const jsonDataset = JSON.parse(dataset);

  if (jsonDataset.features.length > 0) {
    const country = jsonDataset.features[0].attributes
    response.json({
      data: {
        country: country.Country_Region,
        cases: country.Active,
        confirmed: country.Confirmed,
        deaths: country.Deaths,
        recovered: country.Recovered,
        updated_at: new Date(country.Last_Update)
      }
    });
  } else {
    response.json({
      data: {}
    })
  }

}

export default cors(Report)