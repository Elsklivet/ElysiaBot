const scrapeapi = require('./scraper');
const scytheapi = require('./scythe');

const fetch = require('node-fetch');
const cheerio = require('cheerio');

let Scraper = scrapeapi;
let Scythe = scytheapi;

//let scree1 = new Scraper('https://en.wikipedia.org/wiki/Anime');

fetch('https://docs.python.org/3/library/index.html').then(res => res.text()).then(function(body){
  let $ = cheerio.load(body);
  //console.log(body);
  let author = $('title').text();
  let title = $('h1').text();
  let desc = $('p').next().next().text().substr(0,400)+"...";
  console.log(`embed = {\n\t"author": "${author}",\n\t"title": "${title}",\n\t"desc": "${desc}",\n}`);

}).catch(function(err){console.error(err);});
//console.log(scree1);
/*scree1.getHTML().then(body =>{
  console.log(scree1.getAllText(body, 'h1'));
  console.log('We just logged all the text from the first header with Scythe.');
}).catch(console.log('The \'getHTML\' promise was rejected in the driver module.'));

let scythe1 = new Scythe({});*/

/*scythe1.build().then(embed => {
  console.log(embed);
  console.log('We just logged the embed itself with Scythe.');
}).catch(console.log('The \'build\' promise was rejected in the driver module.'));*/
