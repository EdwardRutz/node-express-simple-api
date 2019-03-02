const fs = require('fs');

function generateRandomId(){
  return Math.floor(Math.random() * 10000);
}

function save(data){
  return new Promise((resolve,  reject) => {
    fs.writeFile('data.json', JSON.stringify(data,  null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Gets all quotes
 * @param None
 */
function getQuotes(){
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

/**
 * Gets a specific quote by ID
 * @param None
 */
async function getQuote(id){
  const quotes = await getQuotes();
  return quotes.records.find(record => record.id == id);
}

/**
 * Gets a random quote
 * @param None
 */
async function getRandomQuote() {
  const quotes = await getQuotes();
  const randNum = Math.floor(Math.random() * quotes.records.length);
  return quotes.records[randNum];
}

/**
 * Creates a new quote record
 * @param {Object} newRecord - Object containing info for new quote: the quote text, author and year
 */

/**
 * Updates a single record
 * @param {Object} newQuote - An object containing the changes to quote: quote, author, year (all optional)
 */

/**
 * Deletes a single record
 * @param {Object} record - Accepts record to be deleted.
 */

module.exports = {
  getQuotes,
  getQuote,
  getRandomQuote
}

