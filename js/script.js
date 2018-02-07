// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
	{quote: "Don't cry because it's over, smile because it happened.",
	source: "Dr. Seuss",
	citation: "",
	year: ""},

	{quote: "Be yourself; everyone else is already taken.",
	source: "Oscar Wilde",
	citation: "",
	year: ""},

	{quote: "So many books, so little time.",
	source: "Frank Zappa",
	citation: "",
	year: ""},

	{quote: "A room without books is like a body without a soul.",
	source: "Marcus Tullius Cicero",
	citation: "",
	year: ""},

	{quote: "In three words I can sum up everything I've learned about life: it goes on.",
	source: "Robert Frost",
	citation: "",
	year: ""}
];

function getRandomQuote() {
	var number = Math.floor((Math.random() * 5) + 0);
	return quotes[number];
}

function printQuote() {
	var quoter = getRandomQuote();
 	console.log(quoter);
	var quoteline = '<p class="quote">' + quoter.quote +'</p>';
	var sourceline = '<p class="source">' + quoter.source;
	var citationline = '';
	var yearline = '';
	var closingline = "</p>";

	if (quoter.citation != ""){
		citationline = '<span class="citation"> ' + quoter.citation + ' </span>';
	}
	if (quoter.year != ""){
		yearline = '<span class="year"> ' + quoter.year + ' </span>';
	}

	var text;
	text = quoteline + sourceline + citationline + yearline + closingline;
	document.getElementById('quote-box').innerHTML = text;
}

printQuote();