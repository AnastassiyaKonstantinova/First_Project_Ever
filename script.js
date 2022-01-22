const button = document.getElementById('button');
const timesClicked = document.getElementById('times clicked');

let clickNumber = 0;

function countClicks() {
	clickNumber++;
	timesClicked.innerHTML = clickNumber;
};

button.addEventListener('click', () => countClicks(clickNumber));
