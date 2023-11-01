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
    <title>ACD Gliding Airspace</title> 
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
            font-size: 17px;
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
            <h1>ACD Gliding Airspace</h1>
          </div>
        </header>`;

var htmlTextEP = `  
    </div>
 </body>
    <script>
        setTimeout(() => {document.location.reload();},120000);

    </script>
 
</html>
`;

var htmlTextGP = htmlText1 + htmlText2 + htmlText3;
//var htmlTextE = htmlText5;

module.exports = { htmlTextGP, htmlTextEP };
