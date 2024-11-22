quotes = [
    {
      quote: "The best revenge is massive success.",
      quoteAuthor: "-- Oscar Wilde",
    },
    {
      quote: "A room without books is like a body without a soul.",
      quoteAuthor: "-- Marcus Tullius Cicero",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      quoteAuthor: "-- Mae West",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      quoteAuthor: "-- Mahatma Gandhi",
    },
    {
      quote:
        "In three words I can sum up everything I've learned about life: it goes on.",
      quoteAuthor: "-- Robert Frost",
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      quoteAuthor: "-- Mark Twain",
    },
    {
      quote: "A friend is someone who knows all about you and still loves you.",
      quoteAuthor: "-- Elbert Hubbard",
    },
    {
      quote:
        "To live is the rarest thing in the world. Most people exist, that is all.",
      quoteAuthor: "-- Oscar Wilde",
    },
    {
      quote: "Always forgive your enemies; nothing annoys them so much.",
      quoteAuthor: "-- Oscar Wilde",
    },
    {
      quote: "We accept the love we think we deserve.",
      quoteAuthor: "-- Stephen Chbosky",
    },
    {
      quote: "Without music, life would be a mistake.",
      quoteAuthor: "-- Friedrich Nietzsche",
    },
  ];
  
  var lastRandomNum = -1;
  
  function createQuote() {
    var randomNum;
  
    do {
      randomNum = Math.floor(Math.random() * quotes.length);
    } while (randomNum === lastRandomNum);
  
    lastRandomNum = randomNum;
  
    document.getElementById("quote").innerHTML = `"${quotes[randomNum].quote}"`;
    document.getElementById(
      "quoteAuthor"
    ).innerHTML = `${quotes[randomNum].quoteAuthor}`;
  }