let listaDestinacija=document.getElementById("lista-destinacija");
console.log(listaDestinacija);
let naslov=document.getElementsByClassName("title");
console.log(naslov);
let element=document.getElementsByTagName("li");
console.log(element);
let wrap=document.querySelector("#wrapper");
console.log(wrap);
let destinacije=document.querySelectorAll(".naziv");
console.log(destinacije);
console.log("Parent node liste desitnacije je:",listaDestinacija.parentNode);
//console.log("Child nodes liste destinacije su:",listaDestinacija.childNodes);
console.log("Child nodes liste destinacije su:",listaDestinacija.children);
console.log("Next sibling od liste destinacije je:",listaDestinacija.nextElementSibling);

let baner=document.querySelector("#page-banner");
console.log("Node name:",baner.nodeName);
console.log("Node type:",baner.nodeType);
console.log("Node value:",baner.nodeValue);

let destinacija1=document.querySelector(".naziv");
destinacija1.textContent="<b> Grad </b> svetlosti";
//destinacija1.innerHTML=" <b> Grad </b> svetlosti";

let dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click",function(e){
        const li=e.target.parentNode;
        let ul=li.parentNode;
        ul.removeChild(li);
    })
})



