var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
    title:'imad|soanl gupta',
    date:'14 august 2017',
    heading:'artice one',
    content:` <p1>
       South China Sea is the dominant term used in English for the sea, and the name in most European languages is equivalent. This name is a result of early European interest in the sea as a route from Europe and South Asia to the trading opportunities of China. In the sixteenth century Portuguese sailors called it the China Sea (Mare da China); later needs to differentiate it from nearby bodies of water led to calling it the South China Sea.[8] The International Hydrographic Organization refers to the sea as "South China Sea (Nan Hai)
      </p1>
      
      <p1>
          South China Sea is the dominant term used in English for the sea, and the name in most European languages is equivalent. This name is a result of early European interest in the sea as a route from Europe and South Asia to the trading opportunities of China. In the sixteenth century Portuguese sailors called it the China Sea (Mare da China); later needs to differentiate it from nearby bodies of water led to calling it the South China Sea.[8] The International Hydrographic Organization refers to the sea as "South China Sea (Nan Hai)"
      </p1>
      
      `
      
    
};
function createtemplatedata(data)
{ var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var template=
    `<html>
<head>
  <title> 
     ${title}
   </title>
               <meta name="viewpoint" content="width-device-width ,initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet">
 </head>
   <body>
      <div class="container">
           <a href='/'>home</a>
             <hr/>
    <h1>
        ${heading}
            ${date}
    </h1>
     <hr/>
        <div>
           ${content};
        </div>
      </div>
  </body>
</html>
    `
    return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
    res.send(createtemplatedata(articleone));
});

app.get('/article-two',function(req,res){
    res.sendfile(path.join(__dirname,'ui','article-two.html'));
});
app.get('/article-three',function(req,res){
      res.sendfile(path.join(__dirname,'ui','article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/madi2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi2.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
