import { useEffect } from 'react';


import analytic from '../util/analytic';

import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Countries from '../components/Countries';

function Status() {
  useEffect(() => {
    analytic.pageview('/status');
  }, []);

  return (
    <div>
      <Layout className="container">
        <NavBar />

        <main>
          <h2>Países</h2>
          <Countries />
        </main>

        <Footer />
      </Layout>
    </div>
  );
}

export default Status;
