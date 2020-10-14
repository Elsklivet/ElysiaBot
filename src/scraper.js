const url = `https://discord.js.org/#/docs/main/stable/class/`;

const fetch = require('node-fetch');
const cheerio = require('cheerio');

function search(term){
  return fetch(`${url}${term}`).then(r => r.text());
}

search('Client').then(body => {
  const $ = cheerio.load(body);
  console.log(body);
  $('#docs-viewer').each(function(i,el){
    const $el = $(el);
    console.log($el.text());
  })
});
