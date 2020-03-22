import Head from 'next/head';
import SideNav from './SideNav';
import Footer from './Footer';

function Layout({ children }) {
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
      <div className="wrapper">
        <div className="content">
          <div className="columns">
            <SideNav />
            <div className="main">
              {children}

              <Footer />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>
        {`

        @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

        .material-icons {
          font-family: "Material Icons";
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          /* Preferred icon size */
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;

          /* Support for all WebKit browsers. */
          -webkit-font-smoothing: antialiased;
          /* Support for Safari and Chrome. */
          text-rendering: optimizeLegibility;

          /* Support for Firefox. */
          -moz-osx-font-smoothing: grayscale;

          /* Support for IE. */
          font-feature-settings: "liga";
        }
      html,
      body {
        background-color: #202124;
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

      .wrapper {
        min-height: 100vh;
        display: flex;
        flex-flow: column nowrap;
      }


      .columns, .content {
        display: flex;
        flex: 1;
      }

      .main {
        display: flex;
        flex-flow: column;
        flex: 1;
        order: 2;
        position: relative;
        padding: 0 16px;
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

      @media (max-width: 768px) {
        .columns, .content {
          flex-flow: column;
        }
      }

    `}
      </style>
    </div>
  );
}

export default Layout;
