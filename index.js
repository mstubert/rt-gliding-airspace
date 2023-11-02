const http = require("http");
const { htmlTextG, htmlTextE } = require("./htmlPageApp");
const { htmlTextGE, htmlTextEE } = require("./htmlPageAppEast");
const {
  checkBody,
  transformBody,
  presentAirTableData,
  presentAirTablePostData,
  windMode,
} = require("./manageAirspace");

const { htmlTextGP, htmlTextEP } = require("./htmlPagePilot");

var curInp = "";
var htmlData = "";
var htmlTextData = "";
var windM = "w";

const server = http.createServer((req, res) => {
  console.log("Incoming message");
  console.log("windMode: ");
  console.log(windM);
  //console.log(`${__dirname}`);
  /*var body = "";*/

  if (req.method == "GET") {
    var url = req.url;
    htmlData = presentAirTableData();
    if (url === "/admin") {
      //console.log(req.method);
      res.writeHeader(200, { "Content-Type": "text/html" });
      //htmlTextData = htmlTextStart + htmlData + htmlTextEnd;
      if (windM == "w") {
        htmlTextData = htmlTextG + htmlData + htmlTextE;
        console.log("HEREE West");
      }
      if (windM == "e") {
        htmlTextData = htmlTextGE + htmlData + htmlTextEE;
        console.log("HEREE East");
      }
      res.end(htmlTextData);
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      htmlTextData = htmlTextGP + htmlData + htmlTextEP;
      res.end(htmlTextData);
    }
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
        windM = transformBody(curInp);
      }

      htmlData = presentAirTablePostData();

      //htmlTextData = htmlTextStart + htmlData + htmlTextEnd;
      if (windM == "w") {
        htmlTextData = htmlTextG + htmlData + htmlTextE;
      }
      if (windM == "e") {
        htmlTextData = htmlTextGE + htmlData + htmlTextEE;
      }
      res.writeHeader(200, { "Content-Type": "text/html" });
      //console.log(htmlTextData);
      res.end(htmlTextData);

      /*
                              res.writeHeader(200, { "Content-Type": "text/html" });
                              htmlTextData = htmlTextGP + htmlData + htmlTextEP;
                              res.end(htmlTextData);
                              */
    });
  }
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("Listen to requests on port: ");
  console.log(port);
});

/*
server.listen(8000, "127.0.0.1", () => {
  console.log("Listen to requests on port 8000");
});
*/
