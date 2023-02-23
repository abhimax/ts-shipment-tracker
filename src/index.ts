const createDiv = function () {
  const div = document.createElement("div");
  const statement = document.createTextNode("Shipment Tracker");
  div.append(statement);
  document.body.appendChild(div);
};
createDiv();
