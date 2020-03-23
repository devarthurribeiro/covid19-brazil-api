import microCors from 'micro-cors';

import fetchData from '../../../../../../util/fetchData';

const cors = microCors();

async function ReportByState(request, response) {
  const { state } = request.query;

  const dataset = await fetchData(`${process.env.baseUrlMs}report.json`);
  const jsonDataset = JSON.parse(dataset);

  const stateReport = jsonDataset.find((report) => (report.uf === state.toUpperCase())) || { error: 'state not found' };

  response.json({
    ...stateReport,
  });
}

export default cors(ReportByState);
