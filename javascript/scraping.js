const axios = require('axios');
const cheerio = require('cheerio');



function scrapeData() {
  console.log("Scraping data from the web...");
  
  axios.get('https://www.root-me.org/Kettei')
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      
      // Use cheerio selectors to extract the desired data from the HTML
      // For example:
      const title = $('title').text();
      console.log('Title:', title);
      
      // Continue extracting the data you need
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

scrapeData();