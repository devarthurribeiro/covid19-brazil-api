import microCors from 'micro-cors';

import fetchData from '../../../../util/fetchData';

const cors = microCors();

async function Country(request, response) {
  const { country } = request.query;

  response.status(200);
  const dataset = await fetchData(
    `${process.env.baseUrlCSSE
    }query?f=json&where=Country_Region='${country}'&outFields=*&cacheHint=true`,
  );
  const jsonDataset = JSON.parse(dataset);
  if (jsonDataset.features.length > 0) {
    const data = jsonDataset.features[0].attributes;
    response.json({
      data: {
        country: data.Country_Region,
        cases: data.Active,
        confirmed: data.Confirmed,
        deaths: data.Deaths,
        recovered: data.Recovered,
        updated_at: new Date(data.Last_Update),
      },
    });
  } else {
    response.json({
      data: {},
    });
  }
}

export default cors(Country);
