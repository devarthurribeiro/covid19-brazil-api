import microCors from 'micro-cors';
import axios from 'axios';

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
