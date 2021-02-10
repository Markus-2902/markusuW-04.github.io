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
var lol1="";
var lol2="";
for (let index = 0; index < buchstaben.length; index++) {
    lol1 += buchstaben[index];
}

for (let index = 0; index < großbuchstaben.length; index++) {
    lol2 += großbuchstaben[index];
}

//wieviele buttons:
function addemailbuttons(){

}

function addtldbuttons(){

}

function plus(){
    
}
