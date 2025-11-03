let nameText = document.querySelector('#text');
let nameButton = document.querySelector('#nameButton');
let nameBack = document.querySelector('#nameBack');

nameButton.addEventListener("click", changeName);

function changeName(){
    nameText.innerHTML = "Val";
}

nameBack.addEventListener("click", changeBack);

function changeBack(){
    nameText.innerHTML = "Valerie";
}















