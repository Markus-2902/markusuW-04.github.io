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



//wieviele buttons:
function addemailbuttons(){
    const div = document.getElementById("emailnamebuttonsup");
    const div = document.getElementById("emailnamebuttonsdown");
    var anzahl = document.getElementById("emailnamebuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement('button');
        button.className = "floated2";
        button.id = `button${index}`;
        button.innerHTML = String.fromCharCode("U+02191");
    }
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement('button');
        button.className = "floated2";
        button.id = `button${index}`;
        button.innerHTML = String.fromCharCode("U+02193");
    }
}



function addtldbuttons(){
    const div = document.getElementById("tdlbuttonsup");
    const div = document.getElementById("tdlbuttonsdown");
    var anzahl = document.getElementById("tdlbuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement('button');
        button.className = "floated2";
        button.id = `button${index}`;
        button.innerHTML = String.fromCharCode("U+02191");
    }
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement('button');
        button.className = "floated2";
        button.id = `button${index}`;
        button.innerHTML = String.fromCharCode("U+02193");
    }
}



function addanbieterbuttons(){
    
}



function plus(c){
    var stelle = (c.id).substring(7,(c.id).length+1);
    var currentletter = buchstaben
if (buchstaben.indexOf(currentletter) == -1) {
    console.log(großbuchstaben.indexOf(loll));
}
else{
    console.log(buchstaben.indexOf(loll));
}
}

function minus(f){
    var currentletter = bu
}