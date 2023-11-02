var validInpStatus = false;
var i = 0;
var j = 0;
var windMode = "w";

var airDictData = {
  e1: "All EastWind Airspaces",
  w1: "All WestWind Airspaces",
  w2: "DACOSH-C",
  w3: "DACOSH-E",
  w4: "DACOSH-W",
  e2: "NG",
  e3: "NX",
  e4: "MD",
  e5: "MJ",
  e6: "MM",
};

var statDict = {
  "01": "inactive",
  "02": "active",
};

var airTableDataOM = [
  ["DACOSH-C", "inactive", "A5.5,FL065/075"],
  ["DACOSH-E", "inactive", "A5.5,FL065/075"],
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

function transformBody(dataString, airTableData) {
  //console.log(dataString.length);
  let airPos = "";
  let statPos = "";

  //console.log(dataString.substring(10, 12));
  //console.log(dataString.substring(20, 22));
  airPos = dataString.substring(10, 12);
  statPos = dataString.substring(20, 22);

  console.log("---valid for transform---");
  console.log(airTableData);
  console.log("airPos: ");
  console.log(airPos);

  console.log(airPos.substring(0, 1));
  windMode = airPos.substring(0, 1);

  console.log("windMode: ");
  console.log(windMode);

  console.log("statPos: ");
  console.log(statPos);

  //set corresponding status for single airspace
  for (i = 0; i < airTableData.length; i++) {
    if (airTableData[i][0] == airDictData[airPos]) {
      airTableData[i][1] = statDict[statPos];
    }
  }

  //set corresponding status for all west airspaces
  if (airPos == "w1") {
    for (i = 0; i < 3; i++) {
      airTableData[i][1] = statDict[statPos];
    }
  }

  //set corresponding status for all east airspaces
  if (airPos == "e1") {
    for (i = 3; i < airTableData.length; i++) {
      airTableData[i][1] = statDict[statPos];
    }
  }
  console.log(airTableData);
  return windMode;
}

function presentAirTableData(wM, airTableData) {
  let tempHTML = "";
  let tempStr = "";
  tempHTML = `<div class="weatherTable">`;

  windMode = wM;

  if (windMode == "w") {
    for (j = 0; j < 3; j++) {
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
            `<p class="weatherLegend" style="color: red">` +
            tempStr +
            `</p>`;
        }
      }
    }
  }

  if (windMode == "e") {
    for (j = 3; j < airTableData.length; j++) {
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
            `<p class="weatherLegend" style="color: red">` +
            tempStr +
            `</p>`;
        }
      }
    }
  }

  tempHTML = tempHTML + `</div>`;

  const cuDate = new Date();
  tempHTML = tempHTML + `<b>` + "\tLast update: " + cuDate.toString() + `</b>`;

  tempHTML =
    tempHTML +
    `<b>` +
    "  Please note: This airspace data is purely informative and does not replace the communication with the responsible air traffic control." +
    `</b>`;

  return tempHTML;
}

function presentAirTablePostData(wM, airTableData) {
  let tempHTML = "";
  let tempStr = "";
  tempHTML = `<div class="weatherTable">`;

  windMode = wM;

  if (windMode == "w") {
    for (j = 0; j < 3; j++) {
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
            `<p class="weatherLegend" style="color: red">` +
            tempStr +
            `</p>`;
        }
      }
    }
  }

  if (windMode == "e") {
    for (j = 3; j < airTableData.length; j++) {
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
            `<p class="weatherLegend" style="color: red">` +
            tempStr +
            `</p>`;
        }
      }
    }
  }

  tempHTML = tempHTML + `</div>`;

  const cuDate = new Date();
  tempHTML =
    tempHTML +
    `<b>` +
    "\tLast airspace update from this client: " +
    cuDate.toString() +
    `</b>`;

  return tempHTML;
}

module.exports = {
  checkBody,
  transformBody,
  presentAirTableData,
  presentAirTablePostData,
};
