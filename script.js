import localQuotes from './quotes.js';

// Show New Quote
function newQuote() {
  // Pick a random quote fron apiQuotes array
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
  console.log(quote);
}
// On Load
// getQuotes();
newQuote();
