import React, { useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

import analytic from '../util/analytic.js'

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Countries from '../components/Countries';


function Home (props) {

  useEffect(() => {
    analytic.pageview('/')
  }, [])

  return (
    <Layout className="container">
      <Head>
        <title>COVID-19 Brazil API</title>
        <link rel="icon" href="/favicon.png" />

        <meta name="google-site-verification" content="jGYghdq3AQdS8dNTBrHS4r729QN_u5coQPjY9SeiYcs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="api, covid19, covid-19, brasil, gratis, json, coronavirus" />
        <meta name="author" content="Arthur Ribeiro, devarthurribeiro@gmail.com" />
        <meta name="description" content="API para notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil." />
      </Head>

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

      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 .75em
      }

      .description {
        font-size: 1.5rem;
        color: #818181;
      } 

    `}</style>
    </Layout>
  )
}

export default Home;
