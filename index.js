//Definimos la constante cookie para poder asociarle la función de hacer click más adelante

const cookie = document.querySelector("#cookie")

//Definimos las variables title y score para poder modificar el texto, tanto del título en la ventana de navegación como en el propio score en el centro de la pantalla

const updateScore = cookies => {
    const title = document.querySelector("title")
    const score = document.querySelector("#score span")

    score.innerText = cookies;
    title.innerHTML = cookies + " cookies - Cookie Clicker"

    localStorage.setItem("cookies", cookies); //Almacenamos en localStorage para que guarde las cookies incluso si se cierra el navegador
}

const getStorage = () => {
    const cookies = localStorage.getItem("cookies") || 0; //Obtiene el número de cookies del localStorage, y si no existe (es null) lo inicializa con 0
    const powerups = JSON.parse(localStorage.getItem("powerups")) || []; //Obtiene el JSON (porque es un array y necesita JSON) de powerups y si no existe, crea un array vacío


    //Almacenamos ambas variables, cookies y powerups, dentro de una única storage como dos cadenas de texto separadas por una coma
    const storage = {
        "cookies": cookies,
        "powerups": powerups
    }

    return storage;
}

//Vamos a definir la función de hacer click en la galleta

const cookieClicked = cookies => {
    const storage = getStorage(); //Cogemos la cantidad que haya guardada en el navegador

    const score = document.querySelector("#score span"); //Le decimos que vaya al número de cookies del centro de la pantalla
    const scoreValue = cookies ? cookies : parseInt(score.innerText); //la convertimos en un Int para poder sumar números
    let newScore;

    newScore = scoreValue + 1; //newScore añade 1 al valor actual cada vez que se llama

    updateScore(newScore); //Devuelve el valor de la función updateScore con el valor newScore
}


//Creamos la función para que ocurra algo cuando hacemos click
cookie.addEventListener("click", () => {
    cookieClicked() //En este caso, ocurre la función cookieClicked
});