const buttonElement = document.getElementById('doshit');

//console.log(buttonElement);

const inputElement = document.getElementById('add-comments');

const userComment = document.getElementById('user-comment-section');

function addCommentToList() {
	//console.log('Click');
	const userInputValue = inputElement.value;
	//console.log(userInputValue);
	userComment.innerHTML =
		userComment.innerHTML + '<li>' + userInputValue + '</li>';
}

buttonElement.addEventListener('click', addCommentToList);
