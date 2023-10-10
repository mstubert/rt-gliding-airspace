var validInpStatus = false;
var i = 0;
var j = 0;

var airDictData = {
  "01": "All Airspaces",
  "02": "All EastWind Airspaces",
  "03": "All WestWind Airspaces",
  "04": "DACOSH-C",
  "05": "DACOSH-E",
  "06": "DACOSH-W",
  "07": "NG",
  "08": "NX",
  "09": "MD",
  10: "MJ",
  11: "MM",
};

var statDict = {
  "01": "inactive",
  "02": "active",
};

var airTableData = [
  ["DACOSH-C", "inactive", "A5.5,FL065,FL075"],
  ["DACOSH-E", "inactive", "A5.5,FL065,FL075"],
  ["DACOSH-W", "inactive", "FL065"],
  ["NG", "inactive", "A4.5"],
  ["NX", "inactive", "A5.5"],
  ["MD", "inactive", "A5.5"],
  ["MJ", "inactive", "A5.5"],
  ["MM", "inactive", "A4.5,FL065"],
];

function checkBody(dataString) {
  validInpStatus = false;
  console.log("airspace and status: ");
  console.log(dataString.includes("airspaces"));
  console.log(dataString.includes("status"));

  if (
    (dataString.includes("airspaces") && dataString.includes("status")) ==
      true &&
    dataString.length == 22
  ) {
    validInpStatus = true;
  }
  return validInpStatus;
}

function transformBody(dataString) {
  //console.log(dataString.length);
  let airPos = "";
  let statPos = "";
  //console.log(dataString.substring(10, 12));
  //console.log(dataString.substring(20, 22));
  airPos = dataString.substring(10, 12);
  statPos = dataString.substring(20, 22);

  console.log("airPos: ");
  console.log(airPos);

  console.log("statPos: ");
  console.log(statPos);

  //console.log(airDictData[airPos]);
  for (i = 0; i < airTableData.length; i++) {
    if (airTableData[i][0] == airDictData[airPos]) {
      airTableData[i][1] = statDict[statPos];
    }
  }

  if (airPos == "01") {
    for (i = 0; i < airTableData.length; i++) {
      airTableData[i][1] = statDict[statPos];
    }
  }

  if (airPos == "02") {
    for (i = 0; i < airTableData.length; i++) {
      if (
        airTableData[i][0].includes("N") ||
        airTableData[i][0].includes("M")
      ) {
        airTableData[i][1] = statDict[statPos];
      }
    }
  }

  if (airPos == "03") {
    for (i = 0; i < airTableData.length; i++) {
      if (airTableData[i][0].includes("DACOSH")) {
        airTableData[i][1] = statDict[statPos];
      }
    }
  }

  console.log(airTableData);
}

function presentAirTableData() {
  let tempHTML = "";
  let tempStr = "";
  tempHTML = `<div class="weatherTable">`;
  for (j = 0; j < airTableData.length; j++) {
    if (airTableData[j][1] == "active") {
      for (i = 0; i < 3; i++) {
        tempStr = airTableData[j][i];
        tempHTML =
          tempHTML +
          `<p class="weatherLegend" style="color: green">` +
          tempStr +
          `</p>`;
      }
    }

    if (airTableData[j][1] == "inactive") {
      for (i = 0; i < 3; i++) {
        tempStr = airTableData[j][i];
        tempHTML =
          tempHTML +
          `<p class="weatherLegend" style="color: orange">` +
          tempStr +
          `</p>`;
      }
    }
  }
  tempHTML = tempHTML + `</div>`;

  const cuDate = new Date();
  tempHTML =
    tempHTML + `<b>` + "\tLast update at: " + cuDate.toString() + `</b>`;

  tempHTML =
    tempHTML +
    `<b style="color:red;">` +
    "Please note: This airspace data is purely informative and does not replace the communication with the responsible air traffic control." +
    `</b>`;
  return tempHTML;
}

module.exports = { checkBody, transformBody, presentAirTableData };
