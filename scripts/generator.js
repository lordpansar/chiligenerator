function createChiliName() {
    let city = places[getRandomInt()];
    let animal = animals[getRandomInt()];
    let chili = `${city} ${animal}`;
    document.getElementById("name").innerHTML = chili;
    console.log(chili);
}

function getRandomInt() {
    return Math.floor(Math.random() * 33);
}