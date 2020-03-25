import { useEffect } from 'react';


import analytic from '../util/analytic';

import NavBar from '../components/NavBar';
import Layout from '../components/Layout';

function Logs() {
  useEffect(() => {
    analytic.pageview('/status');
  }, []);

  return (
    <div>
      <Layout className="container">
        <NavBar />
        <main>
          <iframe title="data-studio" width="100%" height="100%" src="https://datastudio.google.com/embed/reporting/9d5b9c15-dc83-4758-89aa-dd8d48138047/page/FLer" frameBorder="0" allowFullScreen />
        </main>
      </Layout>
      <style jsx>
        {`
          iframe {
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
}

export default Logs;
