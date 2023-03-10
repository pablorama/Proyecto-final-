
console.log("Cargó el js");


const saludar = function () { alert ("hola")
};

document.getElementById("uno").onclick= saludar;
document.getElementById("dos").onclick= saludar;
document.getElementById("tres").onclick= saludar;
document.getElementById("cuatro").onclick= saludar;

let items= document.getElementsByClassName("link-redes");
for (const item of items) {
    item.onclick= function () {alert("chau")};
}