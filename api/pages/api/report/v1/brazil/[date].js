import microCors from 'micro-cors';

import fetchData from '../../../../../util/fetchData';

const cors = microCors();

function parseJson(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function ReportByDate(request, response) {
  const { date } = request.query;

  response.status(200);
  const dataset = await fetchData(`${process.env.baseUrlMs + date}.json`);
  const jsonDataset = parseJson(dataset);

  response.json({
    data: jsonDataset,
  });
}

export default cors(ReportByDate);
