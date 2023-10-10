const http = require("http");
const { htmlTextG, htmlTextE } = require("./htmlPageApp");
const {
  checkBody,
  transformBody,
  presentAirTableData,
} = require("./manageAirspace");
/*
    const { checkBody, transformBody, setBodyData } = require("./manageBody");
    const {
        addNewLocItem,
        updateTimeLocData,
        updateAverageLocData,
        presentWeatherData,
    } = require("./manageWeather");
    */

var curInp = "";
var htmlData = "";
var htmlTextData = "";

const server = http.createServer((req, res) => {
  console.log("Incoming message");
  //console.log(`${__dirname}`);
  /*var body = "";*/

  if (req.method == "GET") {
    //console.log(req.method);
    res.writeHeader(200, { "Content-Type": "text/html" });
    //htmlTextData = htmlTextStart + htmlData + htmlTextEnd;
    output = htmlTextG + htmlTextE;
    res.end(output);
  }

  if (req.method == "POST") {
    console.log(req.method);
    req.on("data", function (data) {
      body = data;
      console.log(body);
    });
    req.on("end", function () {
      console.log("Body: " + body);
      curInp = "" + body + "";
      console.log(curInp);

      console.log(checkBody(curInp));
      //checkInput

      if (checkBody(curInp) == true) {
        transformBody(curInp);
      }

      htmlData = presentAirTableData();
      //htmlTextData = htmlTextStart + htmlData + htmlTextEnd;
      htmlTextData = htmlTextG + htmlData + htmlTextE;
      res.writeHeader(200, { "Content-Type": "text/html" });
      //console.log(htmlTextData);
      res.end(htmlTextData);
    });
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listen to requests on port 8000");
});
