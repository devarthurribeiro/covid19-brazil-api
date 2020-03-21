import microCors from 'micro-cors';
import { json2csv } from 'json-2-csv';

import fetchData from '../../../../util/fetchData';

const cors = microCors();

async function Csv(request, response) {
  response.status(200);
  const dataset = await fetchData(`${process.env.baseUrlMs}report.json`);
  const jsonDataset = JSON.parse(dataset);

  json2csv(jsonDataset, (err, csv) => {
    response.send(csv);
  }, { excelBOM: true });
}

export default cors(Csv);
