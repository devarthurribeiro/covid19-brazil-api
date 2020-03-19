import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';

function CountryCard (props) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fethData () {
      const result = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1/' + props.country);
      setData(result.data.data);
    }
    fethData();
  }, []);

  return (
    <Card
      link=""
      title={"Status " + data.country}
    >
      🚨 <strong>{data.cases}</strong> Ativos <br />
      ✅ <strong>{data.recovered}</strong> Recuperados <br />
      💀 <strong>{data.deaths}</strong> Mortes
    </Card>
  )
}

export default CountryCard;