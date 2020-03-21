import React, { useEffect } from 'react';

import analytic from '../util/analytic';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Countries from '../components/Countries';

function Home() {
  useEffect(() => {
    analytic.pageview('/');
  }, []);

  return (
    <Layout className="container">
      <NavBar />

      <main>
        <br />
        <h2>Sobre</h2>
        <p className="description">
          Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil e mundo.
        </p>
        <br />
        <div className="grid">
          <Card
            link="https://github.com/devarthurribeiro/covid19-brazil-api/"
            title="Documentação &rarr;"
            description="Veja a doc da api 📝"
          />
          <Card
            link="https://github.com/devarthurribeiro"
            title="Autor &rarr;"
            description="@devarthurribeiro 👨🏻‍💻"
          />
        </div>
        <br />
        <h2>
          <a href="./status">Acompanhe &rarr;</a>
        </h2>
        <Countries />
        <br />
      </main>


      <Footer />

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

    `}
      </style>
    </Layout>
  );
}

export default Home;
