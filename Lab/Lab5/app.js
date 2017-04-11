var express = require('express');
var app = express();
var fs = require('fs');

app.listen(8000, function(){
    console.log('Listen port 8000');
});

app.get('/inventors', function(req, res){
    // const inventors = require('./inventors.json');
    // const inventors = fs.readFileSync('inventors', 'UTF8');
    const inventors = fs.readFileSync(__dirname+'/inventors.json', 'UTF8');
    var data = JSON.parse(inventors);
    var tableRows = '';
    for(const e of data){
        // console.log(e.first, e.last, e.year);
        tableRows+=`<tr><td>${e.first}</td><td>${e.last}</td><td>${e.year}</td></tr>`;
    }

    var html = `
    <html><head><style>td{border: 1px solid;} </style></head>
    <body>
    <table>
    <tr>
        <td>
            first
        </td>
        <td>
            last
        </td>
        <td>
            year
        </td>
    </tr>
    ${tableRows}
    </table>
    </body>
    </html>
    `
    res.send(html);
});

