import React, { useEffect } from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from 'react-share';

import analytic from '../util/analytic';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Reports from '../components/Reports';

function Home() {
  useEffect(() => {
    analytic.pageview('/');
  }, []);

  return (
    <Layout className="container">

      <NavBar />
      <h2>Sobre</h2>
      <p className="description">
        Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil e mundo.
      </p>
      <br />
      <div className="grid">
        <Card
          link="https://covid19-brazil-api-docs.now.sh/"
          title="Documentação &rarr;"
          description="Veja a doc da api 📝"
        />
        <Card
          link="https://github.com/devarthurribeiro/covid19-brazil-api/"
          title="Github &rarr;"
          description="@devarthurribeiro 👨🏻‍💻"
        />
      </div>
      <br />
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
      <div className="flex-center team">
        <Card>
          <div className="person">
            <a href="https://github.com/devarthurribeiro">
              <img src="https://avatars1.githubusercontent.com/u/12974798?s=460&u=6a69934913c6f56d74fdf9c80793881d4cfb7bf6&v=4" alt="Arthur Ribeiro" />
            </a>
            <h3>Arthur Ribeiro</h3>
            <span>Autor</span>
            <p>
              I love creating things.
            </p>
            <div className="flex-center">
              <a href="http://wa.me/5584991230249">
                <WhatsappIcon
                  size={40}
                  round
                />
              </a>
              <a href="https://www.facebook.com/devarthuribeiro">
                <FacebookIcon size={40} round />
              </a>
              <a href="https://twitter.com/devArthurR">
                <TwitterIcon size={40} round />
              </a>
            </div>
          </div>
        </Card>
      </div>
      <br />

      <style jsx>
        {`
      .container {
        min-height: 100vh;
        padding: 0 .75em
      }

      .team h3, p {
        margin: 8px
      }

      .team span {
        margin-bottom: 6px;
        color: #818181;
      }

      .team img {
        width: 160px;
        heigth: auto;
        border-radius: 50%;
      }

      .team .person {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .description {
        font-size: 1.5rem;
        color: #818181;
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
