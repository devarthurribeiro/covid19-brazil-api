import Head from 'next/head';

function Layout (props) {
  return (
    <div className="page-layout">
      <Head>
        <title>COVID-19 Brazil API</title>
        <link rel="icon" href="/favicon.png" />

        <meta name="google-site-verification" content="jGYghdq3AQdS8dNTBrHS4r729QN_u5coQPjY9SeiYcs" />
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

      {props.children}
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

      a {
        color: inherit;
        text-decoration: none;
      }

      main {
        max-width: 90%;
        margin: 0 auto;
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
    </div>
  )
}

export default Layout
