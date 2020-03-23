import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  WhatsappIcon,
} from 'react-share';


import Card from './Card';
import analityc from '../util/analytic';


function CountryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fethData() {
      const result = await axios.get(
        `${window.location.origin}/api/report/v1`,
      );
      setData(result.data.data.sort((a, b) => (a.cases < b.cases ? 1 : -1)));
    }
    fethData();
  }, []);

  function formatNumber(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  function formatDate(date) {
    const d = new Date(date);
    const day = `${formatNumber(d.getDate())}/${formatNumber(d.getMonth() + 1)}/${d.getFullYear()}`;
    const hour = `${formatNumber(d.getHours())}:${formatNumber(d.getMinutes())}`;
    return `${day} - ${hour}`;
  }

  const stateCasesToStings = (report) => (`*${report.uf}* Casos ${report.cases} Mortes ${report.deaths} \n`);

  function shareData() {
    let textReport = '';
    data.forEach((report) => {
      textReport += stateCasesToStings(report);
    });
    return (`
*Casos coronavírus no 🇧🇷*

🕐 *Atualizado* ${formatDate(data[0].datetime)}

${textReport}

📊 *Fonte:*
covid19-brazil-api.now.sh/status

⚠️ *Evite fake news*

*Dados*
saude.gov.br
    `);
  }

  function send() {
    analityc.event({
      category: 'share',
      action: 'share-brazil-states-report',
    });
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData())}`,
    );
  }

  return (
    <Card
      link=""
      title="Status Brasil por UF"
    >
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <span role="img" aria-label="alert">📍</span>
                {' '}
                <strong>Estado</strong>
              </td>
              <td>
                <span role="img" aria-label="alert">🚨</span>
                {' '}
                <strong>Confirmados</strong>
              </td>
              <td>
                <span role="img" aria-label="death">💀</span>
                {' '}
                <strong>Mortes</strong>
              </td>
            </tr>
          </thead>
        </table>
        <div className="table-scroll">
          <table className="tbl-header">
            {data.map((report) => (
              <tr>
                <td>
                  {report.uf}
                </td>
                <td className="text-rigth">
                  {report.cases}
                </td>
                <td className="text-rigth">
                  {report.deaths}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <p>
        <strong>Compartilhar</strong>
      </p>
      <div className="flex-center">
        <span className="pointer">
          <WhatsappIcon
            onClick={send}
            size={48}
          />
        </span>
      </div>

      <style jsx>
        {`
          table {
            width:100%;
            table-layout: fixed;
          }
          .text-rigth {
            text-align: left;
          }
          td{
            padding: 6px;
            text-align: left;
            vertical-align:middle;
            font-weight: 300;
            font-size: 12px;
            color: #fff;
            border-bottom: solid 1px rgba(255,255,255,0.1);
          }
          .table-scroll {
            max-height: 600px;
            overflow: auto;
          }
      `}
      </style>
    </Card>
  );
}

export default CountryCard;
