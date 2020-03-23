/* eslint-disable */
const fs = require('fs');

function start() {
  const files = fs.readdirSync('../data/ms');
  console.log(files);
  
  [
    '20200130.json', '20200131.json', '20200201.json',
    '20200202.json', '20200203.json', '20200204.json',
    '20200205.json', '20200206.json', '20200207.json',
    '20200208.json', '20200209.json', '20200210.json',
    '20200211.json', '20200212.json', '20200213.json',
    '20200214.json', '20200215.json', '20200216.json',
    '20200217.json', '20200218.json', '20200219.json',
    '20200220.json', '20200221.json', '20200222.json',
    '20200223.json', '20200224.json', '20200225.json',
    '20200226.json', '20200227.json', '20200228.json',
    '20200229.json', '20200301.json', '20200302.json',
    '20200303.json', '20200304.json', '20200305.json',
    '20200306.json', '20200307.json', '20200308.json',
    '20200310.json', '20200311.json', '20200312.json',
    '20200313.json', '20200314.json', '20200315.json',
    '20200316.json', '20200317.json', '20200318.json'].forEach((path) => {
    const file = `../data/ms/${path}`;
    const report = require(file).map( (item) => {
      return {
        ...item,
        uf: item.state,
        state: item.uf,
      }
    })
    fs.writeFileSync(file, JSON.stringify(report, 2,2 ))
  });
}
start();
