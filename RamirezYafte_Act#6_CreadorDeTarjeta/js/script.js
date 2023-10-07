var selectImage = document.getElementById("image");
var messageInput = document.getElementById("message");
var nameInput = document.getElementById("name");
var backgroundColorInput = document.getElementById("backgroundColor");
var generateButton = document.getElementById("generate");
var card = document.querySelector(".card");

selectImage.addEventListener("change", updateCard);

backgroundColorInput.addEventListener("input", () => {
    document.documentElement.style.setProperty('--selected-color', backgroundColorInput.value);
});

generateButton.addEventListener("click", updateCard);

function updateCard() {
    var selectedImage = selectImage.value;
    var message = messageInput.value;
    var name = nameInput.value;

    card.style.backgroundImage = `url('${selectedImage}')`;
    card.querySelector(".message").textContent = message;
    card.querySelector(".name").textContent = name;
    card.classList.add("selected"); 
}

updateCard();