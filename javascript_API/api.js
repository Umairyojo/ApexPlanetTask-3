const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("get-joke-btn");

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    jokeElement.textContent = data.joke;
}

jokeButton.addEventListener("click", fetchJoke);
