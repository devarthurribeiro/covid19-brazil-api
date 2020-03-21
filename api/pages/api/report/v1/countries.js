import microCors from 'micro-cors';

import fetchData from '../../../../util/fetchData';

const cors = microCors();

async function Countries(request, response) {
  response.status(200);
  const dataset = await fetchData(`${process.env.baseUrlCSSE}query?f=json&where=Confirmed>0&outFields=*&cacheHint=true`);
  const jsonDataset = JSON.parse(dataset);

  response.json({
    data: jsonDataset.features.map(({ attributes }) => ({
      country: attributes.Country_Region,
      cases: attributes.Active,
      confirmed: attributes.Confirmed,
      deaths: attributes.Deaths,
      recovered: attributes.Recovered,
      updated_at: new Date(attributes.Last_Update),
    })),
  });
}

export default cors(Countries);
