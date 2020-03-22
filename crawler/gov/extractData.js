/* eslint-disable */

function extractData() {
  const element = document.querySelector('.su-table table');

  function tableToJson(table) {
    const data = [];
    for (let i = 1; i < table.rows.length; i++) {
      const tableRow = table.rows[i];
      const rowData = [];
      for (let j = 0; j < tableRow.cells.length; j++) {
        rowData.push(tableRow.cells[j].textContent.trim());
      }
      data.push(rowData);
    }
    return data;
  }

  const dataset = tableToJson(element);

  function mapData(list) {
    return list.filter((row) => (row.length > 4)).map((row) => ({
      uf: row[1],
      cases: row[2],
      deaths: row[3],
    }));
  }

  return mapData(dataset);
}
