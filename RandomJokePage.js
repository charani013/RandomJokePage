let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function buttonClicked() {
    let options = {
        method: "GET",
    }
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                value
            } = jsonData;
            jokeText.textContent = value;
        })
}

jokeBtn.addEventListener("click", buttonClicked);