import React, { useEffect } from 'react';
import Head from 'next/head'

import analytic from './utils/analytic.js'

function Home () {

  useEffect(() => {
    analytic.pageview('/')
  }, [])

  return (
    <div className="container">
      <Head>
        <title>COVID-19 Brazil API</title>
        <link rel="icon" href="/logo.svg" />

        <meta name="keywords" content="api, covid19, covid-19, brasil, gratis, json, coronavirus" />
        <meta name="author" content="Arthur Ribeiro, devarthurribeiro@gmail.com" />
        <meta name="description" content="API para notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil." />
      </Head>

      <main>
        <div className="grid">
          <h1 className="title">
            COVID-19 Brazil API
        </h1>
          <img src="/logo.svg" width="100px" className="logo" />
        </div>
        <p className="description">
          Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil.
      </p>

        <div className="grid">
          <a href="https://github.com/devarthurribeiro/covid19-brazil-api/blob/master/README.md" className="card">
            <h3>Documentação &rarr;</h3>
            <p>Veja a doc da api</p>
          </a>

          <a href="https://coronavirus.saude.gov.br/" className="card">
            <h3>Leia &rarr;</h3>
            <p>Sobre o virus</p>
          </a>

          <a
            href="http://plataforma.saude.gov.br/novocoronavirus/"
            className="card"
          >
            <h3>Dados &rarr;</h3>
            <p>Ministério da Saúde.</p>
          </a>

          <a
            href="https://github.com/devarthurribeiro"
            className="card"
          >
            <h3>Autor &rarr;</h3>
            <p>
              @devarthurribeiro.
          </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/devarthurribeiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito com 💙 @devarthurribeiro.
      </a>
      </footer>

      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .logo {
        margin-left: 16px;
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
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
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
        line-height: 1.5;
        font-size: 1.5rem;
        color: #818181;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        background-color: #0a0a0a;
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #818181;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #4ffa7b;
        border-color: #4ffa7b;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
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
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>

    </div>
  )
}

export default Home
