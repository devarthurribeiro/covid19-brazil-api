import React, { useEffect } from 'react';
import Head from 'next/head'

import analytic from '../util/analytic.js'

import Card from '../components/Card'

function Home () {

  useEffect(() => {
    analytic.pageview('/')
  }, [])

  return (
    <div className="container">
      <Head>
        <title>COVID-19 Brazil API</title>
        <link rel="icon" href="/favicon.png" />

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
          <Card
            link="https://github.com/devarthurribeiro/covid19-brazil-api/blob/master/README.md"
            title="Documentação &rarr;"
            description="Veja a doc da api"
          />
          <Card
            link="https://coronavirus.saude.gov.br/"
            title="Leia &rarr;"
            description="Sobre o virus"
          />
          <Card
            link="http://plataforma.saude.gov.br/novocoronavirus/"
            title="Dados &rarr;"
            description="Ministério da Saúde."
          />
          <Card
            link="https://github.com/devarthurribeiro"
            title="Autor &rarr;"
            description="@devarthurribeiro"
          />
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
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        padding: 1rem 0;
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
        letter-spacing: .2em;
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
