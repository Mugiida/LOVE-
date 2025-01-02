const noButton = document.querySelector(".sure1");
const yesButton = document.querySelector(".sure");
const bearImage = document.querySelector("#img1 img");
const lovequestion = document.querySelector(".l1");
const lovetext = document.querySelector(".l2");
const btns = document.querySelector(".btns");

// Function to generate a random position within the bounds of the body
function getRandomPosition() {
	const buttonWidth = noButton.offsetWidth;
	const buttonHeight = noButton.offsetHeight;
	const maxX = window.innerWidth - buttonWidth;
	const maxY = window.innerHeight - buttonHeight;

	const x = Math.random() * maxX;
	const y = Math.random() * maxY;

	return { x, y };
}

// Function to move the "No" button to a random position
function moveNoButton() {
	const { x, y } = getRandomPosition();
	noButton.style.position = "absolute"; // Ensure the button is absolutely positioned
	noButton.style.left = `${x}px`;
	noButton.style.top = `${y}px`;
}

// Event listener for the "No" button
noButton.addEventListener("click", () => {
	moveNoButton();
});

// Event listener for the "Yes" button
yesButton.addEventListener("click", () => {
	bearImage.src = "bear2.gif";
	lovequestion.style.display = "block";
	lovetext.style.display = "none";
	btns.style.display = "none";
});
