var buchstaben = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var großbuchstaben = [];
for (let index = 0; index < buchstaben.length; index++) {
    großbuchstaben.push(buchstaben[index].toUpperCase());
}
function addbuttons(){
    //email
    var anzahl1 = Math.round(document.getElementById("emailnamebuttonsnumber").innerHTML);
    
    for (let index = 0; index < anzahl1; index++) {
        const divv = document.getElementById("emailnamebuttonsup");
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^"
        document.divv.appendChild(button);
    }
    for (let index = 0; index < anzahl1; index++) {
        const divv2 = document.getElementById("emailnamebuttonsdown");
        const button2 = document.createElement("button");
        button.classList.add("floated2");
        button.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        document.divv2.appendChild(button2);
    }

    //tld
    const div = document.getElementById("tldbuttonsup");
    const div2 = document.getElementById("tldbuttonsdown");
    var anzahl2 = document.getElementById("tldbuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl2; index++) {
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^"
        document.div.appendChild(button);
    }
    
    for (let index = 0; index < anzahl2; index++) {
        const button2 = document.createElement("button");
        button2.classList.add("floated2");
        button2.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        document.div2.appendChild(button2);
    }

    //anbieter
    const div = document.getElementById("anbieterbuttonsup");
    const div2 = document.getElementById("anbieterbuttonsdown");
    var anzahl3 = document.getElementById("anbieterbuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl3; index++) {
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^";
        document.div.appendChild(button);
    }
    for (let index = 0; index < anzahl3; index++) {
        const button2 = document.createElement("button");
        button2.classList.add("floated2");
        button2.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        document.div2.appendChild(button2);
    }
}