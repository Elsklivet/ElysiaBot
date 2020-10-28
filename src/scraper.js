const url = "https://leetcode.com/problemset/all/";

const fetch = require('node-fetch');
const cheerio = require('cheerio');

function search(term){
  return fetch(`${url}${term}`).then(r => r.text());
}

search('Client').then(body => {
  const $ = cheerio.load(body);
  console.log(body);
  body.match(/\w+/gmi).forEach(element => {
   console.log(element);
  });
});
