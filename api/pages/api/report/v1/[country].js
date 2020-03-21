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
    response.json({
      data: {
        country: country.Country_Region,
        cases: country.Active,
        confirmed: country.Confirmed,
        deaths: country.Deaths,
        recovered: country.Recovered,
        updated_at: new Date(country.Last_Update),
      },
    });
  } else {
    response.json({
      data: {},
    });
  }
}

export default cors(Country);
