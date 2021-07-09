const backgroundContainer = document.querySelectorAll(".background");

backgroundContainer.forEach((background) =>
	background.addEventListener("click", () => {
		backgroundContainer.forEach((panel) => {
			panel.classList.remove("active");
		});
		background.classList.add("active");
	})
);
