const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const progressLine = document.querySelector(".progress-line");
let currentIndex = 1;

const circles = document.querySelectorAll(".circle");

nextButton.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= circles.length) {
		currentIndex = circles.length;
	}

	updateProgress();
});
prevButton.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 1) {
		currentIndex = 1;
	}
	updateProgress();
});

const updateProgress = () => {
	circles.forEach((circle, index) => {
		if (index < currentIndex) {
			circle.classList.add("active");
			progressLine.style.width = "100%";
		} else {
			circle.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".active");
	progressLine.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + "%";

	if (currentIndex === 1) prevButton.disabled = true;
	else if (currentIndex === circles.length) nextButton.disabled = true;
	else {
		prevButton.disabled = false;
		nextButton.disabled = false;
	}
};
