//buchstaben
var buchstaben = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var großbuchstaben = [];
for (let index = 0; index < buchstaben.length; index++) {
    großbuchstaben.push(buchstaben[index].toUpperCase());
}

/*const iup = document.createElement("i");
iup.classList.add("arrow");
iup.classList.add("up");

const idown = document.createElement("i");
idown.classList.add("arrow");
idown.classList.add("down");*/
let iup = "<i class='arrow up'></i>"
let idown = "<i class='arrow down'></i>"


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
/*var submitbutton = document.getElementById("submitbutton");
function useadder() {
    var anzahl = Math.round(document.getElementById("emailnamebuttonsnumber").innerHTML);

    for (let index = 0; index < anzahl; index++) {
        document.getElementById("emailnamebuttonsdown").appendChild()
    }
}*/

function useadder() {
    addemailbuttons();
    addtldbuttons();
    addanbieterbuttons();
}

//wieviele buttons:
//holt sich die divs wo die buttons die im alphabet runterzählen und raufzählen sollen appended werden sollen - sowie auch die gerundete anzahl, wieviel zeichen die email/der anbieter/die tld haben soll, und erstellt die buttons
function addemailbuttons(){
    const divv = document.getElementById("emailnamebuttonsup");
    const divv2 = document.getElementById("emailnamebuttonsdown");
    var anzahl = Math.round(document.getElementById("emailnamebuttonsnumber").value);
    
    for (let index = 0; index < anzahl; index++) {
        
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `ebuttonup${index}`;
        button.innerHTML = iup;
        button.onclick = emaillettersup(thisbutton);
        divv.appendChild(button);
    }
    for (let index = 0; index < anzahl; index++) {
        
        const button2 = document.createElement("button");
        button2.classList.add("floated2");
        button2.id = `ebuttondown${index}`;
        button2.innerHTML = idown;
        button2.onclick = emaillettersdown(thisbutton);
        divv2.appendChild(button2);
    }
}



function addtldbuttons(){
    const div = document.getElementById("tldbuttonsup");
    const div2 = document.getElementById("tldbuttonsdown");
    var anzahl = document.getElementById("tldbuttonsnumber").value;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `tbuttonup${index}`;
        button.innerHTML = iup;
        button.onclick = tldlettersup(thisbutton);
        div.appendChild(button);
    }
    
    for (let index = 0; index < anzahl; index++) {
        const button2 = document.createElement("button");
        button2.classList.add("floated2");
        button2.id = `tbuttondown${index}`;
        button2.innerHTML = idown;
        button2.onclick = tldlettersdown(thisbutton);
        div2.appendChild(button2);
    }
}




function addanbieterbuttons(){
    const div3 = document.getElementById("anbieterbuttonsup");
    const div4 = document.getElementById("anbieterbuttonsdown");
    var anzahl = document.getElementById("anbieterbuttonsnumber").value;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `abuttonup${index}`;
        button.innerHTML = iup;
        button.onclick = anbieterlettersup(thisbutton);
        div3.appendChild(button);
    }
        
    
    for (let index = 0; index < anzahl; index++) {
        const button2 = document.createElement("button");
        button2.classList.add("floated2");
        button2.id = `abuttondown${index}`;
        button2.innerHTML = idown;
        button2.onclick = anbieterlettersdown(thisbutton);
        div4.appendChild(button2);
    }
}


//buchstaben adden:
//hier werden je nach der anzahl je ein "a" in eine array hinzugefügt, von der man dann nachher einfach die stelle holen kann, und in den zwei alphabet arrays immer den jetzigen buchstaben + 1 hinzufügen kann
let emailname = [];
let tldname = [];
let anbietername = [];

function addemailletters() {
    var anzahl = Math.round(document.getElementById("emailnamebuttonsnumber").value);
    for (let index = 0; index < anzahl; index++) {
        emailname.push("a");
    }
    document.getElementById("emailname").appendChild(emailname);
}

function addtldletters() {
    var anzahl = Math.round(document.getElementById("tldbuttonsnumber").value);
    for (let index = 0; index < anzahl; index++) {
        tldname.push("a");
    }
    document.getElementById("tldname").appendChild(tldname);
}

function addanbieterletters() {
    var anzahl = Math.round(document.getElementById("anbieterbuttonsnumber").value);
    for (let index = 0; index < anzahl; index++) {
        anbietername.push("a");
    }
    document.getElementById("anbietername").appendChild(anbietername);
}


//buttonpress:
//das sind die funktionen die aufgerufen werden, wenn der down oder up button gedrückt wird. jeder button hat eine id in der auch die stelle des buttons/buchstabens drinnen steht
//also z.b. der erste up button von dem emailnamen hat die id ebuttonup0. dann wird mit substring alles von e bist p gelöscht, und nur die 0 als index genommen, um zu wissen
//welches a in den arrays gemeint ist (oder welcher buchstabe auch immer). dann wird einfach das gleiche gemacht, nur das dann der index + 1 genommen wird, und z.b 
//das "a" an der stelle 0 mit einem "b" ersetzt wird
function emaillettersup(thisbutton) {
    if (buchstaben.includes(emailname[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        emailname[((thisbutton.id).substring(10,(thisbutton.id).length))] = buchstaben[emailname[((thisbutton.id).substring(10,(thisbutton.id).length))]+1];
    }
    else if (großbuchstaben.includes(emailname[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        emailname[((thisbutton.id).substring(10,(thisbutton.id).length))] = großbuchstaben[emailname[((thisbutton.id).substring(10,(thisbutton.id).length))]+1];
    }
    else{
        console.log("emaillettersup geht nicht")
    }
}

function emaillettersdown(thisbutton) {
    if (buchstaben.includes(emailname[((thisbutton.id).substring(12,(thisbutton.id).length))])) {
        emailname[((thisbutton.id).substring(10,(thisbutton.id).length))] = buchstaben[emailname[((thisbutton.id).substring(12,(thisbutton.id).length))]-1];
    }
    else if (großbuchstaben.includes(emailname[((thisbutton.id).substring(12,(thisbutton.id).length))])) {
        emailname[((thisbutton.id).substring(10,(thisbutton.id).length))] = großbuchstaben[emailname[((thisbutton.id).substring(12,(thisbutton.id).length))]-1];
    }
    else{
        console.log("emaillettersdown geht nicht")
    }
}

function tldlettersup(thisbutton) {
    if (buchstaben.includes(tldname[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        tldname[((thisbutton.id).substring(10,(thisbutton.id).length))] = buchstaben[tldname[((thisbutton.id).substring(10,(thisbutton.id).length))]+1];
    }
    else if (großbuchstaben.includes(tldname[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        tldname[((thisbutton.id).substring(10,(thisbutton.id).length))] = großbuchstaben[tld[((thisbutton.id).substring(10,(thisbutton.id).length))]+1];
    }
    else{
        console.log("tldlettersup geht nicht");
    }
}

function tldlettersdown(thisbutton) {
    if (buchstaben.includes(tldname[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        tldname[((thisbutton.id).substring(10,(thisbutton.id).length))] = buchstaben[tldname[((thisbutton.id).substring(10,(thisbutton.id).length))]-1];
    }
    else if (großbuchstaben.includes(tldname[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        tldname[((thisbutton.id).substring(10,(thisbutton.id).length))] = großbuchstaben[tld[((thisbutton.id).substring(10,(thisbutton.id).length))]-1];
    }
    else{
        console.log("tldlettersdown geht nicht");
    }
}

function anbieterlettersup(thisbutton) {
    if (buchstaben.includes(anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))] = buchstaben[anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))]+1];
    }
    else if (großbuchstaben.includes(anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))] = großbuchstaben[tld[((thisbutton.id).substring(10,(thisbutton.id).length))]+1];
    }
    else{
        console.log("anbieterlettersup geht nicht");
    }
}

function anbieterlettersdown(thisbutton) {
    if (buchstaben.includes(anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))] = buchstaben[anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))]-1];
    }
    else if (großbuchstaben.includes(anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))])) {
        anbietername[((thisbutton.id).substring(10,(thisbutton.id).length))] = großbuchstaben[tld[((thisbutton.id).substring(10,(thisbutton.id).length))]-1];
    }
    else{
        console.log("anbieterlettersdown geht nicht");
    }
}