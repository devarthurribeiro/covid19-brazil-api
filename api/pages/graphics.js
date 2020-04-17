import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import colors from '../util/colors';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

function Graphics() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries', { method: 'GET' })
      .then((response) => response.json()).then((formated) => {
        setCountries(formated.data);
      });
  }, []);

  useEffect(() => {
    const ctx = document.querySelector('#graphic').getContext('2d');
    const graphic = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: countries.map((item) => (item.country)),
        datasets: [{
          backgroundColor: colors.map((color) => (color)),
          borderColor: colors.map((color) => (color)),
          data: countries.map((item) => (item.confirmed)),
        },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: 'right',
          labels: {
            fontSize: 6,
            padding: 24,

          },
        },
      },
    });
    graphic.render();
  }, [countries]);

  return (
    <>
      <Layout className="container">
        <NavBar />
        <canvas id="graphic" style={{ overflowX: 'hidden' }} />
      </Layout>
      <style jsx>
        {`
                    #graphic {
                        width: 100% !important;
                    }
                `}
      </style>
    </>
  );
}

export default Graphics;
