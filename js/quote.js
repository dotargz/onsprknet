getQuote();

async function getQuote() {
	let e = await getInspiration();
	document.getElementById("quote").innerHTML = '"' + e[0] + '"';
	document.getElementById("name").innerHTML = "- " + e[1];
}

async function getInspiration() {
	const response = await fetch(`https://one.npkn.net/quote-api/?api-key=8EosFBriByXLdt`);
	const data = await response.json();
	return [data.quote, data.author];
}
