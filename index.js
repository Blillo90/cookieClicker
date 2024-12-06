const cookie = document.querySelector("#cookie")

const updateScore = cookies => {
    const title = document.querySelector("title")
    const score = document.querySelector("#score span")

    score.innerText = cookies;
    title.innerHTML = cookies + " cookies - Cookie Clicker"

    localStorage.setItem("cookies", cookies);
}

const getStorage = () => {
    const cookies = localStorage.getItem("cookies") || 0;
    const powerups = JSON.parse(localStorage.getItem("powerups")) || [];

    const storage = {
        "cookies": cookies,
        "powerups": powerups
    }

    return storage;
}

const cookieClicked = cookies => {
    const storage = getStorage();

    const score = document.querySelector("#score span");
    const scoreValue = cookies ? cookies : parseInt(score.innerText);

    let newScore;

    newScore = scoreValue + 1;

    updateScore(newScore);
}

cookie.addEventListener("click", () => {
    cookieClicked()
});