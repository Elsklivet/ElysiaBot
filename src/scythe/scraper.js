/**
* scraper.js
* @author Elsklivet
* @desc Helper module in the Scythe API to scrape websites
*/

const fetch = require('node-fetch');
const cheerio = require('cheerio');

// Public
function Scraper(u, options){
  // Base URL
  this.url = u;
  this.options = options;
}

Scraper.prototype.getHTML = function(){
  // Returns a 'node-fetch' Promise
  return fetch(`${this.url}`).then(res => res.text()).catch(console.log('The \'fetch\' promise was rejected in the Scraper module.')); // Returning the HTML body of the website
}

Scraper.prototype.getAllText = function(html, selector){
  let txt = '';
  const $ = cheerio.load(html);
  $(selector).each(function(i,el){
    const $el = $(el);
    txt += $el.text();
  })
  return txt;
}

Scraper.prototype.getNumText = function(html, selector, index){
  let txt = '';
  const $ = cheerio.load(html);
  txt = $(selector).eq((index ? index : 0)).text()
  return txt;
}

module.exports = Scraper;
