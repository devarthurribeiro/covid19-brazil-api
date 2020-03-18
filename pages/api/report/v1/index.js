import https from 'https';
import microCors from 'micro-cors';
const cors = microCors();

function fetchData (url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => resolve(rawData));
    })
  })
}

async function Report (request, response) {
  response.status(200);

  const dataset = await fetchData(process.env.DATA_URL);
  const jsonDataset = JSON.parse(dataset);

  response.json({
    data: jsonDataset.brazil
  });
}

export default cors(Report)