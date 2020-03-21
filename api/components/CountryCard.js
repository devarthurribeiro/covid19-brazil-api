import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon
} from "react-share";


import Card from '../components/Card';
import analityc from '../util/analytic'

const mapBrands = {
  Brazil: '🇧🇷',
  Italy: '🇮🇹',
  US: '🇺🇸',
  China: '🇨🇳',
}

function CountryCard (props) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fethData () {
      const result = await axios.get(
        "https://covid19-brazil-api.now.sh/api/report/v1/" + props.country
      );
      setData(result.data.data);
    }
    fethData();
  }, []);

  function formatDate (date) {
    const d = new Date(date);
    const day = `${formatNumber(d.getDate())}/${formatNumber(d.getMonth() + 1)}/${d.getFullYear()}`
    const hour = `${formatNumber(d.getHours())}:${formatNumber(d.getMinutes())}`
    return `${day} - ${hour}`;
  }

  function formatNumber (number) {
    if (number < 10) {
      return `0${number}`
    }
    return number
  }

  function shareData () {
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

  function send () {
    analityc.event({
      category: 'share',
      action: 'share-country-report-' + data.country.toLowerCase()
    })
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData())}`
    );
  }

  return (
    <Card
      link=""
      title={`Status ${data.country} ${mapBrands[data.country]}`}
    >
      <p>
        ✅ <strong>{data.confirmed}</strong> Confirmados <br />
        🚨 <strong>{data.cases}</strong> Ativos <br />
        ♻️ <strong>{data.recovered}</strong> Recuperados <br />
        💀 <strong>{data.deaths}</strong> Mortes
        <hr />
        🕐 <strong>Atualizado</strong> {formatDate(data.updated_at)} <br />
        📊 <strong>Fonte</strong> WHO
      </p>
      <strong>Compartilhar</strong>
      <div className="flex-center">
        <WhatsappIcon onClick={send} size={60}>
          <span>Compartilhar</span>
          <img
            src="https://image.flaticon.com/icons/svg/2111/2111728.svg"
            width="38px"
          />
        </WhatsappIcon>
        <FacebookShareButton url={"https://covid19-brazil-api.now.sh/status"} quote={shareData()}>
          <FacebookIcon size={60}>
            <span>Compartilhar</span>
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111728.svg"
              width="38px"
            />
          </FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={"https://covid19-brazil-api.now.sh/status"} title={shareData().substr(1, 240)}>
          <TwitterIcon size={60}>
            <span>Compartilhar</span>
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111728.svg"
              width="38px"
            />
          </TwitterIcon>
        </TwitterShareButton>
      </div>

      <style jsx>{`
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
      `}</style>
    </Card>
  );
}

export default CountryCard;
