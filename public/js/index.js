console.log("Cargando");
let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a  = document.querySelector('a');
let parrafos = document.querySelectorAll('p');
let nombre = window.prompt('Ingrese su nombre');
let confirmacion = window.confirm('¿Deseas agregar un fondo de pantalla?');
if(nombre){
    header.innerText += `${nombre}`;
}
else{
    header.innerText += " Invitado";
}
h2.classList.add('uppercase');
a.style.color='#E51B3E';
if(confirmacion){
    main.classList.add('fondo');
}
for(let i=1; i<=parrafos.length; i++){
    if (i%2==0){
        parrafos[i-1].classList.add('destacadoPar');
        
    }
}

