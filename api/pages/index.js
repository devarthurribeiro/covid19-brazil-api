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

      <main>
        <NavBar />

        <h2>Links</h2>
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

        <h2>
          <a href="./status">Acompanhe</a>
        </h2>
        <Countries />
        <br />

        <div className="flex-center">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="PWCXMS2YKHJ7A" />
            <input type="hidden" name="currency_code" value="BRL" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
        <br />
      </main>


      <Footer />

      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 .75em
      }

      code {
        background: #4ffa7b;
        color: #202124;
        font-weight: 600;
        border-radius: 30px;
        padding: 0.75rem 1em;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

    `}</style>
    </Layout>
  )
}

export default Home;
