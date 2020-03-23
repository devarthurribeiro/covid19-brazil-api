import { useEffect } from 'react';


import analytic from '../util/analytic';

import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import Reports from '../components/Reports';

function Status() {
  useEffect(() => {
    analytic.pageview('/status');
  }, []);

  return (
    <div>
      <Layout className="container">
        <NavBar />
        <main>
          <h2>Dados</h2>
          <Reports />
        </main>
      </Layout>
    </div>
  );
}

export default Status;
