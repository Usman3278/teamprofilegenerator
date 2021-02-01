const style = require("./style");

exports.htmlBegining = (teamName) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamName}</title>
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${teamName}</h1>
    </div>
    <div class="card-container">
    `;
};

exports.htmlEnding = () => {
  return `
    </div>
    </body>
    </html>
    `;
};
