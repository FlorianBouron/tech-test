
module.exports = (data) => {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  const tblHead = document.createElement("thead");
  const th = document.createElement("tr");
  tbl.classList.add("pure-table");
  
  const fields = Object.keys(data[0]);

  fields.forEach(field => {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(field);
    cell.appendChild(cellText);
    th.appendChild(cell);
  });

  data.forEach(item => {
    const row = document.createElement("tr");
    fields.forEach(field => {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(item[field]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    });
    tblBody.appendChild(row);
  });
  
  tblHead.appendChild(th);
  tbl.appendChild(tblHead);
  tbl.appendChild(tblBody);
  return tbl;
};