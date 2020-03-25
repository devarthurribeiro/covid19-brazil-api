import React, { useEffect } from 'react';
import Link from 'next/link';

import analytic from '../util/analytic';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Reports from '../components/Reports';
import Team from '../components/Team';

function Home() {
  useEffect(() => {
    analytic.pageview('/');
  }, []);

  return (
    <Layout className="container">

      <NavBar />
      <p className="description">
        Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil e mundo.
      </p>
      <div className="flex-center">
        <a href="https://covid19-brazil-api-docs.now.sh/" className="doc-button">
          Documentação
        </a>
      </div>
      <h2>
        <Link href="./status">
          <a>Acompanhe &rarr;</a>
        </Link>
      </h2>
      <Reports />
      <h2>
        <a href="https://github.com/devarthurribeiro/covid19-brazil-api/#contribuidores">
          Equipe &rarr;
        </a>
      </h2>
      <Team />
      <br />
      <style jsx>
        {`
      .container {
        min-height: 100vh;
        padding: 0 .75em
      }

      .description {
        font-size: 1.5rem;
        color: #818181;
      }

      .doc-button {
        background-color: rgba(79, 250, 123, .8) !important;
        cursor: pointer;
        padding: 16px;
        border-radius: 4px;
        color: #19191d;
        font-weight: 600;
        box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(79, 250, 123, 0.2);
        transition: all .2s;
      }

      .doc-button:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(79, 250, 123, 0.4);
      }

      @media (max-width: 600px) {
        .map {
          display: none;
        }
      }
    `}
      </style>
    </Layout>
  );
}

export default Home;
