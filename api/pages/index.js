import React, { useEffect } from 'react';
import Head from 'next/head';

import analytic from '../util/analytic.js';
import Card from '../components/Card';
import CountryCard from '../components/CountryCard';

function Home(props) {
  useEffect(() => {
    analytic.pageview('/');
  }, []);

  return (
    <div className="container">
      <Head>
        <title>COVID-19 Brazil API</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="api, covid19, covid-19, brasil, gratis, json, coronavirus"
        />
        <meta
          name="author"
          content="Arthur Ribeiro, devarthurribeiro@gmail.com"
        />
        <meta
          name="description"
          content="API para notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil."
        />
      </Head>

      <main>
        <div className="flex-center">
          <h1 className="title">COVID-19 Brazil API</h1>
          <img src="/logo.svg" width="100px" className="logo" />
        </div>
        <p className="description">
          Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no
          Brasil.
        </p>

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
        <br />
        <h2>Acompanhe</h2>
        <div className="grid">
          <CountryCard country="brazil" />
          <CountryCard country="china" />
          <CountryCard country="italy" />
          <CountryCard country="us" />
          <br />
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/devarthurribeiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito com 💚
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.75em;
        }

        .logo {
          margin: 16px;
          animation: rotation 20s infinite linear;
        }

        @keyframes rotation {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(359deg);
          }
        }

        main {
          max-width: 90%;
          margin: 0 auto;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          letter-spacing: 0.2em;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          font-size: 1.5rem;
          color: #818181;
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

        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .flex {
            width: 100%;
            flex-direction: column;
          }
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #000;
          color: #e5e5e5;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default Home;
