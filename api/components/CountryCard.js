import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from 'react-share';


import Card from './Card';
import analityc from '../util/analytic';

const mapBrands = {
  Brazil: '🇧🇷',
  Italy: '🇮🇹',
  US: '🇺🇸',
  China: '🇨🇳',
};

function CountryCard(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fethData() {
      const result = await axios.get(
        `${window.location.origin}/api/report/v1/${props.country}`,
      );
      setData(result.data.data);
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

  function shareData() {
    return (`
*Casos coronavírus no ${data.country} ${mapBrands[data.country]}*

🕐 *Atualizado* ${formatDate(data.updated_at)}

✅ *${data.confirmed}* Confirmados
🚨 *${data.cases}* Ativos
♻️ *${data.recovered}* Recuperados
💀 *${data.deaths}* Mortes

📊 *Fonte:* WHO, CDC, ECDC, NHC and DXY
covid19-brazil-api.now.sh/status

⚠️ *Evite fake news*

☢️ *Sobre a doença*
coronavirus.saude.gov.br/index.php/sobre-a-doenca
    `);
  }

  function send() {
    analityc.event({
      category: 'share',
      action: `share-country-report-${data.country.toLowerCase()}`,
    });
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData())}`,
    );
  }

  return (
    <Card
      link=""
      title={`Status ${data.country} ${mapBrands[data.country]}`}
    >
      <p>
        <span role="img" aria-label="check">✅</span>
        {' '}
        <strong>{data.confirmed}</strong>
        {' '}
        Confirmados
        {' '}
        <br />
        <span role="img" aria-label="alert">🚨</span>
        {' '}
        <strong>{data.cases}</strong>
        {' '}
        Ativos
        {' '}
        <br />
        <span role="img" aria-label="recovery">♻️</span>
        {' '}
        <strong>{data.recovered}</strong>
        {' '}
        Recuperados
        {' '}
        <br />
        <span role="img" aria-label="death">💀</span>
        {' '}
        <strong>{data.deaths}</strong>
        {' '}
        Mortes
        <hr />
        <span role="img" aria-label="time">🕐</span>
        {' '}
        <strong>Atualizado</strong>
        {' '}
        {formatDate(data.updated_at)}
        {' '}
        <br />
        <span role="img" aria-label="chart">📊</span>
        {' '}
        <strong>Fonte</strong>
        {' '}
        WHO
      </p>
      <strong>Compartilhar</strong>
      <div className="flex-center">
        <span className="pointer">
          <WhatsappIcon
            onClick={send}
            size={48}
          />
        </span>
        <FacebookShareButton url="https://covid19-brazil-api.now.sh/status" quote={shareData()}>
          <FacebookIcon size={48} />
        </FacebookShareButton>
        <TwitterShareButton url="https://covid19-brazil-api.now.sh/status" title={shareData().substr(1, 240)}>
          <TwitterIcon size={48} />
        </TwitterShareButton>
      </div>

      <style jsx>
        {`
      .share-button {
        width: 100%;
        background: #202124;
        color: #4ffa7b;
        font-weight: 600;
        border-radius: 30px;
        font-size: 1.1rem;
        padding: 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        cursor: pointer;
        transition: background 0.5s;
      }
      }
      .share-button img {
        margin-left: 16px
      }
      .pointer {
        cursor: pointer;
      }
      `}
      </style>
    </Card>
  );
}

export default CountryCard;
