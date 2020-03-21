import https from 'https';

function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => resolve(rawData));
      res.on('error', (error) => reject(error));
    });
  });
}

export default fetchData;
