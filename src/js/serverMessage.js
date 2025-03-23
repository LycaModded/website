const apiBase = "https://api.lycanea.dev";
const apiUrl = `${apiBase}/modded/message`;

function fetchServerMessage() {
	fetch(apiUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error("http response was not ok");
			}
			return response.text();
		})
		.then((data) => {
			updateServerMessage(data);
		})
		.catch((error) => {
			console.error("Error fetching server message: ", error);
		});
}

function updateServerMessage(data) {
	document.getElementById("server-custom-status").textContent = data;
}

fetchServerMessage();
setInterval(fetchServerMessage, 10000);
