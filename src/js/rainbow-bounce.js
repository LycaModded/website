document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".bounce, .italic-rainbow").forEach((element) => {
		let originalClasses = element.className.split(" ");
		element.innerHTML = element.textContent
			.split("")
			.map((letter, index) => {
				if (letter === " ") {
					return " ";
				}
				return `<span class="${originalClasses.join(" ")}" style="animation-delay: ${index * -0.2}s">${letter}</span>`;
			})
			.join("");
	});
});