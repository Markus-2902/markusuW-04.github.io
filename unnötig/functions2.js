function yeetusfeetus() {
    var anzahl = Math.round(document.getElementById("emailnamebuttonsnumber").innerHTML);
    
    for (let index = 0; index < anzahl; index++) {
        const divv = document.getElementById("emailnamebuttonsup");
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^"
        divv.appendChild(button);
    }
    for (let index = 0; index < anzahl; index++) {
        const divv2 = document.getElementById("emailnamebuttonsdown");
        const button2 = document.createElement("button");
        button.classList.add("floated2");
        button.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        divv2.appendChild(button2);
    }


    const div3 = document.getElementById("anbieterbuttonsup");
    const div4 = document.getElementById("anbieterbuttonsdown");
    var anzahl = document.getElementById("anbieterbuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^";
        div3.appendChild(button);
    }
    for (let index = 0; index < anzahl; index++) {
        const button2 = document.createElement("button");
        button2.classList.add("floated2");
        button2.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        div4.appendChild(button2);
    }


    const div = document.getElementById("tldbuttonsup");
    const div2 = document.getElementById("tldbuttonsdown");
    var anzahl = document.getElementById("tldbuttonsnumber").innerHTML;
    for (let index = 0; index < anzahl; index++) {
        const button = document.createElement("button");
        button.classList.add("floated2");
        button.id = `button${index}`;
        button.innerHTML = "^"
        div.appendChild(button);
    }
    
    for (let index = 0; index < anzahl; index++) {
        const button2 = document.createElement("button");
        button2.classList.add("floated2");
        button2.classList.add("rotate");
        button2.id = `button${index}`;
        button2.innerHTML = "^"
        div2.appendChild(button2);
    }
}