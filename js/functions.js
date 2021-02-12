//buchstaben
var buchstaben = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var großbuchstaben = [];
for (let index = 0; index < buchstaben.length; index++) {
    großbuchstaben.push(buchstaben[index].toUpperCase());
}



/*buchstaben.forEach(element => {
    lol1+=element;
});

großbuchstaben.forEach(element =>{
    lol2+=element;
});*/



/*var lol1="";
var lol2="";
for (let index = 0; index < buchstaben.length; index++) {
    lol1 += buchstaben[index];
}

for (let index = 0; index < großbuchstaben.length; index++) {
    lol2 += großbuchstaben[index];
}*/
var submitbutton = document.getElementById("submitbutton");
function useadder() {
    addemailbuttons();
    addtldbuttons();
    addanbieterbuttons();
}

//wieviele buttons:
function addemailbuttons(){
    const div = document.getElementById("emailnamebuttonsup");
    const div2 = document.getElementById("emailnamebuttonsdown");
    var anzahl = document.getElementById("emailnamebuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement('button');
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^"
        document.div.appendChild(button);
    }
    for (let index = 0; index < anzahl; index++) {
        const button2 = document.createElement('button');
        button.classList.add("floated2");
        button.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        document.div2.appendChild(button2);
    }
}



function addtldbuttons(){
    const div = document.getElementById("tdlbuttonsup");
    const div2 = document.getElementById("tdlbuttonsdown");
    var anzahl = document.getElementById("tdlbuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement('button');
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^"
        document.div.appendChild(button);
    }
    
    for (let index = 0; index < anzahl; index++) {
        const button2 = document.createElement('button');
        button2.classList.add("floated2");
        button2.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        document.div2.appendChild(button2);
    }
}



function addanbieterbuttons(){
    const div = document.getElementById("anbieterbuttonsup");
    const div2 = document.getElementById("anbieterbuttonsdown");
    var anzahl = document.getElementById("anbieterbuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement('button');
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^";
        document.div.appendChild(button);
    }
    for (let index = 0; index < anzahl; index++) {
        const button2 = document.createElement('button');
        button2.classList.add("floated2");
        button2.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        document.div2.appendChild(button2);
    }
}



