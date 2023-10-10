const fs = require("fs");
const base = fs.readFileSync(`${__dirname}/drawingCloudFly5.png`);

const initPic = '<img src="data:image/jpeg;base64,';
const convPic = Buffer.from(base).toString("base64");
const endPic = '" height="80" width="80"/>';

//console.log(convPic);

var htmlText1 = `

<!DOCTYPE html>
<html lang="en">

 <head>
    <meta charset = "UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content = "width=device-width, initial-scale=1.0" />
    <title>Real Time Gliding Airspace</title> 
    <style>
        body {
            /*height: 100vh;*/
            height: 1500px;
            padding: 20px;
            background: linear-gradient(to bottom, #d6d3d1, #f9fafc);
        }

        .content {
            max-width: 1000px;
            margin: 0 auto;
        }

        .header {
            background-color: #d6d3d1;
            /*margin-bottom: 15px;*/
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            /*background-color: blue*/
            margin-left: 10px;
            display: flex;
            align-items: center;
        }

        .glob-button {
            background: linear-gradient(to bottom, #f9fafc, #d6d3d1);
            font-family: "Calibri", sans-serif;
            font-size: 20px;
            margin-right: 10px;
            padding: 5px 10px 5px;
            border-radius: 15px;
            border: none;
            cursor: pointer;
        }

        h1 {
            font-size: 25px;
            line-height: 1;
            text-align: center;
            font-family: "Calibri", sans - serif;
            color: #1c1917;

            /*margin-bottom: 140px;*/

        }
        
        .share-form {
            /*background-color: blue;*/
            margin-top: 15px;
            margin-bottom: 20px;
            font-size: 20px;
            margin-left: 5px;
            margin-right: 5px;
            font-family: "Calibri", sans-serif;
            /*height: 70px;*/
            line-height: 30px;
            color: #1c1917;
            padding: 5px 5px;
            text-align: center;
            /*display: flex;
            align-items: normal;
            /*padding: 5px 5px;*/
          }

          .hidden {
            display: none !important;
          }

          .submit-button {
            background-color: #a8a29e;
            /*margin-left: 100px;
            margin-right: 100px;*/
            padding: 20px;
            border: 12px;
            font-size: 30px;
            border-radius: 10px;
          }
          
          .select {
            background: linear-gradient(to bottom, #f9fafc, #d6d3d1);
            color: #1c1917;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            padding: 5px 5px;
            cursor: pointer;
          }

          .weather {
            font-size: 20px;
            font-weight: bold;
          }

          .weatherTable {
            background: linear-gradient(to right, #d6d3d1, #f9fafc);
            color: #1c1917;
            font-size: 20px;
            border-radius: 15px;
            margin: 5px;
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 5px;
            row-gap: 5px;
          }

    </style>

 </head>

 <body>
    <div class= "content">
        <header class="header">
          <div class="logo"> `;

var htmlText2 = initPic + convPic + endPic;

var htmlText3 = `
            <h1>Real Time Gliding Airspace</h1>
          </div> 
          <button class="glob-button"> Share Airspace Status </button> 
        </header> 
        <form class="share-form hidden" method="post" action="./">
        <label class="weather">Current Airspace Status: </label>
        <br /><br />
        <select class="select" name="airspaces" id="loc">
            <option value="00" disabled selected hidden>Airspace...</option>
            <option value="01">All Airspaces</option>
            <option value="02">All EastWind Airspaces</option>
            <option value="03">All WestWind Airspaces</option>
            <option value="04">DACOSH-C</option>
            <option value="05">DACOSH-E</option>
            <option value="06">DACOSH-W</option>
            <option value="07">NG</option>
            <option value="08">NX</option>
            <option value="09">MD</option>
            <option value="10">MJ</option>
            <option value="11">MM</option>
        </select>
        <br /><br />
        <select class="select" name="status" id="stat">
            <option value="00" disabled selected hidden>Status...</option>
            <option value="01">inactive</option>
            <option value="02">active</option>    
        </select>
        <br /><br />
        <div class="submit-button">
            <button class="select" id="sub">Submit</button>
        </div>
        </form>
        <div class="weatherTable">
          <p class="weatherLegend">Airspace</p>
          <p class="weatherLegend">Status</p>
          <p class="weatherLegend">Max Altitude/FL</p>
        </div>`;
var htmlTextE = `  
    </div>
 </body>
  <script>
    const gbtn = document.querySelector(".glob-button");
    const shareform = document.querySelector(".share-form");
    const subbtn = document.getElementById("sub");

    var loc = document.getElementById("loc");
    var locValue = loc.value;
    var textLoc = loc.options[loc.selectedIndex].text;

    gbtn.addEventListener("click", function () {
        if (shareform.classList.contains("hidden")) {
          shareform.classList.remove("hidden");
          gbtn.textContent = "Close";
        } else {
          shareform.classList.add("hidden");
          gbtn.textContent = "Share Your Weather";
        }
    });

    subbtn.addEventListener("click", function () {
        locValue = loc.value;
        textLoc = loc.options[loc.selectedIndex].text;
      
        console.log(textLoc);
        console.log(locValue);
    });



  </script>
 
</html>
`;

var htmlTextG = htmlText1 + htmlText2 + htmlText3;
//var htmlTextE = htmlText5;

module.exports = { htmlTextG, htmlTextE };
