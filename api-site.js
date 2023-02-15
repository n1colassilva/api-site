// https://uselessfacts.jsph.pl/
// https://api.adviceslip.com/

// --------------------------------------------------------------------------------
// Advice area
// --------------------------------------------------------------------------------


const adviceElement = document.getElementById("advice");
const adviceButton = document.getElementById("advice-button")
const adviceURL = "https://api.adviceslip.com/advice"

let getAdvice = () => {
    fetch(adviceURL)
        .then(data => data.json())
        .then(item => adviceElement.textContent = `${item.slip.advice}`);
}

adviceButton.addEventListener("click", getAdvice);

// --------------------------------------------------------------------------------
// Joke area
// --------------------------------------------------------------------------------

const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("joke-button")
const jokeURL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
    fetch(jokeURL)
        .then(data => data.json())
        .then(item => jokeElement.textContent = `${item.joke}`);
}

jokeButton.addEventListener("click", getJoke);

//--------------------------------------------------------------------------------
// Useless fact
//--------------------------------------------------------------------------------

const factElement = document.getElementById("fact");
const factButton = document.getElementById("fact-button")
const factURL = "https://uselessfacts.jsph.pl/random.json?language=en"

let getFact = () => {
    fetch(factURL)
        .then(data => data.json())
        .then(item => factElement.textContent = `${item.text}`)
}

factButton.addEventListener("click", getFact);

// Run all apis so the site isnt full of filler content

getAdvice();
getFact();
getJoke();