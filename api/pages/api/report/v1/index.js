import microCors from 'micro-cors';

import fetchData from '../../../../util/fetchData';

const cors = microCors();

async function Report(request, response) {
  response.status(200);
  const dataset = await fetchData(`${process.env.baseUrlMs}report.json`);
  const jsonDataset = JSON.parse(dataset);

  response.json({
    data: jsonDataset,
  });
}

export default cors(Report);
