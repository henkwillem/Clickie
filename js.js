/* /* jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var beginscherm = document.querySelector(".beginscherm");
var klikvraag1 = document.querySelector(".button3");

var showvraag1 = document.querySelector(".vraag1");
var klikvraag2 = document.querySelector("#button4");

var showvraag2 = document.querySelector(".vraag2");
var klikvraag3 = document.querySelector("#button5");

var showvraag3 = document.querySelector(".vraag3");
var klikvraag4 = document.querySelector("#button6");

var showuitslag = document.querySelector(".vraag4");



function infaden() {
    showvraag1.classList.add("vraag1fadein");
}

function infaden2() {
    showvraag2.classList.add("vraag2fadein");
    
}

function infaden3() {
    showvraag3.classList.add("vraag3fadein");
}

function infaden4() {
    showuitslag.classList.add("vraag4fadein");
}



klikvraag1.addEventListener("click", infaden);
klikvraag2.addEventListener("click", infaden2);
klikvraag3.addEventListener("click", infaden3);
klikvraag4.addEventListener("click", infaden4);