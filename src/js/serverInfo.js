const mcServerIp = "modded.lycanea.dev";
const apiUrl = `https://api.mcsrvstat.us/3/${mcServerIp}`;

function fetchServerInfo() {
	fetch(apiUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error("http response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			updateServerInfo(data);
		})
		.catch((error) => {
			console.error("Error fetching server info: ", error);
		});
}

function updateServerInfo(data) {
	document.getElementById("server-is-online").textContent = data.online;

	if (data.online) {
		document.getElementById("server-players-online").textContent =
			`${data.players.online}/${data.players.max}`;
	} else {
		document.getElementById("server-players-online").textContent = "0";
	}
}

fetchServerInfo();
setInterval(fetchServerInfo, 10000);
