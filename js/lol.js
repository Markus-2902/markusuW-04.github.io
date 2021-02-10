//Hinzufügen der Karten
let HowMuchCards = 16;
let openCards = [];
let cardTypes=[];
for (let index = 0; index < HowMuchCards/2; index++) {
    cardTypes.push(index+1);
    cardTypes.push(index+1);
}
cardTypes = shuffle(cardTypes);

for (let index = 0; index < HowMuchCards; index++) {
    const div = document.createElement('div');
    div.className = 'card';
    div.type = cardTypes[index];
    div.innerHTML = cardTypes[index];
    div.addEventListener("click",flipp);
    document.getElementById('card-deck').appendChild(div);
}
let c = document.querySelectorAll(".card");