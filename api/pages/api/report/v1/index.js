import microCors from 'micro-cors';
const cors = microCors();

import fetchData from '../../../../util/fetchData'

async function Report (request, response) {
  response.status(200);
  const dataset = await fetchData(process.env.DATA_URL);
  const jsonDataset = JSON.parse(dataset);

  response.json({
    data: jsonDataset.brazil
  });
}

export default cors(Report)