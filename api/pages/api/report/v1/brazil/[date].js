import microCors from 'micro-cors';
const cors = microCors();

import fetchData from '../../../../../util/fetchData'

function parseJson (data) {
  try {
    JSON.parse(data);
  } catch (error) {
    return []
  }
}

async function ReportByDate (request, response) {
  const date = request.query.date;

  response.status(200);
  const dataset = await fetchData(`${process.env.baseUrlMs + date}.json`);
  const jsonDataset = parseJson(dataset);

  response.json({
    data: jsonDataset
  });
}

export default cors(ReportByDate)