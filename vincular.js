/*MENU LATERAL*/
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if (menu_visible==false){//si esta oculto
        menu.style.display = "block"
        menu_visible = true;
    }
    else{
        menu.style.display = "none"
        menu_visible = false;
    }
}
//ocultar el menu una vez selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//creacion de las barritas para una barra
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//selecciono todas las barras
let word = document.getElementById("word");
crearBarra(word);
let excel = document.getElementById("excel");
crearBarra(excel);
let powerpoint = document.getElementById("powerpoint");
crearBarra(powerpoint);
let email = document.getElementById("email");
crearBarra(email);
let internet = document.getElementById("internet");
crearBarra(internet);

//cantidad de barritas en porcentaje
let contadores = [-1,-1,-1,-1,-1,-1]
//bandera si se ejecuto o no la animación
let entro = false

//animaciones de las habilidades
function efectoConocimientos(){
    var conocimientos = document.getElementById("conocimientos");
    var distancia_skills = window.innerHeight - conocimientos.getBoundingClientRect().top;
    if (distancia_skills>=300 && entro==false){
        entro = true;
        const intervalWord = setInterval(function(){
            pintarBarra(word, 14.5, 3, intervalWord);
        },100);
        const intervalExcel = setInterval(function(){
            pintarBarra(excel, 13, 5, intervalExcel);
        },100);
        const intervalPowerpoint = setInterval(function(){
            pintarBarra(powerpoint, 14, 4, intervalPowerpoint);
        },100);
        const intervalEmail = setInterval(function(){
            pintarBarra(email, 15, 1, intervalEmail);
        },100);
        const intervalInternet = setInterval(function(){
            pintarBarra(internet, 16, 0, intervalInternet);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }    
}

window.onscroll = function(){
    efectoConocimientos();
}

